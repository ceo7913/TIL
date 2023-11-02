window.onload = () =>{
    /*
        1. 모든 메인 메뉴를 hover 하면 전체 서브메뉴가 내려오도록 한다.
        2. 서브 메뉴의 전체 배경 태그가 따로 생성되도록
        위치는 header-bottom-wrapper 의 다음 요소
        3. 서브메뉴가 닫히는 조건
        - gnb 에 마우스가 떠날때 서브 메뉴와 전체 배경태그가 같이 사라짐
    */
   const mainMenu = document.querySelectorAll('.gnb > li > a');
   const subMenu = document.querySelectorAll('.submenu-list');
   const headerWrapper = document.querySelector('.header-bottom-wrapper');
//    const mainBg = document.querySelector('.main-bg');
   const wrapper = document.querySelector('.header-bottom-wrapper')

//    mainMenu.forEach((el)=>{
//         el.addEventListener('mouseenter',onMenuEnter);
//    })
//    mainMenu.forEach((el)=>{
//         el.addEventListener('mouseleave',onMouseLeave);
//    })
// function onMenuEnter(){
//     mainBg.style.display = 'block';
// }

// function onMouseLeave(){
//     mainBg.style.display = 'none';
// }
    mainMenu.forEach((el)=>{
        el.addEventListener('mouseenter',onMenuEnter);
    })
        function onMenuEnter(){
            let fullMenu = document.createElement = ('div');
            fullMenu.class = 'main-bg';
            
            const menuEvent = wrapper.parentNode(fullMenu);
        }
}

