## JS 문자열

### 선언 방법
```
let text = 'JavaScript'; 
console.log(text); // {'JavaScript'}
```
변수로 선언하는 방법(string)

```
let text02 = new String('JavaScript'); 
console.log(text02); // String {JavaScript}; ['j','a','v'...] 하나하나 쪼개서 배열로 담김
```
생성자 함수로 선언하는 방법 (object)

출력값은 같고 배열의 길이도 같다.
```
console.log(text.charAt(1));
```
특정한 문자열의 위치를 반환하는 속성 => a
```
console.log(text02.charAt(1));
```
생성자 함수로 생성한 문자열도 정상적으로 출력 => a
        
기본적으로 문자열을 생성할때에는 object 보다 string 형태를 사용하는것이 좋은데  
메모리적인 이점 때문이다.  
        
```
let a = '안녕하세요 자바스크립트 시간입니다.';
console.log(a.substr(0,8)); 
```
splice 와 같지만 문자열에 사용되는것의 차이가 있다.   
substr(시작index번호, 출력할 글자 수) *주의할 점은 공백도 한글자로 처리한다.    
```
let birthDay = prompt('생년월일 8글자를 적어주세요'); // 19851024
let year = birthDay.substr(0,4); // 1985
let month = birthDay.substr(4,2) // 10
let day = birthDay.substr(6,2); // 24

document.write(year + '년 ' + month + '월 ' + day + '일')
```
