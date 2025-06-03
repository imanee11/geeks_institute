let img = document.getElementById('pokemon-img')
let nameP = document.getElementById('pokemon-name')
let id = document.getElementById("pokemon-id");
let height = document.getElementById("pokemon-height");
let weight = document.getElementById("pokemon-weight");
let type = document.getElementById("pokemon-type");
let message = document.getElementById("message");

let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");
let randomBtn = document.getElementById("random-btn");

let currentPokemonId = 1

const displayPokemon = (data) => {
    img.src = data.sprites.front_default || "";
    nameP.textContent = data.name.toUpperCase()
    id.textContent = `ID: ${data.id}`;
    height.textContent = `Height: ${data.height}`;
    weight.textContent = `Weight: ${data.weight}`;
    type.textContent = `Type: ${data.types.map((t) => t.type.name).join(", ")}`;
    message.textContent = "";
}

async function fetchPokemon(id) {
    try {
        message.textContent = 'Loading...'
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!res.ok) {
            throw new Error("not found")
        }
        const data = await res.json()
        currentPokemonId = data.id
        displayPokemon(data)
    } catch (error) {
        message.textContent = "oh no! That Pokémon isn’t available";
        img.src = "";
        nameP.textContent = "Name";
        id.textContent = "ID";
        height.textContent = "Height:";
        weight.textContent = "Weight:";
        type.textContent = "Type:";
    }
}

async function fetchRandomPokemon () {
    const randomId = Math.floor(Math.random() * 898) + 1
    await fetchPokemon (randomId)
}

randomBtn.addEventListener('click' , fetchRandomPokemon)

prevBtn.addEventListener('click' , async () => {
    if (currentPokemonId > 1) {
        await fetchPokemon (currentPokemonId - 1)
    }
})

nextBtn.addEventListener('click' , async () => {
    await fetchPokemon (currentPokemonId + 1)
})


fetchPokemon(currentPokemonId)