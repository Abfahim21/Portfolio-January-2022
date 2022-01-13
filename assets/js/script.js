const nameElement = document.getElementById('my-name');
const nam = 'Md. Abrar Fahim';
let index = 0;

textAnimation()

function textAnimation(){
    nameElement.innerText = nam.slice(0, index)
    index++
    if(index > nam.length){
        index = 1
    }
    setTimeout(textAnimation, 200)
}

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml12');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml12 .letter',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 800,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.ml12 .letter',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 800,
    delay: (el, i) => 100 + 30 * i
  });