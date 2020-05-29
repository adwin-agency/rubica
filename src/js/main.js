//= ../../bower_components/jquery/dist/jquery.min.js
//= ../../bower_components/owl.carousel/dist/owl.carousel.js
//= ../../bower_components/fullpage.js/dist/fullpage.js
//= ../../bower_components/swiper/package/js/swiper.min.js
//= ../../bower_components/magnific-popup/dist/jquery.magnific-popup.min.js


"use strict";

//= partials/lazyload.js
/*вертикальный скролл на главной*/
var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: false,
    speed: 1000,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'bullet-active',
        bulletClass: 'swiper-bullet',
        renderBullet: function(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>' + "<span class='bullet-line'></span>";
        },
    },

    mousewheel: {
        invert: false,
    },

});


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
            onInitialized: pagen,
            onChange: counter,
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

        function pagen(event) {

            $('.owl-prev').after("<div class='slider-pagen d-flex'>1/" + event.item.count + "</div>");

        }

        function counter(event) {

            var items = event.item.count; // Number of items
            var item = event.item.index; // Position of the current item

            // it loop is true then reset counter from 1
            if (item > items) {
                item = item - items;
            }
            $('.slider-pagen').html(item + "/" + items);
        }

    }

}


function owlCarouselSliderProd(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
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

                1001: {
                    items: 2
                },

                1321: {
                    items: 3
                },

                1920: {
                    items: 3
                }
            }
        });

    }

}

function owlCarouselSliderGoods(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
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

function owlCarouselSliderideas(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            center: true,
            items: 2,
            loop: true,
            dots: false,
            margin: 20,
            responsive: {
                768: {
                    items: 2
                }
            }
        });

    }
    
}
<<<<<<< HEAD
=======
//слайдер в ideas на маленьких экранах
    $(window).on('resize', function(){
     if($(window).width() <= 553) {
     $('.ideas__lockers-list').addClass('ideas-lockers-js');
     $('.ideas__layout-list').addClass('ideas-lockers-js');
     }
      else {
     $('.ideas__lockers-list').removeClass('ideas-lockers-js');
     $('.ideas__layout-list').removeClass('ideas-lockers-js');
     }
     }).trigger('resize');


>>>>>>> origin/dev-dima

function owlCarouselSliderProduct(owlSlider) {

    if ($(owlSlider).length > 0) {

        $(owlSlider).owlCarousel({
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            dots: false,
            slideBy: 1,
            items: 1,
            lazyLoad: true,
            onInitialized: pagen,
            onChange: counter,
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


        function pagen(event) {
            $('.owl-prev').after("<div class='slider-pagen d-flex'>1/" + event.item.count + "</div>")
        }

        function counter(event) {

            var items = event.item.count;
            var item = event.item.index;

            if (item > items) {
                item = item - items;
            }
            $('.slider-pagen').html(item + "/" + items);
        }
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

function fixedScrollElement() {
    var $window = $(window),
        $target = $("#fixed-scroll-js"),
        $bottom = $('#end-scroll-js'),
        $top = undefined;

    if ($target && $bottom) {

        var $top = $target.offset().top,
            $height = $target.outerHeight(),
            $left = $('.product').offset().left + $('.product').outerWidth(),
            $bot = $bottom.offset().top + $bottom.outerHeight();

        $window.on('scroll', function() {

            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if ($top != undefined) {

                if (scrollTop > $top && scrollTop + $height < $bot) {

                    $target.css({
                        position: 'fixed',
                        top: '10px',
                        left: $left + 'px',
                    });
                } else if (scrollTop > $top && scrollTop + $height > $bot) {

                    // Координата верха: куда нельзя заходить - минус верх - минус высота блока
                    var top = $bot - scrollTop - $height;

                    $target.css({
                        top: top,
                    });
                }

                // Иначе возвращаем всё назад
                else {

                    $target.css({
                        position: 'relative',
                        top: '',
                        left: '',
                    });
                }
            }

        });
    }
}

function responsiveZoom(item) {
    var resFlag;
    var zoom = '.zoom-card';

    if (item === zoom && $(window).width() < 900) {

        $(item).find('.slider__item').addClass('pointer-none');

        resFlag = false;
    } else {
        $(item).find('.slider__item').removeClass('pointer-none');

        resFlag = true;
    }

    return resFlag;
}

function zoomPopUp(item, elementClick) {

    var flag = responsiveZoom(item);

    $(item).each(function() {

        $(this).magnificPopup({
            delegate: elementClick,
            type: 'image',
            closeOnContentClick: false,
            closeBtnInside: false,
            disableOn: function() {
                return flag;
            },
            mainClass: 'mfp-with-zoom mfp-img-mobile',
            callbacks: {
                beforeOpen: function() {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            image: {
                verticalFit: true
            },
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1],
                tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
            },
            zoom: {
                enabled: true,
                duration: 300,
                opener: function(element) {
                    return element.find('img');
                }
            }

        });

    });

}

function owlSliderWithThumbs(slider, thumbs) {

    var carouselMain = $(slider);
    var carouselSecond = $(thumbs);
    var slidesPerPage = 4;
    var syncedSecondary = true;

    carouselMain.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoplay: false,
        nav: true,
        lazyLoad: true,
        animateIn: 'scaleUpFrom',
        animateOut: 'scaleUpTo',
        transitionStyle: 'fade',
        onInitialized: pagen,
        responsiveRefreshRate: 200,
        navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>']
    }).on('changed.owl.carousel', syncPosition);

    function pagen(event) {
        $('.owl-prev').after("<div class='slider-pagen d-flex'>1/" + event.item.count + "</div>");
    }

    if (carouselSecond.length > 0) {
        carouselSecond
            .on('initialized.owl.carousel', function() {
                carouselSecond.find(".owl-item").eq(0).addClass("current");
            })
            .owlCarousel({
                items: slidesPerPage,
                dots: false,
                nav: true,
                margin: 20,
                smartSpeed: 200,
                slideSpeed: 500,
                slideBy: slidesPerPage,
                lazyLoad: true,
                responsiveRefreshRate: 100
            }).on('changed.owl.carousel', syncPosition2);
    }

    function syncPosition(el) {

        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        var items = el.item.count;
        var item = Math.round(el.item.index - (el.item.count / 2) - .5);;

        if (item > items) {
            item = item - items;
        }

        $('.slider-pagen').html(item + "/" + items);

        if (current < 0) {
            current = count;
            item = items;
        }
        if (current > count) {
            current = 0;
            item = 0;
        }

        if (carouselSecond.length > 0) {
            carouselSecond
                .find(".owl-item")
                .removeClass("current")
                .eq(current)
                .addClass("current");
            var onscreen = carouselSecond.find('.owl-item.active').length - 1;
            var start = carouselSecond.find('.owl-item.active').first().index();
            var end = carouselSecond.find('.owl-item.active').last().index();

            if (current > end) {
                carouselSecond.data('owl.carousel').to(current, 100, true);
            }
            if (current < start) {
                carouselSecond.data('owl.carousel').to(current - onscreen, 100, true);
            }
        }


    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            carouselMain.data('owl.carousel').to(number, 100, true);
        }
    }

    carouselSecond.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        carouselMain.data('owl.carousel').to(number, 300, true);
    });

}

function initScroll(item, block) {

    var a = document.querySelector(item),
        b = null,
        P = 100;

    if (a) {
        if ($(window).width() >= 1279) {

            window.addEventListener('scroll', Ascroll, false);
            document.body.addEventListener('scroll',Ascroll , false);

            function Ascroll() {
                if (b == null) {
                    var Sa = getComputedStyle(a, ''),
                        s = '';
                    for (var i = 0; i < Sa.length; i++) {
                        if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
                            s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
                        }
                    }
                    b = document.createElement('div');
                    b.classList.add('fixed-div');
                    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
                    a.insertBefore(b, a.firstChild);
                    var l = a.childNodes.length;
                    for (var i = 1; i < l; i++) {
                        b.appendChild(a.childNodes[1]);
                    }
                    a.style.height = b.getBoundingClientRect().height + 'px';
                    a.style.padding = '0';
                    a.style.border = '0';
                }
                var Ra = a.getBoundingClientRect(),
                    R = Math.round(Ra.top + b.getBoundingClientRect().height - document.querySelector(block).getBoundingClientRect().bottom); // селектор блока, при достижении нижнего края которого нужно открепить прилипающий элемент
                if ((Ra.top - P) <= 0) {
                    if ((Ra.top - P) <= R) {
                        b.className = 'stop';
                        b.style.top = -R + 'px';
                    } else {
                        b.className = 'sticky';
                        b.style.top = P + 'px';
                    }
                } else {
                    b.className = '';
                    b.style.top = '';
                }
                window.addEventListener('resize', function() {
                    a.children[0].style.width = getComputedStyle(a, '').width
                }, false);
            }

        }
        else{
            document.querySelector('.product-info').classList.add('static');

        }
    }

}



$(window).on('resize', function() {
    if ($(window).width() <= 768) {
        $('.ideas__lockers-list').addClass('ideas-lockers-js');
    } else {
        $('.ideas__lockers-list').removeClass('ideas-lockers-js');
    }

    if ($(window).width() <= 1279) {
        var p = $('.product-info').detach();
        $(".product-main ").prepend(p);
    }
    else{
        var p = $('.product-info').detach();
        $(".main > .product-container ").append(p);
    }

    initScroll();

}).trigger('resize');




$(function() {
    // fixedScrollElement();
    initScroll('.product-info', '.product');
    owlCarouselSlider('.promo-carousel-js');
    owlCarouselSliderProd('.prod-slider__carousel-js');
    owlCarouselSliderGoods('.goods__item-slider-js');
    // owlCarouselSliderProduct('.product__item-slider-js');
    owlCarouselSliderGoods('.ideas-slider-js');
    owlCarouselSliderideas('.ideas-lockers-js');
    zoomPopUp('.zoom-card-js', '.product__slider-list-item');
    owlSliderWithThumbs('.product__item-slider-js', '.product__carusel-list');

});
<<<<<<< HEAD
=======


jQuery( document ).ready(function( $ ) {


     //popup форма

     var callback = document.querySelectorAll('.callback-js'),
        popup = document.querySelector('.popup-container'),
        close = document.querySelector('.popup__close-btn');
 
        document.addEventListener('click', function(event){

            target=event.target;

            for (var i=0 ; i<callback.length; i++){

                if (target == callback[i]){

                    popup.classList.add('popup-container_active');

                }

                if (target == close) {
                    popup.classList.remove('popup-container_active');
                }
            }
             
             
        });

        

        //кнопка развернуть-свернуть в ideas   

var more = document.querySelectorAll(".prod-content__text-more"),
    cont = document.querySelectorAll(".prod-content__text-container"),
    ideas = document.getElementById('target-js');
     
    ideas.addEventListener('click', function(event){
        target = event.target;

        for (var i=0; i < more.length; i++){
            if (target == more[i]){
                if (cont[i].classList.contains('prod-content__text-container-active')){
                    cont[i].classList.remove('prod-content__text-container-active');
                    target.innerHTML = 'Развернуть';

                }
                else {
                    cont[i].classList.add('prod-content__text-container-active');
                    target.innerHTML = 'Свернуть';
                }
            }
        }
    } );

   
    //залипание при скролле
    var
   
      $window = $( window ), 
 
      $target = $( "#fixed-scroll-js" ),
 
      $bottom = $( '#end-scroll-js' ), 
 
      $top = $target.offset().top, 
 
      $height = $target.outerHeight(), 

        $left = $('.product').offset().left + $('.product').outerWidth(),

       $bot = $bottom.offset().top + $bottom.outerHeight();
       
   
    $window.on('scroll', function() {
   
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > $top  && scrollTop + $height < $bot) {
   
        
        $target.css( {     
            position : 'fixed',
            top : '10px',     
            left : $left + 'px',
        } );
    } 

        else if ( scrollTop > $top && scrollTop + $height > $bot ) {
 
            // Координата верха: куда нельзя заходить - минус верх - минус высота блока
            var top = $bot - scrollTop - $height;
 
            $target.css( {
                
                top : top ,
            } );
        }
   
      // Иначе возвращаем всё назад
      else {     
   
        $target.css( {     
            position : 'relative',
            top : '',     
            left : '',
        } );
      }
    });


});   
>>>>>>> origin/dev-dima
