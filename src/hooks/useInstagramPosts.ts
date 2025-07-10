import { useState, useEffect } from 'react';

interface InstagramPost {
  id: string;
  media_url: string;
  thumbnail_url: string;
  permalink: string;
  caption: string;
  media_type: string;
}

interface UseInstagramPostsReturn {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
}

export function useInstagramPosts(): UseInstagramPostsReturn {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch('/api/instagram');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to fetch Instagram posts');
        }

        setPosts(data.posts || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        console.error('Error fetching Instagram posts:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
} 