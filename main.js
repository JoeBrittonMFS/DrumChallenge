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


ButtonA.addEventListener("keydown", (event) => {
    console.log("test")
    AudioBoom.play();

});

ButtonS.addEventListener("keydown", (event) => {
    AudioClap.play();
});

ButtonD.addEventListener("keydown", (event) => {
    AudioHihat.play();
});

ButtonF.addEventListener("keydown", (event) => {
    AudioKick.play();
});

ButtonG.addEventListener("keydown", (event) => {
    AudioOpenhat.play();
});

ButtonH.addEventListener("keydown", (event) => {
    AudioRide.play();
});

ButtonJ.addEventListener("keydown", (event) => {
    AudioSnare.play();
});

ButtonK.addEventListener("keydown", (event) => {
    AudioTink.play();
});

ButtonL.addEventListener("keydown", (event) => {
    AudioTom.play();
});

