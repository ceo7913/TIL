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

* 출처: https://inpa.tistory.com/entry/AXIOS-📚-설치-사용 [Inpa Dev 👨‍💻:티스토리]

axios, request, await, async