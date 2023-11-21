## Git 이란?
Git은 소규모 프로젝트부터 대규모 프로젝트까지 효율적으로 처리하도록   
설계된 무료 오픈 소스 분산 버전 제어 시스템이다.  
로컬 분기 , 스테이징 영역 및 다중 워크플로우 와 같은 기능을 가진다. 

## 설치 방법
https://git-scm.com/https://git-scm.com/ (운영체제에 맞게 다운)
이후 window 에서 Git Bash 를 실행시킨다. or Vscode에서 터미널 창 실행

powershell 터미널 창에 'mkdir 원하는폴더명' 구문으로 하위에 폴더를 생성할 수 있다.
'rmdir react-basic' 은 반대로 하위에 폴더를 삭제할 수 도 있다.

node.js 환경을 사용할 수 있게 https://nodejs.org/en 에서 최적화 버전을 다운받아 설치해 준다.
설치후 powershell 에 node -v 로 설치가 완료 되었는지 확인하자.
만약 이 과정에서 빨간글씨로 script 관련 오류가 출력된다면, powershell 을 관리자 권한으로 실행시킨 후 
1. get-ExecutionPolicy
2. Set-ExecutionPolicy RemoteSigned
3. y
순으로 넘어간 다음 다시 확인해보자.  
위의 오류 메시지는 Execution Policy(실행정책)와 관련된 것으로, Execution Policy는 파워쉘이 가진   첫번재 보안 방식 중 하나이며, 파워쉘이 실행할 스크립트 제어와 관련된 설정으로 이해하면된다.   

## Git과 Node.js

## npm & yarn
npm i -g yarn / npm 환경에서 yarn 설치
yarn -v / 버전 확인
