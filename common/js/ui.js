//플로팅배너 에싸멤버십 닫기 클릭시
// 쿠키 가져오기
var getCookie = function (cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    }
    return "";
}

// 24시간 기준 쿠키 설정하기  
var setCookie = function (cname, cvalue, exdays) {
    var todayDate = new Date();
    todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
    var expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

var couponClose = function(){
    if($("input[name='today_close1']").is(":checked") == true){
        setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
    }
    $(".floating .description").hide();
}

$(document).ready(function(){
    var cookiedata = document.cookie;
    couponClose();
    if(cookiedata.indexOf("close=Y")<0){
        $(".floating .description").show();
    }else{
        $(".floating .description").hide();
    }
    $("input[name='today_close1']").click(function(){
        couponClose();
    });
});


/*검색창*/
$('header li.search').on('click', function(){
    $('.gnb-wrap').toggleClass('revers');
    $('body').toggleClass('active');
    $('.search-box').stop().slideToggle();
});
$('.search-box .bg').on('click', function(){
    $('.gnb-wrap').removeClass('revers');
    $('body').removeClass('active');
    $('.search-box').stop().slideUp();
});

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


/* mo > hambuger */
$('.hamburger input[name=toggleCheck').on('click',function(){    
    if($("input[name=toggleCheck]").is(":checked") === true){
        $('.header-menu-box').addClass('active');
        $('.main').addClass('active')
    }else{
        $('.header-menu-box').removeClass('active');
        $('.main').removeClass('active')
    }
});

// iframe resize
