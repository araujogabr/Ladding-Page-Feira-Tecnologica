window.onload = function() {
    var alturaHeader = document.querySelector('header').offsetHeight;

    var capa = document.querySelector('.capa');

    capa.style.marginTop = alturaHeader + 'px';
};