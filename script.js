function encrypt() {
    const plaintext = document.getElementById('plaintext').value;
    const key = parseInt(document.getElementById('key').value);

    if (isNaN(key)) {
        alert('Key must be a number');
        return;
    }

    const cipherText = caesarCipher(plaintext, key);
    document.getElementById('result').value = cipherText;
}

function decrypt() {
    const cipherText = document.getElementById('plaintext').value;
    const key = parseInt(document.getElementById('key').value);

    if (isNaN(key)) {
        alert('Key must be a number');
        return;
    }

    const plainText = caesarCipher(cipherText, -key);
    document.getElementById('result').value = plainText;
}

function caesarCipher(text, shift) {
    return text.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let shiftedCode;

            if (code >= 65 && code <= 90) {
                shiftedCode = ((code - 65 + shift) % 26 + 26) % 26 + 65;
            } else if (code >= 97 && code <= 122) {
                shiftedCode = ((code - 97 + shift) % 26 + 26) % 26 + 97;
            }

            return String.fromCharCode(shiftedCode);
        }
        return char;
    }).join('');
}

module.exports = caesarCipher