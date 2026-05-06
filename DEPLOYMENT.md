# Deployment Instructions

## Quick Deploy to Netlify

### Option 1: Deploy via Netlify Dashboard (Recommended)

1. Push your code to GitHub (make sure `.env` is NOT committed):
   ```bash
   git add .
   git commit -m "Initial portfolio implementation"
   git push origin main
   ```

2. Go to [Netlify](https://netlify.com) and click "Add new site" → "Import an existing project"

3. Select GitHub and authorize Netlify

4. Select your `portfolio` repository

5. Configure build settings (should auto-detect):
   - Build command: `npm run build`
   - Publish directory: `dist`

6. Click "Show advanced" → "New variable" and add your Firebase environment variables:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`

7. Click "Deploy site"

### Option 2: Deploy via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify env:set VITE_FIREBASE_API_KEY your_key
# ... set all other env vars
netlify deploy --prod
```

## Post-Deployment Checklist

- [ ] Site loads successfully
- [ ] Fixed background image works on homepage
- [ ] Blog pages load (will be empty until you add posts)
- [ ] Contact form submits successfully (check Netlify Forms dashboard)
- [ ] Admin panel is accessible at `/admin`
- [ ] Firebase environment variables are set correctly
- [ ] Create a Firebase user for admin access at [Firebase Console](https://console.firebase.google.com)

## Firebase Setup (if not done already)

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project
3. Enable Firestore Database
4. Enable Authentication (Email/Password provider)
5. Create an admin user in Authentication
6. Copy config values to Netlify environment variables
