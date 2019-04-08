import Crypto from 'crypto';
import configs from '../configs.json';

export const strongEncrypt = (value: string): string => {
  const settings = configs.encryption;
  const salt = settings.encryptionSalt;
  const iterations = settings.encryptionIterations;
  const keyLength = settings.encryptionKeyLength;
  const result = Crypto.pbkdf2Sync(value, salt, iterations, keyLength, 'sha512');
  return Buffer.from(result).toString('base64');
};

// export function basicHash() {
//   const currentDate = (new Date()).valueOf().toString();
//   const random = Math.random().toString();
//   return Crypto.createHash('sha1').update(currentDate + random).digest('hex');
// }
