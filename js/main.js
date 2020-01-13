$(document).ready(function(){
    $('.toggle-menu').click(function () {
        $('.menu-container').toggleClass('menu-open');
        $(this).toggleClass('active');
    });
});

$('.slider').slick({ 
    slidesToShow: 1,
    slidesToscroll: 1,
    dots: true,
    arrows: false,
})

var halfText = $('.info-about').innerHeight() / 2,
    textHeight = $('.info-about').innerHeight();

$('.info-about').css('height', $('.info-about').innerHeight() / 2);

$('.show-hide').click(function() {
    if( $('.info-about').innerHeight() == halfText ) {
        $('.info-about').animate({ height: textHeight }, 500);
        $(this).text('Hide');
    } else {
        $('.info-about').animate({ height: halfText }, 500);
        $(this).text('Show more');
    }
});

$('.slider-1').slick({ 
    slidesToShow: 1,
    slidesToscroll: 1,
    dots: true,
    arrows: false,
    asNavFor: '.slider-2',
})

$('.slider-2').slick({
    slidesToShow: 1,
    slidesToscroll: 1,
    dots: false,
    arrows: true,
    asNavFor: '.slider-1',     
})

$(document).ready(function() {
    $(".picture").fancybox({
     protect: true,
     toolbar  : false,    });
  });

$('.media-1').slick({ 
    slidesToShow: 1,
    slidesToscroll: 1,
    dots: true,
    arrows: false,
})
