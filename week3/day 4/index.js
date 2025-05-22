// function insertRow() {
//     let table = document.getElementById("sampleTable");

//     let newRow = table.insertRow();

//     // Create two new cells
//     let cell1 = newRow.insertCell(0);
//     let cell2 = newRow.insertCell(1);

//     cell1.textContent = "New cell1";
//     cell2.textContent = "New cell2";
// }

// // let x = document.getElementById("btn")
// // let y = document.getElementById("btn1")

// // y.addEventListener("click", RespondClick);
// // y.addEventListener("mouseover", RespondMouseOver);

// // x.addEventListener("click", RespondClick);
// // x.addEventListener("mouseover", RespondMouseOver);
// // x.addEventListener("mouseout", RespondMouseOut);

// // function RespondClick() {
// //     alert("Button Clicked")
// // }

// // function RespondMouseOver() {
// //     alert("My mouse is over the btn")
// // }

// // function RespondMouseOut() {
// //     alert("My mouse is out of the btn")
// // }     

// let x = document.getElementById("btn")
// let y = document.getElementById("btn1")

// y.addEventListener("mouseover", RespondMouseOver);

// x.addEventListener("mouseover", RespondMouseOver);

// function RespondMouseOver(e) {
//     console.log("e", e)
//     // all the properties of the event object
//     console.log("My mouse is over the btn named" + e.target.innerHTML)
//     console.log("e.type: ", e.type)
//     // e.type: mouseover
//     console.log("e.target: ", e.target)
//     // e.target:  <button id=​"btn1">​Hey Hey​</button>​
// }


// const button = document.getElementById("jsstyle");

// // When the button is clicked
// button.addEventListener("click", function () {
//     button.style.backgroundColor = "lightblue";
//     button.style.color = "white";
//     button.style.fontSize = "20px";
//     button.style.padding = "10px 20px";
// });
// button.addEventListener("mouseover", function () {
//   button.style.border = "2px solid black";
//   button.style.cursor = "pointer";
// });

// button.addEventListener("mouseout", function () {
//   button.style.border = "none";
// });


// const div = document.getElementById("myDiv");
// const button2 = document.getElementById("jsstyle");

// div.addEventListener("click", function () {
//   alert("DIV clicked!");
//   div.style.backgroundColor = "lightgreen";
// });

// button2.addEventListener("click", function (event) {
//   event.stopPropagation(); 
//   button2.style.backgroundColor = "blue";
//   button2.style.color = "white";
//   button2.textContent = "Clicked!";
// });

// button2.addEventListener("mouseover", function () {
//   button2.style.border = "2px solid black";
//   button2.style.cursor = "pointer";
// });

// button2.addEventListener("mouseout", function () {
//   button2.style.border = "none";
// });


// const getvalue = (event) =>{
//   event.preventDefault(); //Stop the form from refreshing the page

//   let form = document.getElementById('form1')

//   let firstName = form.fname.value;
//   let lastName = form.lname.value;

//   console.log("First name:", firstName);
//   console.log("Last name:", lastName);  
// }

// let form = document.forms.my;

// form.addEventListener("submit", getUserComments)

// function getUserComments() {
//   alert('submit !')
// }

// const form = document.getElementsByTagName('form')[0];
// const email = document.getElementById("mail");
// const name = document.getElementById("name");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// form.addEventListener("submit", function (event) {
//   if (!email.validity.valid) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// setTimeout(() => {
//   const banner = document.getElementById('sales-banner');
//   banner.classList.add('show-banner');
// }, 5000);


let timer = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  // date.toLocaleTimeString() returns a string with a language sensitive representation of the time portion of this date
  document.getElementById("demo").innerHTML = time;
}

function myStopFunction() {
  clearInterval(timer);
}