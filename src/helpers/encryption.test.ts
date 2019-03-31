import * as encryption from './encryption';

describe('Get encrypted jwt hash', () => {
    it('should return encrypted string', () => {
      const stringToBeDecoded = 'abcde';
      const expectedHash = 'm8r3LXYRwm1nL++e/hxYh66wdE3rkJR8RU0QOZnocX4=';
      expect(encryption.strongEncrypt(stringToBeDecoded)).toBe(expectedHash);
    });
});

// Reference to spy the functions
// describe('Get encrypted jwt hash', () => {
//     it('should return encrypted string', () => {
//       const spy = jest.spyOn(encryption, 'abc');
//       spy.mockReturnValue('abcde');
//       const stringToBeDecoded = 'abcde';
//       const expectedHash = 'm8r3LXYRwm1nL++e/hxYh66wdE3rkJR8RU0QOZnocX4=';
//       expect(strongEncrypt(stringToBeDecoded)).toBe(expectedHash);
//     });
// });

