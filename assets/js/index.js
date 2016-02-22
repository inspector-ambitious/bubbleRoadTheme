/**
 * Main JS file for Casper behaviours
 */
 
/* globals jQuery, document */
(function ($, undefined) {
    "use strict";

    var $document = $(document);

    $document.ready(function () {

        var $postContent = $(".post-content");
        $postContent.fitVids();

        $(".scroll-down").arctic_scroll();
        console.log('aaaa')

        var nav = $('.nav');
        var origOffset = nav.offset().top;
        var fixed = false;

        function onWindowScroll(event) {
            var scroll = $(window).scrollTop();
            var offset = nav.offset().top;

            if (fixed === false && scroll > origOffset) {
                nav.addClass('fixed');
                fixed = true;
            } 

            if (fixed === true && scroll < origOffset){
                fixed = false;
                nav.removeClass('fixed');
            }
            // 
            // console.log(scroll, nav.offset())
        }

         $(window).scroll(onWindowScroll);
        
         // onWindowScroll();r
    });



    // Arctic Scroll by Paul Adam Davis
    // https://github.com/PaulAdamDavis/Arctic-Scroll
    $.fn.arctic_scroll = function (options) {

        var defaults = {
            elem: $(this),
            speed: 500
        },

        allOptions = $.extend(defaults, options);

        allOptions.elem.click(function (event) {
            event.preventDefault();
            var $this = $(this),
                $htmlBody = $('html, body'),
                offset = ($this.attr('data-offset')) ? $this.attr('data-offset') : false,
                position = ($this.attr('data-position')) ? $this.attr('data-position') : false,
                toMove;

            if (offset) {
                toMove = parseInt(offset);
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top + toMove) }, allOptions.speed);
            } else if (position) {
                toMove = parseInt(position);
                $htmlBody.stop(true, false).animate({scrollTop: toMove }, allOptions.speed);
            } else {
                $htmlBody.stop(true, false).animate({scrollTop: ($(this.hash).offset().top) }, allOptions.speed);
            }
        });

    };


})(jQuery);




