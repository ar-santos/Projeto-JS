var btnGreen = document.getElementById("btn-green");
var btnYellow = document.getElementById("btn-yellow");
var btnOrange = document.getElementById("btn-orange");

var card = document.getElementById("card");

var spanGreen = document.getElementById("span-green");
var spanYellow = document.getElementById("span-yellow");
var spanOrange = document.getElementById("span-orange");

btnGreen.addEventListener("click", function(){
    card.setAttribute("class", "green")
    spanGreen.setAttribute("class", "span-green")
    spanYellow.removeAttribute("class", "span-yellow")
    spanOrange.removeAttribute("class", "span-orange")
});

btnYellow.addEventListener("click", function(){
    card.setAttribute("class", "yellow")
    spanYellow.setAttribute("class", "span-yellow")
    spanGreen.removeAttribute("class", "span-green")
    spanOrange.removeAttribute("class", "span-orange")
});

btnOrange.addEventListener("click", function(){
    card.setAttribute("class", "orange")
    spanOrange.setAttribute("class", "span-orange")
    spanYellow.removeAttribute("class", "span-yellow")
    spanGreen.removeAttribute("class", "span-green")
});