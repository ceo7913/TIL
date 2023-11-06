window.onload = () =>{
    slider();
};

/*
    로직 구성
    1. navi 에 있는 버튼을 클릭하면 해당하는 순번의 panel 이 슬라이드 되는 방식
    2. 슬라이드가 이동이 되면서 circle 이미지도 class가 변환되는 방식
    3. navi 에서 클릭하는 버튼의 index 를 먼저 알아내야함
*/

function slider(){

    const canvas = document.querySelector('#slider'); // 슬라이더 전체 길이가 아닌 패널 하나당의 길이를 알기위해 slider 를 받아온다.
    const panel = document.querySelector('.panel');
    const btns = document.querySelectorAll('.navi > li');

    const panelItme = panel.querySelectorAll('li'); // panel 하위 요소의 li
    const circle = document.querySelector('#circle');

    const speed = 1000; // 슬라이드가 진행될때의 총 시간
    let timer;
    let enableClick = true;

    const btnsArr = Array.from(btns); // btns 를 배열에 쪼개서 담는다.
    console.log(btnsArr);
    // 여러개의 객체에 이벤트를 줘야 할때
    btns.forEach((el, idx)=>{
        el.addEventListener('click',()=>{
            // 여기서 el 매개변수는 li 를 반환
            /*
                btns.forEach((itme)=>{
                    itme.classList.remove('on'); // 새롭게 on 을 넣어주기 전 li의 class 초기화
                })
                el.classList.add('on') // 클릭했을때 el 에 class on 추가

                panelItme.forEach((item, panelIdx)=>{
                    item.classList.remove('on') // 전체의 on 을 초기화하는 구문은 클릭시 클래스를 부여하는 기능에서는 필수
                    if(panelIdx === activeIdx){
                        item.classList.add('on')
                    }
                })   
                두가지 함수는 로직이 같기 때문에 하나로 묶어줄 수 있다. js:51,52
            */
                  
           let activeIdx = btnsArr.indexOf(el); // indexOf = 특정 문자의 위치를 찾아주는 메서드 (0,1,2) 순번으로
           // 위에서 btnArr 로 btns 를 인덱스 배열로 담고 순번(index)으로 지정해서 슬라이드를 컨트롤 하기 위해
           // console.log(activeIdx);

           if(enableClick){
               activeSlide(activeIdx, btns); // js : 128
               activeSlide(activeIdx, panelItme);
    
                let canvasWidth = parseInt(getComputedStyle(canvas).width) // style 을 찾아내는 요소 getComputedStyle
                // console.log(canvasWidth);
    
                /*
                    예를 들어 화면의 길이가 1920 이고 총 4개의 슬라이드 패널이 있다고 한다면 1번째는 1920 만큼
                    2번째는 1920*2 만큼 이동해야 하기 때문에 left 로 -canvasWidth * 인덱스 번호 로 하면
                    해당 위치만큼 슬라이드를 이동시킬 수 있다.
                */
                // 단순 이동(애니메이션 없음): panel.style.left = `${-canvasWidth * activeIdx}px`; // px 단위를 넣어줘야 정확한 style 값을 컨트롤 할 수 있다.
                animate(panel,{
                    prop : 'left',
                    val : -canvasWidth * activeIdx,
                    duration : speed,
                })
                // 기본적으로 css 에 동작할 스타일들을 넣어놓고 JS 로 컨트롤 해서 HTML 에 써주는 방식
                circle.className = '';
                circle.classList.add(`rot${activeIdx+1}`);
                enableClick = false;
           }
        })
    })

    function animate(el, option){
        let startActive = performance.now();  // 애니메이션이 시작되는 시간
        /*  
            performance.now
            시간을 실시간으로 모니터링 해주는 메서드 Date.now() 로도 대체가 가능하지만
            기준점이 다르므로 일반적인 애니메이션을 실행할때에는 performance.now() 가 좀 더 좋다.
        */
        let currentValue; // 변동되는 속성들을 담아줄 변수

        if(option.prop === 'opacity'){
            currentValue = parseFloat(getComputedStyle(el)[option.prop]); // parseFloat 소수점까지(숫자만)
        }else{
            currentValue = parseInt(getComputedStyle(el)[option.prop]); // parseInt 정수만(숫자만)
        }
        /*
            옵션으로 받아오는 prop 의 값이 opacity 라면 소수점을 포함한 숫자를 출력
            아니라면 소숫점을 제외한 정수만 출력
            이렇게 하는 이유는 0~1 을 애니매이션 진행 시작과 끝으로 정하면 소수점이 나오면 진행중 정수가 나오면 끝났다라는 표시
        */
        if(currentValue !== option.val){
            requestAnimationFrame(run);
            /*
                currentValue 값이 option.val 값에 도달하지 못했다면 애니메이션을 실행하도록
                ex) 현재 slider 의 위치가 0인 상태이고 클릭한 버튼의 위치가 2000 이라면 
                    값이 서로 맞지 않으므로 requestAnimationFrame() 이 실행
            */
        }
        function run(time){
            let lastTime = time - startActive;
            let progress = lastTime / option.duration;
            // progress 가 1 이 되면 애니메이션이 종료되는 조건
            if(progress < 0){
                progress = 0;
            }
            if(progress > 1){
                progress = 1;
            }
            if(progress < 1){
                timer = requestAnimationFrame(run)
            }else{
                cancelAnimationFrame(timer);
                enableClick = true // 이벤트가 완전히 종료되기 전까지는 enableClick 은 작동하지 않는다.
            }

            let result = currentValue + (option.val - currentValue) * progress
            if(option.prop === 'opacity'){
                el.style[option.prop] = result;
            }else{
                el.style[option.prop] = result + 'px'
            }
        }
    }
    
    function activeSlide(idx, item){
        for(let el of item){
            el.classList.remove('on');
        }
        item[idx].classList.add('on');
    }

    
}