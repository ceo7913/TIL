## typeScript 란?
JS 에서 타입 설정이 추가된 언어  
JS 에서 타입이 확장된 언어  
typeScript 는 JS 의 상위 집합 슈퍼셋으로서 대형 프로젝트를 진행할때  
어느정도 약점 오류를 잡는데 좋다.  
C++, C# 같이 객체지향 프로그래밍을 지원하는데  
typeScript 는 객체지향 프로그래밍에 특화된 프로그래밍 패턴을 지원하는데  

typeScript 를 사용하면 JS 로 작업할때 보다 개발에서 생기는 에러를 사전에 방지할 수 있고  
JS 의 코드의 품질과 개발 생산성을 높일 수 있다.  

### 코드의 완성 가이드
JS는 타입이 정해져 있지 않아서 자동완성이 미리 뜨지 않아 일일이 타이핑 해야함  
typeScript 는 타입을 정해놔서 미리 자동완성이 뜨기 때문에 빠르고 정확하게 작업할 수 있다.  

typeScript 는 에러를 사전에 방지하는데 JS는 코드를 실행시켜야지 에러를 확인 할 수 있고  
typeScript 는 작성한 코드가 문제가 있으면 실행시키기 전부터 바로바로 확인해서 문제를 해결할 수 있다.  

typeScript 는 프로그래밍 언어고 typeScript 의 컴파일은 그냥 typeScript 코드를 JS 코드로  
바꿔주는 것 JS 로 바꿔주는 이유는 브라우저가 이해할 수 있는게 typeScript가 아니라 JS 로  


#### 설치 명령어
```
npm install -g typescript
```

#### 설치 확인 방법
```
tsc --version
```

#### tsconfig.json 생성 명령어
```
tsc --init
```

처음에 설치하면 tsconfig.json 파일에 오류를 표시하는데 src 폴더를 만들어서 거기에 넣던지  
아니면 visualcode 를 껏다 키면 됨  

tsconfig.json 은 typeScript 의 생성파일 typeScript 의 설정값을 조장할 수 있다.  

typeScript 의 변수 타입 지정  
변수명 : 타입 = 초기값  

JS 는  
변수명 = 초기값  

ts-node 라는 typeScript 실행기를 사용해서 개발 환경에서 typeScript 로 작성된 파일을 실행 시켜 볼 수 있다.  

설치 명령어
```
npm install -D typescript ts-node @types/node
```
### tsconfig.json
```
{
  "exclude" : ["node_modules"], // typeScript 컴파일 제외할 폴더
  "compilerOptions" : {
    // 세세히 정할 옵션들
    "outDir": "./build",
    "esModuleInterop": true,
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "strict": true,
    "target": "ES6",
    "removeComments": true,
    "lib":["ES6","DOM"],
    "allowJs": true,
    "typeRoots": ["./node_modules/@types","./types"],
    "baseUrl": ".",
    "paths": {
        "@myUrl/*":["src/views"],
        "*":["@types/*"]
    }
  },
  // ts-node 설정값
  "ts-node":{
      // 전역 상태로 declare한 type들을 ts-node에서 찾을 수 있도로 설정
      "files" : true,
      "require" : ["tsconfig-paths/register"]
    }
}
```
- include : typeScript 가 해당 디렉토리 안에 모든 파일을 확인한다는 것을 의미  
typeScript 로 컴파일 할 시 포함할 파일과 포함하지 않을 파일을 구분할 수 있다.  

- exclude : 컴파일 대상에서 제외하는 설정값.  

- compilerOptions : 컴파일 대상 파일들을 어떻게 변환할지 세세히 정하는 옵션  

- outDir : 빌드한 파일 (js 파일)이 생성될 디렉토리 지정  

- exModuleInterop : commonJS 방식으로 내보낸 모듈을 ES 모듈 방식의 import 로 가져올 수 있게 해준다.  
commonJS 모듈을 ES6 모듈 코드 베이스로 가져오려고 하면 문제가 발생하는데  
- "exModuleInterop" : true 로 설정해주면 ES6 모듈 사양을 준수해서 commonJS 모듈을 가져올 수 있게 된다.

- moduleResolution : 모듈을 inport 하거나 export 할 때 어떤 방식으로 처리할 것인가.

- strict : 엄격모드 사용할건지.

- removeComments : 컴파일 시 주석 제거할지

- lib : 타입 정의 파일(.d.ts)이 목표로 하는 런타임 환경을 알려준다 컴파일된 JS 파일이 어디서
동작할지 알려주는 설정값.
- "lib" : ["ES6","DOM"] =  , ES6 를 지원하고 DOM(브라우저 환경) 에서 코드를 실행 시키겠다는 
- allowJS : JS 파일도 컴파일 대상이라는 의미. 프로젝트 내에세 점진적으로 typeScript 로 변환하기 위해 사용하는 설정값  

- typeRoots : 타입을 저장할 디렉토리 지정. typeRoots 에 작성된 경로에서 정의되어 있는 타임을 찾게 한다.
만약에 외부 라이브러리를 사용해서 추가적인 타입을 정의한다면 @type 와 같이 별도의 타입 디렉토리를 만들고
.d.ts 파일을 생성한 뒤 디렉토리를 typeRoots 에 추가하면 된다. 이 경로는 tsconfig.json 파일이
있는 곳에서 상대 경로로 작성하면 된다.

- baseUrl : 외부 모듈이 아닌 이상 상대경로로 모듈 가져와야 하는데 baseUrl 은 외부 모듈이 아닌 모듈을 가져올때 절대 경로로 참조할 수 있게 해준다 만약 src 폴더를 설정경우에 src/ 를 기준으로 절대 경로로 모듈 참조가 가능

- paths : 모듈을 참조할 때 baseUrl 을 기준으로 다시 매핑 가능 경로에 별칭을 붙여서 사용하는 것이 가능하다. 예를 들어서 "@myPaths/*" :["src/vies/*"] @myPths/ 라는 별칭으로 src 디렉토리 안에 있는 /views 디렉토리의 안의 모든 파일.

#### .d.ts 파일이 뭐냐
정역 변수나 전역 함수에 대한 타입 선언이 가능  
import 로 받아오거나 export 로 내보내지 않아도 전역 변수나 전역 함수에 대한 타입 선언이 가능  
.d.ts 파일은 타입만 지정할 수 있는 파일    
.d.ts 파일은 import 나 export 가 없어도 되는 로컬 모듈이고  
그래서 다른 타임스크립트 파일에서 import 로 가져와서 사용해야하는데  
typeRoots 로 설정하면 옵션을 통해 글로벌 모듈로 만들 수 있다 



