// SELECTING DIFFICULTY
const difficultySelector = document.querySelector('#difficultySelector');

difficultySelector.addEventListener('change', changeDifficulty, pile1);

function changeDifficulty(pile) {
    diskQuantity = difficultySelector.value;
    element = null;
    cleanTowers();
    createDisks(diskQuantity, pile);
}

function cleanTowers() {
    pile1.innerHTML = '';
    pile2.innerHTML = '';
    pile3.innerHTML = '';
}