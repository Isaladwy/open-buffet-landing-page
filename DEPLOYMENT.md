# Deployment Guide for Bluehost Server

## Method 1: Static Export (Recommended)

This method creates a static website that can be deployed to any web hosting service without requiring Node.js on the server.

### Step 1: Build Static Files Locally

```bash
# Install dependencies locally (on your development machine)
npm install

# Build static files
npm run static
```

### Step 2: Locate Static Files

After building, your static files will be in the `out/` directory. This directory contains:

- HTML files
- CSS files
- JavaScript files
- Images and other assets

### Step 3: Upload to Bluehost

1. **Via File Manager:**

   - Log into your Bluehost cPanel
   - Open File Manager
   - Navigate to `public_html/` (or your domain's root directory)
   - Upload all contents from the `out/` folder

2. **Via FTP:**
   - Use an FTP client (FileZilla, WinSCP, etc.)
   - Connect to your Bluehost server
   - Upload all contents from the `out/` folder to `public_html/`

### Step 4: Configure Domain

- Point your domain to the uploaded files
- The site should now be accessible at your domain

## Method 2: Using Bluehost's Node.js Support (Alternative)

If Bluehost supports Node.js hosting:

### Step 1: Prepare for Production

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

### Step 2: Upload Files

Upload these files/folders to your Bluehost server:

- `.next/` (build files)
- `public/` (static assets)
- `package.json`
- `next.config.ts`
- `tsconfig.json`

### Step 3: Install Dependencies on Server

```bash
npm install --production
```

### Step 4: Start the Server

```bash
npm start
```

## Important Notes

### For Static Export:

- ✅ No Node.js required on server
- ✅ Works with any web hosting
- ✅ Faster loading times
- ❌ No server-side features (API routes, dynamic rendering)
- ❌ No server-side data fetching

### For Node.js Hosting:

- ✅ Full Next.js features
- ✅ API routes work
- ✅ Server-side rendering
- ❌ Requires Node.js on server
- ❌ More complex setup

## Troubleshooting

### Static Export Issues:

- If you get build errors, check that all components are compatible with static export
- Remove any server-side only code (API routes, server components that can't be static)
- Ensure all images are properly optimized or use `unoptimized: true`

### File Permissions:

- Set proper file permissions (typically 644 for files, 755 for directories)
- Ensure `.htaccess` is configured correctly if using Apache

## Recommended Approach

For Bluehost, **Method 1 (Static Export)** is recommended because:

1. No Node.js installation required
2. Works with shared hosting plans
3. Better performance for static content
4. Easier maintenance and updates

## How to Properly View Your Static Site Locally

You need to serve the `out/` directory with a local web server.  
Here's how you can do it:

### 1. Install `serve` (if you don't have it)

```bash
npm install -g serve
```

### 2. Serve the `out/` directory

```bash
serve out
```

### 3. Open your browser and go to:

```
http://localhost:5000
```

(or whatever port `serve` tells you)

**Now your CSS, images, and JS will work as expected!**

### Why is this necessary?

- Browsers block many features (like JS modules, fetch, and absolute paths) when opening files directly with `file://`.
- A local server simulates a real web environment, so all paths resolve correctly.

Would you like me to provide a command to run this for you? Or do you want more details on how to use a local server?
