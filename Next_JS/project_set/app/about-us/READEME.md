Next.js 는 기본적으로 url root 를 설정 해줄때 app 폴더 내부에 해당 root 에 대한 폴더를 생성한다. 
이는 Next.js 에 잠재적으로 root 를 추가해줄거라는 것을 알려준다.
본격적으로 root 를 설정해주기 위해서 폴더 디렉토리에 page.tsx(jsx)를 생성해
UI 를 만들어주면 정상적으로 작동한다.

디렉토리를 설정해주게 되면 root 는 파일의 순서대로 설정된다.
ex) /about-us/company/sales

page.tsx 가 없는 /about-us/company 경로의 경우 404 페이지가 표시된다.

root 디렉토리 내부에 다른 폴더를 추가하여도 page.tsx(jsx) 가 없다면 렌더링 되지 않기 때문에 다른 폴더를 추가하여도 관계가 없으나 추천하는 방식은 아니다.
결국 root 에서 중요한 점은 디렉토리 내부에 page 파일이 랜더링 된다는것만 이해하면 된다.

root 디렉토리에 404 페이지를 지정해주고 싶다면 not-found 파일을 app 디렉토리 내부에 생성해주면 된다. 여기서도 역시 함수명은 중요하지 않으며, not-found 라는 파일 명이 중요하다.