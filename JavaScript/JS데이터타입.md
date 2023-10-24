## 자바스크립트 데이터의 종류

### 원시형
- 문자열(String) 
- 숫자열(Number) 
- boolean(참,거짓) 
- null 
- udefined 
- symbol(es6에 새로 추가된 요소)

### 객체형
- object(객체)
- function(함수)

### 문자열(String)
       
문자열 타입(String)
텍스트는 보통 '' 과 "" 안에 텍스트를 넣어서 사용 (무엇을 사용해도 상관없다. 보편적으로는 ''를 더 자주 사용)

```    
let text = 'string';
text = '문자열 타입'
text = '작은따옴표안에 영역을 감쌀때에는 "큰따옴표"를 써야한다.'
```
       
작은 따옴표로 내부 영역을 감싸면 따옴표 하나가 
시작하는 지점과 끝지점을 구분해서 영역을 감싸기 때문에 
두개의 영역이 생기고 중간에 감싸지지 않은 영역은 오류를 출력한다  
        
```      
console.log(text);
console.log(typeof(text)); // => typeof() 해당 데이터의 타입을 출력
```

```
let text02 = 'park';
text02 = 'jh'
console.log(text02);
text02[0] = 'p'
```

원시형은 보통 변경 불가능한 값을 의미한다.

```
console.log(text02);
```

jh => 재할당에는 문제가 없지만 문자는 변경되지 않는다.

```
let a ='안녕하세요' + '자바스크립트 시간입니다.'
a[0] ='dd' // => 역시 안됨
console.log(a);
```

문자열의 연결은 연산자 '+' 를 사용한다.   


### 숫자형 타입(Number)

다른 프로그래밍 언어(C,Java...)와 다르게 실수, 소수, 정수를 구분하지 않고 하나의 숫자열 타입만 사용한다.

```
let a = 10 // 정수
let b = 10.10 // 실수
let c = '10' // 문자열(숫자아님)
let d = -10 // 음의 정수

let e = 1+1;
let f = '1'+1; // 이렇게 겹치는 경우 강제로 문자열로 항 변환
let g = 1+'1'; // 마찬가지임
let h = 1 / '4'; // 0.25 'number' 출력
let i = 1 / 'text'; // NaN = Not A Number (산술적으로 연산 불가)
        
console.log(a, typeof(a)); // 10 'number'
console.log(b, typeof(b)); // 10.1 'number'
console.log(c, typeof(c)); // 10 string
console.log(d, typeof(d)); // 10 'number'
        
console.log(e, typeof(e)); // 2 'number'
console.log(f, typeof(f)); // 11 'string'
console.log(g, typeof(g)); // 11 'string'
console.log(h, typeof(h)); // 0.25 'number'
console.log(i, typeof(i)); // NaN 'number'
```

### 참, 거짓(boolean)
- 논리값 true 와 false 로만 결과값을 출력
- 조건문에 자주 사용되는 유형

null, undefined, 숫자 0 => 보편적으로 false 를 의미

```
console.log(!!0); // 0은 false => 데이터 타입에 대한 부정 (값이 없음)
console.log(!!undefined); // false
console.log(!!null); // false
console.log(!!''); // 비어있는 텍스트

console.log(!!1); // true => 0 이상은 값이 있기 때문에 true
console.log(!!2); // true
console.log(!!'text'); // true

let isPlay = true // 상태값으로 변수명을 만들때에는 보통 앞에 is 를 붙여서 일반 변수와 구별하도록 한다.
```


### 비어있는 값 (undefined, null)

undefined (정의 되지 않음)
1. 초기화 단계의 변수를 참조했을때 나오는 값 (값이 할당되지 않았음을 의미)
2. 함수에서 명시적으로 값을 반환하지 않을때
3. 일반적으로 값이 누락되거나 출력되지 못하였을때 나오는 결과로 에러메시지의 일종 

null (의도적으로 값을 비움)
1. 명시적으로 값을 할당
2. 객체 속성의 값을 지우거나 없는 값을 출력할 때 사용
3. 의도적으로 값을 비우거나 값을 지울때 

```
console.log(typeof null); // object
console.log(typeof undefined); // undefined
```
