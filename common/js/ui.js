//main페이지,서브페이지일때 gnb 구분
$('.gnb-wrap').each(function() {
    var $nextDiv = $(this).next('main');

    if ($nextDiv.length > 0) {
        $(this).removeClass('sub-revers');
    } else {
        $(this).addClass('sub-revers');
    }
});

if($(window).width() < 1181) {
    gnbMotionmo();
} else {
    gnbMotionpc();
}

$(window).resize(function() {
    headerBgHeight();

    if($(window).width() < 1181) {
        gnbMotionmo();
    } else {
        gnbMotionpc();
    }
});

//scroll시 header
$(window).on('scroll', function() {
    if($(window).scrollTop() > 0) {
        $('.gnb-wrap').addClass('revers');  
    } 
    else {
        $('.gnb-wrap').removeClass('revers');      
        $('header .depth-menu').stop().slideUp();
        $('header .bg').stop().slideUp();
    } 
});


//검색창
$('header li.search').on('click', function(){
    console.log('aaaa');
    $('.gnb-wrap').toggleClass('search-revers');
    $('.search-box').stop().slideToggle();
});
$(document).on('click', function(event) {
    var $target = $(event.target);
    if (!$target.closest('.gnb-wrap').find('.ico.search').length && !$target.closest('.search-box').length) {
        $('.search-box').stop().slideUp();
        $('.gnb-wrap').removeClass('search-revers');
    }
});

function headerBgHeight() {
    var maxHeight = 0;

    $('header .depth-menu').each(function() {
        var menuHeight = $(this).outerHeight();
        if (menuHeight > maxHeight) {
            maxHeight = menuHeight;
        }
    });

    $('header .bg').height(maxHeight);
}

function gnbMotionpc(){
    $('.header-menu-box').on({
        "mouseover" : function(){
            headerBgHeight();
            $('header .depth-menu').stop().slideDown();
            $('header .bg').stop().slideDown();
            $('.gnb-wrap').addClass('revers');
            $('.gnb-wrap').removeClass('search-revers');
            $('.search-box').stop().slideUp();
        },
        "mouseout" : function(){
            $('header .depth-menu').stop().slideUp();
            $('header .bg').stop().slideUp();
            $('.gnb-wrap').removeClass('revers');
        }
    });
};
function gnbMotionmo(){
    //hambuger
    $('.hamburger input[name=toggleCheck').on('click',function(){    
        if($("input[name=toggleCheck]").is(":checked") === true){
            $('.header-menu-box').addClass('active');
        }else{
            $('.header-menu-box').removeClass('active');
        }
        $('.header-menu-box').find('.depth-menu').stop().slideUp();
    });

    $('.header-menu-box .header-menu a').on('click',function(){
        $(this).closest('li').find('.depth-menu').stop().slideToggle();
        $('.header-menu-box .header-menu a').not($(this)).closest('li').find('.depth-menu').stop().slideUp();
    })
};


//플로팅배너 more버튼 클릭시
$('.floating .btn-more').on('click',function(){
    if($('.floating .list .toggle').hasClass('active') === true){
        $('.floating .list .toggle').removeClass('active');
        $(this).removeClass('active');
    }else{
        $('.floating .list .toggle').addClass('active');
        $(this).addClass('active');
    }
});

//플로팅배너 bottom버튼 클릭시 scroll
let $w = $(window),
footerHeight = $('footer').outerHeight() +100;
$w.on('scroll', function() {
    let sT = $w.scrollTop();
    let val = $(document).height() - $w.height() - footerHeight;
    if (sT >= val){
        $('.floating .btn-bottom').addClass('up');
    } else {
        $('.floating .btn-bottom').removeClass('up');
    }
});
$(".floating .btn-bottom").click(function(){
    if ($(window).scrollTop() > 0 && $(this).hasClass('up') == true) {
        $('html,body').animate({scrollTop:($('html,body').offset().top)},400);
    } else {
        $('html,body').animate({scrollTop:($('footer').offset().top)},400);
    }
});


//메인 > 추천상품
if ($('.banner-swipe .swiper').length > 0) {
    const mainBannerSwiper = new Swiper('.banner-swipe .swiper', {
        slidesPerView: "1",
        spaceBetween: 60,
        loop: false,
        centeredSlides: true,
        clickable: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".banner-swipe .swiper-button-next",
            prevEl: ".banner-swipe .swiper-button-prev",
        }
    });
}

//메인 > 이벤트 배너
if ($('.ev-banner .swiper').length > 0) {
    const evSwiper = new Swiper('.ev-banner .swiper', {
        slidesPerView: "3", 
        slidesPerGroup: 3,
        spaceBetween: 8,
        clickable: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: ".ev-banner .swiper-pagination",
        },
        breakpoints: {
            320: {
                slidesPerView: 1,  
            },      
            480: {
                slidesPerView: 2,  
            },     
            860: {
              slidesPerView: 3,  
            }, 
            1180: {
                slidesPerView: 3,
            },
        },
    });
}


//플래그십 레이아웃
$('.grid').masonry({
itemSelector: '.grid-item',
columnWidth: '.grid-sizer',
gutter: 16,
percentPosition: true
});


//브랜드 라인업
var lineupSwiper = new Swiper(".main-line-up .mySwiper", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
  });
var lineupSwiper2 = new Swiper(".main-line-up .mySwiper2", {
    spaceBetween: 10,
    autoplay: {
        delay: 4000,
    },
    navigation: {
        nextEl: ".main-line-up .swiper-button-next",
        prevEl: ".main-line-up .swiper-button-prev",
    },
    pagination: {
      el: ".main-line-up .swiper-pagination",
      type: "fraction",
    },
    thumbs: {
        swiper: lineupSwiper,
    },
});


//메인 > 제품후기
if ($('.review-swipe .swiper').length > 0) {
    const reviewSwiper = new Swiper('.review-swipe .swiper', {
        slidesPerView: '4',
        spaceBetween: 0,
        loop: false,
        clickable: false,
        observer: true,
        observeParents: true,
        autoplay: {
            delay: 5000,
        },
        navigation: {
            nextEl: ".review-swipe .swiper-button-next",
            prevEl: ".review-swipe .swiper-button-prev",
        },
        breakpoints: {     
            320: {
              slidesPerView: 1,  
            },             
            680: {
              slidesPerView: 2,  
            },        
            960: {
                slidesPerView: 3,  
            },
            1180: {
                slidesPerView: 4,  
            },
        },
    });
}

let $currentTooltip = null; // 현재 활성화된 툴팁을 저장할 변수

$('.review-swipe .swiper-slide').on('mouseenter', function(event) {
    const $item = $(this);
    const $tooltip = $item.find('.hover-box');
    const $swiperContainer = $('.review-swipe .swiper');

    $currentTooltip = $tooltip; // 현재 툴팁 저장

    // 툴팁을 슬라이드 안으로 이동
    $item.append($tooltip);

    $(this).css('z-index', '100');

    // 툴팁의 위치를 CSS 기준으로 설정 (기본적으로 컨테이너 넘어가지 않게 설정)
    $tooltip.css({
        left: '22%',
    });

    // 툴팁이 컨테이너를 넘어가는지 확인하고 슬라이드 기준으로 위치 조정
    const containerRect = $swiperContainer[0].getBoundingClientRect();
    const tooltipRect = $tooltip[0].getBoundingClientRect();
    const slideRect = $item[0].getBoundingClientRect();

    if (tooltipRect.right > containerRect.right) {
        const newTooltipRight = slideRect.right - containerRect.right + 22; // 오른쪽에 10px 여백을 주어 붙임
        $tooltip.css({
            right: newTooltipRight + '%',
            left: 'auto' // left 속성 제거
        });
    }    
});

$('.review-swipe .swiper-slide').on('mouseleave', function(event) {
    const $item = $(this);
    const mouseLeftContainer = event.relatedTarget && !$.contains($item[0], event.relatedTarget);

    $(this).css('z-index', '1');

    // 마우스가 컨테이너를 벗어났을 때 툴팁을 숨김
    if ($currentTooltip && mouseLeftContainer) {
            
        $item.append($currentTooltip);
        $currentTooltip.css({
            right: '', // right 속성 초기화
            left: '', // left 속성 초기화
        });

        $currentTooltip = null; // 현재 툴팁 초기화
    }
});



//메인 > 글로벌 프로젝트
var movieSwiper = new Swiper(".movie-wrap .movierSwiper", {
    spaceBetween: 12,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {          
        320: {
            slidesPerView: 1, 
          },       
          960: {
              slidesPerView: 4,
          },
    },
  });
var movieSwiper2 = new Swiper(".movie-wrap .movierSwiper2", {
    spaceBetween: 10,
    effect : 'fade',
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: ".movierSwiper2 .swiper-button-next",
        prevEl: ".movierSwiper2 .swiper-button-prev",
    },
    thumbs: {
        swiper: movieSwiper,
    },
});
$(window).resize(function(){resizeYoutube();});
    $(function(){resizeYoutube();});
    function resizeYoutube(){ $("iframe").each(function(){ 
    if( /^https?:\/\/www.youtube.com\/embed\//g.test($(this).attr("src")) ){
            $(this).css("width","100%"); 
            $(this).css("height",Math.ceil( parseInt($(this).css("width")) * 480 / 854 ) + "px");
        } 
    }); 
}


// iframe resize
