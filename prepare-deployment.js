const fs = require('fs');
const path = require('path');

// Create deployment directory
const deploymentDir = './deployment';
if (!fs.existsSync(deploymentDir)) {
  fs.mkdirSync(deploymentDir);
}

console.log('Preparing deployment files...');

// Copy HTML files from .next/server/app
const serverAppDir = './.next/server/app';
const htmlFiles = ['index.html', 'dashboard.html', '_not-found.html'];

htmlFiles.forEach(file => {
  const sourcePath = path.join(serverAppDir, file);
  const destPath = path.join(deploymentDir, file);
  
  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, destPath);
    console.log(`✓ Copied ${file}`);
  }
});

// Copy static assets from .next/static
const staticDir = './.next/static';
const destStaticDir = path.join(deploymentDir, '_next/static');

if (fs.existsSync(staticDir)) {
  // Create _next/static directory
  if (!fs.existsSync(path.join(deploymentDir, '_next'))) {
    fs.mkdirSync(path.join(deploymentDir, '_next'));
  }
  if (!fs.existsSync(destStaticDir)) {
    fs.mkdirSync(destStaticDir);
  }
  
  // Copy static files recursively
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
  
  copyDir(staticDir, destStaticDir);
  console.log('✓ Copied static assets');
}

// Copy public folder
const publicDir = './public';
const destPublicDir = path.join(deploymentDir, 'public');

if (fs.existsSync(publicDir)) {
  function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest);
    }
    
    const files = fs.readdirSync(src);
    files.forEach(file => {
      const srcPath = path.join(src, file);
      const destPath = path.join(dest, file);
      
      if (fs.statSync(srcPath).isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        fs.copyFileSync(srcPath, destPath);
      }
    });
  }
  
  copyDir(publicDir, destPublicDir);
  console.log('✓ Copied public assets');
}

// Fix paths in HTML files
console.log('Fixing paths in HTML files...');
htmlFiles.forEach(file => {
  const filePath = path.join(deploymentDir, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix absolute paths to relative paths
    content = content.replace(/href="\//g, 'href="./');
    content = content.replace(/src="\//g, 'src="./');
    content = content.replace(/url\(\//g, 'url(./');
    
    fs.writeFileSync(filePath, content);
    console.log(`✓ Fixed paths in ${file}`);
  }
});

console.log('\n✅ Deployment files prepared in ./deployment/');
console.log('📁 Upload the contents of ./deployment/ to your web server');
console.log('🌐 Your site will be accessible at your domain'); 