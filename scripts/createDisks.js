function createDisks(diskQuantity, tower) {
    for (let i = diskQuantity; i > 0; i++) {
        const disk = document.createElement('li');
        disk.id = `disk${i}`;
        disk.classList.add('disk', `disk--${i}`);
        tower.appendChild(disk);
    }
}