var menu =  document.getElementById('menu-button').onclick = function() {
    var menuBar = document.getElementById('menu-bar');
    if (menuBar.style.display === 'none') {
        menuBar.style.display = 'block';
    } else {
        menuBar.style.display = 'none';
    }
};