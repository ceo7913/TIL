window.onload = () =>{
    /*
        1. 스크롤 이벤트로 한번에 스크롤 된 값 알아내기
        2. 전체 document 의 길이에서 스크롤된 값이 값을 퍼센테이지로 변환 시켜주기
    */
    const progressBar = document.querySelector('.progressBar');
    // 찾고자하는 객체가 복수냐 단수냐에 따라 어떤것(querySelector,querySelectorAll)으로 찾을지 정할 수 있다. 
    const imgs = document.querySelectorAll('.parallax_image');
    const imgNum = imgs.length;
    let scrollTop = 0; // 최초로 시작할 스크롤의 위치값
    // console.log(imgNum);

    // document 가 넘치면 window 기준 스크롤바가 생기기 때문에 window 객체에 이벤트를 걸어줘야함
    window.addEventListener('scroll',onScroll)
    // body 의 크기는 스크롤바가 이동한 거리 + 윈도우에 표시된 화면 height 값
    function onScroll(){
        scrollTop = document.documentElement.scrollTop || window.pageYOffset;
        /*
            document.documentElement.scrollTop 와 window.pageYOffset 는 같은 역할을 하지만 scroll 을 받아오는게
            브라우저 마다 엔진이 다르기 때문에 오류를 방지하기 위해서는 두가지 같이 써주는것이 좋다.
            물론 특정 브라우저만 지원하겠다면 한가지만 사용하여도 문제 없다.  
        */

        // console.log(scrollTop);
        let documentH = document.body.clientHeight; // 실제 document 의 총 길이
        let winH = window.innerHeight // window 에 표시되는 길이 
        // console.log(documentH);
        // console.log(winH);

        // 시작할 스크롤 위치값 / 
        const percent = Math.floor(scrollTop / (documentH - winH)*100); // 백분율 구하는 방법
        // console.log(percent);

        progressBar.style.width = `${percent}%` // percent + '%' => 스크롤 100% 가 될때까지 브라우저 상단에 채워지는 prgrssbar 구현

        imgs.forEach(function(el, idx){
            const transZ = scrollTop / (imgNum*(imgNum - idx)); 
            // 반복할 때 마다 index 를 하나씩 빼주는 계산이 나오면 transZ 는 반복할 때 마다 값이 낮아지고 그 
            // 때문에 이미지마다 다른 translate 값을 줄 수 있다.
            
            el.style.transform = `perspective(300px) translateZ(${transZ}px)`
        })
    }

}