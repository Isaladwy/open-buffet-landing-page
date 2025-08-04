# Deployment Guide for Static Build (Next.js 15)

## Quick Setup for Local Viewing and Deployment

### Step 1: Build Static Files

```bash
# Install dependencies (if not already done)
npm install

# Build static files
npm run static
```

### Step 2: Prepare Deployment Files

```bash
# Run the deployment preparation script
node prepare-deployment.js
```

This script will:
- Copy HTML files from `.next/server/app/`
- Copy static assets from `.next/static/`
- Copy public assets from `public/`
- Fix all paths to be relative for static hosting

### Step 3: View Locally

After running the above commands, you can:

- Open `deployment/index.html` directly in your browser
- Or use a local server: `npx serve deployment`
- Then visit `http://localhost:5000`

### Step 4: Deploy to Web Server

Upload the contents of the `deployment/` folder to your web server:

**For Bluehost/Shared Hosting:**

- Upload contents of `deployment/` to `public_html/` (root directory)
- Your site will be accessible at your domain

**For Subdirectory Deployment:**

- Upload contents of `deployment/` to your desired subdirectory
- The relative paths will work correctly

## File Structure After Build

```
deployment/
├── index.html          # Main landing page
├── dashboard.html      # Dashboard page
├── _not-found.html     # 404 page
├── _next/              # CSS, JS, and static assets
│   └── static/
│       ├── chunks/     # JavaScript chunks
│       ├── css/        # CSS files
│       └── [hash]/     # Other assets
└── public/             # Public assets (images, etc.)
    ├── images/
    ├── plates/
    └── other files...
```

## Important Notes

- **Always run `node prepare-deployment.js`** after building to ensure proper deployment structure
- **Upload the contents of `deployment/` folder** - not the folder itself
- **Relative paths work everywhere** - no server configuration needed
- **No Node.js required** on the server
- **Dashboard functionality** requires a server with API routes (not included in static export)

## Troubleshooting

**If CSS/images don't load:**

1. Make sure you ran `node prepare-deployment.js` after building
2. Check that all files from `deployment/` are uploaded to the correct location
3. Verify file permissions (644 for files, 755 for directories)

**For local viewing issues:**

- Use a local server: `npx serve deployment`
- Then visit `http://localhost:5000`

**Dashboard not working:**

- The dashboard requires API routes which are not included in static export
- For full functionality, deploy to a platform that supports Next.js API routes (Vercel, Netlify, etc.)
