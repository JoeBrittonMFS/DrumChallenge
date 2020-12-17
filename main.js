// const Audio = document.getElementById("Audio");
const AudioBoom = document.getElementById("AudioBoom");
const AudioClap = document.getElementById("AudioClap");
const AudioHihat = document.getElementById("AudioHihat");
const AudioKick = document.getElementById("AudioKick");
const AudioOpenhat = document.getElementById("AudioOpenhat");
const AudioRide = document.getElementById("AudioRide");
const AudioSnare = document.getElementById("AudioSnare");
const AudioTink = document.getElementById("AudioTink");
const AudioTom = document.getElementById("AudioTom");


const ButtonA = document.getElementById("Button-A");
const ButtonS = document.getElementById("Button-S");
const ButtonD = document.getElementById("Button-D");
const ButtonF = document.getElementById("Button-F");
const ButtonG = document.getElementById("Button-G");
const ButtonH = document.getElementById("Button-H");
const ButtonJ = document.getElementById("Button-J");
const ButtonK = document.getElementById("Button-K");
const ButtonL = document.getElementById("Button-L");


document.addEventListener("keydown", (event) => {
    if (event.which == 65) {
        AudioBoom.play();
        changeColourFunction();
    }
});
function changeColourFunction() {
    while (event == true) {
        document.getElementById("Button-A").style.backgroundColor = "red";
    }
    
}


document.addEventListener("keydown", (event) => {
    if (event.which == 83) {
        AudioClap.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 68) {
        AudioHihat.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 70) {
        AudioKick.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 71) {
        AudioOpenhat.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 72) {
        AudioRide.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 74) {
        AudioSnare.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 75) {
        AudioTink.play();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.which == 76) {
        AudioTom.play();
    }
});

