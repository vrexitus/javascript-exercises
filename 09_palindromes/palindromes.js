const palindromes = function (phrase) {
    const sentence = [...phrase].filter((char) => {
        return /^[a-zA-Z0-9]*$/.test(char);
    }).join('').toLowerCase();
    let reverseSentence = sentence.split("").reverse().join("");
    if (reverseSentence == sentence) {
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
