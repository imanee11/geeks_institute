const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    },
    {
        id: 11,
        name: 'Nova Spark',
        username: 'nova_spark',
        email: 'nova@spark.io',
        image: 'https://robohash.org/nova'  
    },
    {
        id: 12,
        name: 'Zeta Tron',
        username: 'zeta_tron',
        email: 'zeta@tron.io',
        image: 'https://robohash.org/zeta'
    }

];


let search = document.getElementById('search')
let container = document.getElementById('cardContainer')

const displayCards = (data) => {
    container.innerHTML = '';

    data.forEach(robot => {
        const card = document.createElement('div')
        card.className = 'w-[19vw] z-10 bg-[#fff]/80 text-black rounded-xl shadow-lg p-4 text-center hover:scale-105 transition-transform transition duration-300';

        card.innerHTML = `
      <img src="${robot.image}" alt="${robot.name}" class="mx-auto mb-4 rounded-full w-32 h-32" />
      <h2 class="text-lg font-bold">${robot.name}</h2>
      <p class="text-sm text-gray-600 ">${robot.email}</p>
    `;

        container.appendChild(card)
    });
}

displayCards(robots)

// filter
search.addEventListener('input' , () => {
    let searchTerm = search.value.toLowerCase()
    let filtred = robots.filter(robot => robot.name.toLowerCase().includes(searchTerm))
    displayCards(filtred)
})