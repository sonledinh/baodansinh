
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


$('.slider-for').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, 
    asNavFor: '.slider-nav',
    speed: 500,
});
$('.slider-nav').slick({
    autoplay:false,
    arrow:false,
    slidesToShow: 9,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ],
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    prevArrow: '', 
    nextArrow: '', 
});