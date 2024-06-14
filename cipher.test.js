const caesarCipher = require('./script');
console.log(caesarCipher)
describe('Caesar Cipher', () => {
    test('encrypts plaintext correctly', () => {
        expect(caesarCipher('ABC', 3)).toBe('DEF');
        expect(caesarCipher('abc', 3)).toBe('def');
        expect(caesarCipher('XYZ', 3)).toBe('ABC');
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('decrypts ciphertext correctly', () => {
        expect(caesarCipher('DEF', -3)).toBe('ABC');
        expect(caesarCipher('def', -3)).toBe('abc');
        expect(caesarCipher('ABC', -3)).toBe('XYZ');
        expect(caesarCipher('abc', -3)).toBe('xyz');
    });

    test('preserves non-alphabetic characters', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('Khoor, Zruog!', -3)).toBe('Hello, World!');
    });

    test('handles large shifts', () => {
        expect(caesarCipher('ABC', 29)).toBe('DEF'); // 29 % 26 == 3
        expect(caesarCipher('XYZ', -29)).toBe('UVW'); // -29 % 26 == -3
    });

    test('handles zero shift', () => {
        expect(caesarCipher('ABC', 0)).toBe('ABC');
        expect(caesarCipher('xyz', 0)).toBe('xyz');
    });
});
