window.onload = () => {
  gnbMenu()
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

