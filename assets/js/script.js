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