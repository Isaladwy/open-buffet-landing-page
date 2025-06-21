const fs = require('fs');
const path = require('path');

// Function to convert absolute paths to relative paths
function fixPaths(directory) {
  const files = fs.readdirSync(directory);

  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      console.log(`Fixing paths in: ${filePath}`);

      let content = fs.readFileSync(filePath, 'utf8');

      // Replace absolute paths with relative paths
      content = content.replace(/href="\//g, 'href="./');
      content = content.replace(/src="\//g, 'src="./');
      content = content.replace(/url\(\//g, 'url(./');

      fs.writeFileSync(filePath, content);
    } else if (file.endsWith('.css')) {
      console.log(`Fixing paths in CSS: ${filePath}`);

      let content = fs.readFileSync(filePath, 'utf8');

      // Replace absolute paths in CSS
      content = content.replace(/url\(\//g, 'url(./');

      fs.writeFileSync(filePath, content);
    }
  });
}

// Start fixing paths from the out directory
console.log('Converting absolute paths to relative paths...');
fixPaths('./out');
console.log('Done! You can now open index.html locally.');
