//& Retrieve the div and console.log it
let div = document.getElementById("container")
console.log(div);

//& Change the name “Pete” to “Richard”.
let li2 = document.querySelector("ul").firstElementChild.nextElementSibling;
li2.innerHTML = 'Richard'

//& Delete the second <li> of the second <ul>.
let ul = document.getElementsByClassName('list')
let secondUl = ul[1]
let secondLi = secondUl.children[1]
secondUl.removeChild(secondLi)

//& Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)
for (let i = 0; i < ul.length; i++) {
    ul[i].children[0].textContent = "imane";
}


//* Add a class called student_list to both of the <ul>'s.
for (let i = 0; i < ul.length; i++) {
    ul[i].classList.add('student_list');
}
console.log(ul);

//* Add the classes university and attendance to the first <ul>.
ul[0].classList.add('university', 'attendance');
console.log(ul);

//? Add a “light blue” background color and some padding to the <div>.
div.style.backgroundColor = 'lightblue'
div.style.padding = '10px'

//? Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
document.querySelectorAll('.list')[1].lastElementChild.style.display = 'none'

//? Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
document.querySelectorAll('.list')[0].lastElementChild.style.border = 'solid 2px'

//? Change the font size of the whole body.
document.body.style.fontSize = '20px';

//~ Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
let users = document.querySelectorAll(".list li");
let bgColor = window.getComputedStyle(div).backgroundColor;

if (bgColor === "lightblue" || bgColor === "rgb(173, 216, 230)") {
    alert(`hello ${users[0].textContent} and ${users[1].textContent}`);
}

