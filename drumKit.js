const clapButton = document.getElementById("button1");
const hihatButton = document.getElementById("button2");
const kickButton = document.getElementById("button3");
const openhatButton = document.getElementById("button4");
const boomButton = document.getElementById("button5");
const rideButton = document.getElementById("button6");
const snareButton = document.getElementById("button7");
const tomButton = document.getElementById("button8");
const tinkButton = document.getElementById("button9");
let clapAudio = new Audio();

window.addEventListener("keypress", checkKeyPressed);

function checkKeyPressed(e) {
    clapAudio.src = "Sounds/clap.wav";
if(e.key == "a" || e.key == "A") {
    clapAudio.play();
}
    
}





