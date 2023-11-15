window.onload = () => {
  gnbMenu();
  search();
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

  
}

function search(){
    const searchBtn = document.querySelector('.search-wrapper > .search-btn'); // > 자식요소 1개
    const searchWrapper = document.querySelector('.search-wrapper');
    const header = document.querySelector('header');
    
    searchWrapper.addEventListener('click',(e)=>{
        e.stopPropagation() // 이벤트 버블링 방지 / => 이벤트가 다른요소에 영향을 주는것을 방지
    })

    searchBtn.addEventListener('click',(e)=>{
        e.preventDefault(); // 기본 html 태그에 부여된 기본 이벤트 제거
        searchWrapper.classList.add('on');
        console.log('ck2');
    })
    header.addEventListener('click',()=>{
        searchWrapper.classList.remove('on');
        console.log('ck');
    })
    /*
        이벤트 버블링 현상
        ```
            searchBtn.addEventListener('click',(e)=>{
            e.preventDefault();
            searchWrapper.classList.add('on');
            console.log('ck2');
            })
            header.addEventListener('click',()=>{
            searchWrapper.classList.remove('on');
            console.log('ck');
            })
        ```
        두가지 이벤트 동시 출력  
        한 요소에 이벤트가 발생할때 이벤트가 동작되고
        이어서 부모요소에 있는 이벤트도 같이 실행되는 현상  
    */
}