const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let res = '';
    for (let i = 0; i < expr.length; i += 10) {
        const letter = expr.substring(i, i+10);
        if (letter === '**********') {
            res += ' ';
            continue;
        }

        let morseCode = '';
        for (let c = 0; c < letter.length; c += 2) {
            const sign = letter.substring(c, c + 2);
            if (sign === '10') morseCode += '.';
            if (sign === '11') morseCode += '-';
        }
        res += MORSE_TABLE[morseCode];
    }
    return res;
}

module.exports = {
    decode
}