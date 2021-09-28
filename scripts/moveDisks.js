function moveDisk(disk, event) {
    if (disk !== null) {
        let tower = event.target.closest('ul').id;
        let towerElement = document.querySelector(`#${tower}`);
        towerElement.appendChild(disk);
    }
}