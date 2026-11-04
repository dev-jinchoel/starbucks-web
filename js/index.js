console.log("안녕");

// js에서 html을 불러오는 법 document.querySelector('연결할거');
// doucument:문서의 선택자를 불러오겠다
document.querySelector('#head_layout .inner .search');
// 변수 설정은 var,let이 있고 상수 설정은 const
// var는 요즘 안씀(데이터이상하게가져오는 문제) let을 주로 쓰기!
// 상수 설정인 const는 대부분 가상선택자

const searchEl = document.querySelector('#head_layout .inner .search');
console.log(searchEl);
const searchInputEl = document.querySelector('#head_layout .inner .search input');

// addEventListener('무엇을 했을때'.function(){발생하는 활동})
searchEl.addEventListener('click', function () {
    searchInputEl.focus()
    //깜밖깜밖하는 상태 = focus
    console.log(1);
});

searchInputEl.addEventListener('focus', function () {
    searchInputEl.setAttribute('placeholder', '통합검색');
    //input type = "text" placeholder="통합검색");이랑 같은 의미
    searchEl.classList.add('focused');
    //
})

//blur는 원래상태로 되돌아가는 상태
searchInputEl.addEventListener('blur', function () {
    searchInputEl.setAttribute('placeholder', '');
    searchEl.classList.remove('focused');
})


const badgesE1 = document.querySelector('#head_layout .badges');

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        //배지숨기기
        //badgesE1.style.display = "none";
        gsap.to(badgesE1, .6, {
            opacity: 0,
            display: 'none'
        })
    } else {
        //배지 보이기
        //badgesE1.style.display = "block";
        gsap.to(badgesE1, .6, {
            opacity: 1,
            display: 'block'
        })
    }
}, 300));

const fadeEls = document.querySelectorAll('.banner .fade-in');
console.log(fadeEls);
//foreach문
let sec = 0;
fadeEls.forEach(function (fadeEl, idx) {

    if (idx == 1) {
        gsap.to(fadeEl, 0.3, {
            delay: 4.2,
            opacity: 1
        })
    } else {
        gsap.to(fadeEl, 2, {
            delay: (sec) * .7,
            opacity: 1
        })
        sec++;
    }
});

var swiper1 = new Swiper('.swiper-container', {
  direction: 'vertical',
  autoplay:true,
  loop : true
});

var swiper = new Swiper('.promotion .swiper', {
  autoplay:{
    delay:5000 //5초
  },
  loop : true,
  slidesPerView : 3, //한번에 보여줄 슬라이드 개수
  spaceBetween : 10, // 슬라이드 사이 여백
  centeredSlides : true, // 1번 슬라이드가 가운데
  pagination : {
    el:'.promotion .swiper-pagination',
    clickable : true
  },
  navigation:{
    prevEl : '.promotion .swiper-button-prev',
    nextEl : '.promotion .swiper-button-next'
  }
});

var awardsSwiper = new Swiper('.last-swipe .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,   // 여기는 5
  navigation: {
    prevEl: '.last-swipe .awards-prev',
    nextEl: '.last-swipe .awards-next'
  }
});

// promotinon 토글 기능
// 슬라이드 영역
const promotionE1 = document.querySelector('.promotion');
//슬라이드 영역 토글 버튼
const promotionToggleE1 = document.querySelector('.toggle-promotion');


promotionToggleE1.addEventListener('click', function(){
    if(promotionE1.classList.contains('hide'))
    {
        //hide 존재
        promotionE1.classList.remove('hide');
        promotionToggleE1.classList.add('rot');
    }
    else
    {
        promotionE1.classList.add('hide');
        promotionToggleE1.classList.remove('rot');
    }
})

//스크롤 영역 감지
const spyEls = document.querySelectorAll("#body_layout .scroll-spy");
console.log(spyEls);
spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({//Scene 감지할 요소 추가
        triggerElement : spyEl,//보여짐 여부를 감지할 요소
        triggerHook : 0.8 //화면 80% 지점에서 보여짐 여부 감지
    })
    .setClassToggle(spyEl,'show') // 요소가 화면에 감지되면 show 클래스 추가
    .addTo(new ScrollMagic.Controller());// 코드 내부에 기능 할당(필수!)
})

const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
    if (window.scrollY > 500) {
        gsap.to(badgesE1, .6, { opacity: 0, display: 'none' });
        gsap.to(toTopEl, .2, { x: 0 });      // 버튼 나타나기
    } else {
        gsap.to(badgesE1, .6, { opacity: 1, display: 'block' });
        gsap.to(toTopEl, .2, { x: 100 });    // 버튼 숨기기
    }
}, 300));

// 클릭하면 맨 위로 이동
toTopEl.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});