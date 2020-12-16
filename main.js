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

ButtonA.addEventListener("click", () => {
    console.log("test");
    AudioBoom.play();
});

ButtonS.addEventListener("click", () => {
    console.log("test");
    AudioClap.play();
});

ButtonD.addEventListener("click", () => {
    AudioHihat.play();
});

ButtonF.addEventListener("click", () => {
    AudioKick.play();
});

ButtonG.addEventListener("click", () => {
    AudioOpenhat.play();
});

ButtonH.addEventListener("click", () => {
    AudioRide.play();
});

ButtonJ.addEventListener("click", () => {
    AudioSnare.play();
});

ButtonK.addEventListener("click", () => {
    AudioTink.play();
});

ButtonL.addEventListener("click", () => {
    AudioTom.play();
});

