
function square(number){
    return number * number; 
}


console.log(square(5))


// const getUserDetails = function(firstName, lastName, emails)

const totalNumbers = function(numbers){
    let total = 0;
    for (const number of numbers){
        total += number;
    }
    return total; 
}

console.log(totalNumbers(myNumbers));

// Declare a function that takes input of a number and an array and returns true if the array contains that number and false if it doesn't

// const myNumbers = [1,2,3,4,5];


// const numChecker = function(number, array){
//     for (const num of array) {
//         if (num === number) 
//         return true;
//     }
// }
// return false;
// }

const hasKey = function(object, string){
    for (const key in object) {
        if (key ==== string) {
            return true;
        }
    }
    return false;
}


const person = {
    name: "Wojtek",
    age: 30
}

const sherlockScope = function(buddyName) {
    var firstName = 'Sherlock';
    let lastName = 'Holmes';
    const buddy = buddyName;
    return '${firstName) $(lastName) '
}
console.log(hasKey(person, 'address'));


// }

// console.log(numChecker(3, myNumbers)):
// console.log(numChecker)

const

// Define a function expression that takes two arguments:




// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for example, 'name'

// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. 