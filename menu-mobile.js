function menuShow() { 
    let menuMobile = document.querySelector('.mobile-menu'); 
    if (menuMobile.classList.contains('open')) { 
        menuMobile.classList.remove('open'); 
        document.querySelector('.icon').src = "./img/icons/menu_white_36dp.svg"; 
        document.querySelector('header').style.backgroundImage="linear-gradient(to right, #000406, #1F343E)";
    } else {
        menuMobile.classList.add('open'); 
        document.querySelector('.icon').src = "./img/icons/close_white_36dp.svg"; 
        document.querySelector('header').style.backgroundImage="linear-gradient(to right, #1F343E, #1F343E)";
       
    }
}
