
$('.slide-big-top').slick({
    autoplay: false,
    arrow: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
    speed: 500,
});  

// $('.slide-news-top').slick({
//     autoplay: false,
//     arrow: true,
//     dots: true,
//     slidesToShow: "auto"
//     slidesToScroll: 1, 
//     prevArrow: '',
//     nextArrow: '',
//     speed: 500,
// });  

new Swiper('.swiper-container', {
    loop: true,  
    slidesPerView: "auto",
    autoplay: false,
    spaceBetween: 20,
});

$('.search-a').click(function(event) {
    $(this).toggleClass('active');
    $('.form-search').slideToggle(400);
});

$('.clickable-menu a').click(function(event) {
    $(this).toggleClass('active');
    $('.all-menu').slideToggle(400);
});