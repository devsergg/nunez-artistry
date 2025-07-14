import { useState, useEffect } from 'react';

interface Photo {
  id: string;
  name: string;
  url: string;
  thumbnailUrl: string;
  category: string;
  createdAt: string;
  modifiedAt: string;
  mimeType: string;
  size: string;
}

interface UseGoogleDrivePhotosReturn {
  photos: Photo[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UseGoogleDrivePhotosOptions {
  category?: string;
  limit?: number;
  autoFetch?: boolean;
}

export function useGoogleDrivePhotos(options: UseGoogleDrivePhotosOptions = {}): UseGoogleDrivePhotosReturn {
  const { category, limit, autoFetch = true } = options;
  
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(autoFetch);
  const [error, setError] = useState<string | null>(null);

  const fetchPhotos = async () => {
    try {
      setLoading(true);
      setError(null);

      // Build query parameters
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (limit) params.append('limit', limit.toString());

      const response = await fetch(`/api/photos?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch photos');
      }

      if (data.success) {
        setPhotos(data.photos);
      } else {
        throw new Error(data.error || 'Failed to fetch photos');
      }

    } catch (err) {
      console.error('Error fetching photos:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch photos');
      setPhotos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchPhotos();
    }
  }, [category, limit, autoFetch]);

  return {
    photos,
    loading,
    error,
    refetch: fetchPhotos
  };
}

// Helper hook for specific categories
export function usePortfolioPhotos(limit?: number) {
  return useGoogleDrivePhotos({ category: 'portfolio', limit });
}

export function useEventPhotos(limit?: number) {
  return useGoogleDrivePhotos({ category: 'events', limit });
}

export function usePortraitPhotos(limit?: number) {
  return useGoogleDrivePhotos({ category: 'portraits', limit });
}

export function useContactPhotos(limit?: number) {
  return useGoogleDrivePhotos({ category: 'contact', limit });
} 