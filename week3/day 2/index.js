// // let addressNumber = 55;
// // let addressStreet = "idk";
// // let country = "morocco";

// // let globalAddress = "I live in " + addressNumber + " " + addressStreet + ", in " + country;

// // console.log(globalAddress)

// //* 1. Store your birth year in a variable.
// birth_year = 2003

// //* 2. Store a future year in a variable.
// future_year = 2027

// //* 3. Calculate your possible ages for that year based on the stored values.
// possible_ages = future_year - birth_year

// //* 4. Display : "I will be NN in YYYY", substituting the values.
// console.log(`i will be ${possible_ages} in ${future_year}`)

// alert("Hello");
// let age = prompt('How old are you?', 20);
// alert(`You are ${age} years old!`); // You are 20 years old!



//& 1. Create a numerically indexed table (ie. an array): pets, like this ['cat','dog','fish','rabbit','cow']
let pets = ['cat','dog','fish','rabbit','cow']

//& 2. Display dog
console.log(pets[1])

//& 3. Add to the array pets, the pet horse. Remove the pet rabbit
pets.push("horse")
pets.splice(3 , 1)
console.log(pets);


//& 4. Display the array length
console.log(pets.length);


//^ 1. Create an object that has properties "username" and "password". Fill those values in with strings.
let obj = {
    username : 'imane' ,
    password : '1234' 
}

//^ 2. Create an array which contains the object you have made above and name the array "database".
let database = [obj]

//^ 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
let newsfeed = [
    {
    username: 'sarah',
    timeline: 'I love JavaScript!'
    },
    {
    username: 'alex',
    timeline: 'Learning to code is fun!'
    },
    {
    username: 'john',
    timeline: 'Just finished my first website!'
    }
]

// console.log(database);
// console.log(newsfeed);


// Make a keyless car!

// This car will only let you drive if you are over 18. Make it do the following:

//~ Using prompt() and alert(), ask a user for their age.
// let age = prompt('enter ur age')

// if (age < 18) {
//     alert('sorry, you are too young to drive this car. Powering off')
// } else if (age == 18){
//     alert('Congratulations on your first year of driving. Enjoy the ride!')
// } else {
//     alert('Powering On. Enjoy the ride!')
// }

// IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
// IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
// IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }

// for (let i = 0; i < 2; i++) {
//     console.log("the current number is " + i)
// }

// let arr = [1, 4, 7, 10]
// for (let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }


//* 1. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, 
//* it will check if the current number is odd or even, and display a message to the screen.

// Sample Output: //"0 is even" //"1 is odd" //"2 is even"
// for (let i = 0 ; i <= 15 ; i++ ){
//     if (i % 2 == 0 ) {
//         console.log(`${i} is even`);
//     }else {
//         console.log(`${i} is odd`);
//     }
// }

// let n = 0;
// while (n < 3) {
//   n++;
//   console.log(n)
// }

// let i = 0;
// do {
//   console.log("The number is " + i)
//   i++;
// }
// while (i < 10);



let names= ["john", "sarah", 23, "Rudolf",34]
//* 1. Write a JavaScript for loop that will go through the variable names.
// if the item is not a string, pass.
// if the item is a string, check if its first letter is in uppercase. If not, change it to uppercase and then display the name.
for (let i = 0; i < names.length; i++) {

  let item = names[i];

  if (typeof item !== "string") {
    continue;
  }

  if (item[0] !== item[0].toUpperCase()) {
    item = item[0].toUpperCase() + item.slice(1);
  }

  console.log(item);
}

//* 2. Write a JavaScript for loop that will go through the variable names
// if the item is not a string, go out of the loop.
// if the item is a string, display it.
for (let i = 0 ; i <names.length ; i++){

    let item = names[i];

    if (typeof item !== "string") {
        break;
    }
    console.log(item);
    
}





