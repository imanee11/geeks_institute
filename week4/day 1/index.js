function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young.";
  } else {
    const message = "Yay! You're old enough!";
  }

  return message;
}

console.log(checkAge(21));


//& Create a function to check the year given by the user
//& If the year is after 2000, you should display "You are in the 21st century", else you should display "You live in the Middle Age"

const checkYear = (year) => {
    return (year > 2000 ? "You are in the 21st century" : "You live in the Middle Age");
}

console.log(checkYear(1999));

const hummus = function(factor) {
    const ingredient = function(amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

hummus(2)

function add() {
  let counter = 0;
  function plus() {
      counter += 1;
      console.log(counter) ;
  }
  plus();  
}

add()

let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

const person = {
  name: 'Lydia',
  age: 21,
};

for (const item in person) {
  console.log(item);
}


