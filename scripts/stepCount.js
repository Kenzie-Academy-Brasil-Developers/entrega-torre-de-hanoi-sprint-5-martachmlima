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