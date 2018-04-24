$(document).ready(function () {
    //Custom JS: insert Facebook message into social div using JS
    var checkMe = document.createElement('p');

    checkMe.className = 'sideNote';
    checkMe.innerText = '(Last orders taken 15 min before close)';
    document.getElementById('hours').appendChild(checkMe);

    //Add "Limited Time" to .featured cookies only
    /*$('<p><strong>*LIMITED TIME ONLY*</strong></p>').appendTo('.menuItem.featured');*/

    //Custom jQuery: Add "Limited Time" to featured cookies on mouseenter (only the one selected, indicated by "this"), then remove it on mouseleave
    $('.menuItem.featured').mouseenter(function () {
        $(this).closest('.menuItem.featured').append('<p><strong>*LIMITED TIME ONLY*</strong></p>');
    }).mouseleave(function () {
        $(this).closest('.menuItem.featured').children('p').last().remove();
    });

    //Plugin 1: Call hamburger nav
    $('nav ul').menu({
        menuSpeed: 10,
        callback: function () {}
    });

    //Plugin 2: Facebook Social Feed
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
