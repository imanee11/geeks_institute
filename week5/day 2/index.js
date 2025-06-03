// 

const getChuckNorrisJoke = (category) => {
    const url = `https://api.chucknorris.io/jokes/random?category=${category}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json()
        })

        .then(data => {
            console.log(`Joke from category "${category}":`, data.value);
            
        })
        .catch(error => {
            console.error("Failed to fetch joke:", error.message);
        })
}

getChuckNorrisJoke('animal')