$(function() {

    $(".menu-tab__item").click(function() {
        $('.menu-tab__item ').not(this).removeClass('active');
        $(this).toggleClass('active');
    });

    $(".menu__list-link").click(function() {
        $('.menu__list-link').not(this).removeClass('menu__list-link--active');
        $(this).toggleClass('menu__list-link--active');
    });

    $(".header-btn").on('click', function() {
        $(".menu").toggleClass('menu--open');
    });
})





