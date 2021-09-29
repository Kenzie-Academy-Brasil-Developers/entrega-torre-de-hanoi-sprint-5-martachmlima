//Selecionando main

const gameSpace = document.getElementById("mainSpace")

//Criado torres

const pile1 = document.createElement("ul")
pile1.setAttribute("id", "pile1")
pile1.classList.add('tower');

const pile2 = document.createElement("ul")
pile2.setAttribute("id", "pile2")
pile2.classList.add('tower');

const pile3 = document.createElement("ul")
pile3.setAttribute("id", "pile3")
pile3.classList.add('tower');



//Adicionando torres à main

gameSpace.appendChild(pile1)
gameSpace.appendChild(pile2)
gameSpace.appendChild(pile3)

//CREATING DISKS
function createDisks(diskQuantity, tower) {
    for (let i = diskQuantity; i > 0; i--) {
        const disk = document.createElement('li');
        disk.id = `disk${i}`;
        disk.classList.add('disk', `disk--${i}`);
        tower.appendChild(disk);
    }
}

let diskQuantity = 3;
createDisks(diskQuantity, pile1);

//Selecionando disco

pile1.addEventListener("click", clicked)

pile2.addEventListener("click", clicked)

pile3.addEventListener("click", clicked)


function select(ev) {

    let tower = ev.currentTarget

    let disc = tower.lastElementChild

    return disc
}

// MOVE DISKS
function moveDisk(disk, event) {

    if (disk !== null) {
        let tower = event.target.closest('ul').id;
        let towerElement = document.querySelector(`#${tower}`);
        towerElement.appendChild(disk);
    }
}

let element = null;
let selectDisk = true;

function clicked(evt) {
    if (selectDisk || element === null) {
        element = select(evt);
        selectDisk = false;
    } else {
        let oldDisc = evt.target.closest('ul').lastElementChild;
        let tower = evt.target.closest('ul');
        if (validate(element, oldDisc, tower)) {
            moveDisk(element, evt);
            selectDisk = true;
        }
    }
}

//Verificando tamanhos dos discos

function validate(newDisc, oldDisc, tower) {

    if (oldDisc === null) {
        return true;
    }

    let childCount = tower.childElementCount

    if (childCount !== 0 && newDisc.clientWidth > oldDisc.clientWidth) {
        return false
    }

    return true
}