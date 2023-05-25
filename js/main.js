document.addEventListener('DOMContentLoaded', function () {
    moveFlags();
    moveBurger();
    getSubtitle()
});

function moveFlags() {
    const flagOne = document.querySelector('#flag-1');
    const flagTwo = document.querySelector('#flag-2');
    const flagThree = document.querySelector('#flag-3');
    const flagFour = document.querySelector('#flag-4');
    const flagFive = document.querySelector('#flag-5');

    function addActive(item) {
        item.classList.add('active');
    }

    setTimeout(() => {
        addActive(flagOne);
    }, 3100);

    setTimeout(() => {
        addActive(flagTwo);
    }, 3500);

    setTimeout(() => {
        addActive(flagThree);
    }, 3900);

    setTimeout(() => {
        addActive(flagFour);
    }, 4300);

    setTimeout(() => {
        addActive(flagFive);
        setTimeout(() => {
            spinner();
        }, 350);
    }, 4700);
}

function spinner() {
    const flags = document.querySelectorAll('.flag');

    flags.forEach(item => {
        item.classList.add('spin');
    });
}

function moveBurger() {
    const burgerBtn = document.querySelector('.header__burger-btn');
    const burgerMenu = document.querySelector('.header__menu');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('clicked');
        burgerMenu.classList.toggle('active');
        document.body.classList.toggle('scroll-lock');
    })

    document.addEventListener('click', e => {
        if (e.target.classList.contains('header__menu-list')) {
            burgerBtn.classList.remove('clicked');
            burgerMenu.classList.remove('active');
            document.body.classList.remove('scroll-lock');
        }
    })
}

function getSubtitle() {
    const xhr = new XMLHttpRequest;

    xhr.open('get', `https://baconipsum.com/api/?type=lucky`);

    xhr.addEventListener('load', () => {
        const response = JSON.parse(xhr.responseText);
        moveSubtitle(response[0]);
    })

    xhr.send();
}

function moveSubtitle(resp) {
    const subtitle = document.querySelector('.top-section__description');

    subtitle.innerText = resp;
}