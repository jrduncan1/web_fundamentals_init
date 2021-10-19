var likesCount = 0;
var p = document.querySelector('p')

function likesClick(element){
    likesCount++;
    p.innerText=(likesCount + " like(s)");
}