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

// Função Reset

const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", reset)
const page = document.getElementById("buttons")

function reset() {
    for (let i = diskQuantity; i > 0; i--) {
        let disk = document.getElementById(`disk${i}`)
        pile1.appendChild(disk)
    }

    stepCountReset();
}

// SELECTING DIFFICULTY
const difficultySelector = document.querySelector('#difficultySelector');

difficultySelector.addEventListener('change', changeDifficulty);

function changeDifficulty() {
    diskQuantity = difficultySelector.value;
    element = null;
    const stepCountValue = document.querySelector('#stepCountValue');
    stepCountValue.innerText = 0;
    cleanTowers();
    createDisks(diskQuantity, pile1);
}

function cleanTowers() {
    pile1.innerHTML = '';
    pile2.innerHTML = '';
    pile3.innerHTML = '';
}

let steps = 0;

function clicked(evt) {
    if (selectDisk || element === null) {
        element = select(evt);
        selectDisk = false;
    } else {
        let oldDisc = evt.target.closest('ul').lastElementChild;
        let tower = evt.target.closest('ul');
        if (validate(element, oldDisc, tower)) {
            moveDisk(element, evt);
            stepCount();
            selectDisk = true;
        }
    }
}

// STEP COUNT

const stepCountValue = document.querySelector('#stepCountValue');

function stepCount() {
    steps++;
    stepCountValue.innerText = steps;
}

function stepCountReset() {
    steps = 0;
    stepCountValue.innerText = steps;
}

function createVictoryMessage(whichDifficulty, stepsMin, playerSteps) {
    const messageWin = document.createElement('div');
    const title1 = document.createElement('h3');
    const title2 = document.createElement('h3');
    const textWin = document.createElement('p');
    const winnerButton = document.createElement('button');

    messageWin.id = 'messageWinner';
    messageWin.classList.add('message-winner')
    title1.classList.add('winner__title');
    title2.classList.add('winner__title');
    winnerButton.classList.add('winner__button');

    title1.innerText = 'Parabéns!!';
    title2.innerText = 'Você ganhou!';
    let winnerDifficulty = `<span class="winner__difficulty">${whichDifficulty}</span>`;
    let winnerMinSteps = `<span class="winner__steps-min">${stepsMin}</span>`;
    let winnerPlayerSteps = `<span class="winner__steps-player" id="winnerStepsPlayer">${playerSteps}</span>`;
    textWin.innerHTML = `Para a dificuldade ${winnerDifficulty}, você precisa de no mínimo ${winnerMinSteps} movimentos para vencer, você conseguiu em ${winnerPlayerSteps} movimentos, parabéns!`;
    winnerButton.innerText = 'Jogar novamente'

    winnerButton.addEventListener('click', playAgain);

    messageWin.appendChild(title1);
    messageWin.appendChild(title2);
    messageWin.appendChild(textWin);
    messageWin.appendChild(winnerButton);
    return messageWin;
}

function getPlayerSteps() {
    const playerSteps = document.querySelector('#stepCountValue');
    return playerSteps.innerText;
}

function getDifficultyAndMinSteps() {
    const difficulty = document.querySelector('#difficultySelector');
    let difficultyText;
    let diskQty = difficulty.value;
    if (diskQty == 3) {
        difficultyText = 'fácil';
    } else if (diskQty == 4) {
        difficultyText = 'médio';
    } else {
        difficultyText = 'difícil';
    }
    let minSteps = (2 ** diskQty) - 1;
    return [difficultyText, minSteps];
}

function blurMainContent() {
    const mainContainer = document.querySelector('#mainContainer');
    mainContainer.classList.add('main-container--blurred');
}

function enableModal() {
    const mainModal = document.querySelector('#mainModal');
    mainModal.classList.add('main-modal--enabled');
}

function displayWinnerMessage() {

    let whichDifficulty = getDifficultyAndMinSteps()[0];
    let minSteps = getDifficultyAndMinSteps()[1];
    let playerSteps = getPlayerSteps();

    let message = createVictoryMessage(whichDifficulty, minSteps, playerSteps);
    document.body.appendChild(message);
    blurMainContent();
    enableModal();
}

function hideWinnerMessage() {
    const mainModal = document.querySelector('#mainModal');
    const mainContainer = document.querySelector('#mainContainer');
    const messageWinner = document.querySelector('#messageWinner');
    mainContainer.classList.remove('main-container--blurred');
    mainModal.classList.remove('main-modal--enabled');
    messageWinner.parentElement.removeChild(messageWinner);
}

function playAgain() {
    hideWinnerMessage()
    reset();
}

//Função mensagem de vitória

gameSpace.addEventListener("click", victory)
const message = document.createElement("div")

function victory() {
    let pile2Count = pile2.childElementCount
    let pile3Count = pile3.childElementCount
    if (pile2Count == diskQuantity || pile3Count == diskQuantity) {
        displayWinnerMessage()
    }
}