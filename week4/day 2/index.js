const myArray = [2, 3, 4, 5, 6]; 

//1st example with arrow function
myArray.forEach((number, index) => { 
    console.log("number: ", number) // logs each element of the array
    console.log("index: ", index) // logs each index of the array
}); 

// 2nd example with arrow function
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function(number, i, arr) { 
    arr[i] = number * 2; 
}); 

// console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

const numbers = [10, 11, 12, 15, 20];

numbers.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});


// const words = ["wow","hey","bye"];

// Check if at least one element of the array starts with the letter 'h'
// console.log(words.some((value)=> { return (value.includes('h')); }));

const words = ["hello","hey","hola"];

// Check if all the elements of the array start with the letter 'h'
console.log(words.every((value)=> { return (value.startsWith("h")) }));

arr = [10,20,30,40];

let newArr = arr.map((val, i, arr) => {
  return {
    value: val,
    index: i
  };
});

console.log(newArr);

let party = [
  {
    desert: 'Chocolate Mousse',
    calories: 30,
  },
  {
    desert: 'Apple Pie',
    calories: 15,
  },
  {
    desert: 'Croissant',
    calories: 50,
  },
  {
    desert: 'Strawberry Icecream',
    calories: 5,
  },
]

let totalCalories = party.reduce(function(sum, item) {
    if (item.desert !== 'Apple Pie') {
        return sum + item.calories
    }
    return sum
}, 0)

console.log(totalCalories)


let prices = [12, 20, 18];
let newPriceArray = [...prices];
console.log(newPriceArray);


let alphabets = ["A", ..."BCD", "E"];
console.log(alphabets);


