let name = "Melissa Rice"
let age = 26
let birthday = "July 27th"
let detroitGC = true
let lifeEvents = ["I was born in Dearborn","I went to MSU", "I'm a Redwings fan","I lived in Seattle"]


// if else statement
if (detroitGC = true){
    console.log(`My name is ${name} and I am a student at Grand Circus in Detroit,Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
} else {
    console.log(`My name is ${name} and I am a student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}`);
}


// loop starting at 0, log new sentence from lifeEvents array
for (let i = 0; i<lifeEvents.length;i++){
    console.log(lifeEvents[i]);
}


let counter = 0;

// if randomNumber is NOT equal to 5 increment counter
while (true) {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    // console.log(randomNumber);
    if (randomNumber !== 5){
    counter++
    console.log("randomNumber !== 5");
}
else {
    counter++
    console.log(`5 === 5. It took ${counter} iterations to randomly generate the number 5`);
    break;
    }
}