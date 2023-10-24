## JavaScript 입출력 문제 풀이 
모든 문제는 "BAEKJOON" 을 기준으로 하였다.

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

#### 문제
두 정수 A 와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오

#### 입력
첫째 줄에 A와 B가 주어진다.(0<A, B<10)

#### 출력
첫째 줄에 A+B를 출력한다.

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

#### 문제
두 정수 A 와 B를 입력받은 다음, A * B를 출력하는 프로그램을 작성하시오

#### 입력
첫째 줄에 A와 B가 주어진다.(0<A, B<10)

#### 출력
첫째 줄에 A * B를 출력한다.

```
const fs = require('fs');
<!-- 계속 틀려서 뭐지 했는데 split('\n') 이 문제였다. '\n' 한줄에 나와야 된다는 지문을 잘못 이해한 것 같다. -->
const input = fs.readFileSync('/dev/stdin').toString().split('');

const A = parseInt(input[0]);
const B = parseInt(input[1]);

console.log(A*B); 

```


### 사칙연산
|문제제목|사칙연산|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|5분|

* JS 를 이용해 기본적인 사칙연산을 수행할 수 있다.
* JS 에서 **나누기 연산(/)**을 수행하면 실수 데이터가 반환 될 수 있다.
* 따라서 몫을 구하기 위해서는 parseInt() 함수를 사용한다.

#### 문제
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

#### 입력
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

#### 출력
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

#### 처음 써낸 답
```
let fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("")

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(parseInt(a/b))
console.log(a%b)
```
여기서 틀려서 좀 당황 했다... 이후 바꾼답
#### 두번째 써낸 답
```
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let a = Number(input[0].split('')[0]);
let b = Number(input[1].split('')[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);
```
각각의 답을 구분하지 않아서라고 생각했는데 이것도 틀려서 이후 설마설마 해서 split("") 에 공백을 넣었더니 됐다..
#### 세번째 써낸 답
```
let fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().split(' ');

const a = parseInt(input[0]);
const b = parseInt(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(parseInt(a/b));
console.log(a%b);
```
어이 없지만 배운건 크다.

### 곱셈
|문제제목|곱셈|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|5분|

* 세 자리 수 두개가 주어진다.
* 문자열로 처리하면, 각 자릿수를 손쉽게 얻어 처리할 수 있다.
1. 입력 데이터: "872"
2. 일의 자리 문자: "2", 십의 자리 문자: "7", 백의 자리 문자: "8"
3. 이후에 Number() 함수를 이용해 각 문자를 정수 데이터로 변환한다.

#### 문제
(세 자리 수)x(세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.  
(1)과(2)위치에 들어갈 세자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

#### 입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에(2)의 위치에 들어갈 세자리 자연수가 주어진다.

#### 출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

#### parseInt() 와 Number() 차이
parseInt()는 문자열로 된 부분에서 숫자(정수)만 뽑아서 변환해주는것이 특징이고,  
Number()은 문자열 전체가 숫자일때 소수점까지 숫자타입으로 가져올 수 있다는것이 특징이다.
앞서 input 에 toString() 을 해주지 않았다면, Number 로 가져올 경우 문자열에  NaN 이 출력될 것이다.

#### 처음 써낸 답
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = input[0];
let b = input[1];

digit1 = b[2];
digit10 = b[1];
digit100 = b[0];

console.log(Number(a) * Number(digit1));
console.log(Number(a) * Number(digit10));
console.log(Number(a) * Number(digit100));
console.log(Number(a) * Number(b));
```
이게 대체 왜 틀렸는가에 대해 이해가 안됐다. 실제로 split() 에 '\n' 줄바꿈 기호만 넣어주면 됐었는데  
아예 식을 바꿔버렸다.

* 문제를 잘읽자.. 문제 지문에  
"첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에(2)의 위치에 들어갈 세자리 자연수가 주어진다."    
이렇게 적혀 있었는데도 줄바꿈 기호를 넣지 않다니.. 

#### 두번째 써낸 답
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let digit1 = b % 10;     
let digit10 = Math.floor((b % 100) / 10); 
let digit100 = Math.floor(b / 100);        

console.log(a * digit1);
console.log(a * digit10);
console.log(a * digit100);
console.log(a * b);

```