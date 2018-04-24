(function ($) {
    $.fn.menu = function (opts) {
        var $this = this,
            wi = $(window).width(),
            selector = this.find('li'),
            t,
            subMenu,
            animateMenu = function (elem, duration, callback) {
                $(elem).prev('a').toggleClass('hover');
                if (wi >= 600) {
                    $(elem).stop().slideToggle(duration, callback);
                    $this.removeClass('open');
                }
            },
            defaults = {
                menuSpeed: 50,
                callback: function () {}
            },
            options = $.extend({}, defaults, opts);
        $(window).resize(function () {
            wi = $(this).width();
            if (wi >= 600) {
                $this.removeClass('open');
            }
        });
        $('.re-order').on('click', function () {
            $this.toggleClass('open');
        });
        return selector.each(function () {
            t = $(this);
            t.find('ul').parent('li').addClass('parent');
            if ($(this).hasClass('parent')) {
                $(this).hover(function () {
                    subMenu = $(this).children('ul');
                    animateMenu(subMenu, options.menuSpeed, options.callback);
                });
            }
        });
    };
})(jQuery);
