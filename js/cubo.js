let degree = 0;
const cubes = document.querySelectorAll('.cube');

const rotate = () => {
    cubes.forEach(cube => cube.style.transform = `rotateY(${degree}deg)`);
}


// LEFT ARROW

document.querySelector('.left-arrow').addEventListener('mouseover', () => {
    degree += -25;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('mouseout', () => {
    degree = 0;
    rotate();
});

document.querySelector('.left-arrow').addEventListener('click', () => {
    degree += -65;
    rotate();

    document.querySelector('.left-arrow').addEventListener('mouseout', () => {
        degree += -90;
        rotate();
    });
});




// RIGHT ARROW

document.querySelector('.right-arrow').addEventListener('mouseover', () => {
    degree += 25;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('mouseout', () => {
    degree = 0;
    rotate();
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    degree += 65;
    rotate();

    document.querySelector('.right-arrow').addEventListener('mouseout', () => {
        degree += 90;
        rotate();
    });
});




// PLAY BUTTON

var toggle = true;

document.querySelector('.play-pause').addEventListener('click', () => {

    if (toggle == true) {
        toggle = false
    } else {
        toggle = true
    };

    while(toggle == false) {
        degree += 90;
        rotate()++;
    }
});