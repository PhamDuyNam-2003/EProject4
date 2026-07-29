const fs = require('fs');
const path = require('path');
const seedPath = path.join(__dirname, 'src', 'seed.ts');
let content = fs.readFileSync(seedPath, 'utf8');

// Replace "h1" with "00000000-0000-0000-0000-000000000001"
content = content.replace(/"h(\d+)"/g, (match, p1) => {
  const numStr = p1.padStart(12, '0');
  return `"00000000-0000-0000-0000-${numStr}"`;
});

fs.writeFileSync(seedPath, content);
console.log('Seed file updated successfully.');
