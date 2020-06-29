const os = require('os');

console.log('operating system information -------------');
console.log('os.arch()', os.arch()); // x64
console.log('os.platform():', os.platform()); // linux
console.log('os.type():', os.type()); // Linux
console.log('os.uptime():', os.uptime()); // 410
console.log('os.hostname():', os.hostname()); // andrii-pc
console.log('os.release():', os.release()); // 5.3.0-61-generic

console.log('path -------------');
console.log('os.homedir():', os.homedir()); // /home/andrii
console.log('os.tmpdir()', os.tmpdir()); // /tmp

console.log('memory information -------------');
console.log('os.freemem():', os.freemem()); // 11118895104
console.log('os.totalmem():', os.totalmem()); // 16734531584