import { google } from 'googleapis';
import { JWT } from 'google-auth-library';

// Google Drive API configuration
const SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];

interface DrivePhoto {
  id: string;
  name: string;
  webViewLink: string;
  webContentLink: string;
  thumbnailLink: string;
  createdTime: string;
  modifiedTime: string;
  mimeType: string;
  size: string;
  category?: string;
}

interface DriveFolder {
  id: string;
  name: string;
  category: string;
}

class GoogleDriveService {
  private drive: any;
  private auth: JWT;

  constructor() {
    // Initialize Google Auth
    this.auth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: SCOPES,
    });

    // Initialize Drive API
    this.drive = google.drive({ version: 'v3', auth: this.auth });
  }

  /**
   * Get photos from a specific Google Drive folder
   */
  async getPhotosFromFolder(folderId: string, category: string = 'general'): Promise<DrivePhoto[]> {
    try {
      const response = await this.drive.files.list({
        q: `'${folderId}' in parents and (mimeType contains 'image/jpeg' or mimeType contains 'image/png' or mimeType contains 'image/webp')`,
        fields: 'files(id, name, webViewLink, webContentLink, thumbnailLink, createdTime, modifiedTime, mimeType, size)',
        orderBy: 'createdTime desc',
        pageSize: 100,
      });

      const photos: DrivePhoto[] = response.data.files.map((file: any) => ({
        id: file.id,
        name: file.name,
        webViewLink: file.webViewLink,
        webContentLink: file.webContentLink,
        thumbnailLink: file.thumbnailLink,
        createdTime: file.createdTime,
        modifiedTime: file.modifiedTime,
        mimeType: file.mimeType,
        size: file.size,
        category,
      }));

      return photos;
    } catch (error) {
      console.error('Error fetching photos from Google Drive:', error);
      throw error;
    }
  }

  /**
   * Get photos from multiple folders
   */
  async getPhotosFromFolders(folders: DriveFolder[]): Promise<DrivePhoto[]> {
    const allPhotos: DrivePhoto[] = [];

    for (const folder of folders) {
      try {
        const photos = await this.getPhotosFromFolder(folder.id, folder.category);
        allPhotos.push(...photos);
      } catch (error) {
        console.error(`Error fetching photos from folder ${folder.name}:`, error);
      }
    }

    // Sort by creation time (newest first)
    return allPhotos.sort((a, b) => new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime());
  }

  /**
   * Get a direct download link for a photo
   */
  async getPhotoDownloadUrl(fileId: string): Promise<string> {
    try {
      const response = await this.drive.files.get({
        fileId,
        fields: 'webContentLink',
      });

      return response.data.webContentLink;
    } catch (error) {
      console.error('Error getting download URL:', error);
      throw error;
    }
  }

  /**
   * Search for folders by name
   */
  async findFolderByName(folderName: string): Promise<string | null> {
    try {
      const response = await this.drive.files.list({
        q: `name='${folderName}' and mimeType='application/vnd.google-apps.folder'`,
        fields: 'files(id, name)',
      });

      if (response.data.files.length > 0) {
        return response.data.files[0].id;
      }

      return null;
    } catch (error) {
      console.error('Error finding folder:', error);
      return null;
    }
  }
}

export default GoogleDriveService;
export type { DrivePhoto, DriveFolder }; 