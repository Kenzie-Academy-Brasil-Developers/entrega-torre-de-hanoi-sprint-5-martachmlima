//Selecionando disco

pile1.addEventListener("click", select)

pile2.addEventListener("click", select)

pile3.addEventListener("click", select)


function select(ev){

    let tower = ev.currentTarget   

    let disc = tower.lastElementChild

    return disc
}

//Verificando tamanhos dos discos

function validate(newDisc, oldDisc, tower){

    let childCount = tower.childElementCount
    
    if (childCount !== 0 && newDisc.clientWidth > oldDisc.clientWidth){
        return false
    }
    
    return true
}