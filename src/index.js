const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '**********': ' ',
};

function decode(expr) {
    let array = [];
    let subArray = [];
    let word = 10;
    for (let i = 0; i < expr.length; i += word) {
        array.push(expr.slice(i, i + 10));
    }
    let newArray = [];
    for (let x of array) {
        subArray.push(x.replace(/11/g, '-').replace(/10/g, '.').replace(/00/g, ''));
    }



    for (let z of subArray) {
        newArray.push(MORSE_TABLE[z]);
    }

    return newArray.join('');


}


module.exports = {
    decode
}





// let decText = [];
// let two = [];
// code = expr.split('');
// let word = 10;
// for (let i = 0; i < Math.ceil(code.length / word); i++) {
//     decText[i] = code.slice((i * word), (i * word) + word);
//     for (let j = 0; j < decText[i].length; j++) {
//         if (decText[i][0] == 0) {
//             if (decText[i][1] == 0) {
//                 decText[i].splice(0, 2);
//                 j = -1;
//             }
//         }
//         for (let k = 0; k < Math.ceil(decText[i].length / 2); k++) {
//             two[k] = decText[i].slice((k * 2), (k * 2) + 2).join('');
//             for (let c = 0; c < two.length; c++) {
//                 if (two[c] == '10') {
//                     two.splice(c, 1, '.');
//                 } else if (two[c] == '11') {
//                     two.splice(c, 1, '-');
//                 }
//             }
//         }
//     }

// }
// let bug = two.join('');



// console.log(bug);