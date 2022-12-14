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
}