import { NextResponse } from 'next/server';

// Instagram Basic Display API endpoint
const INSTAGRAM_API_URL = 'https://graph.instagram.com/me/media';

export async function GET() {
  try {
    // You'll need to set this environment variable with your Instagram access token
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    
    if (!accessToken) {
      return NextResponse.json(
        { error: 'Instagram access token not configured' },
        { status: 500 }
      );
    }

    // Fetch recent media from Instagram
    const response = await fetch(
      `${INSTAGRAM_API_URL}?fields=id,media_type,media_url,thumbnail_url,permalink,caption&limit=8&access_token=${accessToken}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        // Cache for 1 hour to avoid hitting rate limits
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();
    
    // Filter and format the data
    const posts = data.data
      ?.filter((post: any) => post.media_type === 'IMAGE' || post.media_type === 'CAROUSEL_ALBUM')
      .map((post: any) => ({
        id: post.id,
        media_url: post.media_url,
        thumbnail_url: post.thumbnail_url || post.media_url,
        permalink: post.permalink,
        caption: post.caption || '',
        media_type: post.media_type
      }))
      .slice(0, 8); // Limit to 8 posts

    return NextResponse.json({ posts: posts || [] });
  } catch (error) {
    console.error('Instagram API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch Instagram posts', posts: [] },
      { status: 500 }
    );
  }
} 