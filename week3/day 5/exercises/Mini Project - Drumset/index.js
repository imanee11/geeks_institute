// paly sound
function playSound(key) {
    let sound = new Audio(`sounds/${key}.wav`)
    sound.play()
}

//get btns
let btnA = document.querySelector('button[data-sound="boom"]');
let btnS = document.querySelector('button[data-sound="clap"]');
let btnD = document.querySelector('button[data-sound="hihat"]');
let btnF = document.querySelector('button[data-sound="kick"]');
let btnG = document.querySelector('button[data-sound="openhat"]');
let btnH = document.querySelector('button[data-sound="ride"]');
let btnJ = document.querySelector('button[data-sound="snare"]');
let btnK = document.querySelector('button[data-sound="tink"]');
let btnL = document.querySelector('button[data-sound="tom"]');

// add event for each one
btnA.addEventListener("click", () => playSound("boom"));
btnS.addEventListener("click", () => playSound("clap"));
btnD.addEventListener("click", () => playSound("hihat"));
btnF.addEventListener("click", () => playSound("kick"));
btnG.addEventListener("click", () => playSound("openhat"));
btnH.addEventListener("click", () => playSound("ride"));
btnJ.addEventListener("click", () => playSound("snare"));
btnK.addEventListener("click", () => playSound("tink"));
btnL.addEventListener("click", () => playSound("tom"));

// keyboard
document.addEventListener("keydown", event => {
    let key = event.key.toLowerCase();
    if (key === "a") playSound("boom");
    if (key === "s") playSound("clap");
    if (key === "d") playSound("hihat");
    if (key === "f") playSound("kick");
    if (key === "g") playSound("openhat");
    if (key === "h") playSound("ride");
    if (key === "j") playSound("snare");
    if (key === "k") playSound("tink");
    if (key === "l") playSound("tom");
})