$(document).ready(function () {

    $(window).scroll(function () {
        // 100 = The point you would like to fade the nav in.

        if ($(window).scrollTop() > 100) {

            $('.bg').addClass('show');

        } else {

            $('.bg').removeClass('show');

        };
    });

    $('.scroll').on('click', function (e) {
        e.preventDefault()

        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1500);
    });


    $(window).scroll(function () {
        var scrolled = $(this).scrollTop();
        $('#title').css({
            'transform': 'translate3d(0, ' + -(scrolled * 0.2) + 'px, 0)', // parallax (20% scroll rate)
            'opacity': 1 - scrolled / 400 // fade out at 400px from top
        });
        $('#hero-vid').css('transform', 'translate3d(0, ' + -(scrolled * 0.25) + 'px, 0)'); // parallax (25% scroll rate)
    });

    /*text disapear*/
    $(window).scroll(function () {
        $(".down-icon").css("opacity", 1 -
            $(window).scrollTop() / 250);
    });

    $(window).scroll(function () {
        $(".right-icon").css("opacity", 1 -
            $(window).scrollTop() / 250);
    });

    $(window).scroll(function () {
        $(".logo").css("opacity", 1 -
            $(window).scrollTop() / 350);
    });

    $(window).scroll(function () {
        $(".first-about").css("opacity", 0.5 -
            $(window).scrollTop() / 350);
    });


    // Animate letters
    function isElementInViewport(el) {
        if (el == undefined) {
            return false;
        }

        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

    function onVisibilityChange(el, callback) {
        var old_visible;
        return function () {
            var visible = isElementInViewport(el);
            if (visible != old_visible) {
                old_visible = visible;
                if (typeof callback == 'function') {
                    callback();
                }
            }
        }
    }

    $(window).on('DOMContentLoaded load resize scroll', text32Handler);

    var text431Handler = onVisibilityChange($('.text4-3-1'), function () {
        $('.text4-3-1').each(function () {
            $(this).html($(this).text().replace(/([\S])/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({ loop: 1 })
            .add({
                targets: '.text4-3-1 .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1200,
                delay: function (el, i) {
                    return 200 + 30 * i;
                }
            });
    });

    $(window).on('DOMContentLoaded load resize scroll', text431Handler);

    var text432Handler = onVisibilityChange($('.text4-3-2'), function () {
        $('.text4-3-2').each(function () {
            $(this).html($(this).text().replace(/([\S])/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({ loop: 1 })
            .add({
                targets: '.text4-3-2 .letter',
                scale: [4, 1],
                opacity: [0, 1],
                translateZ: 0,
                easing: "easeOutExpo",
                duration: 950,
                delay: function (el, i) {
                    return 70 * i;
                }
            });
    });

    $(window).on('DOMContentLoaded load resize scroll', text432Handler);

    var text433Handler = onVisibilityChange($('.text4-3-3'), function () {
        $('.text4-3-3').each(function () {
            $(this).html($(this).text().replace(/([\S])/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({ loop: 1 })
            .add({
                targets: '.text4-3-3 .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 1800,
                delay: function (el, i) {
                    return 2500 + 30 * i;
                }
            });
    });

    $(window).on('DOMContentLoaded load resize scroll', text433Handler);

    var text434Handler = onVisibilityChange($('.text4-3-4'), function () {
        $('.text4-3-4').each(function () {
            $(this).html($(this).text().replace(/([\S])/g, "<span class='letter'>$&</span>"));
        });

        anime.timeline({ loop: 1 })
            .add({
                targets: '.text4-3-4 .letter',
                translateX: [40, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 2100,
                delay: function (el, i) {
                    return 4300 + 30 * i;
                }
            });
    });

    $(window).on('DOMContentLoaded load resize scroll', text434Handler);

});






// Get the modal
$('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)
    modal.find('.modal-title').text('New message to ' + recipient)
    modal.find('.modal-body input').val(recipient)
})

$(function () {
    $('#myTab li:last-child a').tab('show')
})


/* Portfolio*/
var cardIndex = 1;
var cardNum = 6;
var cardIdPrev = undefined;

function nextCard() {
    if (cardIndex > cardNum) {
        return;
    }
    var cardIdNew = "#card" + cardIndex;

    if (cardIdPrev) {
        $(cardIdPrev).hide();
    }

    document.getElementById("myOverlay").style.backgroundColor = $(cardIdNew).css('backgroundColor');
    $(cardIdNew).show();

    cardIdPrev = cardIdNew.toString();
    cardIndex++;
}

$(".right-arrow").on("click", function () {
    nextCard();
})

function openCard1() {
    cardIndex = 1;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.backgroundColor = $("#card1").css('backgroundColor');
    nextCard();
}

function openCard2() {
    cardIndex = 2;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.backgroundColor = $("#card2").css('backgroundColor');

    nextCard();
}

function openCard3() {
    cardIndex = 3;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.backgroundColor = $("#card3").css('backgroundColor');

    nextCard();
}

function openCard4() {
    cardIndex = 4;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.backgroundColor = $("#card4").css('backgroundColor');

    nextCard();
}

function openCard5() {
    cardIndex = 5;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.backgroundColor = $("#card5").css('backgroundColor');

    nextCard();
}

function openCard6() {
    cardIndex = 6;
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("myOverlay").style.backgroundColor = $("#card6").css('backgroundColor');

    nextCard();
}


function closeNav() {
    document.getElementById("myOverlay").style.display = "none";
    document.getElementById("myOverlay").style.backgroundColor = $("#card10").css('backgroundColor');

}



// Get the modal
var modal;
var modalLiri = document.getElementById('modal-liri');
var modalTrain = document.getElementById("modal-train");
var modalWordgame = document.getElementById('modal-wordgame');
var modalFriendfinder = document.getElementById('modal-friendfinder');
var modalBamazon = document.getElementById('modal-bamazon');
var modalBurger = document.getElementById('modal-burger');
var btn = document.getElementsByClassName("modalBtn");
var span = document.getElementsByClassName("close")[0];
// Get the modal print
var modalMca = document.getElementById('modal-print1');
var modalYoung = document.getElementById('modal-print2');
var modalMoving = document.getElementById('modal-print3');
var modalSeries = document.getElementById('modal-print4');
var modalHaiku = document.getElementById('modal-print5');
var modalOut = document.getElementById('modal-print6');
var btnPrint = document.getElementsByClassName("modalBtn-print");
// Get the modal motion graphics
var modalAirmen = document.getElementById('modal-motion1');
var modalSomething = document.getElementById('modal-motion2');
var btnMotions = document.getElementsByClassName("modalBtn-motions");

function closeModel() {
    $('.motion-video').get(0).pause();
    modal.style.display = "none";
}

function openModel(id) {
    switch (id) {
        case "modbtn-liri":
            modal = modalLiri;
            break;

        case "modbtn-train":
            modal = modalTrain;
            break;

        case "modbtn-wordgame":
            modal = modalWordgame;
            break;

        case "modbtn-finding":
            modal = modalFriendfinder;
            break;

        case "modbtn-bamazon":
            modal = modalBamazon;
            break;

        case "modbtn-burger":
            modal = modalBurger;
            break;

        case "modbtn-print1":
            modal = modalMca;
            break;

        case "modbtn-print2":
            modal = modalYoung;
            break;

        case "modbtn-print3":
            modal = modalMoving;
            break;

        case "modbtn-print4":
            modal = modalSeries;
            break;

        case "modbtn-print5":
            modal = modalHaiku;
            break;

        case "modbtn-print6":
            modal = modalOut;
            break;

        case "modbtn-motion1":
            modal = modalAirmen;
            break;

        case "modbtn-motion2":
            modal = modalSomething;
            break;
    }
    modal.style.display = "block";
}


$('.motion-video').parent().click(function () {
    if ($(this).children(".motion-video").get(0).paused) {
        $(this).children(".motion-video").get(0).play(); $(this).children(".playpause").fadeOut();
    } else {
        $(this).children(".motion-video").get(0).pause();
        $(this).children(".playpause").fadeIn();
    }
});



