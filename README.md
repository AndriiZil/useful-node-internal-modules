# useful-node-internal-modules
#### os.type() : shows the Operating Systems type
#### os.uptime() : time after OS boots up
#### os.hostname() : shows the computer name
#### os.release() : shows OS version
#### os.homedir() : shows home directory path
#### os.freemem () : shows available RAM
#### os.totalmem() : show entire memory capacity

#### __filename, __dirname represents current file and current folder path respectively
#### path:sep : path delimiter (i.e., Windows : \ , POSIX : / )
#### path.delimiter : env variable delimiter (i.e., Windows : ; , POSIX :)
#### path.dirname(path) : file Path
#### path.extname(path) : file extension
#### path.basename(path, extension) : file name
#### path.parse(path) : separate the file path into root, dir, base, ext, name
#### path.format(object) : path.parse() object to file path
#### path.noramlize(path) : remove duplicates / \
#### path.isAbsolute(path) : return boolean tells whether the file path is absolute path or relative path
#### path.join(path, …) : combine into a path
#### path.resolve(path, …) : combine into a path

#### url.parse(address) : separate url
#### url.format(object) : reassemble url

#### querystring.parse(query) : url query into JavaScript object
#### querystring.stringify(object) : query object to string

#### createHash(algorithm) : Create hash algorithm to use. md5, sha1, sha256, sha512 are available
#### update(string) : string to encrypt
#### digest(encoding) : encoding algorithm. base64, hex, latin1 ; base64 has the shortest length of result string

#### create salt using randomBytes method
#### pdkdf2() methods takes 1) string to encrypt “password” 2) salt 3) # of calls (repetition) 4) hash algorithm as parameters
#### In other words, the method above encrypt the text password 10k times using sha512 hash algorithm
#### 10k times takes only 1s

#### crypto.createCipher(algorithm, key) : algorithm to use & key
#### cipher.update(string, encoding, output encoding) : we use utf8 encoding and use base64 for encryption
#### cipher.final(output encoding) : encryption completes given output encoding base64
#### crypto.createDecipher(algorithm, key) : used to decrypt (use the same encrypt algorithm & key)
#### decipher.update(string, encoding, output encoding) : same as encryption
#### decipher.final(output encoding) : same as encryption

#### util.deprecate : this function tells that the function is deprecated
#### util.promisify : change callback pattern to promise pattern. async / await as well