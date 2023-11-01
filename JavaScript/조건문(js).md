## JS 조건문

### if문
1. if(조건문){실행 코드}
2. if(조건문){조건문 실행코드} else if(조건문2){조건문2 실행코드}...
3. if(조건문){실행코드} else{조건이 아닌 나머지 값에 대한 실행 코드}
```
 let a = 10;
        if(a == 10){
            console.log('!');
        }
        // ! 를 출력

        if(a == 20){
            console.log('!');
        }else{
            console.log('!!');
        }
        // !! 를 출력
```
### switch 문
조건문의 한종류
if 문은 true 와 false 에 대해서 조건에 맞는 처리를 하는 함수  
switch 문은 조건당 하나의 표현식을 배당 받아서 else if 처럼 사용된다.  
            
if문 과는 다르게 딱 떨어지는 값만 출력 (조건문에 연산자가 들어올 수 없다.)  
가독성은 if 문에 비해 높은편
```
let num = prompt('1~99 까지의 값을 입력 하시오');
num = parseInt(num) 
console.log(num);
      
switch(num){
    case 7 :
    document.write('1등입니다.'); // document : 문서 / write : 작성 = html 에 작성됨
    break

    case 19 :
    document.write('2등입니다.');
    break

    case 42 :
    document.write('3등입니다.');
    break

    case 68 :
    document.write('4등입니다.');
    break

    default :
    document.write('꽝');
    break
    }
```
    
break 가 없다면 해당 조건을 만나도 해당 조건을 실행하고 아래 조건까지 모두 출력시킨다.  
때문에 의도한는 것이 아니라면 무조건 break 를 사용해야 한다.  
default 는 if 문에서의 else 의 역할을 한다 그외의 모든 값을 의미한다.  

case : 조건문을 구분하는 명령어  
break : 현재 조건문을 만족하는 경우 명령어를 실행하다 break 문을 만나면 해당 구문 종료  
default : 보통 마지막에 넣는 편이며, else 와 같음  

       