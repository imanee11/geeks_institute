const quotes = [
    {
        id: 0,
        author: "Albert Einstein",
        quote: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        likes: 0
    },
    {
        id: 1,
        author: "Steve Jobs",
        quote: "Stay hungry, stay foolish.",
        likes: 0
    },
    {
        id: 2,
        author: "Oscar Wilde",
        quote: "Be yourself; everyone else is already taken.",
        likes: 0
    },
    {
        id: 3,
        author: "Nelson Mandela",
        quote: "It always seems impossible until it's done.",
        likes: 0
    },
    {
        id: 4,
        author: "Confucius",
        quote: "It does not matter how slowly you go as long as you do not stop.",
        likes: 0
    }
];

let quoteDisplay = document.getElementById('quoteDisplay');
let generateBtn = document.getElementById('generateBtn')
let quoteForm = document.getElementById("quoteForm");
let newQuoteInput = document.getElementById("newQuote");
let newAuthorInput = document.getElementById("newAuthor");

let likeBtn = document.getElementById('likeBtn')
let likeCount = document.getElementById('likeCount')
let withSpacesBtn = document.getElementById('countWithSpaces');
let withoutSpacesBtn = document.getElementById('countWithoutSpaces');
let wordCountBtn = document.getElementById('countWords');

// remember last shown quote
let lastQuote = -1;

let currentIndex = null;

generateBtn.addEventListener('click', () => {
    let index = Math.floor(Math.random() * quotes.length);

    // keep trying until its not like the last time
    while (index === lastQuote) {
        index = Math.floor(Math.random() * quotes.length)
    }

    quoteDisplay.innerHTML = `"${quotes[index].quote}"<br><span class="text-sm text-gray-500">– ${quotes[index].author}</span>`;

    lastQuote = index
    currentIndex = index

    likeCount.textContent = quotes[index].likes

})

// add new one
quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let newQuoteText = newQuoteInput.value.trim();
    let newAuthorText = newAuthorInput.value.trim();

    if (newQuoteText && newAuthorText) {
        let newId = quotes.length;

        quotes.push({
            id: newId,
            quote: newQuoteText,
            author: newAuthorText,
            likes: 0
        });

        newQuoteInput.value = '';
        newAuthorInput.value= '';

        alert("New quote added!");
    }

})

//like btn
likeBtn.addEventListener('click' , () => {
    if (currentIndex !== null) {
        quotes[currentIndex].likes += 1;
        likeCount.textContent = quotes[currentIndex].likes
    }
});

// count with space
withSpacesBtn.addEventListener('click' , () => {
    if (currentIndex !== null) {
        let count = quotes[currentIndex].quote.length
        alert(`Characters (with spaces): ${count}`);
    }
});

// count without space
withoutSpacesBtn.addEventListener('click', () => {
    if (currentIndex !== null) {
        let count = quotes[currentIndex].quote.replace(/\s/g, '').length;
        alert(`Characters (without spaces): ${count}`);
    }
});

// count word
wordCountBtn.addEventListener('click' , () => {
    if (currentIndex !== null) {
        const count = quotes[currentIndex].quote.trim().split(/\s+/).length;
        alert(`Word count: ${count}`);
    }
})


//search
let filterForm = document.getElementById('filterForm');
let filterAuthorInput = document.getElementById('filterAuthor');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

let filteredQuotes = [];
let filteredIndex = 0;

filterForm.addEventListener('submit' , (e) => {
    e.preventDefault();
    let authorName = filterAuthorInput.value.trim().toLowerCase();

    if (!authorName) return;

    filteredQuotes = quotes.filter(q => q.author.toLowerCase().includes(authorName))
    filteredIndex = 0

    if (filteredQuotes.length > 0) {
        showFilteredQuote();
    }else{
       quoteDisplay.innerHTML = `<span class="text-red-500">No quotes found for "${filterAuthorInput.value}"</span>`; 
    }
})

const showFilteredQuote = () => {
    let quote = filteredQuotes[filteredIndex]
    quoteDisplay.innerHTML = `"${quote.quote}"<br><span class="text-sm text-gray-500">– ${quote.author}</span>`;
    likeCount.textContent = quote.likes
    currentIndex = quote.id;
}

// prev btn
prevBtn.addEventListener('click', () => {
    if (filteredQuotes.length > 0) {
        filteredIndex = (filteredIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
        showFilteredQuote();
    }
});

// next 
nextBtn.addEventListener('click', () => {
    if (filteredQuotes.length > 0) {
        filteredIndex = (filteredIndex + 1) % filteredQuotes.length;
        showFilteredQuote();
    }
});


