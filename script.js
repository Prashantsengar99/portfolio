// Typing Animation

const text = [
    "Java Developer",
    "Frontend Developer",
    "DSA Enthusiast",
    "Future Software Engineer"
];

let index = 0;
let charIndex = 0;

const typingText = document.getElementById("typing");

function type() {

    if(charIndex < text[index].length){

        typingText.textContent += text[index].charAt(charIndex);
        charIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }
}

function erase(){

    if(charIndex > 0){

        typingText.textContent =
        text[index].substring(0,charIndex-1);

        charIndex--;

        setTimeout(erase,50);

    }else{

        index++;

        if(index >= text.length){
            index = 0;
        }

        setTimeout(type,300);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    if(typingText){
        setTimeout(type,500);
    }

});