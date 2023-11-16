window.onload = () => {
  gnbMenu();
  search();
  sitemap();
  visualSlider();
  model();
}

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
          console.log(currentMenu)
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
  //onMenuOver
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
  }//onMenu

  //outMenu
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

  
} // gnbMenu

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
} // search

// 햄버거 버튼 기능
/*
    function sitemap(){
        const btn = document.querySelector('.ham-btn');
        const sitemap =document.querySelector('.sitemap');
        let isOpen = true;

        btn.addEventListener('click', function(e){ 
            // 별개로 this 를 넣어줘야 하기 때문에 화살표 함수가 아니라 function 으로 들어간다.
            e.preventDefault() // a 태그 이벤트 이기 때문에 기본동작 이벤트를 막기위해 넣어주는 것이 좋다.
            let winH = window.innerHeight; 
            document.body.style.overflowY = 'hidden';
            // window 의 height 크기를 받아와서 inner 의 영역값이 100% 일때 
            // 부모 요소가 아니라 window 를 기준으로 100% 를 잡을 수 있게 해준다.

             if(isOpen){
                 // .ham-btn 에 class 'on' rotate 부여
                 this.classList.add('on');
                 sitemap.classList.add('on');
                 sitemap.style.maxHeight = `${winH}px`;
                 sitemap.style.height = `${winH}px`;
                 document.body.style.overflowY = 'hidden';
                 isOpen = false;
             }else{
                 this.classList.remove('on');
                 sitemap.classList.remove('on');
                 sitemap.style.maxHeight = '0'
                 sitemap.style.height = '0'
                 document.body.style.overflowY = 'auto';
                 isOpen = true;
             }

         })
     }
*/

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
} // sitemap

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

}// visualSlider

function model(){
    document.querySelectorAll('select').forEach((el)=>{
        const optNum = el.children.length; // => 3
        el.classList.add('select-hide') // 특정 클래스를 줘서 화면에서 제거
        const wrapper = document.createElement('div'); // 객체를 생성
        wrapper.className = 'select'; // className 지정
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);

        // li에서 선택한 텍스트를 출력시켜주는 태그 생성
        const styleSelect = document.createElement('div');
        styleSelect.className = 'select-style';
        styleSelect.textContent = el.children[0].textContent;
        el.after(styleSelect);

        // list ul 생성
        const list = document.createElement('ul');
        list.className = 'select-list';
        styleSelect.after(list); // styleSelect 뒤에 list 삽입 => 자식요소아님 말그대로 코드 구조상 뒤에/ 부모는 같을 수 있음
        /*
            생성된 코드
            <div class="select">
                <select class="select-hide">
                    <option value="all" selected="">ALL</option>
                    <option value="sedan">SEDAN</option>
                    <option value="suv">SUV</option>
                </select>
                <div class="select-style">ALL</div>
                <ul class="select-list"></ul></div>
            </div>
        */

        // li 생성
        for(let i = 0; i < optNum; i++){
            let listItem = document.createElement('li');
            listItem.textContent = el.children[i].textContent;
            listItem.setAttribute('date-target', el.children[i].value);
            list.appendChild(listItem);
            /*
                생성된 코드
                <ul class="select-list">
                    <li date-target="all">ALL</li>
                    <li date-target="sedan">SEDAN</li>
                    <li date-target="suv">SUV</li>
                </ul>
            */
        }
        const listItems = list.children;
        console.log(listItems); // => HTMLCollection(3) [li, li, li]

        // styleSelect 를 클릭했을때 list 창 생성하기
        styleSelect.addEventListener('click',()=>{
            document.querySelectorAll('.select-style.on').forEach((activeEl)=>{
                if(activeEl !== styleSelect){
                    activeEl.classList.remove('on');
                    activeEl.nextSibling.style.display = 'none'
                }
            });
            styleSelect.classList.toggle('on');
            // ul 
            list.style.display = list.style.display === 'block' ? 'none': 'block';
        })
        
        // li 를 클릭하면 li 에 정보가 styleSelect에 전달하기
        list.addEventListener('click',(e)=>{
            const target = e.target;  // 클릭한 target 의 값 가져오기
            if(target.tagName.toLowerCase() === 'li'){ // tagName => tagName 은 소문자가 아닌 대문자로 나옴 그렇기 때문에 toLowerCase() 를 사용해서 소문자로 변환해준다. 
                
            }
        })
    })
}