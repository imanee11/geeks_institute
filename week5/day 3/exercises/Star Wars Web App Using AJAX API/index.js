let characterInfo = document.getElementById('character-info')
let loadBtn = document.getElementById('load-btn')

const TOTAL_CHARACTERS = 83

const showLoading = () => {
    characterInfo.innerHTML = `
        <div class="text-center justify-center flex items-center space-x-2 text-yellow-400">
            <i class="fas fa-spinner fa-spin"></i>
            <span>Loading character...</span>
        </div>
    `
}

const showError = () => {
    characterInfo.innerHTML = `
        <div class="text-center justify-center text-red-500 flex items-center space-x-2">
            <i class="fas fa-exclamation-triangle"></i>
            <span>Error loading character. Please try again.</span>
        </div>
    `
}

const showCharacter = (character) => {
    characterInfo.innerHTML = `
        <h2 class="text-3xl font-bold mb-4">${character.name}</h2>
        <p><strong>Height:</strong> ${character.height}</p>
        <p><strong>Gender:</strong> ${character.gender}</p>
        <p><strong>Birth Year:</strong> ${character.birth_year}</p>
        <p><strong>Home world:</strong> ${character.homeworld}</p>
    `
}

async function getHomeworld(url) {
    try {
        const res = await fetch(url)
        const data = await res.json()
        return data.result.properties.name
    } catch {
        return "Unknown"
    }
}


async function getCharacter(id) {
    const res = await fetch(`https://www.swapi.tech/api/people/${id}`)
    if (!res.ok) {
        throw new Error("character not found")
    }
    const data = await res.json()
    const props = data.result.properties
    const homeworld = await getHomeworld(props.homeworld)

    return {
        name: props.name,
        height: props.height,
        gender: props.gender,
        birth_year: props.birth_year,
        homeworld: homeworld,
    }
}

async function loadRandomCharacter () {
    showLoading()

    const randomId = Math.floor(Math.random() * TOTAL_CHARACTERS) + 1;

    try{
        const character = await getCharacter (randomId)
        showCharacter(character)
    } catch {
        showError()
    }

}

loadBtn.addEventListener('click' , loadRandomCharacter)
