var myButton = document.getElementById('btntop');

window.onscroll = function () {
    'use strict';

    if (window.pageYOffset >= 1250) {
        myButton.style.display = 'block';
    }else {
        myButton.style.display = 'none';
    }
};

myButton.onclick = function() {
    'use strickt';

    window.scrollTo(0,0);
};