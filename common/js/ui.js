
//플로팅배너 상단 닫기버튼 클릭시
$('.floating .description .close').on('click',function(){
    console.log('ddd');
    if($('.floating .list .toggle').hasClass('active') === true){
        $('.floating .list .toggle').removeClass('active');
        $(this).removeClass('active');
        console.log(this);
    }else{
        $('.floating .list .toggle').addClass('active');
        $(this).addClass('active');
    }
});

//플로팅배너 more버튼 클릭시
$('.floating .btn-more').on('click',function(){
    console.log('ddd');
    if($('.floating .list .toggle').hasClass('active') === true){
        $('.floating .list .toggle').removeClass('active');
        $(this).removeClass('active');
        console.log(this);
    }else{
        $('.floating .list .toggle').addClass('active');
        $(this).addClass('active');
    }
});

//플로팅배너 bottom버튼 클릭시 scroll
let $w = $(window),
footerHeight = $('footer').outerHeight() +100;
$w.on('scroll', function() {
    var sT = $w.scrollTop();
    var val = $(document).height() - $w.height() - footerHeight;
    if (sT >= val){
        $('.floating .btn-bottom').addClass('up');
    } else {
        $('.floating .btn-bottom').removeClass('up');
    }
});
$(".floating .btn-bottom").click(function(){
    if ($(window).scrollTop() > 0 && $(this).hasClass('up') == true) {
        $('html,body').animate({scrollTop:($('html,body').offset().top)},200);
    } else {
        $('html,body').animate({scrollTop:($('footer').offset().top)},200);
    }
});


//메인 > 추천상품
if ($('.banner-swipe .swiper').length > 0) {
    var mainBannerSwiper = new Swiper('.banner-swipe .swiper', {
        slidesPerView: "1",
        spaceBetween: 60,
        loop: false,
        centeredSlides: true,
        clickable: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 6000,
        },
        navigation: {
            nextEl: ".banner-swipe .swiper-button-next",
            prevEl: ".banner-swipe .swiper-button-prev",
        }
    });
}

//메인 > 이벤트 배너
if ($('.ev-banner .swiper').length > 0) {
    var evSwiper = new Swiper('.ev-banner .swiper', {
        slidesPerView: "3", 
        slidesPerGroup: 3,
        spaceBetween: 8,
        clickable: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: ".ev-banner .swiper-pagination",
          },
    });
}