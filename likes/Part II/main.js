var countTop = 0;
var countMiddle = 0;
var countBottom = 0;
var likesTop = document.querySelector("#likesTop");
var likesMiddle = document.querySelector("#likesMiddle");
var likesBottom = document.querySelector("#likesBottom");

function increaseLikes(element){
    if(element.id === "button-top"){
        countTop++;
        likesTop.innerText = (countTop + " like(s)")
    }else if(element.id === "button-middle"){
        countMiddle++;
        likesMiddle.innerText = (countMiddle + " like(s)")
    }else if(element.id === "button-bottom"){
        countBottom++;
        likesBottom.innerText = (countBottom + " like(s)")
    }
}

