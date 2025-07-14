'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { RefreshCw, Folder, Search, CheckCircle, XCircle } from 'lucide-react';
import { useGoogleDrivePhotos } from '@/hooks/useGoogleDrivePhotos';

export default function AdminPage() {
  const [folderName, setFolderName] = useState('');
  const [searchResult, setSearchResult] = useState<{ folderId: string | null; found: boolean } | null>(null);
  const [searching, setSearching] = useState(false);

  const { photos, loading, error, refetch } = useGoogleDrivePhotos({ autoFetch: false });

  const handleFolderSearch = async () => {
    if (!folderName.trim()) return;

    setSearching(true);
    try {
      const response = await fetch('/api/photos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'find-folder', folderName })
      });

      const data = await response.json();
      setSearchResult(data);
    } catch (error) {
      console.error('Error searching folder:', error);
      setSearchResult({ folderId: null, found: false });
    } finally {
      setSearching(false);
    }
  };

  const categories = [
    { key: 'portfolio', name: 'Portfolio', envVar: 'GOOGLE_DRIVE_PORTFOLIO_FOLDER_ID' },
    { key: 'events', name: 'Events', envVar: 'GOOGLE_DRIVE_EVENTS_FOLDER_ID' },
    { key: 'portraits', name: 'Portraits', envVar: 'GOOGLE_DRIVE_PORTRAITS_FOLDER_ID' },
    { key: 'contact', name: 'Contact', envVar: 'GOOGLE_DRIVE_CONTACT_FOLDER_ID' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Admin Panel
          </h1>
          <p className="text-xl text-gray-600">
            Manage your Google Drive photo integration
          </p>
        </motion.div>

        {/* Configuration Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Configuration Status
          </h2>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                <span className="font-medium">Google Drive Service</span>
              </div>
              <span className="text-sm text-gray-600">
                {process.env.NEXT_PUBLIC_GOOGLE_DRIVE_ENABLED ? 'Configured' : 'Not configured'}
              </span>
            </div>

            {categories.map((category) => (
              <div key={category.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <Folder className="w-5 h-5 text-blue-500 mr-3" />
                  <span className="font-medium">{category.name} Folder</span>
                </div>
                <span className="text-sm text-gray-600">
                  {category.envVar}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Folder Search Tool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Find Google Drive Folder
          </h2>
          
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              placeholder="Enter folder name (e.g., 'Website Portfolio')"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              onClick={handleFolderSearch}
              disabled={searching || !folderName.trim()}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            >
              <Search className={`w-4 h-4 mr-2 ${searching ? 'animate-spin' : ''}`} />
              {searching ? 'Searching...' : 'Search'}
            </button>
          </div>

          {searchResult && (
            <div className={`p-4 rounded-lg ${searchResult.found ? 'bg-green-50' : 'bg-red-50'}`}>
              <div className="flex items-center">
                {searchResult.found ? (
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                ) : (
                  <XCircle className="w-5 h-5 text-red-500 mr-3" />
                )}
                <span className={`font-medium ${searchResult.found ? 'text-green-800' : 'text-red-800'}`}>
                  {searchResult.found ? 'Folder found!' : 'Folder not found'}
                </span>
              </div>
              {searchResult.found && searchResult.folderId && (
                <div className="mt-2">
                  <p className="text-sm text-gray-600">Folder ID:</p>
                  <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                    {searchResult.folderId}
                  </code>
                </div>
              )}
            </div>
          )}
        </motion.div>

        {/* Photo Testing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white rounded-lg shadow-lg p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Test Photo Loading
            </h2>
            <button
              onClick={() => refetch()}
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50 flex items-center"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              {loading ? 'Loading...' : 'Test Connection'}
            </button>
          </div>

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading photos from Google Drive...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-center">
                <XCircle className="w-5 h-5 text-red-500 mr-3" />
                <span className="font-medium text-red-800">Error loading photos</span>
              </div>
              <p className="text-sm text-red-600 mt-2">{error}</p>
            </div>
          )}

          {!loading && !error && photos.length > 0 && (
            <div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  <span className="font-medium text-green-800">
                    Successfully loaded {photos.length} photos
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.slice(0, 8).map((photo) => (
                  <div key={photo.id} className="aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={photo.thumbnailUrl || photo.url}
                      alt={photo.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {!loading && !error && photos.length === 0 && (
            <div className="text-center py-8">
              <p className="text-gray-600">No photos found. Make sure to:</p>
              <ul className="text-sm text-gray-500 mt-2 space-y-1">
                <li>• Configure your Google Drive folder IDs</li>
                <li>• Share folders with your service account</li>
                <li>• Add photos to the configured folders</li>
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 