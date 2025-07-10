# Instagram API Setup Instructions

## Overview
Your contact page now includes Instagram API integration to display your latest posts dynamically. Here's how to set it up:

## Step 1: Create a Facebook Developer Account
1. Go to [Facebook for Developers](https://developers.facebook.com/)
2. Create a developer account if you don't have one
3. Create a new app

## Step 2: Add Instagram Basic Display
1. In your Facebook app dashboard, click "Add Product"
2. Find "Instagram Basic Display" and click "Set Up"
3. Complete the basic setup

## Step 3: Configure Instagram Basic Display
1. Go to Instagram Basic Display > Basic Display
2. Add your website URL to Valid OAuth Redirect URIs:
   - Add: `https://yourdomain.com/` (replace with your actual domain)
   - For local development: `http://localhost:3000/`
3. Add your Instagram account as a test user

## Step 4: Generate Access Token
1. In the Instagram Basic Display settings, click "Generate Token"
2. Log in with your Instagram account (@nunez_artistry)
3. Copy the generated access token

## Step 5: Add Environment Variables
Create a `.env.local` file in your project root with:

```
INSTAGRAM_ACCESS_TOKEN=your_long_lived_access_token_here
```

## Step 6: Get Long-Lived Access Token (Recommended)
Short-lived tokens expire in 1 hour. To get a long-lived token (60 days):

1. Use this URL (replace YOUR_SHORT_LIVED_TOKEN with your token):
```
https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=YOUR_APP_SECRET&access_token=YOUR_SHORT_LIVED_TOKEN
```

2. This returns a long-lived token that lasts 60 days
3. Update your `.env.local` file with the long-lived token

## Step 7: Set Up Token Refresh (Optional)
For production, you may want to set up automatic token refresh since even long-lived tokens expire after 60 days.

## Features Implemented
- ✅ Fetches your latest 8 Instagram posts
- ✅ Displays actual photos instead of placeholder gradients
- ✅ Handles loading states with skeleton animations
- ✅ Graceful error handling (falls back to gradient placeholders)
- ✅ Caches API responses for 1 hour to avoid rate limits
- ✅ Responsive grid layout
- ✅ Hover effects and animations
- ✅ Direct links to Instagram posts

## Testing
1. Add your access token to `.env.local`
2. Restart your development server: `npm run dev`
3. Visit the contact page to see your Instagram posts

## Troubleshooting
- **No posts showing**: Check that your access token is valid and added to `.env.local`
- **Rate limit errors**: The API is cached for 1 hour, so wait before testing again
- **Token expired**: Generate a new long-lived token
- **CORS errors**: Make sure your domain is added to the Facebook app settings

## Fallback Behavior
If the Instagram API fails for any reason, the page will show beautiful gradient placeholders that still link to your Instagram profile, ensuring the user experience remains smooth. 