const clapButton = document.getElementById("button1");
const hihatButton = document.getElementById("button2");
const kickButton = document.getElementById("button3");
const openhatButton = document.getElementById("button4");
const boomButton = document.getElementById("button5");
const rideButton = document.getElementById("button6");
const snareButton = document.getElementById("button7");
const tomButton = document.getElementById("button8");
const snapButton = document.getElementById("button9");
let clapAudio = new Audio();
let hihatAudio = new Audio();
let kickAudio = new Audio();
let openhatAudio = new Audio();
let boomAudio = new Audio();
let rideAudio = new Audio();
let snareAudio = new Audio();
let tomAudio = new Audio();
let snapAudio = new Audio();

window.addEventListener("keypress", checkKeyPressed);

function checkKeyPressed(e) {
    clapAudio.src = "Sounds/clap.wav";
    hihatAudio.src = "Sounds/hihat.wav";
    kickAudio.src = "Sounds/sub-kick.wav";
    openhatAudio.src = "Sounds/open-hat.wav";
    boomAudio.src = "Sounds/boom.wav";
    rideAudio.src = "Sounds/ride.wav";
    snareAudio.src = "Sounds/rim-snare.wav";
    tomAudio.src = "Sounds/tom.wav";
    snapAudio.src = "Sounds/snap.wav";
if(e.key == "a" || e.key == "A") {
    clapAudio.play();
}
else if(e.key == "s" || e.key == "S") {
    hihatAudio.play();
}
else if(e.key == "d" || e.key == "D" ) {
    kickAudio.play();
}
else if(e.key == "f" || e.key == "F" ) {
    openhatAudio.play();
}
else if(e.key == "g" || e.key == "G" ) {
    boomAudio.play();
}
else if(e.key == "h" || e.key == "H" ) {
    rideAudio.play();
}
else if(e.key == "j" || e.key == "J" ) {
    snareAudio.play();
}
else if(e.key == "k" || e.key == "K" ) {
    tomAudio.play();
}
else if(e.key == "l" || e.key == "L" ) {
    snapAudio.play();

}
}






