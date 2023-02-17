(function ($) {
	"use strict";

    // page loading animation
    $(window).on('load', function() {
        $('#js-preloader').addClass('loaded');
    });

    // header scroll
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        var box = $('.header-text').height();
        var header = $('header').height();

        if (scroll >= box - header) {
            $("header").addClass("background-header");
        } else {
            $("header").removeClass("background-header");
        }
    });

    // menu dropdown toggle
    if($('.menu-trigger').length){
        $(".menu-trigger").on('click', function() {
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    // owl animation
    $('.loop').owlCarousel({
        center: true,
        items:1,
        loop:true,
        autoplay: true,
        nav: true,
        margin:0,
        responsive:{
            1200:{
                items:5
            },
            992:{
                items:3
            },
            760:{
                items:2
        }
        }
    });

    // generation section
    $(document).on("click", ".naccs .menu div", function() {
        var numberIndex = $(this).index();

        if(!$(this).is("active")) {
            $(".naccs .menu div").removeClass("active");
            $(".naccs .menu div").removeClass("visually-hidden");
            $(".naccs .outer-li").removeClass("active");
            $(".naccs .outer-li").removeClass("visually-hidden");

            $(this).addClass("active");

            $(".naccs ul").find(".outer-li:eq(" + numberIndex + ")").addClass("active");

            var listItemHeight = $(".naccs ul")
              .find("li:eq(" + numberIndex + ")")
              .innerHeight();
            $(".naccs ul").height(listItemHeight + "px");
          }
    });

    // video open
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });

    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })

    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })

    // pokedex open
    $(document).on("click", "#pokedex", function() {
        $("#strength").find("#collapseOne").addClass('show');
        $("#strength").find("#collapseTwo").removeClass('show');
        $("#strength").find("#collapseThree").removeClass('show');
    });

    // improvement padding
    $(window).resize(function() {
        var window_width = $(window).width();
        if(window_width < 767){
            $('.improvements .card-body').css({"padding-left": "16px"})
        }else {
            $('.improvements .card-body').css({"padding-left": "75px"})
        }
    });

    // improvements open
    $(document).on("click", "#improvements .improvements-tag p", function() {
        var numberIndex = $(this).index();

        $("#improvements .collapse").removeClass('show');
        $("#improvements .collapse").find("#collapseExample" + (numberIndex + 1)).addClass("show");
    });

    // form validation
    window.addEventListener('load', function() {
        // get validation element
        var forms = document.getElementsByClassName('needs-validation');

        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();

                    if(form.classList.contains('was-validated')) {
                        form.classList.remove('was-validated');
                    }

                    form.classList.add('was-validated');
                }else {
                    event.preventDefault();
                    event.stopPropagation();

                    document.getElementById('pwd').value = "";
                    document.getElementById('checkbox').checked = false;
                    form.classList.remove('was-validated');

                    // commit alert
                    alert = $('.commit-alert');

                    alert.removeClass("visually-hidden");

                    setTimeout(() => {
                        alert.addClass("visually-hidden");
                    }, 1500)
                }
            }, false);
        });
    }, false);

    // window resize mobile menu fix
    function mobileNav() {
        var width = $(window).width();
        $('.submenu').on('click', function() {
            if(width < 767) {
                $('.submenu ul').removeClass('active');
                $(this).find('ul').toggleClass('active');
            }
        });
    }
})(window.jQuery);
