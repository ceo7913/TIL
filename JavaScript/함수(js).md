## 함수란?
- 함수
어떠한 기능을 하는 코드를 모아놓은 하나의 집합소  
특정 기능을 수행하는 코드들을 하나의 명령어로 묶어서 재사용을 위해  
만들어 놓는 기능 덩어리  

함수는 예약되어 있는 함수와 사용자가 지정해서 사용하는 함수로 나눌 수 있다.  
직접 함수를 작성해서 사용할때에는 네이밍에 유의(이미 존재하는 약속어(예약어)를 사용X => if, for ...)  

함수는 작성과 동시에 출력 하지는 않는다.  
출력은 함수명을 호출함과 동시에 이루어진다.  
호출위치는 선언위치와 상관없이 이루어진다.(특이한 경우 제외)  

함수를 사용하는 이유 
- 퍼포먼스의 효율적인 관리  
- 각 명령어들의 시작과 끝을 알 수 있다.(관리 용이)
- 함수에 이름을 붙여서 필요할때 호출하면 되기 때문에 재사용성에 용이

```
  let hamburger = '불고기 버거';
  let sideMenu = '감자튀김';
  let drink = '콜라';

  function setMenu(burger, side, drink){ // 매개변수 => 함수안에서 사용되는 변수 (매개체 역할)
      document.write(burger+','+ side + ','+ drink + '<br>');
  }

  setMenu('불고기버거','치즈스틱','제로사이다'); 
```
여기서 매개변수에 담아줄 '불고기버거','치즈스틱','제로사이다' 값을 인수 라고 한다.

함수, 매개변수를 활용한 구구단 예제
```
function gugudan(count){
    for(let i = 1; i < 10; i++){
        document.write(count + 'X' + i + '=' + (count*i) + '<br>');
    }           
}

gugudan(parseInt(prompt('단수를 입력하세요.')));
```
원하는 단수(prompt)를 받아서 출력 하는 함수

## 매개변수(parameter)
함수를 선언할때 정의하며 일반 변수와 같다.  
함수가 호출될 때, 값의 이름을 지정한다. 이름보다는 위치에 대한 정의이기 때문에  
변수명은 중요하지 않지만 목적에 맞는 이름을 사용하도록 한다.  

burger, side, drink 는 매개변수의 역할을 하며,   
setMenu 함수를 호출할 때 값을 전달하고 함수 내부에 있는 burger, side, drink 에  
접근하며, 값을 변환하는 역할을 한다.   

인수(aguments) 는 함수를 호출할때 제공하는 실제 값을 의미  
함수를 호출할때 매개변수의 위치에 값이 전달되어서 최종적으로 함수 내부에 값이 변환되도록 한다.  

## return 키워드
return 키워드
어떻게 사용하는지에 따라 다른 의미를 가진다.
1. 보편적으로 return 키워드를 만날경우 함수의 실행을 종료하며, 호출한 코드로 되돌아 간다.return 아래에 코드가 존재한다면, 해당 코드는 실행되지 않는다.
2. return 매개변수 = 함수 외부로 값을 반환하라는 의미이다,
3. 매개변수의 값을 새롭게 적용하여 반환하라는 의미이다.

### 예제1
```
    function add(a,b){
        return a+b;
    }
    let result = add(1,2);
    console.log(result);
```
### 예제2
```
    function isUpDown(num){
        if(num > 0){
            return 'up';
        }else if(num < 0){
            return 'down'
        }
    }
    let result02 = isUpDown(5)
    console.log(result02);
```
### break 와 return 의 차이점
break 는 반복문을 벗어나는 키워드 (for, switch, while ...)
return 은 함수를 종료하는 키워드 (return 은 break 의 의미도 포함)


## 함수의 선언방식
함수의 선언 방식
1. 함수 선언식 / function name(){} / 가장 기본적인 방식
2. 함수 표현식 / const name = function(){} / 선언은 let 보다 const 로 함
3. 생성자 함수 / const name = new function(){} 
4. 화살표 함수 / function name = () => {} / es6에 새로 추가된  문법
5. 즉시 실행 함수 / (function(){})() / 즉시 실행 조건


- 함수 선언식
```
function sum(a,b){
    return a+b;
} 
console.log(sum(1,2));
```
        
- 함수 표현식
```
const sum02 = function(a,b){
    return a*b;
}
console.log(sum02(5,3));
```
함수 표현식은 변수명으로만 호출해야 하며 함수에 이름을 넣는 경우 상관은 없지만  
아무런 기능을 하지않고 에러를 호출한다.  
  
- 생성자 함수
```
const User = new function(){
    this.name = 'ljw';
    this.job = '학생'
    // 생성자 함수에서 this 는 생성자를 뜻한다.
}
//  생성자 함수는 일반 함수와 구별하기 위해서 생성자 함수는 대문자로 시작한다.
console.log(User.job);
//  생성자 함수는 내용을 object 로 관리한다.
```

- 즉시 실행 함수
```
(function items(){
    let a = 2;
    let b = 3;
    return console.log(a*b);
}()); // 기명 즉시 실행 함수

(function(){
    let a = 2;
    let b = 3;
    return console.log(a*b);
}()); // 익명 즉시 실행 함수
```


