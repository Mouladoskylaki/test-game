console.log('RPG game');

// Music Theme
const bgMusic = new Audio('castle2.mp3');
bgMusic.loop = true;
bgMusic.volume = 0.5;
// bgMusic.play();
setTimeout(() => {
    bgMusic.play();
}, 1000)

let main = document.querySelector('.main-container');
let character = document.querySelector('.character');

let yPos = 256;
let xPos = 256;

document.addEventListener('keydown', (event) => {
    if (yPos < 25) {
        yPos = 40;
    } else if (yPos > 499) {
        yPos = 485;
    } else if (xPos > 485) {
        xPos = 475;
    } else if (xPos < 30) {
        xPos = 40;
    }

    if (event.key === 'ArrowLeft') {
        yPos -= 10;
        character.style.left = `${yPos}px`;
    }
    if (event.key === 'ArrowRight') {
        yPos += 10;
        character.style.left = `${yPos}px`;
    }
    if (event.key === 'ArrowUp') {
        xPos += 10;
        character.style.bottom = `${xPos}px`;
    }
    if (event.key === 'ArrowDown') {
        xPos -= 10;
        character.style.bottom = `${xPos}px`;
    }
    
});
///////////////////////////////////////////
let batyPos = 200;
let batxPos = 350;
let batyPos2 = 250;
let batxPos2 = 400;
let bat = document.querySelector('.bat');
let bat2 = document.querySelector('.bat2');
main.appendChild(bat);

const batFly = () => {
    setInterval(() => {
        const moveDirection = Math.random() < 0.5 ? -1 : 1;
        batyPos += moveDirection * Math.random() * 15;
        bat.style.left = `${batyPos}px`;
        if (batyPos > 500) {
            batyPos = 480;
        }
        if (batyPos < 55) {
            batyPos = 65;
        }
    }, 250);
    setInterval(() => {
        const moveDirection = Math.random() < 0.5 ? -1 : 1;
        batxPos += moveDirection * Math.random() * 15;
        bat.style.bottom = `${batxPos}px`;
        if (batxPos > 480) {
            batxPos = 460;
        }
        if (batxPos < 50) {
            batxPos = 70;
        }
    }, 250);
};

batFly();

const batFly2 = () => {
    console.log('bat flying');
    setInterval(() => {
        const moveDirection = Math.random() < 0.5 ? -1 : 1;
        batyPos2 += moveDirection * Math.random() * 10;
        bat2.style.left = `${batyPos2}px`;
        if (batyPos2 > 500) {
            batyPos2 = 480;
        }
        if (batyPos2 < 55) {
            batyPos2 = 65;
        }
    }, 250);
    setInterval(() => {
        const moveDirection = Math.random() < 0.5 ? -1 : 1;
        batxPos2 += moveDirection * Math.random() * 10;
        bat2.style.bottom = `${batxPos2}px`;
        if (batxPos2 > 480) {
            batxPos2 = 460;
        }
        if (batxPos2 < 50) {
            batxPos2 = 70;
        }
    }, 250);
};

batFly2();