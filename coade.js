const icone1=document.getElementById("icone-us");
const icone2=document.getElementById("icone-us2");
const down=document.getElementById("down");
const movieLists=document.getElementById("movie-list");
const arrows=document.getElementById("arrow-left")
const hode=document.getElementById("relo")

setTimeout(hide,8999)
function hide(){
    hode.style.display="none"
}


icone1.addEventListener("click", (eo)=>{
    down.style.display="block";
    icone2.style.display="block";
    icone1.style.display="none";
});

icone2.addEventListener("click", (eo)=>{
    down.style.display="none";
    icone2.style.display="none";
    icone1.style.display="block";
});

function scrollr(){
    var left =document.querySelector(".move-father-film")
    left.scrollBy(350,0)
}
function scrolll(){
    var left =document.querySelector(".move-father-film")
    left.scrollBy(-350,0)
}


function scrollr2(){
    var left =document.querySelector(".father-move3")
    left.scrollBy(350,0)
}

function scrolll2(){
    var left =document.querySelector(".father-move3")
    left.scrollBy(-350,0)
}


function scrollr3(){
    var left =document.querySelector(".holly-father-move")
    left.scrollBy(350,0)
}

function scrolll3(){
    var left =document.querySelector(".holly-father-move")
    left.scrollBy(-350,0)
}

function scrollr4(){
    var left =document.querySelector(".Middle-father-move")
    left.scrollBy(350,0)
}

function scrolll4(){
    var left =document.querySelector(".Middle-father-move")
    left.scrollBy(-350,0)
}

function scrollr5(){
    var left =document.querySelector(".Horror-father-move")
    left.scrollBy(350,0)
}

function scrolll5(){
    var left =document.querySelector(".Horror-father-move")
    left.scrollBy(-350,0)
}

function scrollr6(){
    var left =document.querySelector(".Egype-father-move")
    left.scrollBy(350,0)
}

function scrolll6(){
    var left =document.querySelector(".Egype-father-move")
    left.scrollBy(-350,0)
}


