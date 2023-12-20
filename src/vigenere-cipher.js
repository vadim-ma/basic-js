const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function encryptDecrypt(message, key, encrypt, direct) {
  message = message.toUpperCase();
  key = key.toUpperCase();
  
  let index = 0;
  const newMessage = message
    .split('')
    .map((symbol) => (encryptDecryptSymbol(symbol, key, encrypt)));
  if (direct) {
    return newMessage.join('');
  }
  return newMessage.reverse().join('');
  
  function encryptDecryptSymbol(symbol, key, encrypt) {
    const symbolIndex = alphabet.indexOf(symbol);
    if (symbolIndex === -1) {
      return symbol;
    }
    const keySymbol = key[index % key.length];
    const keyIndex = alphabet.indexOf(keySymbol);
    const encryptIndex = (symbolIndex + (encrypt ? 1 : -1) * keyIndex + alphabet.length) % alphabet.length;
    index += 1;
    return alphabet[encryptIndex];
  }
}

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return encryptDecrypt(message, key, true, this.direct);
  }
  decrypt(message, key) {
    if (arguments.length < 2 || message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    return encryptDecrypt(message, key, false, this.direct);
  }
}

module.exports = {
  VigenereCipheringMachine
};
