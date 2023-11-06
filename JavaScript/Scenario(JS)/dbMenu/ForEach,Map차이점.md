## ForEach(), Map() 차이점

### forEach() 와 map()의 공통점
forEach, map 의 공통점은 "배열을 이용한다"는 점이다.  
배열의 값을 조작해서 원하는 결과값을 도출하는데 의미가 있다.

### forEach() 와 map()의 차이점
1. 새로운 배열을 반환하는 map()
- forEach() 가 배열 요소마다 한번씩 주어진 함수를 실행하는 것과 달리,  
map()은 배열 내의 모든 요소 각각에 대하여 주어진 함수(콜백)를 호출한 결과를 모아  
새로운 배열을 반환한다는 특징을 가지고 있다.

그리고, forEach()와 map()은
1. currentValue(배열 원소의 값)
2. index(현재요소의 인덱스)
3. array(현재배열)  
세개의 인자를 가지고 호출된다.

2. 리턴값을 보내지 않는 forEach()
- forEach()는 문밖으로 리턴값을 받지 못한다. 아래의 코드를 살펴보자
```
let arr = [1,2,3,4,5];
let a = arr.forEach(function(value){
	return value;
});
console.log(a);   //undefined
```
이렇게 undefined 가 출력된다.  

하지만 같은 경우라도 map()을 사용하게 된다면
```
let arr=[1,2,3,4,5];
let a = arr.map(function(value){
	return value +1;
});
console.log(a);  // [2,3,4,5,6]
```
이 경우에는 [2,3,4,5,6] 이 들어있는 배열이 출력된다.  
map은 리턴값을 출력할 수 있다.

즉, forEach와 map의 가장 큰 차이점은 리턴값에 있다.
또한 forEach() 기존의 Ararry를 변경하는 반면, map()은 새로운 Array 를 반환한다.

* 성능 면에서는 map 이 forEach 보다 빠르고 유리하지만 상황에 맞게 사용하자.

### 정리
1. forEach() 로 할 수 있는 일은 map()으로도 할 수 있고