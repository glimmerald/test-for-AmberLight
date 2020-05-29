let popup = document.getElementById('myPopup'),
    popupToggle = document.getElementById('myBtn'),
    popupClose = document.querySelector('.close');

popupToggle.onclick = function() {
    popup.classList.toggle("show");
};

popupClose.onclick = function() {
    popup.classList.toggle("show");
};