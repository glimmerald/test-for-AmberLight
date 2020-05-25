let popup = document.getElementById('mypopup'),
    popupToggle = document.getElementById('myBtn'),
    popupClose = document.querySelector('.close');

popupToggle.onclick = function() {
    popup.style.display = "block";
};

popupClose.onclick = function() {
    popup.style.display = "none";
};

window.onclick = function(e) {
    if (e.target == popup) {
        popup.style.display = "none";
    }
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.menu-list');
    const navLinks = document.querySelectorAll('.menu-list li')

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.4}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle')
    });
}

navSlide();