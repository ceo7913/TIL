
/*
   NextJS 는 사용자가 프레임워크를 호출하는것이 아닌 프레임워크가 코드를 호출하는 프레임워크
   따라서 NextJS 에서 만족하는 구성을 따라야 함
   
   NextJS 는 page 라는 폴더를 찾음그 폴더는 app 이라는 폴더 안에 있어야함

   NextJS 가 시작될때 웹사이트를 빌드하려고하면 웹사이트의 첫번째 페이지를 app 폴더안에
   page 라는 파일에서 찾음

   만약 타입스크립트를 사용한다 해도 따로 설치하지 않고 script 를 실행하면 알아서 
   package 를 생성한다.

   참고
   여기서 Next.js 를 사용하기 위해서는 Node.js 18.17.0 이상의 버전이 필요함 따라서
   nvm 를 설치후 (https://jang8584.tistory.com/295)
   터미널에서 node -v 버전 확인
   nvm install 18.17.0 를 통해 node.js 버전을 설치해주자
   이후 자동으로 18.17.0 버전을 사용하지 않기 떄문에 (https://node-js.tistory.com/16)
   nvm list 로 현재 설치된 버전을 확인후
   nvm use 18.17.0 으로 버전을 변경해줘야 한다.

   ```
      ▲ Next.js 14.1.1
   - Local:        http://localhost:3000
   ```
*/

import Navigation from "../components/navigation";

export default function Home() {
   return (
      <div>
         <div>
            <Navigation />
         </div>
         <h1>Home</h1>
      </div>
   )
}