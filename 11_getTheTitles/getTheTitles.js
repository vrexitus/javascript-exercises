const getTheTitles = function(books) {
    const newArr = [];
    console.log(books[0].title);
    books.forEach(element => {
        newArr.push(element.title);
    });
    return(newArr);
};

// Do not edit below this line
module.exports = getTheTitles;
