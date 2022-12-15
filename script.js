/******************************************************************************
*********************    bouton switch style    *******************************
******************************************************************************/

function toggleTheme() {
    // Obtains an array of all <link>
    // elements.
    // Select your element using indexing.
    var theme = document.getElementsByTagName('link')[0];
    // Change the value of href attribute
    // to change the css sheet.
    if (theme.getAttribute('href') == 'style.css') {
        theme.setAttribute('href', 'nether_style.css');
    } else {
        theme.setAttribute('href', 'style.css');
    }

    // var image = document.getElementById('a')[7];
    // if(image.getAttribute('src') == 'images/bouton_remontev2') {
    //     image.setAttribute('src', 'images/bouton_remonte_nether.png');
    // } else {
    //     image.setAttribute('src', 'images/bouton_remontev2.png');
    // }
}

function jump(h){
    var top = document.getElementById(h).offsetTop;
    window.scrollTo(0, top);
}