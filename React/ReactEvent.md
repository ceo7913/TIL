## 리액트에서 이벤트 처리하기
리액트에서 이벤트 처리하기
기존 이벤트 명에서 앞에 on 을 붙여서 사용
        
#### onClick = 클릭이벤트
#### onChange = input 컨텐츠의 내용이 변경되는 경우(실시간)
        
#### onSubmit = 폼에 입력된 데이터를 전송
(html 에서는 버튼에 onSbumit 을 사용하지만 리액트에서는   
대부분 form태그에 사용(로그인하는 경우 데이터가 버튼에 있는게 아니라 아이디 입력칸과 비밀번호 입력칸에 데이터가 담기기 때문))

#### onFocus = 포커스 인 이벤트
#### onBlur = 포커스 아웃 이벤트
#### onMouseMove = 마우스가 움직이는 이벤트

1. 이벤트 문법에는 카멜 기법을 사용한다.
onClick ={clickevent} X
onClick ={clickEvent} O

2. 문자열이 아닌 함수형으로 이벤트 전달
script => onClick = clickEvent()
React => onClick ={clickEvent}

3. 리액트에서는 요소의 기본이벤트(a 태그나 submit 태그는 고유의 동작)를 막기 위해 return false 를 사용할 수 없다.
   반드시 기본이벤트를 막는 방법은 e.preventDefault() 만 사용할 수 있다. 