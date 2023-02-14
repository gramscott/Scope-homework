/* -------------------------------------------------------------
EXERCISE 1

Let's start off with some basic array practice. In this exercise we'd like you to create an array of three items,
stored inside a variable called myArray. The items can be anything you want — how about your favourite bands or movies?

Next, modify the first two items in the array using simple bracket notation and assignment.
Then add a new item to the beginning of the array.

Finally, 'pop off' the last item in the array and log it out.
-------------------------------------------------------------- */

// Write your code here...


const myArray = ['Dark Knight', 'Lord of the Rings', 'Whiplash'] 

myArray[0] = "Dark Knight"
myArray[1] = 'No country for old men')

favMovies.unshift('No country for old men')
const removedMovie = myArray.pop();


// console.log(favMovies)


/* -------------------------------------------------------------
EXERCISE 2

Now let's practice removing items from an array.

Using the indexOf() and splice() methods, remove 'Visual Basic' from the programmingLanguages array.

-------------------------------------------------------------- */
const programmingLanguages = [ 'JavaScript', 'Python', 'Java', 'C', 'Visual Basic', 'Go' ];

// Write your code here...

console.log(programmingLanguages.indexOf('Visual Basic'));
console.log(programmingLanguages.splice(4, 0))

// programmingLanguages.splice(indexOf)







/* -------------------------------------------------------------
EXERCISE 3

Nested arrays!

The ticTacToe (naughts & crosses) array represents a board of 3x3 dimensions.
The first nested array is the top row of the board, the last nested array is the bottom row.

Programmatically, add items ('x' or 'o') to the nested arrays such that 'x' wins.

-------------------------------------------------------------- */
const ticTacToe = [['', '', ''], ['', '', ''], ['', '', ''] ];

// Write your code here...

ticTacToe[0][0] = 'x';

/* -------------------------------------------------------------
EXERCISE 4

Now let's practice converting strings to arrays. In this exercise we'd like you to create a string,
stored inside a variable called myString. The items can be anything you want but should be separated by
a comma or semi-colon.

Next, use the split() method to convert myString into an array called arrFromStr.
Then use a for..of statement to log out the items in arrFromStr.

-------------------------------------------------------------- */

// Write your code here...

/* -------------------------------------------------------------
EXERCISE 5

Given an array of numbers and an empty array called doubles, use a for loop to iterate through the array,
multiply each number by 2 and push the result onto the doubles array.

Finally, log out the doubles array.

-------------------------------------------------------------- */
const numbers = [2, 4, 5, 7];
const doubles = [];

// Write your code here...

for (const number of numbers){
    number * 2
    doubles.push(number * 2)
}

/* -------------------------------------------------------------
EXERCISE 6

In this exercise, we'd like you to write a for loop that starts at 0
and ends at 2. For each musician, push on a new intro to the intros array.

Finally, use a for..of statement to loop through the intros array and log out each intro.

-------------------------------------------------------------- */
const firstNames = ["Chris", "Harry", "Sporty"];
const lastNames  = ["Martin", "Styles", "Spice"];
const bands      = ["Coldplay", "One Direction", "Spice Girls"];

const intros = [];

// Loop through the firstNames and lastNames arrays and store the following strings in the intros array:
// 'Hi, my name is Chris Martin and I am in Coldplay'
// 'Hi, my name is Harry Styles and I am in One Direction'
// 'Hi, my name is Sporty Spice and I am in Spice Girls'

// Write your code here...
for (let index = 0; index <= 2; index ++) {
    const intro = 'Hi, my name is ${firstNames[index]} and I am in a ${bands[index]}'
    intros.push(intro)
}

/* -------------------------------------------------------------
EXERCISE 7

In this final exercise, given a counter, use a while loop to log out
a count down from 10 to 1. HINT: remember you can decrement the value
of a variable using the '--' shorthand.

-------------------------------------------------------------- */
let counter = 10;

// Write your code here...