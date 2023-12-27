# 타입스크립트
2012년 마이크로 소프트에서 발표,
자바스크립트 기반 **정적 타입 문법**을 추가한 프로그래밍 언어
정적 타입의 컴파일 언어

## 동적타입 / 정적타입
자바스크립트(동적타입) - 런타임에서 동작할 때 타입 오류 확인  
타입스크립트(정적타입) - 크드 작성 단계에서 타입 오류 확인  
자바스크립트로 변환(컴파일) 후 브라우저나 Node.js 환경에서 동작

## tsconfig.json
typescript 의 구성 옵션을 제공 해야 typescript 를 통해서   
결과적으로 javascript 코드를 만들 수 있다. 그때 사용되는 추가 내용들  
자세한 내용은 생략  
```
{
   "compilerOptions": {
      "target": "ES6",
      "module": "ESNext",
      "moduleResolution": "Node",
      "esModuleInterop": true,
      "lib": ["ESNext", "DOM"],
      "strict": true,
   },
   "include": [
      "src/**/*.ts"
   ],
   "exclude": [
      "node_modules"
   ]
}
```