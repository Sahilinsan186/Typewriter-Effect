function ms() {
    let a = 1 + 6 * Math.random();
    return a;
}


let arr ="Welcome to my GitHub! Here, I share projects, ideas, and code that I have been working on. Each repository reflects my passion for software development and my commitment to learning new technologies. I believe in writing clean, efficient, and maintainable code. Explore my projects, contribute, and let us collaborate to build something amazing together.";

h = document.querySelector(".hack");
let j = 0;
function Typing()
{   
    
    h.innerHTML += arr[j];
    ; j++;
    if (j == arr.length+1) {h.innerHTML='';j=0; }
    a = ms();
    setTimeout(Typing,a*20)
}
Typing();
