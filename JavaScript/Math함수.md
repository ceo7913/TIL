
## Math.** 함수
수학과 관련된 '객체' 들을 말하며, 여러개의 세부 객체를 가지고 있다.  
실제 숫자를 가지고 있는 속성과 메서드들을 수학전인 처리를 하도록 해주는 역할  
```
let circle = Math.PI // 원주율
console.log(circle);
let num = 3.141592653589793;
       
console.log(Math.floor(num)); // 3 => floor : 숫자를 내림(소숫점을 제외)

console.log(Math.ceil(num)); // 4 => ceil : 숫자를 올림 (소숫점을 하나 올림)(반올림이랑 조금 다름 뒤에 오는 소숫점이 1~9 뭐든 하나 올림)

console.log(Math.round(num)); // 3 => 반올림 (소숫점 뒷자리가 5이상 이면 하나 올림)
```
floor, round, ceil 은 소숫점을 판단해서 정수만 반환 해주는것이 목적

```
console.log(Math.abs(num)); // 가지고 있는 숫자를 그대로 반환 => 3.1415926...

console.log(Math.max(10,50,70,6,3,1,124)); // 말 그대로 받은 값중에 가장 큰 값을 출력

console.log(Math.min(10,50,70,6,3,1,124)); // 받은 값중에 가장 작은 값 출력

console.log(Math.pow(5,3)); // 제곱근 => x(5) 의 y(3) 제곱근 반환 = 5의 3제곱
       
console.log(Math.random()); // 0 ~ 1 사이의 값만 나옴(1 제외) 즉 0~1 사이의 소숫값 출력

console.log((Math.random()*10)+1); // +1은 나올 수 있는 최솟값, *10 은 나올 수 있는 최대값 but 여기서 최대값은 10.999 가 나올 수 있다.

console.log(Math.floor(Math.random()*10)+1); // 때문에 원하는 값이 정수라면 이런식으로 표현 할 수 있다.
```
floor 와 random 은 사용 빈도가 높다.

       
