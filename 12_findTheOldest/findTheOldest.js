const findTheOldest = function(people) {
    let elder = [];
    let oldest = 0;
    people.forEach(element => {
        let age = 0;
        if (element.yearOfDeath == null){
            const currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            let yearOfDeath = currentYear;
            age = yearOfDeath - element.yearOfBirth;
        } else {
            age = element.yearOfDeath - element.yearOfBirth;
        }
        if(oldest < age){
            oldest = age;
        }else{
            oldest = oldest;
        }
    });
    people.forEach(element => {
        let age = 0;
        if (element.yearOfDeath == null){
            const currentDate = new Date();
            let currentYear = currentDate.getFullYear();
            let yearOfDeath = currentYear;
            age = yearOfDeath - element.yearOfBirth;
        } else {
            age = element.yearOfDeath - element.yearOfBirth;
        }
        if(age == oldest){
            elder = element;
        }
    });
    return elder;
};

// Do not edit below this line
module.exports = findTheOldest;
