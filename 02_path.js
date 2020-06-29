const path = require('path');

const string = __filename;

console.log('__filename', string); // => /home/andrii/Documents/my-github/nodejs-internal-modules/02_path.js

console.log('path.sep:', path.sep); // => /
console.log('path.delimiter:', path.delimiter); // => :

console.log('------');

console.log('path.dirname():', path.dirname(string)); // => /home/andrii/Documents/my-github/nodejs-internal-modules
console.log('path.extname():', path.extname(string)); // => .js
console.log('path.basename():', path.basename(string)); // => 02_path.js
console.log('path.basename():', path.basename(string, path.extname(string))); // => 02_path

console.log('------');

console.log('path.parse()', path.parse(string)); // =>
/*
{
  root: '/',
    dir: '/home/andrii/Documents/my-github/nodejs-internal-modules',
  base: '02_path.js',
  ext: '.js',
  name: '02_path'
}
 */

console.log('path.format():', path.format({ // => C:\users\gplee/pathjs
  dir: 'C:\\users\\gplee',
  name: 'path',
  ext: 'js',
}));

console.log('path.normalize():', path.normalize('C://users\\\\gplee\\\path.js')); // => C:/users\\gplee\path.js

console.log('------');

console.log('path.isAbsolute():', path.isAbsolute('C:\\')); // => false
console.log('path.isAbsolute():', path.isAbsolute('./home')); // => false

console.log('------');

console.log('path.relative():', path.relative('C:\\users\\gplee\\path.js', 'C:\\')); // => ../C:\ absolute path
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/', 'gplee')); // => /home/andrii/Documents/users/gplee // relative path
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/gplee')); // => /gplee