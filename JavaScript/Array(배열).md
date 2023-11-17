## JavaScript 배열
### 배열  
여러개의 값을 나열해서 하나의 변수에 담아서 호출하는 객체  
배열에 들어간 객체들은 자동으로 순번을 배정받게 되며, 순번은 항상 0번부터 출력  
```
let rv01 = '웬디';
let rv02 = '조이';
let rv03 = '슬기';
let rv04 = '아이린';
let rv05 = '예린';
```
배열의 형태
```
let rv = ['웬디', '조이', '슬기', '아이린', '예린'];
```
각각의 독립적인 요소로 보기 때문에 순번을 배정 받는다.  
이렇게 되면 하나하나 구분된 요소가 아닌 하나의 문자로 인식 때문에 순번을 가질 수 없다.  
```
let rvList = '웬디, 조이, 슬기, 아이린, 예리'
```
```
document.write('레드벨벳의 멤버는' + rv01 + rv02 + rv03 + rv04 + '로 이루어짐')
document.write('레드벨벳의 멤버는 ' + rv + ' 입니다.<br><br>');
document.write('레드벨벳의 멤버수는 ' + rv.length + '명 입니다.<br><br>');
document.write(rv[0] + '<br><br>');

for(let i = 0; i < rv.length; i++){
  document.write(rv[i]+'<br>');
}
```

### 배열의 선언 방법

배열의 선언 방법
1. 변수식 선언 = let 변수명 = [값1, 값2, 값3...];
2. 아직 어떤 값을 넣을지 모르지만 비워두고 선언하는 방법 = let 변수명 = []
3. 생성자 함수를 이용해서 선언하는 방법 = let 변수명 new Array()

```
let arr1 = [5] // 배열의 '값' 선언
console.log(arr1.length); // => 1
```
#### 생성자 함수
```
let arr2 = new Array(5);
console.log(arr2.length); // => 5
```
배열의 '공간' 선언 즉 기입한 값은 배열의 length 가 됨
#### 활용 명령어
```
// 기본세팅
let rv = ['웬디', '조이', '슬기', '아이린', '예린'];
let newMember = ['태연', '에일리'];
```
#### 값 추가 및 삭제
concat = 배열을 합치는 명령어
```
let newRv = rv.concat(newMember,['dd'])
console.log(newRv); // => ['웬디', '조이', '슬기', '아이린', '예린', '태연', '에일리', 'dd']
```
선택자.concat(합쳐질 배열) = 선택된 객체의 배열에 매개변수로 들어온 배열이 뒤에 합쳐지는 메서드

rv.pop() = 배열의 맨 뒤에 있는 요소를 삭제 하는 명령어

rv.shift() = 배열의 맨앞에 있는 요소를 삭제하는 명령어
        
rv.push('태연') = 배열의 맨 뒤에 요소를 추가해 주는 명령어
        
rv.unshift('아이유') = 배열의 맨 앞에 요소를 추가해 주는 명령어
        
rv.splice(1,2) = 특정 위치에 있는 값을 삭제 첫번째 값(1) 은 시작위치의 index, 즉 두번째 값은 1번째 부터 본인포함 삭제할 갯수
        
rv.splice(0) = 모든 값 초기화
```
console.log(rv); // => [] , length: 0
```
        
#### 값의 정렬
rv.sort() = 오름 차순 정렬 ㄱ-ㅎ, a-z  

rv.reverse() = 내림 차순 정렬 ㅎ-ㄱ, z-a

```
// 기본 세팅
let num = [50,20,77,32,100,2,6,84];
```
num.sort() = 숫자형태의 정렬이 아닌 문자열로 인식해서 정렬함 앞숫자를 보면 순차적인것을 알 수 있음
```
console.log(num); // => [100,2,20,32,50,6,77,84]
```

숫자 배열을 sort 나 reverse 로 정렬할 때 이상하게 정렬되는 이유는   
문자열로 인식해서 문자처럼 정렬됨  

숫자의 정렬은 sort 나 reverse 에서 콜백함수를 매개변수로 사용해서 우회하는 방법으로
정렬을 해야 한다.

#### 배열에 대한 반복
for in, for of 는   
객체의 배열에서 반복할때 사용하는 메서드  
for문 보다는 늦게 만들어진 문법  
```
// 초기세팅
let car = ['현대', '기아', '쌍용', '벤츠', '볼보', '아우디'];
```
1. for in 으로 출력  
for(let 변수명 in 배열명){실행코드}
```
// for in 으로 출력
for(let i in car){
    document.write(car[i]+'<br>')
}

// 기존 for 문으로 배열 출력하기
for(let i = 0; i < car.length; i++){
  document.write(car[i]+'<br>')
}
```
결과값은 같다.

2. for of 로 배열 호출하기
for(let 변수명 of 배열명){실행코드}

```
for(let i of car){
    document.write(i + '<br>')
}
```
만약 for in 에서 이런 실행 코드를 실행 시키면 index의 순번만 나열됨 (0,1,2...)
fot of 에서 for in 에서 사용했던 car[i] 라는 실행코드가 들어간다면 undefined 가 출력된다.


for in 과 for of 는 무언가를 반복하는가는 같다.  
단, 무엇을 반복하는지가 '다르다'  

for in 은 반복 가능한 속성을 순서대로 반복 (index 에 접근해서 index 를 반복)  
for of 는 반복하도록 정의한 값을 반복 (value 를 반복)  
  
for in 은 객체를 반복할 때 자주 사용  
for of 는 배열을 반복할 때 자주 사용  

#### for in, for of 예제
```
// 초기값
let num = [1,2,3,4,5];
let result = [];
```
1. 기본적인 for 문
```
for(i = 0; i < num.length; i++){
    result.push(num[i]*2); 
}
console.log(result); // => Array(5) [2,4,6,8,10]
```
2. for of
```
for (let i of num){ 
  result.push(i*2);
}
console.log(result); // => Array(5) [2,4,6,8,10]
```
3. for in 
```
for (let i in num){ 
    result.push(parseInt(i+1));
}
```
num 의 배열을 i 에 담을 경우 i 는 배열의 값이 아닌 index 번호를 전달한다.  
즉 console 을 찍어보면 다음과 같은 값이 나온다.
```
console.log(result); // => Array(5) [1,11,21,31,41]
```


  