$(function () {
    'use strict'

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: '<i class="fas fa-arrow-left prev_aro"></i>',
        nextArrow: '<i class="fas fa-arrow-right nxt_aro"></i>',
    });

});