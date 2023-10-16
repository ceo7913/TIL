## SCSS
  ### css = cascating style sheet 
  - 하위 선택자를 선택할 때 
  - 변수, 스크립트 문법을 사용할 수 없다. (코드 가독성이 낮아짐)
  - 프로젝트의 크기가 커지면 유지보수의 난이도가 같이 올라감

  이러한 문제를 해결한 css문법이 sass, scss 이것들은 css 의 확장 스크립트 언어
        
  ### CSS : Cascading Style Sheets - 종속형 시트
  ### SASS : Syntactically Awesome Style Sheets - 문법적으로 어썸한 스타일시트
  ### SCSS : Sassy CSS - 문법적으로 짱 멋진(Sassy) CSS

  브라우저는 css 파일만 인식(scss, sass 확장자는 인식하지 않음)
  scss 언어로 작성한 후에 css 언어로 컴파일 한 후 에 업로드하는 방식을 사용

  - 변수
  - 조건문 반복문 사용 (for문과 if문)
  - import 기능
  - component 형식을 사용할 수 있다. (mixin)
  - function(함수) 사용
  - 들여쓰기와 중첩으로 선택자의 길이가 줄어들게 됨

  ### 필요 확장 프로그램 (live sass complier)

  처음 live sass complier 설치시 설정할 것들
  ```
  live sass complier 설정에서 검색
  settings.json
  {
      "workbench.colorTheme": "Default Dark Modern",
      "liveServer.settings.donotVerifyTags": true,
      "window.zoomLevel": 1,
      "liveSassCompile.settings.generateMap": false, // map 파일 생성 여부
      "liveSassCompile.settings.formats": [
          {
              "format": "expanded", // compressed 압축해서 저장
              "extensionName": ".css",
              "savePath": "~/css", // ~(현재경로)/../css 현재경로에서 상위 경로에서 css 폴더 생성
              "savePathReplacementPairs": null
          }
      ]
  }
  ```
  