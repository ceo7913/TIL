/*
    로직
    1. 특정한 클래스를 추적 => 특정한 클래스(horiaontal-scroll)를 만나면 스크롤 이벤트 방향 변경
    2. 요소들의 위치값을 계산
    3. 해당 요소가 특정 위치값에 있다는걸 확인하기 위해 '특정 클래스명 전달'
*/

window.onload = () =>{
    let winScrollTop = window.pageYOffset; // 현재 창의 스크롤 위치
    let winW = window.innerWidth; // 브라우저(window)의 영역값(넓이) section 하나의 값
    let winH = window.innerHeight // 브라우저(window)의 영역값(높이)

    const itemClass = 'slider'; // 공통으로 들어갈 클래스명 => 사실상 slider 라는 클래스를 찾기위해 필요(가로슬라이드가 들어갈 section)
    const itemActive = `${itemClass}-active`; // 시작위치에 있는 요소에 들어갈 클래스 명
    const itemEnd = `${itemClass}-end`; // 끝나는 위치에 있는 요소에 들어갈 클래스명

    const slideSection = document.querySelectorAll('.horizontal-scroll'); // slider 상위 요소, 역시 가로슬라이더가 들어갈 section

    slideSection.forEach((el)=>{
        setScroll(el);
        setActive(el);
    })

    window.addEventListener('scroll',()=>{
        winScrollTop = window.pageYOffset; 
        // 기존 스크롤 값에서 스크롤 이벤트가 들어올 경우 재 반환을 위해 재 선언
        slideSection.forEach((el)=>{
            activeScroll(el);
            setActive(el)
        }) 
    })

    function setActive(el){
        const bounding = el.getBoundingClientRect(); 
        /*
            getBoundingClientRect = 페이지 내에서 요소가 어느 위치에 있는지

            console.log(bounding.bottom); 
            => DOMRect {x: 0, y: 1339, width: 1034, height: 864, top: 1339, …} 값은 스크롤 할때 마다 변경됨
            
            현재el = slideSection 즉 horizontal-scroll 의 요소 위치값을 받아 온다.
        */
        el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl)=>{
            itemClassEl.classList.remove(itemActive);
            itemClassEl.classList.remove(itemEnd); 
        }) // 기존에 있던 특정 클래스 초기화

        // 조건을 만족하는 경우 'Active', 'end' class 를 붙혀주기 위한 반복문
        if(bounding.bottom < 0){ // .horizontal-scroll 요소의 bottom 값이 0이 됨을 의미
            el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl)=>{
                itemClassEl.classList.add(itemEnd)
            })
        }else{
            el.querySelectorAll(`.${itemClass}`).forEach((itemClassEl)=>{
                if(bounding.top <= 0){ // 지정한 요소의 top 이 0이랑 같거나 작다면 브라우저 화면상에 top 끝지점에 닿았다는 뜻
                    itemClassEl.classList.add(itemActive);
                }else if(bounding.bottom <= winH){
                    itemClassEl.classList.add(itemEnd);
                };
            });
        }
    }

    function setScroll(el){
        const sectionClass = el.classList[0];
        // console.log(sectionClass); // => horizontal-scroll
        const contentWrapper = el.querySelector(`.${sectionClass}-item`);
        /*
            index.html
            <div class="slider">
                <ul class="horizontal-scroll-item">
                    <li>item1</li>
                    <li>item2</li>
                    <li>item3</li>
                    <li>item4</li>
                    <li>item5</li>
                    <li>item6</li>
                </ul>
            </div>
        */
        const contentWrapperWinW = contentWrapper.scrollWidth
        // console.log(contentWrapperWinW); // => 4587 / 유동적으로 변하는 값
        /*
            Element.scrollWidth 는 오버플로같은것으로 
            인해 화면에 표시되지 않는 콘텐츠를 포함하여 요소 콘텐츠의 너비를 (속성) 찾아내는것 (프로퍼티)
         */

        el.contentWrapper = contentWrapper;
        el.contentWrapperWinW = contentWrapperWinW

        el.rightMax = -(contentWrapperWinW - winW);
        // console.log(el.rightMax); // => -5232 / 유동적으로 변하는 값
        el.style.height = `${el.contentWrapperWinW}px`
        // console.log(el.style.height); 

        el.innerHeight = el.offsetHeight // 요소의 높이에 offsetHeight 값을 대입해서 컨텐츠의 전체 높이를 저장
        /*
            document 의 총 높이 값이 있을때 하나의 섹션이 1000의 높이 값을 가지고 있고 4개의 section 이 있다면
            document 의 총 높이값은 4000이 된다. 그렇지만 중간중간 가로 슬라이드가들어가야 한다면 가로슬라이드가
            들어가야할 section 의 높이값은 1000 이 아니라 가로 값이 되어야 스크롤이 내려갈때 가로로 슬라이드 
            할 수 있다. 때문에 해당 section 의 가로값을 세로 값에 대입하여야 스크롤을 완료할 수 있다. 
            다만 const itemActive = `${itemClass}-active`; 의 값이 들어갔을때 css에 
            위치값이 fixed 가 되어있어야 해당 위치에 fixed 되어서 가로로 슬라이드 할 수 있다.
        */
        el.init = true; // 초기화 여부 boolean 으로 변환
        el.transformX = '0'; // 최초 가로 슬라이드 시작할 위치값 
        el.classList.add(`${sectionClass}-init`);
    }

    function activeScroll(el){
        // 스크롤 액션
        const scrollP = winScrollTop - el.offsetTop;
        const scrollCenter = scrollP / (el.innerHeight - (winH - winW));
        const transformP = scrollCenter * el.contentWrapperWinW;
        let toTransform = -(transformP);
        toTransform = Math.min(0, toTransform);
        toTransform - Math.max(toTransform, el.rightMax);

        el.transformX = toTransform;
        el.contentWrapper.style.transform = `translateX(${el.transformX}px)`
    }

}