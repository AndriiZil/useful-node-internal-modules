const crypto = require('crypto');

crypto.randomBytes(64, (err, buf) => {
  const salt = buf.toString('base64');
  console.log('salt:', salt);
//     salt: Fm+A4kqQZmQX52hFU6vMkVvycqzhYqdc/Jc4op08PkLgwMJYC0JWWP6kCDl8RXFogbuC8KhgMdksYUVwunJ/eg==

  crypto.pbkdf2('password', salt, 100000, 64, 'sha512', (err, key) => {
    console.log('password:', key.toString('base64'));
//     password: 6De9DeudO9hFxG1dSbiYK1sBapcdQBqgvVATq8inqLGiyT6Dpcsg8FyWRzuBTaeMe9kwaaT4Qzfw70EN/Yb+jg==
  })
})