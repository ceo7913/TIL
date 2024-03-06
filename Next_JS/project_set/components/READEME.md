## usePathname 를 사용하기 위해 "use client" 를 사용한 이유
해당 구문이 없을때는 usePathname 은 client component 에서만 작동한다는 오류를 발생시켰다.
이를 이해하기 위해서는 next.js 가 application 을 render 하는 방식을 이해해야 하는데
여기서 rendering 이란, next.js 가 react component 를 가져와서 브라우저가 이해할 수 있는 html 로 변환하는 작업을 말한다.

### CSR, SSR
next.js rendering 을 설명하기 전 평범한 react 가 render 되는 방식을 알아보고 비교해보자
react 의 render 방식은 client side rendering 이다. 이말은 즉 브라우저가 rendering 작업을 한다는 뜻, react 는 사용자 브라우저인 client 단에서 모든 rendering 작업을 수행한다.

이 방식에는 단점이 있는데 
1) 첫번째로 브라우저가 모든 js 파일을 다운로드하고 실행한 후에야 화면이 보인다는 점이다. 이렇게 되면 브라우저가 모든 js 파일을 다운로드하고 실행 시키는데에 걸리는 시간 때문에 새로고침시에 순간적으로 모든 ui 가 사라지고 일정 시간이 지난후(js를 모두 다운로드하고 실행)에 ui 가 표시된다. 이가 평소에는 특별히 불편하지는 않겠지만 브라우저에서 js 를 비활성화 해놓거나(거의 없겠지만), 데이터 연결상태가 좋지 않은 경우 웹사이트에 접속 할때 빈화면을 오래보는 불필요한 시간을 소비할 수 있다는 단점이 있다.

2) 두번째는 seo 검색 엔진 최적화이다. 만약 나의 website 가 구글에 노출되기를 원한다면
google 에 빈페이지를 보여주지 않는 것이 좋다.(구글엔진은 페이지의 html 을 기반으로 검색한다. react 는 브라우저에 접속하기 전까지 html 은 빈 상태)\

요약하자면 client side rendering 은 모든 rendering, 즉 모든 UI 구축 작업이 모두 client 측에서 일어난다. client 는 JS를 로드하고, 그 후에 JavaScript 가 UI를 빌드한다. 

반대로 next.js로 웹사이트를 빌드할 때는 자동적으로, default 로 server side rendering 을 하게 된다. 이는 react 와는 반대로 페이지의 내용들이 js가 로드될 때까지 기다리지 않고 브라우저 코드(html)에 모든 내용이 표시됨을 뜻한다. 즉 js 가 활성화 되지 않아도 사용자가 html 을 볼 수 있다는 뜻이다.

next.js application 의 모든 page 안에 모든 component 들은 next.js 가 그것들을 우선 server 에 render 한다. 예를 들어 url 로 접속하면 사용자에게 어떤 html 을 주기전에 server, 즉 backend 에서 apllication 을 render 한다. 따라서 사용자는 next.js 가 backend 에서 생성한 html 을 보게 된다.

**따라서 "use client" 라는 말은 헷갈릴 수 있는 구문이다. server 측이 아니라 client 단에서만 render 된다고 헷갈릴 수 있기 때문이다.**

use client 는 오직 client 에서만 render 된다는 것을 의미하지 않고 backend 에서 render 되고 front 에서 hydrate 및 interactive 됨을 의미한다.
즉 use client 는 페이지에 한번만 render 되고 다시는 render 될 일이 없다면 사용하지 않아도 된다. (useState, onClick 같은 event) 

즉 server 에서 html 을 표시하고 js 를 다운 받을 때 use client 를 가진 components 의 js 코드만 다운 받는다. 이러면 사용자가 받아야할 js 의 코드양이 줄어들고 불필요한 로딩시간을 줄인다.