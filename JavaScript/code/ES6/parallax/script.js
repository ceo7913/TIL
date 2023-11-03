window.onload = () =>{
    
    /*
        1. 마우스 휠을 스크롤하면 윈도우의 높이값 만큼 이동
        2. 도트를 클릭하면 해당하는 index 의 section 으로 이동
        3. 각 section 마다 화면에 들어오면 on 이라는 class 를 추가 (그 외 모든 section 은 on 삭제)
    */

    const content = document.querySelectorAll('section');
    const dotList = document.querySelectorAll('#navi li');

    let posArr = []; // section 마다 가지고 있는 위치값을 배열로 반환
    let base = -300;
    // resize 브라우저의 크기를 줄이거나 키우것을 이벤트로 봄

    window.addEventListener('resize',onResize);
    window.addEventListener('scroll',onScroll);
    
    onResize() // 시작과 동시에 posArr 의 값을 한번 받아온다.
    function onResize(){
        posArr = [...content].map((el)=>el.offsetTop);
        // console.log(posArr);
    }

    function onScroll(){
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        // console.log(scrollTop);
        [...dotList].forEach((el,idx)=>{
            if(scrollTop >= posArr[idx]+base){ // => base=-300 즉 화면이 바뀌기 300px 전에 도트 변경
                dotList.forEach((el)=>{
                    el.children[0].classList.remove('on'); // 모든 요소에 on 을 모두 리셋 아니면 누적될 수 있음
                })
                el.children[0].classList.add('on');

                // 각 section 에 위치했을때 class 'on' 을 부여하는 구문
                [...content].forEach((el)=>{
                    el.classList.remove('on')
                })
                content[idx].classList.add('on')
                
            }
        });
    }


    [...content].forEach((el)=>{ // section 을 배열로 받아옴
        el.addEventListener('wheel', onWheel);
    });

    [...dotList].forEach((el)=>{
        el.addEventListener('click',onClick)
    });
    
    function onWheel(e){
        // console.log(e); // e => WheelEvent 
        /*
            wheel 이벤트는 event를 받아와야 하므로 매개변수가 필요하다(e, event)
            wheel 과 scroll 의 차이점
            wheel = 마우스 휠의 작용 유무를 판단
            scroll = 휠로 페이지 내부에 위치값이 얼마나 이동했는지를 반환
            * 휠 이벤트는 브라우저마다 적용되는 이벤트가 다르다.
            
            구 버전에서는 mousewheel 과 DOMMouseScroll 이라는 이벤트로 분류해서 사용
            mousewheel = 익스, 사파리, 크롬
            DOMMouseScroll = 파이어폭스
            
            최신버전은 wheel 이벤트로 모두 대체
        */

        // wheel 이벤트 특성상 브라우저 마다 적용되는 값이 다르기 때문에 3가지를 모두 받아와 준다. 
        const deltaY = e.deltaY || e.detail || -e.wheelDelta;
        //    console.log(deltaY);

        if(deltaY < 0){
            if([...content].indexOf(this) !== 0){
                const index = [...content].indexOf(this);
                // console.log(index-1);
                MoveScroll(index - 1)
            }
        }else{
            if([...content].indexOf(this) !== content.length -1){
                const index = [...content].indexOf(this);
                // console.log(index+1);
                MoveScroll(index + 1);
            }
        }
    }

    function MoveScroll(index){
        // scroll 해야할 index 위치값 (외부에서 받아오는 index를 전달)
        const targetPosition = posArr[index] // let posArr = []; section 마다 가지고 있는 위치값을 배열로 반환
        
        // 현재 위치해 있는 위치값 (현재 스크롤의 위치)
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        // 현재 위치에서 index 로 받아온 위치까지 격차
        const dist = targetPosition - currentPosition  
        
        const duration = 500; // 애니메이션 시간

        // isStart 에 값이 들어가게 되면 애니메이션이 시작되었다는 뜻
        let isStart; // 이동하는 있는 값을 매개변수로 처리

        function step(time){
            // console.log(time); // 현재 적용 시간(시간이 계속 누적중)
            if(!isStart) isStart = time // 애니메이션이 시작하기 전인지 판단 / 시간이 들어오게 되면 시작이라는 의미로 봄
            const progress = time - isStart // 현재 애니메이션이 시작되고 지난 시간
            
            const percent = Math.min(progress / duration, 1); 
            /*
                경과된 시간을 기준으로 완료된 애니메이션의 백분율 게산
                여기서 1은 100%를 의미하며 100%를 넘지 못하도록 하기 위함
            */
            
            window.scrollTo(0, currentPosition + dist * percent); // scrollTo 어디에서 어디로 이동해 달라는 명령어

            if(progress < duration){
                // setInteval 과 비슷한 개념 (requestAnimationFrame 는 animation 에서 자주쓰는 게념)
                window.requestAnimationFrame(step);
                // 애니메이션이 지속시간보다 짧으면 실행
            }
        }
        window.requestAnimationFrame(step);
        // 애니메이션이 완료되지 않았으면 콜백으로 다음 애니메이션을 요청
    }

    function onClick(){
        const index = Array.from(dotList).indexOf(this);
        console.log(index);
        MoveScroll(index)
    }
}