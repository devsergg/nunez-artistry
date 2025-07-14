import { NextResponse } from 'next/server';
import GoogleDriveService, { DriveFolder } from '@/lib/googleDrive';

// Configuration for your Google Drive folders
const PHOTO_FOLDERS: DriveFolder[] = [
  {
    id: process.env.GOOGLE_DRIVE_PORTFOLIO_FOLDER_ID || '',
    name: 'Portfolio',
    category: 'portfolio'
  },
  {
    id: process.env.GOOGLE_DRIVE_EVENTS_FOLDER_ID || '',
    name: 'Events',
    category: 'events'
  },
  {
    id: process.env.GOOGLE_DRIVE_PORTRAITS_FOLDER_ID || '',
    name: 'Portraits',
    category: 'portraits'
  },
  {
    id: process.env.GOOGLE_DRIVE_CONTACT_FOLDER_ID || '',
    name: 'Contact Gallery',
    category: 'contact'
  }
];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const limit = searchParams.get('limit');

    // Initialize Google Drive service
    const driveService = new GoogleDriveService();

    let photos;

    if (category) {
      // Get photos from specific category
      const folder = PHOTO_FOLDERS.find(f => f.category === category);
      if (!folder || !folder.id) {
        return NextResponse.json({ error: 'Category not found or not configured' }, { status: 404 });
      }

      photos = await driveService.getPhotosFromFolder(folder.id, folder.category);
    } else {
      // Get photos from all folders
      const validFolders = PHOTO_FOLDERS.filter(f => f.id); // Only include folders with IDs
      photos = await driveService.getPhotosFromFolders(validFolders);
    }

    // Apply limit if specified
    if (limit) {
      const limitNum = parseInt(limit, 10);
      photos = photos.slice(0, limitNum);
    }

    // Transform photos for frontend consumption
    const transformedPhotos = photos.map(photo => ({
      id: photo.id,
      name: photo.name,
      url: photo.webContentLink,
      thumbnailUrl: photo.thumbnailLink,
      category: photo.category,
      createdAt: photo.createdTime,
      modifiedAt: photo.modifiedTime,
      mimeType: photo.mimeType,
      size: photo.size
    }));

    return NextResponse.json({
      success: true,
      photos: transformedPhotos,
      total: transformedPhotos.length,
      category: category || 'all'
    });

  } catch (error) {
    console.error('Error fetching photos:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to fetch photos from Google Drive',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const { action, folderName } = await request.json();

    const driveService = new GoogleDriveService();

    if (action === 'find-folder') {
      const folderId = await driveService.findFolderByName(folderName);
      
      return NextResponse.json({
        success: true,
        folderId,
        found: !!folderId
      });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Error in photos API:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 