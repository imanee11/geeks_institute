//? Create an array which value is the planets of the solar system.
const planets = [
    { name: "Mercury", color: "gray", moons: 0 },
    { name: "Venus", color: "orange", moons: 0 },
    { name: "Earth", color: "blue", moons: 1 },
    { name: "Mars", color: "red", moons: 2 },
    { name: "Jupiter", color: "brown", moons: 3 },
    { name: "Saturn", color: "gold", moons: 3 },
    { name: "Uranus", color: "lightblue", moons: 2 },
    { name: "Neptune", color: "darkblue", moons: 1 }
];

//? For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
let section = document.querySelector(".listPlanets");
for (let i = 0; i < planets.length; i++) {
    let planetDiv = document.createElement("div");
    planetDiv.classList.add("planet")
    planetDiv.style.backgroundColor = planets[i].color

    for (let j = 0; j < planets[i].moons; j++) {
        let moon = document.createElement("div");
        moon.classList.add("moon");
        moon.style.left = (20 + j * 25) + "px";
        moon.style.top = "40px";
        planetDiv.appendChild(moon);
    }

    section.appendChild(planetDiv)
}

