// Episode 1

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Library',
//     weapon: 'Rope'
//   };
  
//   const declareMurderer = function() {
//     return `The murderer is ${scenario.murderer}.`;
//   }

//   const verdict = declareMurderer();
//   console.log(verdict);


//  episode 1: Miss Scarlet. Because declareMurderer function is global. No var, const, or let in defining a variable only the function. Anyone can interact with with the variables no problem. And it's been returned. 

// Episode 2 

  // const murderer = 'Professor Plum';

  // const changeMurderer = function() {
  //   murderer === 'Mrs. Peacock';
  // }
  
  // const declareMurderer = function() {
  //   return `The murderer is ${murderer}.`;
  // }
  
  // changeMurderer();
  // const verdict = declareMurderer();
  // console.log(verdict);


// episode 2: Professor Plum. First sentence the const variable is professor plum. There's no push no change the const. Then changes to the functions Mrs. Peacock. the error was pointing at Mrs Peacock '='. I changed it to a '===' which is the proper use in Javascript. The murderer was changed on the last function. When th function says changeMurderer. So i assume thats why it changed back to Professor Plum. 


// Episode 3

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// episode 3: the murderer is Mrs Peacock since the first sentence is a let variable which could be changed.

//  The function below is made up of a const function. Inside it is Mrs Peacock. This is hoisting as the let variable would answer to the const function.

//  Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);


// Episode 4: The error is that there is two functions running at the same so that's why the second function is not picking up the new answer so the three suspects are  Miss Scarlet, Professor Plum, and Colonel Mustard.


// Episode 5

// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);


//  Episode 5: The weapon is a revolver since it connects to the const changeWeapon function.


// Episode 6

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Episode 6: The murderer is Mrs. White since the plot twist function below her name is the same function. 


// Episode 7

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
//   }

//   plotTwist();
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);


// Episode 7: Unsure 


// Episode 8 

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// //  The scenario is the assummed murderer is Mrs Peacock. The room was the conservatory and weapon might've been a lead pipe. 

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

// // But the scenario has changed!! The room is now in th dining room.


//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

// // Plot twist if because the rooms don't match then it isn't Colonel Mustard. 

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

// // Because the murderer matches then that's why the candle stick is the weapon.

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);



// Episode 9
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);

// episode 9: it's Professor Plum since the Mrs. Peacock sentence the murderer is already declared at 
// if (murderer === 'Professor Plum'). Therefore it won't read the other option.