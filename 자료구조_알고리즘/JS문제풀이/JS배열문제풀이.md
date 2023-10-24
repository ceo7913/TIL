## JavaScript 배열 문제 풀이
모든 문제는 "BAEKJOON" 을 기준으로 하였다.

### 최소, 최대
|문제제목|최소, 최대|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

* 배열의 원소를 하나씩 확인하여, 최댓값과 최솟값을 찾는 문제
* 최댓값(max vlaue)과 최솟값(min value)정보를 업데이트한다.
|인덱스(index)|0|1|2|3|4|5|6|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|값|71|59|82|40|33|12|68|

* index 가 업데이트 될때 마다 최댓값과 최솟값이 **업데이트** 된다.
* 원소를 차례대로 하나씩 확인한다는 점에서 시간 복잡도 _O_(_N_)로 해결할 수 있다.

#### 문제
N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.

#### 입력
첫째 줄에 정수의 개수 N (1 ≤ N ≤ 1,000,000)이 주어진다. 둘째 줄에는 N개의 정수를 공백으로 구분해서 주어진다. 모든 정수는 -1,000,000보다 크거나 같고, 1,000,000보다 작거나 같은 정수이다.

#### 출력
첫째 줄에 주어진 정수 N개의 최솟값과 최댓값을 공백으로 구분해 출력한다.

```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let N = Number(input[0]);
let arr = input[1].split(' ').map(Number);

let min = 1000001;
let max = -1000001;

for (let i = 0; i < N; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}

console.log(min, max);
```
뭔가 야매 같아서 다른 코드도 보다보니 'Infinity' 라는 전역 변수를 알게 됐다.
추가적으로 공부가 필요해 보이니 추가적으로 업데이트 해야겠다.
```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let min = Infinity; // 가장 큰 수로 초기화
let max = -Infinity; // 가장 작은 수로 초기화

// 즉 이 문제는 단순하게 생각하면, 하나씩 원소를 확인하면서
// 조건에 따라 해당 원소가 최대값인지 최솟값인지 확인할 수 있는 식
for (let i = 0; i < N; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
}

console.log(min, max);
```
아래 처럼 reduce 를 사용하는 방법도 있다.
```
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin', 'utf8').toString().split('\n');

const N = Number(input[0]);
// map() => 각각의 원소 x 를 Number 타입으로 바꿔준다.
let data = input[1].split(' ').map(x => Number(x));

// reduce 는 내부적으로 하나의 함수를 같는다.
// 따라서 a, b 를 받았을 때 더 작은 값을 반환하도록 하는 함수와 반대의 경우도 가질 수 있다.
// 아래와 같은 경우 a, b 를 계속 비교하면서 최대와 최솟값을 구할 수 있다.
let minValue = data.reduce((a, b) => Math.min(a, b));
let maxValue = data.reduce((a, b) => Math.max(a, b));

console.log(minValue + "" + maxValue);
```


### 최댓값
|문제제목|최댓값|
|:---:|:---:|
|문제 난이도|★☆☆☆☆|
|문제 유형|기초문법|
|추천 풀이 시간|10분|

#### 문제
9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.

예를 들어, 서로 다른 9개의 자연수

3, 29, 38, 12, 57, 74, 40, 85, 61

이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.

#### 입력
첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

#### 출력
첫째 줄에 최댓값을 출력하고, 둘째 줄에 최댓값이 몇 번째 수인지를 출력한다