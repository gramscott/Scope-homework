const sports = ["football", "tennis", "rugby"];

// console.log(sports[sports.length - 1]);

sports.push("curling");
sports.push("snooker");
sports.push("darts");

const removedSport = sports.shift();
// console.log(removedSport);

sports.unshift("Swimming");

const splicedSport = sports.splice(3, 1, "Badminton");

// console.log(sports);


for(const sport of sports) {
    console.log(sport);
}

for (let index = 0; index < sports.length; index++) {
    sports[index] = sports[index].toUpperCase();
} 

console.log(sports)