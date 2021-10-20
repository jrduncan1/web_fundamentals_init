function cityAlert(element){
    alert("Loading weather report...")
}

function acceptCookies(element){
    element.remove();
}

function dropdown(element){
    if(element.value === "fahrenheit"){
        var elementListHigh = document.querySelectorAll(".high")
        var elementListLow = document.querySelectorAll(".low")
        for(var i = 0; i < elementListHigh.length; i++){
            console.log(parseInt(elementListHigh[i].innerText))
        }
        for(var i = 0; i < elementListLow.length; i++){
            console.log(parseInt(elementListLow[i].innerText))
        }
    }
    else{
        var elementListHigh = document.querySelectorAll(".high")
        var elementListLow = document.querySelectorAll(".low")
        for(var i = 0; i < elementListHigh.length; i++){
            elementListHigh[i].innerText = "30"
        }
        for(var i = 0; i < elementListLow.length; i++){
            elementListLow[i].innerText = "12"
        }
    }
}