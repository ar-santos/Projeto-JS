var btnGreen = document.getElementById("btn-green");
var btnYellow = document.getElementById("btn-yellow");
var btnOrange = document.getElementById("btn-orange");

var card = document.getElementById("card");

var divGreen = document.getElementById("div-green");
var divYellow = document.getElementById("div-yellow");
var divOrange = document.getElementById("div-orange");

btnGreen.addEventListener("click", function(){
    card.setAttribute("class", "green")
    divGreen.setAttribute("class", "div-green")
    divYellow.removeAttribute("class", "div-yellow")
    divOrange.removeAttribute("class", "div-orange")
});

btnYellow.addEventListener("click", function(){
    card.setAttribute("class", "yellow")
    divYellow.setAttribute("class", "div-yellow")
    divGreen.removeAttribute("class", "div-green")
    divOrange.removeAttribute("class", "div-orange")
});

btnOrange.addEventListener("click", function(){
    card.setAttribute("class", "orange")
    divOrange.setAttribute("class", "div-orange")
    divYellow.removeAttribute("class", "div-yellow")
    divGreen.removeAttribute("class", "div-green")
});