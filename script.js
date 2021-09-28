//Selecionando main

const gameSpace = document.getElementById("gameSpace")

//Criado torres

const pile1 = document.createElement("ul")
pile1.setAttribute("id", "pile1")

const pile2 = document.createElement("ul")
pile2.setAttribute("id", "pile2")

const pile3 = document.createElement("ul")
pile3.setAttribute("id", "pile3")


//Adicionando torres à main

gameSpace.appendChild(pile1)
gameSpace.appendChild(pile2)
gameSpace.appendChild(pile3)