window.onload = () =>{
    gnbMenu()
}

function gnbMenu(){
    // drop-menu
    const mainMenu = document.querySelectorAll('.gnb-list > li > a');
    const subMenu = document.querySelectorAll('.subMenu-wrapper');

    let isOpen = false;
    // console.log(mainMenu);

    mainMenu.forEach((el,idx)=>{
        // console.log(idx);
        el.addEventListener('click',()=> toggleMenu(subMenu[idx]))
    })
    function toggleMenu(index){
        if(isOpen == false){
            onMenuOver(index)
        }else{
            outMenuOver(index)
        }
    }
    function onMenuOver(menu){
        requestAnimationFrame(()=>{
            const maxH = window.innerHeight; // window 의 높이 값
            menu.style.display = 'block';
            menu.style.height = `${maxH}px`;
            menu.classList.remove('slide-up');
            menu.classList.add('slide-down');
            isOpen = true;
        })
    }
    function outMenuOver(menu){
        requestAnimationFrame(()=>{
            menu.style.height = '0';
            menu.classList.remove('slide-down');
            menu.classList.add('slide-up');
            isOpen = false;
        })
    }
}