document.getElementById("btn-green").addEventListener("click", function(){
    document.getElementById("card").setAttribute("class", "green")
    document.getElementById("span-orange").removeAttribute("class", "span-orange")
    document.getElementById("span-green").setAttribute("class", "span-green")
})

document.getElementById("btn-yellow").addEventListener("click", function(){
    document.getElementById("card").setAttribute("class", "yellow")
    document.getElementById("span-green").removeAttribute("class", "span-green")
    document.getElementById("span-yellow").setAttribute("class", "span-yellow")
})

document.getElementById("btn-orange").addEventListener("click", function(){
    document.getElementById("card").setAttribute("class", "orange")
    document.getElementById("span-yellow").removeAttribute("class", "span-yellow")
    document.getElementById("span-orange").setAttribute("class", "span-orange")
})