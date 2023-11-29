## React-Router
React = SPA(Single Page Application) != MPA(Multiple Page Allication) 

### MPA(multiple page allication)
- 여러개의 페이지로 구성되어 있는 app
- mpa 는 ssr(server side rendering)방식
- 새로운 페이지를 요청(링크를 클릭했을 경우) 할때마다 html, css, js 와 같은 랜더링에 필요한 요소들을 모두 다운로드 한다. 

* 장점
1. seo(검색엔진)에서 유리한 위치
2. 최초로딩이 짧다.

* 단점
1. 현재 페이지를 새로고침(reloding) 해도 새로 랜더링 한다.
2. 모바일 랩 개발시 백엔드 작업이 따로 필요
3. 로딩 관련해서 성능저하나 메모리 부하가 생길 수 있다.

### SPA (single page allication)
- 하나의 페이지로 구성된 app 이다.
- spa 는 랜더링에 필요한 html, css, js 들을 최초 요청시에 모든 요소들을 한번에 다 다운받는다. 그 후에 서버에 요청에 따라 필요한 데이터만 전달 받아서 페이지를 렌더링 하는 방식 (대표적으로 React / Vue)
- spa 는 csr(client side rendering) 방식으로 랜더링

* 장점
1. 필요한 부분만 랜더링 하기 때문에 성능적으로 mpa 보다 우위를 가져올 수 있다.
2. 페이지 별로 작업하는 것이 아닌 컴포넌트 방식으로 작업하기 때문에 유지보수나 생산성이 높다.
3. 모바일 앱 관련해서 별도의 백엔드 작업을 필요로 하지 않는다.

* 단점
1. 구동 속도가 조금 느림(최초로 모든 데이터를 다운받을 때(최초로딩))
2. seo 가 상대적으로 불리함(ssr 방식으로 우회할 수 는 있다.)

#### react 에서는 a태그를 사용할 수 없다.
- a 태그의 목적은 태그를 클릭했을때 페이지로 이동하는 방식의 태그
- 대신에 react-router 를 이용해야한다.

* react-router 설치
```
$ yarn add react-router-dom
```


### SPA 와 MPA 의 차이
|/|SPA|MPA|
|---|---|---|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|
|테스트1|테스트2|테스트3|


### Router 관련 명령어
* Routes : Router 를 감싸는 부모 태그 (여러개의 router 를 연결하는데 사용)
* Route : 경로와 구성요소의 연결되는 통로 역할 path 와 element 로 연결된 요소를 랜더링
* Link : 전체 페이지를 로드하지 않으며, 페이지 간 이동에 사용되는 요소