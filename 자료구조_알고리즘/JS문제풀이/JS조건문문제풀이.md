## JavaScript 조건문 문제 풀이
모든 문제는 "BAEKJOON" 을 기준으로 하였다.

### 시험 성적
|문제제목|시험 성적|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

#### 문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

#### 입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

#### 출력
시험 성적을 출력한다.

```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");


let MyScroe = Number(input[0]);

let checkRecord = (i) => {
  let score = ""
  if (i >= 90 && i <= 100) {
    score = "A"
  } else if (i >= 80 && i <= 89) {
    score = "B"
  } else if (i >= 70 && i <= 79) {
    score = "C"
  } else if (i >= 60 && i <= 69) {
    score = "D"
  } else {
    score = "F"
  }
  return score;
}

console.log(checkRecord(MyScroe))
```
이것도 정답이긴 했다. 그런데 조금 더 잘하는 사람들은 어떻게 풀었을까 궁금해서 찾아봤다.
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(" ");

data =Number(input[0]);

function checkRecord(a) {
  if (90 <= a && a <= 100) console.log('A')
  else if (80 <= a && a <= 89) console.log('B')
  else if (70 <= a && a <= 79) console.log('C')
  else if (60 <= a && a <= 69) console.log('D')
  else console.log('F')

}

checkRecord(data);
```
실제로 길이도 더 짧았고 메모리는 더 먹긴 했지만 시간은 더 빨랐다. 그리고 알고리즘 풀때는 상관없긴한데  
아래 코드가 더 직관적으로 보기 좋았던것 같다. 오랜만에 해서 그렇다고 구차하게 변명 해봤지만  
조건식에서 실행될 문장이 하나밖에 없다면 중괄호를 생략해도 되는거 까먹었었다..

### 알람 시계
|문제제목|알람 시계|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 현재 시각이 주어졌을 때, 45분 감소
* M 이 0 보다 작아지면 H 가 1 감소
* H 가 0 보다 작아지면 H 는 23 으로 초기화

#### 문제
상근이는 매일 아침 알람을 듣고 일어난다. 알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.  

상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.  

이런 상근이를 불쌍하게 보던 창영이는 자신이 사용하는 방법을 추천해 주었다.  

바로 "45분 일찍 알람 설정하기"이다.  

이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.  

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.  

#### 입력
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.  

입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 시간을 나타낼 때, 불필요한 0은 사용하지 않는다.  

#### 출력
첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n")

let [H, M] = input[0].split(' ').map(Number);

// let H = Number(input[0].split(' ')[0]);
// let M = Number(input[1].split(' ')[1]);

M -= 45; // 45분 빼기

if (M < 0) { // if => M 이 0보다 작다면
  M += 60; // M 이 0보다 작다면 60을 더해준다.
  H -= 1; // M 이 0보다 작다면 H 에 1 을 빼준다.

  if (H < 0) { // if 이 과정중에 H 가 0보다 작다면
    H += 24; // H 에 24을 더해준다. 
  }
}

console.log(H + " " + M);
```

### 오븐 시계
|문제제목|오븐 시계|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 입력: A시 B분, 걸리는 시간: C분
* 입력으로 주어진 시각을 "분" 의 형태로 바꾸기
* "분"이 주어졌을 때, 시각을 알려주는 기능을 작성
* 예시
1. 입력: (17시 40분 + 80분) = (1060분 + 80분) = 1140분
2. 1140를 1440으로 나눈 나머지를 취하기: 1140분 (Why => 하루는 1440분이다.)
3. 이때, 60으로 나눈 **몫**을 시(hour)로 취하기: 19시
4. 이때, 60으로 나눈 **나머지**를 분(minute)으로 취하기: 0분


#### 문제
KOI 전자에서는 건강에 좋고 맛있는 훈제오리구이 요리를 간편하게 만드는 인공지능 오븐을 개발하려고 한다. 인공지능 오븐을 사용하는 방법은 적당한 양의 오리 훈제 재료를 인공지능 오븐에 넣으면 된다. 그러면 인공지능 오븐은 오븐구이가 끝나는 시간을 분 단위로 자동적으로 계산한다.   

또한, KOI 전자의 인공지능 오븐 앞면에는 사용자에게 훈제오리구이 요리가 끝나는 시각을 알려 주는 디지털 시계가 있다.  

훈제오리구이를 시작하는 시각과 오븐구이를 하는 데 필요한 시간이 분단위로 주어졌을 때, 오븐구이가 끝나는 시각을 계산하는 프로그램을 작성하시오.  

#### 입력
첫째 줄에는 현재 시각이 나온다. 현재 시각은 시 A (0 ≤ A ≤ 23) 와 분 B (0 ≤ B ≤ 59)가 정수로 빈칸을 사이에 두고 순서대로 주어진다. 두 번째 줄에는 요리하는 데 필요한 시간 C (0 ≤ C ≤ 1,000)가 분 단위로 주어진다.

#### 출력
첫째 줄에 종료되는 시각의 시와 분을 공백을 사이에 두고 출력한다. (단, 시는 0부터 23까지의 정수, 분은 0부터 59까지의 정수이다. 디지털 시계는 23시 59분에서 1분이 지나면 0시 0분이 된다.)

```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [A,B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
let H = parseInt(totalm / 60);
let M = totalM % 60;

console.log(H + " " + M)
```
분명 맞게 한거 같은데 계속 런타임 에러가 발생했다ㅏ....
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [A,B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
let H = Number(totalm / 60);
let M = totalM % 60;

console.log(H + " " + M)
```
혹시나 해서 Number 로 바꿔줬는데 이것도 아니였다.
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [A,B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
let H = Number(totalm / 60);
let M = totalM % 60;

console.log(`${H} ${M}`)
```
옛날에 처음 배울때는 굳이 공백을 저렇게 표현하지 않았어서 바꿔 보았더니 여전..
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [A,B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
let H = Math.floor(totalm / 60);
let M = totalM % 60;

console.log(`${H} ${M}`)
```
마지막 H 의 계산에서 Number 에서 나오는 값에 소수 부분 까지 포함되서 그런가 했는데
그것도 아니였다.
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [A,B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
let H = Math.floor(totalM / 60);
let M = totalM % 60;

console.log(`${H} ${M}`)
```
H = Math.floor(totalm / 60); => totalm 소문자... 혹시 몰라서 초반에 넣었던 식으로 오타만 수정해서 넣어봤다.
```
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split("\n");

let [A,B] = input[0].split(" ").map(Number);
let C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
let H = parseInt(totalM / 60);
let M = totalM % 60;

console.log(H + " " + M)
```
정답이였다.. ㅋ
```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin','utf8').toString().split('\n');

const [A, B] = input[0].split(' ').map(Number);
const C = Number(input[1]);

let totalM = (A * 60 + B + C) % 1440;
const H = Math.floor(totalM / 60);
const M = totalM % 60;

console.log(`${H} ${M}`);
```
최종 수정 => 이후 다른 코드들을 보다 보니, 'utf8'을 추가하여 파일 내용을 텍스트로 읽을 때
호환성, 가독성을 높이고 문자열 표현 대신 데이터로 직접 작업할 때 발생할 수 있는 잠재적 문제를
방지하는 것이 좋다고 한다.


### 주사위 세개
|문제제목|주사위 세개|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 주사위 3개를 던짐
* 눈금 세 개가 모두 같으면 -> 10,000 + _N_ * 1,000
* 눈금 두 개가 같으면 -> 1,000 + _N_ * 100
* 눈금이 모두 다르면 -> _N_ * 100

#### 문제
1에서부터 6까지의 눈을 가진 3개의 주사위를 던져서 다음과 같은 규칙에 따라 상금을 받는 게임이 있다.   

같은 눈이 3개가 나오면 10,000원+(같은 눈)×1,000원의 상금을 받게 된다. 
같은 눈이 2개만 나오는 경우에는 1,000원+(같은 눈)×100원의 상금을 받게 된다. 
모두 다른 눈이 나오는 경우에는 (그 중 가장 큰 눈)×100원의 상금을 받게 된다.  
예를 들어, 3개의 눈 3, 3, 6이 주어지면 상금은 1,000+3×100으로 계산되어 1,300원을 받게 된다. 또 3개의 눈이 2, 2, 2로 주어지면 10,000+2×1,000 으로 계산되어 12,000원을 받게 된다. 3개의 눈이 6, 2, 5로 주어지면 그중 가장 큰 값이 6이므로 6×100으로 계산되어 600원을 상금으로 받게 된다.  

3개 주사위의 나온 눈이 주어질 때, 상금을 계산하는 프로그램을 작성 하시오.  

#### 입력
첫째 줄에 3개의 눈이 빈칸을 사이에 두고 각각 주어진다. 

#### 출력
첫째 줄에 게임의 상금을 출력 한다.

```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

let [a, b, c] = input[0].split(' ').map(Number);

if (a == b && b == c) {
    console.log(10000 + a * 1000);
} else if (a == b || a == c) {
    console.log(1000 + a * 100);
} else if (b == c) {
    console.log(1000 + b * 100);
} else {
    console.log(Math.max(a, b, c) * 100);
}
```
이게 대체 왜 틀린..
```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [a, b, c] = input[0].split(' ').map(Number);

if (a == b && b == c) {
    console.log(10000 + a * 1000);
} else if (a == b || a == c) {
    console.log(1000 + a * 100);
} else if (b == c) {
    console.log(1000 + b * 100);
} else {
    console.log(Math.max(a, b, c) * 100);
}
```
줄바꿈 기호 :)