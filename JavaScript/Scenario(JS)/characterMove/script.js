/*
    1. 마우스가 움직이는 방향을 받아와서 오브젝트의 방향에 대입
    2. 도트를 클릭하면 슬라이드가 실행
*/

window.onload = () =>{
    const chaImg = document.querySelector('.pic li.on img');
    const deco2 = document.querySelector('.deco2 img');
    const deco3 = document.querySelector('.deco3 img');

    const btn = document.querySelector('.list');
    const btnItem = btn.querySelectorAll('li');

    const pic = document.querySelector('.pic');
    const picItem = pic.querySelectorAll('li');

    const title = document.querySelector('.title');
    const titleItem = title.querySelectorAll('li')
    // li 를 클릭했을때 pic li에 해당 index 에 class on 이 들어가야함

    // 복수요소에 이벤트를 줄때는 forEach 공식
    btnItem.forEach((el, idx)=>{
        el.addEventListener('click', ()=>{ // el은 btnItem 들을 의미
            /*
                for(let item of picItem){ // btnItem 을 선택했을때 변화해야할건 picItem 이것도 복수 => forEach 도 가능하고 for 문으로도 가능하다.
                    console.log(item);
                    item.classList.remove('on');
                }
                    btnItem 을 선택했을때 변화해야할건 picItem 이것도 복수 => forEach 도 가능하고 for 문으로도 가능하다.
                    for 문을 돌면서 picItem 배열에 존재하는 class 'on' 을 제거해준다 (중복방지)
                for(let item of btnItem){
                    item.classList.remove('on');
                }
                for(let item of titleItem){
                    item.classList.remove('on');
                }
                picItem[idx].classList.add('on') 
                    picItem 의 [idx] 를 가져와서 click 한 idx 에 class 'on' 을 넣어준다. => 클릭을 하면 들어갈 이벤트는 결정적으로 이 구문
                    위의 for문은 중복방지를 위한 설정 단계
                btnItem[idx].classList.add('on')
                titleItem[idx].classList.add('on')

                    but 같은 조건이 반복되기 때문에 함수로 바꿔줄 수 있다.
            */
            activation(picItem, idx)
            activation(btnItem, idx)
            activation(titleItem, idx)
        })
    })

    // console.log(chaImg);
    // mousemove 이벤트는 항상 매개변수를 받아와야 실행가능하다.
    window.addEventListener('mousemove',(e)=>{
        /*
            let x = e.pageX;
            let y = e.pageY;

            chaImg.style.left = `${x/40}px`; 
            chaImg.style.top = `${y/40}px`;

            deco2.style.left = `${x/35}px`
            deco2.style.top = `${y/35}px`

            deco3.style.left = `-${x/50}px`; 
            deco3.style.top = `-${y/50}px`;
            
            같은 값의 반복
        */
        moveImg(chaImg, e, 40, true);
        moveImg(deco2, e, 60, false);
        moveImg(deco3, e, 30, false);
        // 이런경우 함수로 구현해서 매개변수로 받아오는 방식이 좋다.   
    })
    function moveImg(el, event, speed, reverse){
        let x,y;
        if(reverse){ // reverse = true, !reverse = false
            x = -event.pageX;
            y = -event.pageY;
        }else{
            x = event.pageX;
            y = event.pageY;
        }
        el.style.left = x/speed + 'px';
        el.style.top = y/speed + 'px';

    }

    function activation(item, idx){
        for(let el of item){
            el.classList.remove('on');
        }
        item[idx].classList.add('on');
    }
}