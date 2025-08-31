const fs = require('fs');
const path = require('path');

// Create SVG favicon with RP initials
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="4" fill="#006994"/>
  <text x="50%" y="50%" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">RP</text>
</svg>`;

// Write SVG favicon
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.svg'), svgContent);

// Create ICO format for broader compatibility
const icoSvgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
  <rect width="16" height="16" rx="2" fill="#006994"/>
  <text x="50%" y="50%" font-family="system-ui, -apple-system, sans-serif" font-size="7" font-weight="bold" fill="white" text-anchor="middle" dominant-baseline="middle">RP</text>
</svg>`;

// For now, we'll use SVG for the ico as well (modern browsers support this)
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), icoSvgContent);

console.log('Favicons created successfully!');
console.log('- favicon.svg (32x32)');
console.log('- favicon.ico (16x16)');