/*
    class 로 스크립트를 생성할 때 특징
    외부에서 가져오는 형식
    1. 직접적인 연결이 아니기 때문에 window.onload 같은 시작 함수는 필요 없다.
*/

class Slider{
    // class 함수는 일반 함수와 구별하기 위해 대문자로 시작한다.
    constructor(item, opt){
        // class 함수는 인스턴스를 새로 생성할때 마다 내부의 값들을 초기화 해야한다. 
        // 때문에 constructor 로 한번 감싸줘야한다.(딱 한번만 사용할 경우는 필요 없다.)
        this.init(item, opt) // 기본값을 정의한 함수
        this.bindingEvent() // 이벤트를 정의한 함수
    }
    init(item, opt){
        // class 내부에서는 function 은 생략한다.
        let itemSelector ={
            panel : this.panel,
            btns : this.btns,
            sliderSpeed : this.speed,
        }
        this.opt = Object.assign({},itemSelector,opt);
        // console.log(this.opt);
        // 선택자 객체에서 나열이 가능한 속성을 보가해서 객체로 반환
        this.slide = document.querySelector(item); // 슬라이드 전체 영역
        this.panel = this.slide.querySelector(this.opt.panel);
        // itemSelector 안에 있는 객체를 opt 로 받아와서 panel 에 들어간 선택자를 설정
        this.panelItem = this.panel.querySelectorAll('li');

        this.btns = this.slide.querySelector(this.opt.btns);
        this.btnsItem = this.btns.querySelectorAll('li');

        this.btnArr = Array.from(this.btnsItem); // 선택자를 배열로 받아옴
        this.speed = this.opt.speed; // 설정한 시간을 받아올 매개변수
        this.enableClick = true; 
        this.timer; 
    }

    bindingEvent(){
        this.btnsItem.forEach((el)=>{
            el.addEventListener('click',(e)=>{
                let isActive = el.classList.contains('on');
                // contains 문자열을 찾아주는 메서드 => el 의 class 명이 'on' 인 문자열이 있는지 검사해 달라는 구문(true or false)
                let activeIndex = this.btnArr.indexOf(e.currentTarget)
                /*
                    activeIndex 는 isActive 가 적용되고 있는 el 를 찾아서 
                    해당요소를 activeIndex 에 담아야 한다.
                    this 는 인스턴스를 지칭하기 때문에 사용할 수 없으며,
                    currentTarget 이라는 이벤트 메서드를 사용해야 한다.
                    currentTarget 는 el 들 중에서 addEventListener 를 전달받은 요소가 된다.
                    * 매개변수 event, e 필요
                */
                let slideW = parseInt(getComputedStyle(this.slide).width);

                if(this.enableClick){
                    this.animate(this.panel,{
                        prop : 'left',
                        val : -slideW * activeIndex,
                        duration : this.speed,
                    })
                    // enableClick 상태에서만 실행
                    this.activeSlide(activeIndex, this.btnsItem);
                    this.activeSlide(activeIndex, this.panelItem);
                    if(this.opt.callback){
                        this.opt.callback(activeIndex+1);
                    }
                    
                    this.enableClick = false;
                }
            })
        })
    }

    activeSlide(itemNume, item){
        for(let el of item){
            el.className = '';
        }
        item[itemNume].classList.add('on');
    }

    animate(el, opt){
        let startActive = performance.now();
        let currentValue;
        // animate 에서 this 를 변수에 저장해 외부에서 사용할 수 있게 한다.
        let self = this
        // console.log(self);

        if(opt.prop === 'opacity'){
            // 소수점
            currentValue = parseFloat(getComputedStyle(el)[opt.prop]);
        }else{
            // 정수
            currentValue = parseInt(getComputedStyle(el)[opt.prop]);
        }

        if(currentValue !== opt.value){
            requestAnimationFrame(run);
        }
        // 여기서 function 을 사용하는 이유는 class 내부에 있는
        // animate 안에 있는 내장 함수 이기 때문에 function 을 생략할 수 없다.
        function run(time){
            let lastTime = time - startActive;
            let progress = lastTime / opt.duration;
            /*
                this 가 아닌 self 를 사용하는 이유
                내부 함수에서는 this 를 받아올 경우 인스턴스가 아닌 undefined 를 반환한다.
                즉 전달받지 못한다는 의미
                
                상위 함수에서 this 를 변수에 저장해서 내부함수에 변수로 전달하게 되면 
                변수에는 this 의 값이 고정되어 저장되어 있으므로 같은 선택자를 선택할 수 있게 된다.
            */
            // console.log(self);

            if(progress < 0){
                progress = 0;
            }else if(progress > 1){
                progress = 1;
            }

            if(progress < 1){
                self.timer = requestAnimationFrame(run);
            }else{
                cancelAnimationFrame(self.timer);
                self.enableClick = true;
            }

            let result = currentValue + (opt.val - currentValue) * progress
            if(opt.prop === 'opacity'){
                el.style[opt.prop] = result;
            }else{
                el.style[opt.prop] = `${result}px`
            }
        }
    }
}