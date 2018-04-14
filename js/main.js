$(document).ready(function () {
    //insert Facebook message into header using JS
    //Using jQuery: $('<p id="sideNote">Check out our Facebook page for last minute changes!</p>').insertBefore('#hours');

    var checkMe = document.createElement('p');
    var hoursFirst = document.getElementById('hours');

    checkMe.id = 'sideNote';
    checkMe.innerText = 'Check out our Facebook page for last minute changes!';
    hoursFirst.insertBefore(checkMe, hoursFirst.childNodes[0]);

});
