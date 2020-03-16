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

window.addEventListener("keyup", checkKeyPressed);

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
    clapButton.classList.add('playing');
    clapAudio.currentTime = 0;
    clapAudio.play();
    setTimeout(function(){
        clapButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "s" || e.key == "S") {
    hihatButton.classList.add('playing');
    hihatAudio.currentTime = 0;
    hihatAudio.play();
    setTimeout(function(){
        hihatButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "d" || e.key == "D" ) {
    kickButton.classList.add('playing');
    kickAudio.currentTime = 0;
    kickAudio.play();
    setTimeout(function(){
        kickButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "f" || e.key == "F" ) {
    openhatButton.classList.add('playing');
    openhatAudio.currentTime = 0;
    openhatAudio.play();
    setTimeout(function(){
        openhatButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "g" || e.key == "G" ) {
    boomButton.classList.add('playing');
    boomAudio.currentTime = 0;
    boomAudio.play();
    setTimeout(function(){
        boomButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "h" || e.key == "H" ) {
    rideButton.classList.add('playing');
    rideAudio.currentTime = 0;
    rideAudio.play();
    setTimeout(function(){
        rideButton.classList.remove('playing');
    }, 200);

}
else if(e.key == "j" || e.key == "J" ) {
    snareButton.classList.add('playing');
    snareAudio.currentTime = 0;
    snareAudio.play();
    setTimeout(function(){
        snareButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "k" || e.key == "K" ) {
    tomButton.classList.add('playing');
    tomAudio.currentTime = 0;
    tomAudio.play();
    setTimeout(function(){
        tomButton.classList.remove('playing');
    }, 200);
}
else if(e.key == "l" || e.key == "L" ) {
    snapButton.classList.add('playing');
    snapAudio.currentTime = 0; //lets you spam same key without it not starting again
    snapAudio.play();
    setTimeout(function(){
        snapButton.classList.remove('playing');
    }, 200);
}



}







