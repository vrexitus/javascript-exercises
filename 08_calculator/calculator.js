const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  if (arr.length === 0){
    return 0;
  }else {
    const sumallnums = arr.reduce((total, currentnum) => {
      return total + currentnum;
    })
    return sumallnums;
  }
};

const multiply = function(arr) {
  if (arr.length === 0){
    return 0;
  } else {
    const productAllNums = arr.reduce((total, currentItem) => {
      return total * currentItem;
    })
    return productAllNums;
  }
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num == 0) {
    return 1;
  } else {
    const arr = [num];
    for (let numcpy = num -1; numcpy > 0; numcpy--){
      arr.push(numcpy);
    }
    const factorial = arr.reduce((total, currentItem) => {
      return total * currentItem;
    })
    return factorial;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
