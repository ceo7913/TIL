
function sitemap(){
    const btn = document.querySelector('.ham-btn');
    const sitemap =document.querySelector('.sitemap');
    let isOpen = true;

    btn.addEventListener('click', function(e){ 
        // 별개로 this 를 넣어줘야 하기 때문에 화살표 함수가 아니라 function 으로 들어간다.
        e.preventDefault() // a 태그 이벤트 이기 때문에 기본동작 이벤트를 막기위해 넣어주는 것이 좋다.
        let winH = window.innerHeight; 
        document.body.style.overflowY = 'hidden';
        // window 의 height 크기를 받아와서 inner 의 영역값이 100% 일때 
        // 부모 요소가 아니라 window 를 기준으로 100% 를 잡을 수 있게 해준다.

     if(isOpen){
         // .ham-btn 에 class 'on' rotate 부여
         this.classList.add('on');
         sitemap.classList.add('on');
         sitemap.style.maxHeight = `${winH}px`;
         sitemap.style.height = `${winH}px`;
         document.body.style.overflowY = 'hidden';
         isOpen = false;
     }else{
         this.classList.remove('on');
         sitemap.classList.remove('on');
         sitemap.style.maxHeight = '0'
         sitemap.style.height = '0'
         document.body.style.overflowY = 'auto';
         isOpen = true;
     }

    })
}
