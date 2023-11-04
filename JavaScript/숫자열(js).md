## JS 숫자열 타입
### 숫자열 선언 방법
```
let num = 100; // number
let num02 = '100' // string => 보통 prompt 같은 곳에서 숫자를 받아올 때 string 으로 받아옴
```
때문에 num02 의 경우 값을 받아와서 number타입으로 활용하고 싶으면 JavaScript 에서는 parseInt, Number, Math.floor 같은 것을 사용해야 한다
```
let num03 = new Number(100); // object
```
여기서 parseInt 와 Number 의 차이는 parseInt 는 정수만 출력되고 Number 는 소수점 까지 가져온다.  
Math.floor 는 소수점 이하를 버리고 정수를 반환한다.
```
let num04 = Number(num02)
let num05 ='text'
```
생성자 함수로 생성하면 숫자 형태로 생성되기도 하며, 기존의 요소들을 숫자로 변형시킬수도 있다.
```
console.log(typeof(num04)); // number
console.log(Number(num05)); // NaN => text 라는 숫자는 존재하지 않기 때문
```
어떠한 값을 받아오게 되면 대부분 숫자열이 아니라 문자열 형태의 숫자로 넘어오게 된다.  
항상 연산을 위해서는 숫자로 변환해주는 작업이 필수적으로 필요하다.  

문자열 형태를 숫자열로 변환해주는 메서드 = Number();  
기존의 문자열을 변환시키는 것이기 때문에 new 를 생략한다.  

#### paresInt 와의 차이점  
parseInt 는 문자를 공백으로 변환함으로써 공백이후로 출력하지 않는 방식으로 숫자를 변환하는 방법을 쓴다.  
때문에 소수점을 표현하지 못한다.  

Number 는 소숫점을 포함하여 변환한다.

#### 예제
```
console.clear(); // 위의 콘솔 초기화하는 구문

let kor =55;
let eng = 100;
let math = 62;
let result = (kor + eng + math) / 3;
```        
```
console.log(result); // 72.3333...
console.log(result.toFixed(1)); // 몇번째 소수점까지 반환 할지 출력하는 메서드 => 72.3
console.log(result.toFixed(0)); => 72
```
0 이라는 값을 기입하면 소숫점을 반환하지 않는다.
