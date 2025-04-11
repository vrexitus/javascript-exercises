const repeatString = function(string, num) {
    let newString = "";
    while (num > 0){
        newString += string;
        num--;
    }
    if (num < 0)
        newString = "ERROR";
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
