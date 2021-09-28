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

//Creating disks;
function createDisks(diskQuantity, tower) {
    for (let i = diskQuantity; i > 0; i--) {
        const disk = document.createElement('li');
        disk.id = `disk${i}`;
        disk.classList.add('disk', `disk--${i}`);
        tower.appendChild(disk);
    }
}

let diskQuantity = 3;
createDisks(diskQuantity, pile1)