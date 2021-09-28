//Selecionando disco

pile1.addEventListener("click", select)

pile2.addEventListener("click", select)

pile3.addEventListener("click", select)


function select(ev){

    let tower = ev.currentTarget   

    let disc = tower.lastElementChild

    return disc
}