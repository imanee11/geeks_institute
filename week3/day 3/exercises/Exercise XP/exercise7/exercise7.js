//& In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title, // author, // image : a url, // alreadyRead : which is a boolean (true or false).

const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://upload.wikimedia.org/wikipedia/en/f/f7/TheGreatGatsby_1925jacket.gif",
        alreadyRead: true
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        author: "J.K. Rowling",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/HP1_cover.jpg",
        alreadyRead: false
    }
];

let section = document.querySelector('.listBooks');

for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i];

    let div = document.createElement("div");

    let p = document.createElement("p");
    p.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        p.style.color = "red";
    }

    let img = document.createElement("img");
    img.src = book.image;
    img.width = 100;

    div.appendChild(p);
    div.appendChild(img);
    section.appendChild(div);
}
