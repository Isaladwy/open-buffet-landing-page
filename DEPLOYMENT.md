# Deployment Guide for Static Build

## Quick Setup for Local Viewing and Deployment

### Step 1: Build Static Files

```bash
# Install dependencies (if not already done)
npm install

# Build static files
npm run static
```

### Step 2: Fix Paths for Local Viewing

```bash
# Convert absolute paths to relative paths
node fix-paths.js
```

### Step 3: View Locally

After running the above commands, you can:

- Open `out/index.html` directly in your browser
- All CSS, images, and JavaScript will work correctly

### Step 4: Deploy to Web Server

Upload the contents of the `out/` folder to your web server:

**For Bluehost/Shared Hosting:**

- Upload contents of `out/` to `public_html/` (root directory)
- Your site will be accessible at your domain

**For Subdirectory Deployment:**

- Upload contents of `out/` to your desired subdirectory
- The relative paths will work correctly

## File Structure After Build

```
out/
├── index.html          # Main page
├── _next/              # CSS, JS, and assets
├── images/             # Image files
├── favicon.ico         # Site icon
└── other static files
```

## Important Notes

- **Always run `node fix-paths.js`** after building to ensure local viewing works
- **Don't upload the `out` folder itself** - upload its contents
- **Relative paths work everywhere** - no server configuration needed
- **No Node.js required** on the server

## Troubleshooting

**If CSS/images don't load:**

1. Make sure you ran `node fix-paths.js` after building
2. Check that all files from `out/` are uploaded to the correct location
3. Verify file permissions (644 for files, 755 for directories)

**For local viewing issues:**

- Use a local server: `npx serve out`
- Then visit `http://localhost:5000`
