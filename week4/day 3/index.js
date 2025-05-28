let myObj = {
  name: "John",
  lastName: "Doe",
  age: 25,
  friends: ["Mark", "Lucie", "Ana"]
};

let entries = Object.entries(myObj); // gets key-value pairs

console.log("Total keys:", entries.length);

entries.forEach((entry, index) => {
  console.log(`The ${index + 1}# key is : ${entry[0]}  The ${index + 1}# value is : ${entry[1]}`);
});

const user = { name: 'Lydia', age: 21 };
const admin = { admin: true, ...user };
console.log(admin);


// Analyse the code below. Display the type of each rabbit and make them speak

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log("Type of killerRabbit:", killerRabbit.type);
console.log("Type of blackRabbit:", blackRabbit.type);

killerRabbit.speak("Beware!");
blackRabbit.speak("Hello there!");

