var btns = document.querySelectorAll(".btn");
var card = document.getElementById("card");

const pegarBotao = listaDeBotoes => {
    [...listaDeBotoes].forEach( btn => {
        btn.addEventListener('click', event => {
            let cor = event.target.id.split('-')

            if(cor[1] == btn.innerText.toLowerCase()){

                card.setAttribute("class", btn.innerText.toLowerCase())
                btn.children[0].setAttribute("class", `div-${btn.innerText.toLowerCase()}`)  

            }else{
                btn.removeAttribute("style") 
                console.log(btn.children)             
            }          
        })  
    })
}

pegarBotao(btns)