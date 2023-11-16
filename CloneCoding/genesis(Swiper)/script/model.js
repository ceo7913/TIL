function model(){
    const tabContent = document.querySelectorAll('.model-list-wrapper');
    tabContent.forEach((el)=>{
        el.style.display = 'none';
    })

    document.querySelectorAll('select').forEach((el)=>{
        const optNum = el.children.length; // => 3
        el.classList.add('select-hide') // 특정 클래스를 줘서 화면에서 제거
        const wrapper = document.createElement('div'); // 객체를 생성
        wrapper.className = 'select'; // className 지정
        el.parentNode.insertBefore(wrapper, el);
        wrapper.appendChild(el);

        // li에서 선택한 텍스트를 출력시켜주는 태그 생성
        const styleSelect = document.createElement('div');
        styleSelect.className = 'select-style';
        styleSelect.textContent = el.children[0].textContent;
        el.after(styleSelect);

        // list ul 생성
        const list = document.createElement('ul');
        list.className = 'select-list';
        styleSelect.after(list); // styleSelect 뒤에 list 삽입 => 자식요소아님 말그대로 코드 구조상 뒤에/ 부모는 같을 수 있음
        /*
            생성된 코드
            <div class="select">
                <select class="select-hide">
                    <option value="all" selected="">ALL</option>
                    <option value="sedan">SEDAN</option>
                    <option value="suv">SUV</option>
                </select>
                <div class="select-style">ALL</div>
                <ul class="select-list"></ul></div>
            </div>
        */

        // li 생성
        for(let i = 0; i < optNum; i++){
            let listItem = document.createElement('li');
            listItem.textContent = el.children[i].textContent;
            listItem.setAttribute('date-target', el.children[i].value);
            list.appendChild(listItem);
            /*
                생성된 코드
                <ul class="select-list">
                    <li date-target="all">ALL</li>
                    <li date-target="sedan">SEDAN</li>
                    <li date-target="suv">SUV</li>
                </ul>
            */
        }

        // styleSelect 를 클릭했을때 list 창 생성하기
        styleSelect.addEventListener('click',()=>{
            document.querySelectorAll('.select-style.on').forEach((activeEl)=>{
                if(activeEl !== styleSelect){
                    activeEl.classList.remove('on');
                    activeEl.nextSibling.style.display = 'none'
                }
            });
            styleSelect.classList.toggle('on');
            // ul 
            list.style.display = list.style.display === 'block' ? 'none': 'block';
        })
        
        // li 를 클릭하면 li 에 정보가 styleSelect에 전달하기
        list.addEventListener('click',(e)=>{
            const target = e.target;  // 클릭한 target 의 값 가져오기
            if(target.tagName.toLowerCase() === 'li'){ 
                // tagName => tagName 은 소문자가 아닌 대문자로 나옴 그렇기 때문에 
                // toLowerCase() 를 사용해서 소문자로 변환해준다. 
                styleSelect.textContent = target.textContent;
                el.value = target.getAttribute('date-target');
                console.log(el.value);
                                    
                const activeItemClass = target.getAttribute('date-target');
                const activeItem = document.querySelector(`.model-list-wrapper.${activeItemClass}`);

                list.style.display = 'none';
                
                tabContent.forEach((el)=>{
                    el.style.display = 'none';
                }) // 초기값을 다시 잡아주면서, 선택요소외에 block 요소가 없게 한다.
                activeItem.style.display = 'block';

                const swiperContainer = activeItem.querySelectorAll('.model-list-wrapper .swiper-container');
                swiperContainer.forEach((item)=>{
                    if(!item.classList.contains('swiper-initialized')){
                        new Swiper(item,{
                            // 모바일 기준 768보다 작을때의 값
                            slidesPerView: 1,
                            spaceBetween: 0,
                            pagination: {
                                el: '.swiper-pagination',
                                clickable: true,
                            },
                            breakpoints:{
                                768:{
                                    // 768 보다 커졌을때의 값
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                }
                            }
                        })  
                    }
                })
            }
        })
    })
}