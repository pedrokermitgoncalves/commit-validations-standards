const path = require('path');
const fs = require('fs');

console.log(fs.readFileSync(path.resolve(__dirname, 'logo2.ans'), 'utf8').toString().trim());
