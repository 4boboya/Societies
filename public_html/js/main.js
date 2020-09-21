// JavaScript Document

$(function () {

    $("a[href=#start]").click(function () {

        $("html,body").animate({scrollTop: $('#start').offset().top}, "show");

        return false;

    });

});
$(function () {

    $("#gotop").click(function () {

        $("html,body").animate({scrollTop: 0}, 900);

        return false;

    });

});
$(function () {

    $('.collapsible').collapsible();

    $('i').css({
        'white-space': 'nowrap'
    });

});
$(function () {

    $('.dropdown-trigger').dropdown();

});
$(function () {

    $('.dropdown-trigger').dropdown();

    $('.carousel').carousel();
});
$(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
});
