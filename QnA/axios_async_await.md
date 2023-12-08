# Axios
Axios 는 브라우저, Node.js 를 위한 Promise API 를 활용하는 HTTP 비동기 통신 *라이브러리* 이다.  
쉽게 말해 백엔드랑 프론트엔드가 통신을 쉽게 하기 위해 Ajax 와 더불어 사용한다.  
이미 자바스크립트에는 fetch api 가 있지만 프레임워크에서 ajax 를 구현할 땐 axios 를 쓰는 편이다.

* 특징
- 운영환경에 따라 브라우저의 XMLHttpRequest((XHR)은 AJAX 요청을 생성하는 JavaScript API이다. XHR의 메서드로 브라우저와 서버간의 네트워크 요청을 전송할 수 있다.) 객체 또는 Node.js 의 http api 사용
- Promise(ES6) API 사용
- 요청과 응답 데이터의 변형
- HTTP 요청 취소 
- HTTP 요청과 응답을 **JSON 형태**로 자동 변경

## axios 와 fetch
|axios|fetch|
|---|---|
|써드파티 라이브러리로 설치 필요|현대 브라우저에 빌트인이라 설치 필요없음|
|*CSRF 보호를 해준다.|별도 보호 없음|
|data 속성을 사용|body 속성을 사용|
|data는 object 를 포함한다.|body는 문자열화 되어있다.|
|자동으로 JSON 데이터 형식으로 변환된다.|.json() 메서드를 사용해야 한다.|
|요청을 취소할 수 있고 타임아웃을 걸 수 있다.|해당기능이 존재하지 않음|
|HTTP 요청을 가로챌 수 있음|기본적으로 제공하지 않음|
|download 진행에 대해 기본적인 지원을 함|지원하지 않음|
|좀더 많은 브라우저에 지원됨|Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+이상에 지원|

* CSRF = Cross Site Request Forgery(사이트 간 요청 위조)의 줄임말로 웹 취약점 중 하나, 공격자가 희생자의 권한을 도용하여 특정 웹 사이트의 기능을 실행하게 할 수 있으며 이는 희생자의 의도와는 무관하게 이루어진다.

axios 는 별도의 설치가 필요하다는 단점이 있지만 fecth 보다 많은 기능 지원과  
문법이 조금이나마 간소한것을 확인할 수 있다.  
따라서 간단하게 사용할때는 fetch 를 쓰고 이외의 확장성을 염두한다면, axios 를 쓰는게 좋다.

## axios 사용법
* axios 설치하기
- 서버에서 axios 설치 (react)
```
$ yarn add axios
```

* axios 문법 구성
```
axios({
  url: 'https://test/api/cafe/list/today', // 통신할 웹문서
  method: 'get', // 통신할 방식
  data: { // 인자로 보낼 데이터
    foo: 'diary'
  }
});
```

# 자바스크립트 비동기 처리 3가지 방식(await, async)
자바스크립트는 싱글 스레드 프로그래밍 언어기 때문에 멀티 작업을 하기 위해선 비동기 처리 방식이 자주 쓰인다.   
비동기 처리는 백그라운드로 동작되기 때문에 그 결과가 언제 반환될지 알수 없어, 완료되면 결과를 받아 처리하기 위해 사용되는 대표적인 방법으로 콜백 함수(Callback) 와 이를 개선한 프로미스 객체(Promise)Visit Website가 있다.   
하지만 서비스 규모가 커질 수록 코드가 복잡해짐에 따라 코드를 중첩해서 사용하다가 가독성이 떨어지고 유지보수가 어려워지는 상황이 발생되게 되는데, 이를 콜백지옥, 프로미스 지옥 이라고 불린다.

```
/* Callback Hell */
getData (function (x) {
  getMoreData (x, function (y) {
    getMoreData (y, function (z) {
      ...
    });
  });
});
```
위의 코드를 보면 알 수 있듯이 콜백 지옥은 코드가 활처럼 굽어 보기가 엉성해지고, 프로미스 지옥도 지나친 then 핸들러 남용으로 인해 구현하고자 하는 의도를 한번에 파악할수가 없다.  
자바스크립트 async 와 await 는 이런 문제들을 해결하기 위해 탄생하였으며, 문법에 있어서도 훨씬 단순해져 가독성과 유지보수성을 향상 시켜준다.
```
/* Promise Hell */
fetch('https://example.com/api')
  .then(response => response.json())
  .then(data => fetch(`https://example.com/api/${data.id}`))
  .then(response => response.json())
  .then(data => fetch(`https://example.com/api/${data.id}/details`))
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```
위 코드를 보면 콜백 헬과 같은 허리 굽은 코드는 없으며, 프로미스 헬과 같은 지나친 then 핸들러 남용으로 인한 가독성 하향도 없다.   
마치 함수의 리턴값을 변수가 받는 정의문 형식대로 되어 있어 코드가 의도하고자 하는 바를 동일 코드 레벨 라인에서 알수가 있어 훨씬 편하다.  

# async / await
async/await는 ES2017에 도입된 문법으로서, Promise 로직을 더 쉽고 간결하게 사용할 수 있게 해준다. 유의해야 할 점이 async/await가 Promise를 대체하기 위한 기능이 아니라는 것이다. 내부적으로는 여전히 Promise를 사용해서 비동기를 처리하고, 단지 코드 작성 부분을 프로그래머가 유지보수하게 편하게 보이는 문법만 다르게 해줄 뿐이라는 것이다. 

* tip
```
마치 자바스크립트에서 prototype과 class 문법의 차이라고 봐도 무방하다.  자바스크립트를 자바와 같이 클래스 형식의 문법을 지원하더라고 내부적으로는 여전히 프로토타입 형식으로 객체 지향을 처리하듯이, async/await도 내부적으로는 프로미스 방식으로 비동기를 처리하지만, 문법 형태만 좀 더 간편한 스타일로 추가한 것으로 보면 된다.
```

## async / await 기본 사용법


* 출처: https://inpa.tistory.com/ [Inpa Dev 👨‍💻:티스토리]

axios, await, async