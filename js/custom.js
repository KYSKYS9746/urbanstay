$(function(){
    $('.main_visual .mainvisual_slide').slick({
        arrows: false,
        autoplaySpeed: 4000,
        dots: true,
        pauseOnHover: true,
        autoplay: true,
    });

    $('.mopen').on('click', function () {
        $('.gnb').toggleClass('on');
        $(this).find('.hamburger').toggleClass('is-active');
    })


    $('.main_recommend .main_recommend_slide').slick({
        slidesToShow: 4,
        autoplay: true,
        
        speed: 6000,
        autoplaySpeed: 0,
        // cssEase: 'linear', 
        arrows: false,
    });


})