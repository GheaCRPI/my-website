let cat = document.getElementById("cat");
let capy = document.getElementById("capy");
let elephant = document.getElementById("elephant");

window.addEventListener("scroll", ()=>{
    let value = window.scrollY;

    cat.style.top = value*-0.5+'px';
    cat.style.left = value*0.5+'px';

    capy.style.left = value*2+'px';
    capy.style.top = value*+0.5+'px';

    elephant.style.left = value*-1+'px';
    elephant.style.top = value*0.5+'px';
    
    
    
});