let win = document.querySelector(".redirectwin")
let clickCount = 0;
const mtext = document.querySelector('.btnplay')
function playAudio() {
    document.querySelector('.music1').play()
    mtext.innerHTML = "Playing"
}
function checkGameOver() {
    const loose = document.querySelector(".redirectloose")
    clickCount++;
    if (clickCount >= 6) {
        loose.style.display = "flex"
    }
}
function open1(){
    checkGameOver()
    const d1 = document.querySelector(".bx1")
    d1.classList.toggle("pop")
    if(result1 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open2(){
    checkGameOver()
    const d1 = document.querySelector(".bx2")
    d1.classList.toggle("pop")
    if(result2 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open3(){
    checkGameOver()
    const d1 = document.querySelector(".bx3")
    d1.classList.toggle("pop")
    if(result3 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open4(){
    checkGameOver()
    const d1 = document.querySelector(".bx4")
    d1.classList.toggle("pop")
    if(result4 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open5(){
    checkGameOver()
    const d1 = document.querySelector(".bx5")
    d1.classList.toggle("pop")
    if(result5 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open6(){
    checkGameOver()
    const d1 = document.querySelector(".bx6")
    d1.classList.toggle("pop")
    if(result6 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open7(){
    checkGameOver()
    const d1 = document.querySelector(".bx7")
    d1.classList.toggle("pop")
    if(result7 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open8(){
    checkGameOver()
    const d1 = document.querySelector(".bx8")
    d1.classList.toggle("pop")
    if(result8 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open9(){
    checkGameOver()
    const d1 = document.querySelector(".bx9")
    d1.classList.toggle("pop")
    if(result9 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open10(){
    checkGameOver()
    const d1 = document.querySelector(".bx10")
    d1.classList.toggle("pop")
    if(result10 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open11(){
    checkGameOver()
    const d1 = document.querySelector(".bx11")
    d1.classList.toggle("pop")
    if(result11 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
function open12(){
    checkGameOver()
    const d1 = document.querySelector(".bx12")
    d1.classList.toggle("pop")
    if(result12 == determiner){
        win.style.display = "flex"
        confetti({
            particleCount: 200,
            spread: 70,
            origin: { y: 0.6 }
        })
    }
}
const images = [
    '/img/diamond1-removebg-preview.png',
    '/img/diamond2-removebg-preview.png',
    '/img/diamond3-removebg-preview.png',
    './img/diamond5-removebg-preview.png',
    './img/diamond6-removebg-preview.png',
    './img/diamond7-removebg-preview.png',
    './img/diamond8-removebg-preview.png',
    './img/diamond10-removebg-preview.png',
    './img/diamond12-removebg-preview.png',
    './img/diamond13-removebg-preview.png',
];
let match;
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    match = images[randomIndex]
    return match;
}
let determiner;
window.onload = function() {
    const imgElement = document.querySelector(".img");
    determiner = imgElement.src = getRandomImage();
};
let result1;
function bx1(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx1");
    result1 = imgElement1.src = images[randomIndex];
    return result1;
}
bx1()
let result2;
function bx2(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx2");
    result2 = imgElement1.src = images[randomIndex];
    return result2;
}
bx2()
let result3;
function bx3(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx3");
    result3 = imgElement1.src = images[randomIndex];
    return result3;
}
bx3()
let result4;
function bx4(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx4");
    result4 = imgElement1.src = images[randomIndex];
    return result4;
}
bx4()
let result5;
function bx5(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx5");
    result5 = imgElement1.src = images[randomIndex];
    return result5;
}
bx5()
let result6;
function bx6(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx6");
    result6 = imgElement1.src = images[randomIndex];
    return result6;
}
bx6()
let result7;
function bx7(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx7");
    result7 = imgElement1.src = images[randomIndex];
    return result7;
}
bx7()
let result8;
function bx8(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx8");
    result8 = imgElement1.src = images[randomIndex];
    return result8;
}
bx8()
let result9;
function bx9(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx9");
    result9 = imgElement1.src = images[randomIndex];
    return result9;
}
bx9()
let result10;
function bx10(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx11");
    result10 = imgElement1.src = images[randomIndex];
    return result10;
}
bx10()
let result11;
function bx11(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx11");
    result11 = imgElement1.src = images[randomIndex];
    return result11;
}
bx11()
let result12;
function bx12(){
    const randomIndex = Math.floor(Math.random() * images.length);
    const imgElement1 = document.querySelector(".bx12");
    result12 = imgElement1.src = images[randomIndex];
    return result12;
}
bx12()
function cont() {
    const setlevel = document.querySelector(".levelvalue");
    let winlevel = parseInt(localStorage.getItem('levelup')) || 1;
    winlevel += 1;
    localStorage.setItem('levelup', winlevel);
    setlevel.textContent = winlevel;
    window.location.href = "game.html";
}
function rest() {
    const setlevel = document.querySelector(".levelvalue");
    let winlevel = parseInt(localStorage.getItem('levelup')) || 1;
    winlevel ==
    localStorage.setItem('levelup', winlevel);
    setlevel.textContent = winlevel;
    window.location.href = "game.html";
}
    const setlevel = document.querySelector(".levelvalue");
    let winlevel = parseInt(localStorage.getItem('levelup')) || 1;
    setlevel.textContent = winlevel;

function restart(){
    alert("Are you sure you want to restart game Data")
    localStorage.clear();
    window.location.href = "game.html"
}
