# Caesar Cipher Text Encryption/Decryption Application

## Overview

This application allows users to encrypt and decrypt text using the Caesar Cipher technique. Users can enter plaintext and a numeric key to generate encrypted text, and vice versa.

## Features

- Encrypt plaintext using a Caesar Cipher.
- Decrypt cipher text back to plaintext using the same key.
- Simple and intuitive user interface.

## Requirements

- Modern web browser

## Usage

### Running Locally

1. Download or clone the repository.
2. Open `index.html` in a web browser.
3. Enter the plaintext you want to encrypt or the cipher text you want to decrypt in the "Plaintext" input field.
4. Enter the key (a number) in the "Key" input field.
5. Click the "Encrypt" button to encrypt the plaintext or the "Decrypt" button to decrypt the cipher text.
6. The result will be displayed in the "Result" text area.

### Testing from Deployed Link

1. Open the deployed application link: [Caesar Cipher Text Encryption/Decryption Application](https://caesar-cipher-text-encryption-decryption.onrender.com)
2. Enter the plaintext you want to encrypt or the cipher text you want to decrypt in the "Plaintext" input field.
3. Enter the key (a number) in the "Key" input field.
4. Click the "Encrypt" button to encrypt the plaintext or the "Decrypt" button to decrypt the cipher text.
5. The result will be displayed in the "Result" text area.

## Implementation Details

### Caesar Cipher Algorithm

The Caesar Cipher shifts each letter in the plaintext by a specified number of positions down or up the alphabet.

#### Encryption

- Convert each letter to its ASCII code.
- Shift the code by the key value.
- Handle wrap-around by using modulo operation.
- Preserve the case of the letter.

#### Decryption

- Convert each letter to its ASCII code.
- Shift the code by the negative key value.
- Handle wrap-around by using modulo operation.
- Preserve the case of the letter.

### Error Handling

- The application checks if the key is a number.
- Non-alphabetic characters in the input are not shifted and remain unchanged.

## Files

- `index.html`: Contains the HTML structure of the application.
- `styles.css`: Contains the CSS styles for the application.
- `script.js`: Contains the JavaScript code for encryption and decryption.

## Future Enhancements

- Implement the application using React and TypeScript for better scalability and maintainability.
- Add more error handling and validation for edge cases.
- Improve the user interface with additional styling and responsiveness.

### Setup

1. Ensure Node.js and npm are installed.
2. Install Jest:
   npm install --save-dev jest

### RUNNING THE TEST

- run the command in your terminal `npm run test`
