window.onload = () =>{
    gnbMenu()
}

function gnbMenu(){
    // drop-menu
    const mainMenu = document.querySelectorAll('.gnb-list > li > a');
    const subMenu = document.querySelectorAll('.subMenu-wrapper');

    const tabMenu = document.querySelectorAll('.subMenu-left a');
    const tabContent = document.querySelectorAll('.subMenu-right-model');

    tabMenu.forEach((el)=>{
        el.addEventListener('click',function(){ // 평소대로 화살표함수를 사용한다면 this 는 window 를 출력
            // data-target 찾는법
            const target = this.getAttribute('data-target')
            console.log(target); // => data-target 중 선택한 name 
            
            tabContent.forEach((content)=>{
                content.style.display = 'none'
                content.classList.remove('on');
            })
            const activeTab = document.querySelector(`.subMenu-right-model.${target}`);
            if(activeTab){
                activeTab.style.display = 'block';
                activeTab.classList.add('on');
                const activeSwiper = activeTab.querySelector('.swiper-container').swiper;
                if(activeSwiper){
                    activeSwiper.update(); // 또 다른 swiper 설정 (update)
                }else{
                    new Swiper(activeTab.querySelector('.swiper-container'),{
                        slidesPerView : 'auto',
                        navigation : {
                            prevEl : '.swiper-button-prev',
                            nextEl : '.swiper-button-next'
                        },
                        allowTouchMove : false, // 스와이프 기능 중지
                        speed : 0, // 슬라이드 넘어가는 transition 속도 0
                        watchOverFlow : true, // 페이지가 하나일 경우 button 을 생성하지 않는다.
                    })
                }
            }
        })
    })

    let isOpen = false;
    // console.log(mainMenu);

    mainMenu.forEach((el,idx)=>{
        // console.log(idx);
        el.addEventListener('click',()=> toggleMenu(subMenu[idx]))
    })

    // subMenu 초기값 설정
    subMenu.forEach((el)=>{
        outMenuOver(el);
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

            const rightItem = menu.querySelector('.subMenu-right');
            if(rightItem){
                rightItem.querySelector('.subMenu-right-model').classList.add('on');
                rightItem.style.height = `${maxH}px`
            }
        })
        // transition 을 최대한 안정적이게 실행 될 수 있게 하기 위해
        // requestAnimationFrame 을 사용한다. / 없어도 실행되는대에는 문제가 없다.

        // gnbswiper
        const swiperContainer = menu.querySelectorAll('.subMenu-item .swiper-container');
        swiperContainer.forEach((el)=>{
            if(!el.classList.contains('swiper-initialized')){ 
                console.log(el);
                /*
                    if (!container.classList.contains('찾을 class 명'))해당 클래스가 있는지 없는지 확인

                    즉'(el = .swiper-container) 안에 
                    className = swiper-initialized 가 없다면' 이라는 뜻
                */
                new Swiper(el,{
                    slidesPerView : 'auto',
                    navigation : {
                        prevEl : '.swiper-button-prev',
                        nextEl : '.swiper-button-next'
                    },
                    allowTouchMove : false, // 스와이프 기능 중지
                    speed : 0, // 슬라이드 넘어가는 transition 속도 0
                })
            }
        })
    }
    function outMenuOver(menu){
            menu.style.height = '0';
            menu.classList.remove('slide-down');
            menu.classList.add('slide-up');
            isOpen = false;

            const rightItem = menu.querySelector('.subMenu-right');
            if(rightItem){
                rightItem.querySelector('.subMenu-right-model').classList.remove('on');
                rightItem.style.height = 0;
            }
    }
}