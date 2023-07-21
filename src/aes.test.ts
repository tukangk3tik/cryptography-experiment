/**
 * AES Encryption
 * --------------
 * The Advanced Encryption Standard (AES) is a symmetric block cipher 
 * chosen by the U.S. government to protect classified information. 
 * AES is implemented in software and hardware throughout the world 
 * to encrypt sensitive data. It is essential for government computer security, 
 * cybersecurity and electronic data protection.
 */


const textStr = 'text_to_encrypt';
const keyStr = 'your_secret_key';
const encryptStr = encryptDecrypt('ENCRYPT', textStr);
const decryptStr = encryptDecrypt('DECRYPT', encryptStr);

console.log('-----------------------------');
console.log(`Plain Text     : ${textStr}`);
console.log(`Encrypt result : ${encryptStr}`);
console.log(`Decrypt result : ${decryptStr}`);

function encryptDecrypt(cmd, text) {
  const CryptoJS = require('crypto-js');

  let result = ""
  if (cmd.toUpperCase() == 'ENCRYPT') {
    result = CryptoJS.AES.encrypt(
      text,
      keyStr
    ).toString();
  } else {
    const bytes = CryptoJS.AES.decrypt(
      text,
      keyStr
    )
    result = bytes.toString(CryptoJS.enc.Utf8)
  }

  return result
}