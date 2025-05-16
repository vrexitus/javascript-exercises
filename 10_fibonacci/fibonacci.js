const fibonacci = function(number) {
    if (number == 0){
        return 0;
    }else if(number < 0){
        return "OOPS";
    }else if(number == 1){
        return 1;
    }else{
        let n1 = 0, n2 = 1, nextNumber;
        for (let i = 1; i < number; i++){
            nextNumber = n1 + n2;
            n1 = n2;
            n2 = nextNumber;
            console.log(`iterarion ${i}, fibonacci num = ${nextNumber}`);
        }
        return nextNumber;
    }
};

// Do not edit below this line
module.exports = fibonacci;
