window.onload = () =>{
    /*
        1. 객체를 생성할 위치 = 클릭할 위치 = position
        2. 랜덤한 이미지를 생성 = 값이 일정 영역안에서 랜덤으로 뿌려지도록 
        - 클래스명이 누적되지 않도록 
        - 애니메이션이 끝나면 이미지도 사라지도록 하기
    */

        
    const clickEvent = () =>{
        const img = document.createElement('div');
        img.id = 'click-img' // document.createElement 로 div 생성 후 id = 'click-img' 적용
        
        let timer;

        document.body.addEventListener('click',onImgShow); // body 안에서 click 시에 onImgShow 함수 실행

        function onImgShow(e){
            // e = 마우스 이벤트를 받아오는 매개변수

            const positionX = e.pageX;
            const positionY = e.pageY;            
            // const {pageX : positionX, pageY:positionY} = e; => 위의 두가지를 합쳐놓은 방법
            const randomImg = Math.floor(Math.random()*5)+1; 
            // 1 2 3 4 5

            // console.log(positionX);
            // console.log(positionY);
            // console.log(randomImg);

            if(img.parentNode){ // 기존에 남아있던 객체 제거
                img.parentNode.removeChild(img);
            }

            document.body.appendChild(img) // 자식요소의 가장 마지막 태그
            
            img.className = ''; // classList 를 add 하기 전에 초기화 시켜서 클래스명이 누적시키지 않는 구문 
            img.classList.add('active',`bg0${randomImg}`);

            img.style.top = `${positionY}px`;
            img.style.left = `${positionX}px`;

            clearTimeout(timer) // (setTimeout 초기화) 이렇게 해야 setTimeout 이 실행되다 겹치는 것이아니라 실행되고 종료후 다시 2초를 기다리게 한다.
            
            /*
                    timer = setTimeout(function(){  
                        img.parentNode.removeChild(img) 
                    },2000)

                setInterval 는 반복 setTimeout 한번 실행
                이렇게 해줘야 이미지 객첸가 일정 시간 존재 했다 사라짐    
            */
            timer = setTimeout(onImgOut,2000)
            // setTimeout 은 자체적으로 리셋하지 않는다.
            
        }
        function onImgOut(){
            if(img.parentNode){
                img.parentNode.removeChild(img);
            }
        }
    }
    clickEvent()
}