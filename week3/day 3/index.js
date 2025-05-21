//& 2. Write a Javascript function that takes a parameter: myAge
//& 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

function age(myAge) {
    let momAge = myAge * 2
    console.log("my mom age is : " , momAge);

    let dadAge = momAge * 1.2
    console.log("my dad age is : " , dadAge);

    console.log("my age is : " , myAge);
}

//& 4. Call the function.
let result = age(21)
console.log(result);


//! Using an arrow function, create a calculator that returns the result of the operation based on the given operator: +, -, *, or /.
//! The function should accept two numbers as parameters and return the correct calculation result.
//! Bonus: Modify your function to use a ternary operator to handle cases where the operator is not valid, returning "Invalid operator" instead of performing a calculation.

const calculator = (n1, n2 , operation) => {
    if (operation === "+" ) return n1 + n2
    if (operation === "-" ) return n1 - n2
    if (operation === "*" ) return n1 * n2
    if (operation === "/" ) return n1 / n2
}

console.log(calculator(3 , 4 , '+'));

// let fisrDiv = document.querySelector("div")
// let fisrUl = document.querySelector("ul")
// let li2 = document.querySelector("ul").firstElementChild.nextElementSibling;

// let paragraphs = document.getElementsByTagName("p");
// alert("Content in the second paragraph is " + paragraphs[1].innerHTML);
// document.getElementById("second").innerHTML = "The orginal message is changed.";


// Write variables to get the value of the attributes of the specified link :
// href
// hreflang
// rel
// target
// type

let link = document.getElementById("dI");

let href = link.getAttribute("href");
let hreflang = link.getAttribute("hreflang");
let rel = link.getAttribute("rel");
let target = link.getAttribute("target");
let type = link.getAttribute("type");

console.log("href:", href);
console.log("hreflang:", hreflang);
console.log("rel:", rel);
console.log("target:", target);
console.log("type:", type);

//<p id ='text'>DOM Attributes! Yeahhh !!</p>  
// Modify the style of the paragraph text (such as fontSize, fontFamily, color, etc. )through javascript code.
let p = document.getElementById("text")

p.style.fontSize = '30px';
p.style.fontFamily = 'arial'
p.style.color = 'green'

//* Get the value of the 2nd Option
let dropdown = document.getElementById('school-type')
console.log(dropdown.options[1].value);

//* Add a new option with the value 'Work' at the end of the select form
let option = new Option('Work','Work')
dropdown.add(option)

//* Add a new option with the value 'Primary School' at the beginning of the select form
let option2 = new Option('Primary School','Primary School')
dropdown.add(option2 , 0)

//* Change 'College' as selected. Use the 3 properties we learned above
for (let i = 0; i < dropdown.options.length; i++) {
    let option = dropdown.options[i];

    if (option.text === 'College' && option.value === 'college') {
        option.selected = true;
        break;
    }
}

//* Add a button that alert the choice selected
function showSelected() {
  let dropdown = document.getElementById('school-type');
  let selectedValue = dropdown.value;
  alert("You selected: " + selectedValue);
}
