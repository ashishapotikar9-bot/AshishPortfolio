let text = "Guitarist  |  Photographer  |  Traveler";
let index = 0;

function type(){
document.getElementById("typing").innerHTML = text.slice(0,index);
index++;

if(index > text.length){
index = 0;
}

setTimeout(type,150);
}

type();