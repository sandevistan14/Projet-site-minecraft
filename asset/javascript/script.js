/******************************************************************************
*********************    bouton switch style    *******************************
******************************************************************************/

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];
    var image = document.getElementById('ancrage_img');
    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute('href') == '/asset/css/style.css') {
        theme.setAttribute('href', '/asset/css/nether_style.css');
        image.setAttribute('src','/asset/image/bouton_remonte_nether.png')
    } else {
        theme.setAttribute('href', '/asset/css/style.css');
        image.setAttribute('src', '/asset/image/bouton_remontev2.png')
    }
}

function jump(h){
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}