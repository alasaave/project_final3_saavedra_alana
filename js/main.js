$(document).ready(function () {
    //insert Facebook message into social div using JS
    //Using jQuery: $('<p id="sideNote">Check out our Facebook page for last minute changes!</p>').insertBefore('#hours');

    var checkMe = document.createElement('p');

    checkMe.id = 'sideNote';
    checkMe.innerText = '(Last orders taken 15 min before close)';
    document.getElementById('hours').appendChild(checkMe);

    //Call Hamburger Menu
    $.fatNav();

    //social Feed
    //Facebook sdk
    window.fbAsyncInit = function () {
        FB.init({
            appId: '',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v2.12'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

});
