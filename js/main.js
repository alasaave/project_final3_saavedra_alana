$(document).ready(function () {
    //insert Facebook message into social div using JS
    var checkMe = document.createElement('p');

    checkMe.className = 'sideNote';
    checkMe.innerText = '(Last orders taken 15 min before close)';
    document.getElementById('hours').appendChild(checkMe);

    //Add "Limited Time" to .featured cookies only
    $('<p><strong>*LIMITED TIME ONLY*</strong></p>').appendTo('.menuItem.featured');

    //Call Hamburger Menu
    $('.mobile_menu').slideMobileMenu({
        // Hamburger Id
        'hamburgerId': 'sm_menu_ham',
        // Menu Wrapper Class
        'wrapperClass': 'sm_menu_outer',
        // Submenu Class
        'submenuClass': 'submenu',
        // Calls when menu loaded
        'onMenuLoad': function () {
            return true;
        },
        // Calls when menu open/close
        'onMenuToggle': function () {
            return true;
        }
    });


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
