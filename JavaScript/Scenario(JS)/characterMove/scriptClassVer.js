class MotionMenu{
    // 구조상 받아올 선택자를 감쌀 객체가 없기 때문에 opt만 잡아주면 된다.
        constructor(opt){ // 생성자 메서드 
            // 생성자는 클래스의 생성시에 단 한번만 호출되며, 객체의 초기화를 담당하게 된다. 일반 메소드와는 달리 필요할 때마다 호출될 수 없다.
            this.init(opt); // 선택자를 반환해줄 함수 (내장함수아님)
            this.bindingEvent(); // 이벤트를 반환해줄 함수 (내장함수아님)
        };
        init(opt){ // init() 으로 opt 라는 매서드를 받아서 잡아줄 객체들을 여기서 잡아준다.
            this.btn = document.querySelector(opt.btn); // 사실상 복수 요소를 잡기위해 상위 선택자를 잡아줄 필요가 있다.
            this.btnItem = this.btn.querySelectorAll('li'); // 상위요소에서 하위 복수 요소를 잡는다.

            this.title = document.querySelector(opt.title);
            this.titleItem = this.title.querySelectorAll('li');

            this.chaImg = document.querySelector(opt.chaImg);
            this.chaImgItem = this.chaImg.querySelectorAll('li')
        }

        bindingEvent(){ // 실행될 이벤트를 정의한 함수
            this.btnItem.forEach((el,idx)=>{ // 실질적으로 버튼을 눌렀을때 이벤트가 실행 되기 때문에 btnItme을 forEach 로 받는다. 
                el.addEventListener('click', ()=>{ // btnItem 은 복수 요소이기 때문에 el 이라는 매개변수를 받아서 선택자를 만들어준다.
                    this.activation(this.btnItem,idx) 
                    this.activation(this.titleItem,idx)
                    this.activation(this.chaImgItem,idx)
                })
            })
        }
        activation(item,index){ // addEventListener 안에 들어가도 되는 구문이지만 그렇게 되면 btnItem,titleItem,chaImgItem 마다 같은 조건의 구문을
            // 나열해야 하기 때문에 함수로 매개변수를 받아서 addEventListener 안에는 실행만 시켜준다.
            for(let el of item){ // 여기서 item 은 넘겨받을 선택자를 말한다.
                el.classList.remove('on'); // remove 'on' 을 하지 않으면 'on' class 가 쌓일 수 있다.
            }
            item[index].classList.add('on'); // 넘겨받을 선택자의 index 에 class 'on' 을 해준다.
        }
}