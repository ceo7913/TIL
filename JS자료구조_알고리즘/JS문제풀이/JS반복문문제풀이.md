## JavaScript 반복문 문제 풀이
모든 문제는 "BAEKJOON" 을 기준으로 하였다.


### 합
|문제제목|합|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 자연수 _N_ 의 최대 값은 10,000이다.
* 따라서, 단순히 1부터 10,000까지의 값을 차례대로 더해도 괜찮다.
* 이 경우 시간 복잡도 _0_(_N_)이다.

#### 문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

#### 입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

#### 출력
1부터 n까지 합을 출력한다.

```
<!-- fs 모듈로 파일 전체를 읽어와 문자열로 저장 -->
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

<!-- 문자열을 수로 변환 -->
let a = Number(input[0]);
let n = 0;

<!-- for문을 이용해 a 라는 임의 값을 받았을 때 n이라는 기본 변수에 a 의 크기만큼 1씩 더해주는 
반복문 i = 1 -->
for (let i = 1; i <= a; i++) {
  n += i;
}

console.log(n);
```
문제 제출 이후 다른분들의 코드를 보니 등차수열의 합 공식을 사용했더라  
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);

console.log(a * (a + 1) / 2)
```


### 구구단
|문제제목|구구단|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

#### 문제
N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.

#### 입력
첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다

#### 출력
출력형식과 같게 N*1부터 N*9까지 출력한다.

```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let a = Number(input[0]);

for (let i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
}
```


### 별 찍기 - 1
|문제제목|별 찍기 - 1|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 2중 반복 문법 이용

#### 문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

#### 입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

#### 출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin','utf8').toString().split('\n');

let N = Number(input[0]);
let A = ""

for (let i = 1; i <= N; i++) {
  for(let j = 1; j <= i; j++){
    A += "*";
  }
  A += "\n";
}

console.log(A);
```


### 빠른 A+B
|문제제목|빠른 A+B|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 데이터의 양이 1,000,000 이 넘을때는 빠른 입출력 방식을 고민할 필요가 있다.
* JS 를 이용해 문자열을 출력할 수 있어야 한다.
* 빠르게 출력하기 위해 하나의 문자열 변수에 정보를 담은 뒤에 **한꺼번에 문자열을 출력한다.**
* **한줄(line)**을 출력할 때마다 console.log()를 수행하면 많은 시간이 소요된다.
* 모든 "줄(line)"에 대한 정보를 하나의 문자열에 담았다가 한꺼번에 출력한다.

#### 문제
본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.  

C++을 사용하고 있고 cin/cout을 사용하고자 한다면, cin.tie(NULL)과 sync_with_stdio(false)를 둘 다 적용해 주고, endl 대신 개행문자(\n)를 쓰자. 단, 이렇게 하면 더 이상 scanf/printf/puts/getchar/putchar 등 C의 입출력 방식을 사용하면 안 된다.

Java를 사용하고 있다면, Scanner와 System.out.println 대신 BufferedReader와 BufferedWriter를 사용할 수 있다. BufferedWriter.flush는 맨 마지막에 한 번만 하면 된다.  

Python을 사용하고 있다면, input 대신 sys.stdin.readline을 사용할 수 있다. 단, 이때는 맨 끝의 개행문자까지 같이 입력받기 때문에 문자열을 저장하고 싶을 경우 .rstrip()을 추가로 해 주는 것이 좋다.  

또한 입력과 출력 스트림은 별개이므로, 테스트케이스를 전부 입력받아서 저장한 뒤 전부 출력할 필요는 없다. 테스트케이스를 하나 받은 뒤 하나 출력해도 된다.  

자세한 설명 및 다른 언어의 경우는 이 글에 설명되어 있다.  

이 블로그 글에서 BOJ의 기타 여러 가지 팁을 볼 수 있다.  

#### 입력
첫 줄에 테스트케이스의 개수 T가 주어진다. T는 최대 1,000,000이다. 다음 T줄에는 각각 두 정수 A와 B가 주어진다. A와 B는 1 이상, 1,000 이하이다.

#### 출력
각 테스트케이스마다 A+B를 한 줄에 하나씩 순서대로 출력한다.

```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let Test = Number(input[0]);
let answer = '';

for(let t = 1; t <= Test; t++){
  let data = input[t].split(' ');
  let [A, B] = input[0].split(' ').map(Number);
  answer += A + B + '\n';
}

console.log(answer);
```
틀림
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let Test = Number(input[0]);
let answer = '';

for (let t = 1; t <= Test; t++) {
  let data = input[t].split(' ');
  let [A, B] = data.map(Number);
  answer += A + B + '\n';
}

console.log(answer);
```
최종 답안