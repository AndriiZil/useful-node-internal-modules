const crypto = require('crypto');

console.log('base64:', crypto.createHash('sha512').update('password').digest('base64'));
// base64: sQnzu7wkTrgkQZF+0G1hi5AI3Qmzvv0bXgc5THBqi7mAsdd4Xll27ASbRt9fEyavWi6m0QP9B8lThf+rDKy8hg==

console.log('hex:', crypto.createHash('sha512').update('password').digest('hex'));
// hex: b109f3bbbc244eb82441917ed06d618b9008dd09b3befd1b5e07394c706a8bb980b1d7785e5976ec049b46df5f1326af5a2ea6d103fd07c95385ffab0cacbc86

console.log('base64:', crypto.createHash('sha512').update('another password').digest('base64'));
// base64: OQ3BGSirE9o4ruKs+kwx43TCX/leAU5wO/D4IAQlLfppai4YsjoBbptGYiKFURkaWoenzb/FPe+Uy8K3Ufa77Q==
