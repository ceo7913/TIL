## JavaScript 입출력 문제 풀이

### A+B
|문제제목|A + B|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|5분|
* JavaScript를 이용해 정수를 처리해야한다.
* 이를 위해, 입력 받은 문자열 데이터를 정수로 변환해야한다.
* 이후에 덧셈을 수행한 결과를 출력한다.
* fs모듈을 이용해 특정 파일에서 문자열을 읽어올 수 있다.
#### fs모듈
- fs는 Node.js에서 기본적으로 제공하는 모듈로 File System의 약자이다.
- 파일을 읽기, 쓰기 등의 작업을 할 수 있다.
- fs.readFile과 fs.readFileSync로 파일을 읽어올 수 있다.
- fs.readFileSync는 동기적으로 파일을 읽어오고
- fs.readFile은 비동기적으로 파일을 읽어온다.
```
// 입력예시 = 1, 2
// fs 모듈을 이용해 파일 전체를 읽어와 문자열로 저장하기
let fs = require('fs');
// 백준에서 문제를 풀기 위해서는 JS 상에서는 '/dev/stdin' 경로에서 문자열을 읽어와야함
// toString() = 문자열로 바꿔줌, split('\n') = '\n' 이건 관례적으로 붙혀주는것, 일반적으로 입력을 받을 때 여러줄에 걸쳐서 입력이 들어오는 경우가 보편적이기 때문에 '\n' 줄바꿈 기호를 기준으로 각각의 줄에 걸쳐서 각 라인을 읽어옴
let input = fs.readFileSync('/dev/stdin').toString().split('');

// let line = input[0].split('');

// 배열의 첫번째 요소를 사용하여 정수로 변환 => 'parseInt()' 결과 정수가 변수에 할당된다 => a
let a = parseInt(input[0]);
// 배열의 두번째 요소를 사용하여 정수로 변환 => 'parseInt()' 결과 정수가 변수에 할당된다 => b
let b = parseInt(input[1]);

console.log(a + b)

```
* 애초에 상수로 답을 내는데 왜 문자열로 읽어오나 했더니 바보 같은 생각이였다.  
위 코드 "toString()' 의 목적은 초기에 원시 또는 버퍼링된 형식인 파일에서 읽은 **데이터** 가  
문자열로 변환되도록 하는것이다. 
```
require("fs").readFileSync("/dev/stdin")의 반환값은 문자열이 아닌 Buffer 객체다. readFileSync의 인수로 인코딩을 지정해주지 않으면 Buffer 객체를 반환한다. 따라서 문자열로 바꾸어주지 않으면 예기치 못한 오류가 날 수 있다. 문자열로 바꾸기 위해서는 위의 코드처럼 toString() 메서드 또는 문자열 연결 연산을 통해 Buffer 객체를 문자열로 바꾸거나, readFileSync의 두 번째 인수로 인코딩을 지정해주면 된다.
```
* 경로 /dev/stdin는 표준 입력 스트림을 나타낸다. (백준이라서 그런게 아니다.)

### A*B
|문제제목|A * B|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|5분|
* JavaScript를 이용해 정수를 처리해야한다.
* 이를 위해, 입력 받은 문자열 데이터를 정수로 변환해야한다.
* 이후에 덧셈을 수행한 결과를 출력한다.
* fs모듈을 이용해 특정 파일에서 문자열을 읽어올 수 있다.
```
const fs = require('fs');
<!-- 계속 틀려서 뭐지 했는데 split('\n') 이 문제였다. '\n' 한줄에 나와야 된다는 지문을 잘못 이해한 것 같다. -->
const input = fs.readFileSync('/dev/stdin').toString().split('');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A*B); 

```
