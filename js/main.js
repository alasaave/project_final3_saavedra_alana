$(document).ready(function () {
    //insert Facebook message into header using JS
    //Using jQuery: $('<p id="sideNote">Check out our Facebook page for last minute changes!</p>').insertBefore('#hours');

    var checkMe = document.createElement('p');

    checkMe.id = 'sideNote';
    checkMe.innerText = '(Last orders taken 15 min before close)';
    document.getElementById('hours').appendChild(checkMe);
});
