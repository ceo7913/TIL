window.onload = () => {
  gnbMenu();
  search();
  sitemap();
  visualSlider();
  model();
  award();
  contentEvent();
  snsSlider();
};

function gnbMenu(){
  const mainMenu = document.querySelectorAll('.gnb-list > li >a');
  const subMenu = document.querySelectorAll('.subMenu-wrapper');

  const tabMenu = document.querySelectorAll('.subMenu-left a');
  const tabContent = document.querySelectorAll('.subMenu-right-item');

  activeTab(tabMenu[0])//기본탭 활성화
  tabMenu.forEach((el)=>{
      el.addEventListener('click', (e)=>{
          e.preventDefault();
          activeTab(el)
      })
  })
  function activeTab(item){
      const target = item.getAttribute('data-target');
      tabContent.forEach((el)=>{
          el.style.display = 'none';
          item.classList.remove('on');
      });
      const activeTabMenu = document.querySelector(`.subMenu-right-item.${target}`);
      if(activeTabMenu){
          activeTabMenu.style.display = 'block';
          activeTabMenu.classList.add('on');
      }
      tabMenu.forEach((tabItem)=>{
          tabItem.classList.remove('on');
      })
      item.classList.add('on');
  }


  //초기설정값
  subMenu.forEach((menu)=>{
      init(menu)
  })
  //메인메뉴 드랍
  mainMenu.forEach((el, index)=>{
      el.addEventListener('click', ()=>{
          const currentMenu = subMenu[index];
        //   console.log(currentMenu)
          if(currentMenu.dataset.isOpen ==='true'){
              outMenuOver(currentMenu);
          }else{
              transitionMenu(currentMenu);
              onMenuOver(currentMenu)
          }
          mainMenu.forEach((item)=>{
              item.classList.remove('on');
          });
          el.classList.add('on');
          
          
      })
  })
  //초기설정
  function init(menu){
      menu.classList.add('slide-up');
      menu.dataset.isOpen ='false';
      outMenuOver(menu);
  }
 
  function onMenuOver(menu){
      menu.style.display = 'block';
      const winH = window.innerHeight;
      menu.style.maxHeight = `${winH}px`;
      menu.classList.remove('slide-up');
      menu.classList.add('slide-down')
      menu.dataset.isOpen = 'true';

      const rightItem = menu.querySelector('.subMenu-right');
      if(rightItem){
          rightItem.querySelector('.subMenu-right-item').classList.add('on');
          rightItem.style.maxHeight = `${winH}px`;
      }

      const swiperContainer = menu.querySelectorAll('.subMenu-item .swiper-container');
      swiperContainer.forEach((el)=>{
          if(!el.classList.contains('swiper-initialized')){
              new Swiper(el,{
                  navigation : {
                      prevEl : '.swiper-button-prev',
                      nextEl : '.swiper-button-next'
                  },
                  allowTouchMove : false,
                  speed : 0
              })
          }
      })
  }//onMenuOver

  function outMenuOver(menu){
      if(!menu) return;
      menu.style.maxHeight = '0';
      menu.classList.remove('slide-down');
      menu.classList.add('slide-up');
      menu.dataset.isOpen = 'false'
  }//outMenu

  function transitionMenu(menu){
      document.querySelectorAll('.subMenu-wrapper').forEach((el)=>{
          if(el !== menu && el.dataset.isOpen === 'true'){
              outMenuOver(el)
          }
      })
  }
}; // gnbMenu

// 검색기능
function search(){
    const searchBtn = document.querySelector('.search-wrapper > .search-btn');
    const searchWrapper = document.querySelector('.search-wrapper');

    // tag
    const header = document.querySelector('header');
    const inputItem = document.querySelector('input')

    const toggleSearch = (isShow) =>{
        if(isShow){ // true 라면
            searchWrapper.classList.add('on');
            inputItem.focus(); // 포커스 기본세팅
        }else{
            searchWrapper.classList.remove('on');
            inputItem.value = ''; // 검색내용 초기화
        }
    }
    searchBtn.addEventListener('click',(e)=>{
        toggleSearch(true);
        e.stopPropagation(); // 이벤트 버블링 방지 / => 이벤트가 다른요소에 영향을 주는것을 방지
    })
    header.addEventListener('click',()=>{
        toggleSearch(false);
    })
    searchWrapper.addEventListener('click',(e)=>{
        e.stopPropagation();
    })
}; // search

// 햄버거 버튼 기능
// sitemap function 리팩토링
function sitemap(){
    const btn = document.querySelector('.ham-btn');
    const sitemap = document.querySelector('.sitemap');
    let isOpen = true;

    btn.addEventListener('click',function(e){
        e.preventDefault() // a 태그 이벤트 이기 때문에 기본동작 이벤트를 막기위해 넣어주는 것이 좋다.

        if(isOpen){
            toggleSiteMap('open',sitemap);
        }else{
            toggleSiteMap('close',sitemap);
        }
        isOpen = !isOpen // isOpen 세팅
        // isOpen 이 변경되는 구문을 넣어주지 않았기 때문에
        // 로직의 순서상 isOpen 이 false 를 받아주기 위해 넣어줌
        // 그냥 변경되는 구문을 넣어도 상관 없음
        console.log(isOpen); // => 첫번째 클릭 : false / 두번째 클릭 : true / => 즉 초기값 true
    })
    function toggleSiteMap(action,el){
        const winH = window.innerHeight;
        const overFlowAction = action === 'open' ? 'hidden' : 'auto';
        const maxH = action === 'open' ? `${winH}px` : '0';

        btn.classList.toggle('on', action ==='open'); // add, remove 와 같은 역할을 해줌 => 대신 조건문 필요
        el.classList.toggle('on', action ==='open');
        el.style.maxHeight = maxH;
        el.style.height = maxH
        document.body.style.overflowY = overFlowAction;
    }
}; // sitemap

function visualSlider(){
    const pausBtn = document.querySelector('.pause-btn');
    let isPlay =true;

    // swiper 기능정리
    const swiper = new Swiper('.visual-wrapper .swiper-container',{
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        effect: 'creative',
        creativeEffect:{
            // 슬라이드 될때 겹치면서 넘어오는 효과
            prev:{
                translate: ['-100%',0,0]
            },
            next:{
                translate: ['50%',0,-1] // 두번째 y 속성 마지막 z 속성
            }
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true, // 클릭시 해당 페이지로 swipe
        }
    });
    
    // 메인 슬라이드 auto-play 버튼 제어 함수
    pausBtn.addEventListener('click',function(){
        if(isPlay){
            swiper.autoplay.stop();
            this.classList.add('on');
            isPlay = false;
        }else{
            swiper.autoplay.start();
            this.classList.remove('on');
            isPlay = true;
        }
    });

}; // visualSlider

// model 리팩토링
function model(){
    init();
    resizeMenu() // 기본실행
    window.addEventListener('resize', resizeMenu); // event => resize = 크기값을 받아온다.
    
    // 기본값 설정
    function init(){
        document.querySelectorAll('select').forEach((el)=>{
            createMenu(el);
        })
        initMenu()
    }

    function resizeMenu(){
        const category = document.querySelector('.category');
        if(window.innerWidth < 768){
            category.classList.add('mobile');
        }else{
            category.classList.remove('mobile');
        }
    }

    function initMenu(){
        const firstOpt = document.querySelector('.select-list li:first-child');
        if(firstOpt){
            const styleSelect = firstOpt.closest('.select').querySelector('.select-style'); // closest = 나를 감싸고 있는 최상위 요소를 찾음
            const select = styleSelect.previousElementSibling;
            listToggleMenu({target: firstOpt},styleSelect,select);
        }
    }
    // 객체 구조 생성
    function createMenu(el){
        const optNum = el.children.length;
        // console.log(optNum); // => 3
        el.classList.add('select-hide');
        createWrapper(el) // .select 생성
        const styleSelect = selectMenu(el); // 셀렉된 메뉴 생성
        const list = createList(styleSelect, el, optNum); // ul li 생성

        // click envent
        styleSelect.addEventListener('click',()=>toggleMenu(styleSelect, list));
        list.addEventListener('click',(e)=>listToggleMenu(e, styleSelect, el));
    }

    function createWrapper(el){
        const wrapper = document.createElement('div');
        wrapper.className = 'select';
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);
    }

    function selectMenu(el){
        const styleSelect = document.createElement('div');
        styleSelect.className = 'select-style';
        styleSelect.textContent = el.children[0].textContent;
        el.after(styleSelect);

        return styleSelect 
        // 객체가 DOM 에는 생성이 되지만 styleSelect 변수는 지역변수이기 때문에 
        // 다른 함수에서 사용하려면 return 으로 내보내 줘야한다.
    }

    function createList(styleSelect, el, optNum){
        const list = document.createElement('ul');
        list.className = 'select-list';
        // console.log(styleSelect);
        styleSelect.after(list);

        // li 생성
        for(let i = 0; i < optNum; i++){
            let listItem = document.createElement('li');
            listItem.textContent = el.children[i].textContent;
            listItem.setAttribute('data-target', el.children[i].value);
            list.appendChild(listItem);
        }
        return list; // 함수내부에서 선언한 변수 return
    }

    function toggleMenu(styleSelect, list){
        styleSelect.classList.add('on');
        list.style.display = list.style.display === 'block' ? 'none' : 'block';
    }

    function closeMenu(styleSelect){
        const activeSel = document.querySelector('.select-style.on');
        if(activeSel === styleSelect){
            activeSel.classList.remove('on');
            activeSel.nextElementSibling.style.display = 'none'
        }
    }

    function listToggleMenu(e, styleSelect, el){
        const target = e.target;
        // console.log(target); // => 클릭한 tage
        // console.log(target.tagName); // => 클릭한 tage name / 대문자로
        if(target.tagName.toLowerCase() === 'li'){ // toLowerCase() 소문자 변환
            selectOpt(target, styleSelect, el);
            contentTab(target)
        }
    }

    function selectOpt(target, styleSelect, el){
        styleSelect.textContent = target.textContent;
        el.value = target.getAttribute('data-target'); // 선택한 target 의 data-target 명
        closeMenu(styleSelect)
        const list = document.querySelectorAll('.select-list > li');
        list.forEach((el)=>{
            el.classList.remove('on');
        })
        target.classList.add('on');
    }

    function contentTab(target){
        const activeClass = target.getAttribute('data-target');
        const tabItem = document.querySelectorAll('.model-list-wrapper');
        tabItem.forEach((el)=>{
            el.style.display = el.classList.contains(activeClass)? 'block' : 'none';
        })
        initSwiper(activeClass);
    }

    function initSwiper(activeClass){
        const tabItem = document.querySelector(`.model-list-wrapper.${activeClass}`); // 전달
        if(tabItem){
            const swiperContainer = tabItem.querySelector('.swiper-container');
            if(!swiperContainer.classList.contains('.swiper-initialized')){ // contains() = 있는지 없는지 여부확인 
                new Swiper(swiperContainer,{
                    // mobile 기준
                    slidesPerView : 1,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    // 반응형
                    breakpoints:{
                        // 768 보다 큰경우
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }
                })
            }
        }
    }

};

function award(){
    let bullet = ['2023 CAR DESIGN AWARD','2023 RED DOT DESIGN AWARD','2023 MOTORTREND CAR OF THE YEAR',
    '2022 RED DOT AWARDS','J.D POWER 2022 U.S.INITAL QUALITY STUDY','2022 IIHS TOP SAFETY PICK+']    
    const textSwiper = new Swiper('.text-box .swiper-container',{
        loop: true,
        speed: 5000,
        autoplay: { 
            delay: 1000, // 1초마다 슬라이드
        },
        allowTouchMove: false,
        effect: 'fade',
        fadeEffect:{
            crossFade: true, // effect: 'fade' 의 경우 컨텐츠가 바뀔때 겹치는 현상이 있기 때문에
            // 해당 구문을 넣어줘야 이러한 오류를 막을 수 있다.
        }
    })
    // 서브(textSwiper)가 되는 스와이퍼가 먼저 선언이 되어야 메인(imgSwiper)에서 참조가 가능하다.
    const imgSwiper = new Swiper('.award-item.swiper-container',{
        loop: true,
        speed: 5000, // 슬라이드가 진행부터 완료되는 시간 
        autoplay: { 
            delay: 1000, // 1초마다 슬라이드
        },
        thumbs: {
            swiper: textSwiper, // 메인이 되는 스와이퍼 요소에 textSwiper 의 컨트롤을 연결 => multy slider 기본요소 
        },
        allowTouchMove: false,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function(index, item){
                // pagination bullet 에 텍스트(bullet) 추가
                return `<div class="${item}"><span>${bullet[index]}</span></div>`
            },
        },
        effect: 'fade',
        fadeEffect:{
            crossFade: true,
        },
    })
    // function startAuto(){
    //     imgSwiper.params.autoplay.delay = 1000;
    //     imgSwiper.autoplay.start()
    // }
    // setTimeout(startAuto,5000);
    

};

function contentEvent(){
    const sections = document.querySelectorAll('section'); // 모든 section
    let sectionPosArr = []; // 빈 배열 선언
    const basePos = window.innerHeight / 2; // 영역의 시작점을 Top 을 닫기 전에 나올 수 있게 해주는 셋팅값
    
    onResize() // 브라우저의 크기가 바뀌기 전, 최초의 값을 받아온다.
    onScroll() // 브라우저 랜더링 후 바로 최초 값 받아옴
    window.addEventListener('resize',onResize);
    window.addEventListener('scroll',onScroll);

    function onResize(){
        sectionPosArr = Array.from(sections).map((el) => el.offsetTop) 
        // sectionPosArr 에 sections 을 미리 넣지 않고 addEventListener 에서 배열로 받는 이유는
        // 페이지가 고정값이 아닌 반응형으로 여러가지 사이즈를 출력해줘야 하기 때문
        // console.log(sectionPosArr);
    }
    function onScroll(){
        const scrollTop = document.documentElement.scrollTop || window.pageXOffset // window.pageXOffset 구버전 호환
        // console.log(scrollTop);

        // 스크롤 이벤트의 기초적인 구조
        sections.forEach((el,index)=>{
            if(scrollTop > sectionPosArr[index] - basePos){ // sectionPosArr[index] 은 현재 dom 요소에 깔려있는 section 의 위치값을 받는다.
                el.classList.add('on');
            }
        })
    }

};

function snsSlider(){
    const swiper = new Swiper('.f-notice-list.swiper-container',{
        direction: 'vertical',
        autoHeight: true, // 자동으로 auto 값 잡아줌
        loop: true,
        autoplay: {
            delay: 2500,
        },
        speed: 1000,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next'
        }
    })
};