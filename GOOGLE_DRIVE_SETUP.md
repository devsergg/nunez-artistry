# Google Drive Photo Sync Setup

## Overview
Your website now automatically syncs photos from Google Drive folders! This guide will help you set up the integration.

## Step 1: Create Google Service Account

1. **Go to Google Cloud Console**
   - Visit [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google Drive API**
   - Go to "APIs & Services" > "Library"
   - Search for "Google Drive API"
   - Click "Enable"

3. **Create Service Account**
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in the details and create

4. **Generate Key**
   - Click on your service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Choose "JSON" and download the file

## Step 2: Set Up Google Drive Folders

1. **Create folders in Google Drive for your photos:**
   - `Website Portfolio` - for portfolio gallery
   - `Website Events` - for event photos
   - `Website Portraits` - for portrait photos
   - `Website Contact` - for contact page gallery

2. **Share folders with your service account:**
   - Right-click each folder > "Share"
   - Add your service account email (from the JSON file)
   - Give "Viewer" permissions

3. **Get folder IDs:**
   - Open each folder in Google Drive
   - Copy the folder ID from the URL: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`

## Step 3: Configure Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Google Service Account Credentials
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----"

# Google Drive Folder IDs
GOOGLE_DRIVE_PORTFOLIO_FOLDER_ID=your_portfolio_folder_id
GOOGLE_DRIVE_EVENTS_FOLDER_ID=your_events_folder_id
GOOGLE_DRIVE_PORTRAITS_FOLDER_ID=your_portraits_folder_id
GOOGLE_DRIVE_CONTACT_FOLDER_ID=your_contact_folder_id
```

## Step 4: How to Use

### Adding Photos:
1. **Upload photos to the respective Google Drive folders**
2. **Photos appear automatically** on your website
3. **No manual updates needed** - the system fetches latest photos

### Organizing Photos:
- **Portfolio folder** → Shows on main portfolio section
- **Events folder** → Shows on events page
- **Portraits folder** → Shows on portraits page
- **Contact folder** → Shows on contact page gallery

### Supported Formats:
- JPEG, PNG, WebP images
- Automatic thumbnail generation
- Optimized loading for web

## Step 5: API Endpoints

Your website now has these endpoints:

- `GET /api/photos` - Get all photos
- `GET /api/photos?category=portfolio` - Get portfolio photos
- `GET /api/photos?category=contact&limit=8` - Get 8 contact photos
- `POST /api/photos` - Find folder by name

## Benefits

✅ **Automatic sync** - Photos update instantly when you add them to Drive
✅ **Easy management** - Just drag and drop photos into folders
✅ **No file size limits** - Google Drive handles storage
✅ **Backup included** - Photos are safely stored in Google Drive
✅ **Mobile friendly** - Add photos from your phone via Google Drive app

## Troubleshooting

**Photos not showing?**
- Check folder permissions (service account has access)
- Verify folder IDs in environment variables
- Ensure photos are in supported formats (JPEG, PNG, WebP)

**API errors?**
- Check service account credentials
- Verify Google Drive API is enabled
- Check console for error messages

**Need help?**
- Check browser console for error messages
- Verify all environment variables are set correctly
- Test with a single photo first 