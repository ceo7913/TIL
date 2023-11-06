window.onload = () =>{
    /*
        1. 메인메뉴를 hover 하면 해당하는 서브 메뉴만 드랍
    */

    // querySelectorAll 은 해당 태그를 배열에 담아놓고 따로 출력하지는 않는다.
    // 때문에 이런식으로 querySelectorAll 을 가져오려면 반드시 반복문을 거쳐야 원하는 값을 가져 올 수 있다.
    const mainMenu = document.querySelectorAll('.gnb > li > a');
    const subMenu = document.querySelectorAll('.subMenu');
    const gnb = document.querySelector('.gnb');

    // 여기서 el 은 element 를 뜻함
    mainMenu.forEach((el)=>{
        el.addEventListener('mouseenter', onMenuEnter);
    })

    gnb.addEventListener('mouseleave',onMenuLeave);

    // mainMenu.addEventListener('mouseenter', onMenuEnter);

    function onMenuEnter(){
        subMenu.forEach((el)=>{
            el.classList.remove('on');
        })

        const thisSubMenu = this.nextElementSibling; 
        // this => 현재 onMenuEnter  즉 내가 선택할 선택자를 뜻하는데
        // 현재 선택할 요소인 'a' 태그에 class 'on'을 부여할 것이아닌 a태그를 선택하지만 a태그의 형제요소에 'on'을 부여할 것 이기 때문에
        // nextElementSibling 즉 형제요소를 this 가 참조하게 한다.
        thisSubMenu.classList.add('on')
    }
    function onMenuLeave(){
        subMenu.forEach((el)=>{
            el.classList.remove('on')
        })
    }
}