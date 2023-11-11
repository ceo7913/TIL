## JavaScript 반복문
- 반복문
초기값 먼저 설정한 후에 조건을 만족하는 동안 일정 코드를 반복해서 실행하는 메서드
### for 문
for(초기값; 조건식; 증감식){조건을 만족하는 동안 실행할 코드}  
반복문 실행 순서  
1. 초기식(변수의 선언)
2. 조건문의 값이 참인지 확인 후 증감식을 실행
3. 증감식이 실행된 값이 {}에 코드에 대입되서 실행
4. 조건식이 만족하지 않을때 까지(flase 를 출력) 2~3번 반복 실행

**반복문에서 중요한 점**
종료되는 시점을 설정해주는게 가장 중요(무한루프 방지)  
종료되는 시점이 없거나 연산할 수 없는 조건이라면 무한루프에 걸리게 된다.  
```
  for(let i = 0; i <= 5; i++){ // for문 안에서 사용되는 지역 변수 'i'
      document.write(i+'<br>');
  } 

  for(let i = 0; i <= 10; i = i+2){
      document.write(i+'<br>');
  }
```
단순한 증감식이 아닌 특정 숫자를 대입해서 증감식에 설정할 수 있다.
```
for(let i = 0; i <= 5; i++){ // i가 한번 반복할때 j는 5번 반복 ex) i = 1 j = 0,1,2,3,4
    for(let j = 0; j <5; j++ ){
        console.log('i:'+i, 'j:'+j);
    }
}
```
for문 안에 for문을 반복하는 중첩 반복문도 작성 가능하다.

#### for문 활용(1)
```
for(let i = 1; i <= 30; i++){
    document.write(i+'<br>')
}

let list = '<select>';
            
for(let i = 1; i <= 30; i++){
    list += '<option>'+ i + '</option>'
}
list += '</select>' // 닫는 태그까지 작성해주는것이 좋다.
document.write(list);
```
출력 요소는 반복문 밖에서 작성 => for문이랑 같이 반복해서 출력되면서 누적  
보통 결과값은 for문 밖에서 출력하는 것이 좋다.  
#### for문 활용(2)
조건
1. 2~9 단 까지 구구단을 작성
2. 중첩 for문을 사용해서 새로운 단이 시작할 때마다 1~9까지 곱하기
ex) 2x1 = 2
```
for(i = 2; i <= 9; i++){
// i 는 총 9번 반복한다.
    for(j = 1; j <= 9; j++){
        // j는 i가 1번 반복하는 동안 9번 반복한다.
        document.write(i+'x'+j+'='+i*j+'<br>')
        
    }
}
```
### while문
#### while문 사용법
```
let 초기값
while(조건식){
    실행코드
    증감식
}
```
for문과 차이점  
구하고자 하는 값의 정확인 조건문을 제시해서 작성할 수 있고,   
for문은 블록안에 모든 값들이 있기 때문에 구분이 있다.  
list 나 배열같이 길이가 정해져 있는 값에서 사용하기 편함  

while 문은 정확한 조건문(반복실행 횟수)를 모르는 경우  
특정한 조건을 만족할 때 까지 무한으로 반복(로그인 같은거)  

때문에 while 문에서는 무한루프가 자주 발생할 수 있어서 주의 해야 한다.  
블럭 단위에서 코드가 작성되지 않기 때문에 구분이 필요한 경우가 있다.  
```
let i = 1;
while(i <= 10){
    // i++ 증감식을 위에 작성하면 위의 초기값을 참조하고 증감을 먼저 진행한 뒤에 출력을 한다.
    document.write(i+'<br>');
    i++ // 때문에 보통은 실행코드 아래에 증감식 장성
    
}
```
#### while문 활용(1)
```
let id = 'aaa'
let pw = 'aaa'
let isLogin = false; 

while(!isLogin){
    let tId = prompt('아이디 입력')
    let tPw = prompt('비밀번호 입력')

    if(tId === id && tPw === pw){
        document.write('로그인 성공')
        isLogin = true // 조건식이 isLogin 을 부정하기 때문에 true 로 바뀌면 더이상 반복하지 않는다.b
        break
    }else{
        document.write('아이디나 비밀번호가 틀림')
    }
}
```
#### while문 활용(2)
조건
1. 1~10 까지의 랜덤한 숫자를 하나 출력
2. 랜덤한 숫자를 맞출때까지 prompt 창이 계속 출력
3. 입력한 값이 정답보다 낮으면 down, 정답보다 높으면 up 을 출력(console로 출력)
4. 숫자를 맞추면 랜덤숫자의 정답과 실패 횟수를 출력
```
let randomNum = Math.floor((Math.random()*10)+1) // +1 은 최솟값을 지정한거라고 보면 된다. *10 은 최대값
// Math.random = 0~1 까지의 실수만 출력 즉 1은 안나옴
console.log(randomNum);

let num; // 사용자가 입력할 정답을 담아줄 변수
let count = 0; // 카운트를 담아줄 변수

while(num !== randomNum){ // num 과 randomNum 이 같을때 까지 반복해야 하기 때문에 반복 조건은 같지 않아야 한다.
    num = parseInt(prompt('1~10 까지의 랜덤한 숫자를 입력하세요')); 
    // parseInt 를 사용한 이유는prompt 로 받아오는 값을 number 타입으로 변환해줘야 '!==' 조건을 성립할 수 있다.
    count++

    if(num < randomNum){
        console.log('up');
    }else if(num > randomNum){
        console.log('down');
    }
}
document.write('맞춤, 정답은' + randomNum + '이며' + count +'회 시도함')
```
