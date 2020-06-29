const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y); // 3 dontUseMe function is deprecated so do not use!
}, 'dontUseMe function is deprecated so do not use!');
dontUseMe(1,2);

const randomBytesPromise = util.promisify(crypto.randomBytes);
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString('base64'));
    // Nknb/yKhCB7yG/YWOa4Zrf5Sqzy9yLqZWfOB5453N1xFAlQbST/FhWUTzmoPJNQrut02xgN3q0CtFSCdGSJJDg==
  })
  .catch((error) => {
    console.error(error);
  })