/******************************************************************************
*********************    bouton switch style    *******************************
******************************************************************************/

function toggleTheme() {

    var theme = document.getElementsByTagName('link')[0];
    var image = document.getElementById('ancrage_img');

    if (theme.getAttribute('href') == '../css/style.css') {
        theme.setAttribute('href', '../css/nether_style.css');
        image.setAttribute('src', '../image/bouton_remonte_nether.png')
    } else {
        theme.setAttribute('href', '../css/style.css');
        image.setAttribute('src', '../image/bouton_remontev2.png')
    }
}

function jump(h) {
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}

function toggleTheme2() {

    var theme = document.getElementsByTagName('link')[0];
    var image = document.getElementById('ancrage_img');

    if (theme.getAttribute('href') == 'asset/css/style.css') {
        theme.setAttribute('href', 'asset/css/nether_style.css');
        image.setAttribute('src', 'asset/image/bouton_remonte_nether.png')
    } else {
        theme.setAttribute('href', 'asset/css/style.css');
        image.setAttribute('src', 'asset/image/bouton_remontev2.png')
    }
}