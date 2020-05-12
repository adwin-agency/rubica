//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js



"use strict";

//= partials/lazyload.js

function owlCarouselSlider(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            navContainer: '.promo__nav',
            dots: false,
            slideBy: 1,
            items: 1,
            lazyLoad: true,
            responsive: {
                310: {
                    items: 1
                },

                480: {
                    items: 1
                },

                767: {
                    items: 1
                },

                989: {
                    items: 1
                },

                1280: {
                    items: 1
                },

                1300: {
                    items: 1
                }
            }
        });

    }

}

function setCaretPosition(e, t) {
    if (e.setSelectionRange) e.focus(), e.setSelectionRange(t, t);
    else if (e.createTextRange) {
        var i = e.createTextRange();
        i.collapse(!0), i.moveEnd("character", t), i.moveStart("character", t), i.select()
    }
}

function getCursorPosition(e) {
    var t = 0;
    if (document.selection) {
        e.focus();
        var i = document.selection.createRange();
        i.moveStart("character", -e.value.length), t = i.text.length
    } else(e.selectionStart || "0" == e.selectionStart) && (t = e.selectionStart);
    return t
}

function inputmask() {

    $('input[name="phone"]').focus(function() {
        if ($(this).val() == "") {
            $(this).val('+7 (');
        }

        setCaretPosition(this, 4);
    });

    $('input[name="phone"]').focusout(function() {
        $(this).mask("+7 (000) 000-00-00", {
            clearIfNotMatch: true
        });
    });

    $('input[name="phone"]').bind("change keyup input click", function() {

        if (getCursorPosition(this) < 4) {
            setCaretPosition(this, 4);
        }

        var num = $(this).val().replace(/\D+/g, "");

        if (num.indexOf("789") === 0 || num.indexOf("77") === 0 || num.indexOf("89") === 0 || num === "" || num === "7") {

            if (num.indexOf("789") === 0 || num.indexOf("77") === 0) {
                num = num.substr(2 - num.length, num.length - 2);
            }

            if (num.indexOf("89") === 0) {
                num = num.substr(1 - num.length, num.length - 1);
            }

            if (num === "7") {
                num = "";
            }

            num = "+7 (" + num;
            $(this).val(num);
            $(this).mask("+7 (000) 000-00-00", {
                clearIfNotMatch: true
            });
            var b = $(this).val();
            $(this).val(b);
        }


    });

    $('input[name="phone"]').mask("+7 (000) 000-00-00", {
        clearIfNotMatch: true
    });

}



$(function() {

    owlCarouselSlider('.promo-carousel-js');

});
