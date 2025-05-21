//& Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

//& First, create a new <li> tag (use the createElement method).
let ul = document.querySelector('ul');
let newLi = document.createElement('li');

//& Create a new text node with “Logout” as its specified text.
let text = document.createTextNode("Logout");

//& Append the text node to the newly created list node (<li>).
newLi.appendChild(text)

//& Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
ul.appendChild(newLi)

//& Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;

console.log("first link:", firstLi.textContent);
console.log("last link:", lastLi.textContent);