## JavaScript 의 Object(객체)
자바스크립트는 **객체** 기반의 스크립트 언어이다.  
자바스크립트에서는 원시타입을 제외한 모든 것 들이 **객체** 라고 한다.  

객체는 키(key), 값(value) 으로 구성된 일종의 property  
여기서 property 란 단순 영어로 해석하면 재산, 자산이라는 뜻이지만  
JavaScript 에서는 기본적으로 어떠한 값을 나타낸다.  
이러한 값이 다른 값과 연관 되어있을 때 property 라고 부른다.  

예를 들어 문자열에 length 라는 property 가 포함되어 있는데  
이 프로퍼티는 문자열 안에 있는 문자의 양을 정수로 나타낸 값을 담고 있다.
```
const str = '문자수'

// str 문자열 객체의 length 프로퍼티를 출력
console.log(str.length);
// 출력값 = 3
```

아무튼 본론으로 돌아와서 property 의 값은 JS 에서 사용할 수 있는 모든 종류의 값을 넣을 수 있다.  

한 객체의 정보값을 원시형으로 저장할 때  
변수의 종류가 너무 많아 지고 관리도 어렵다.

#### 예시
```
  let ljwName = '임준우';
  let ljwAge = '100';
  let ljwJob = 'developer';
  let ljwGender = 'male';

  let ljw = {
      name : '임준우', // 여기서는 ';' 을 넣지 않는다. 이유는 객체 안에 있는 값은 같은 종류의 내용으로 보기 때문에 ',' 로 구분
      age : 100,
      job : 'developer',
      gender: 'male',
  }
  console.log(ljw);
  console.log(ljw.name);
  console.log(ljw.age);
  console.log(ljw.job);
  ljw.job = '회사원';
  console.log(ljw.job);

```
#### 예시 2
```
let a = 1;
let b = a; // 변수가 아닌 값이 복사됨 즉 a 라는 변수 자체가 아니라 a 의 값만 복사함
        
a = 2;
console.log(a);
console.log(b);

let person = ljw
ljw.age = 50;
// console.log(person);  객체 타임은 값이 아닌 저장소를 공유하게 되므로 값이 바뀌게 되면 서로 값이 바뀐다.
console.log(person.age);
```
원시 타입은 변수를 복사할 때 값 자체가 복사가 되므로 바뀌는 값에 대해서 서로 공유하지 않는다.  
객체 타입은 값이 아닌 저장소를 공유하게 되므로 값이 바뀌게 되면 서로 값이 바뀐다.  
저장되는 방식의 차이가 있다.