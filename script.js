//Verificando tamanhos dos discos

function validate(newDisc, oldDisc, tower){

    let childCount = tower.childElementCount
    
    if (childCount !== 0 && newDisc.clientWidth > oldDisc.clientWidth){
        return false
    }
    
    return true
}