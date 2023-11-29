## 가상 요소 (Pseudo-elements)
태그(body)상에서는 존재 하지 않지만 화면상에서는 존재하고 있는 것처럼 보이는  
어떠한 가상의 컨텐츠를 생성하는 기법
  
선택자:before 선택자의 내용(컨텐츠) 바로 앞에 요소를 생성  
선택자:after 선택자의 내용 바로 뒤에 요소를 생성

가상요소로 생성하는 컨텐츠는 리더기가 읽지 못하는 경우가 있다.  
중요한 내용을 넣는것보다는 꾸며주는 요소의 의미로 생성하는 경우에 많이 쓰인다.

태그로 꾸며주는 요소를 만들수 있지만 내용이 없는 빈 태그는 깡통태그라고 해서  
사이트 구조에 좋지 않은 영향을 준다. 

### 싱글콜론(:)과 더블클론(::)의 차이점  
html5로 넘어오면서 가상요소와 가상선택자를 구별하기 위해서  
가상요소는 더블, 가상선택자는 싱글로 바뀌었다.  

더블클론은 일부 css3를 지원하지 않는 하위 브라우저는 더블클론으로 작성했을때  
인식하지 못한다.

## 가상 선택자(pseudo-selector)
-사용자의 행동에 영향을 받는 요소를 생성(이벤트)
-특정한 위치의 순번을 가진 선택자를 찾을때(selector)를 
* 통틀어서 가상 선택자라고 한다.

### 이벤트 요소
1. a태그에만 들어가는 이벤트 선택자  
- :visited : 방문했던 링크 페이제 대한 선택자  
- :link 아직 방문하지 않은 링크 페이지에 대한 선택자  
a태그에만 적용되는 이벤트
```
a:visited{
    color: black;
}
a:link{
    color: aqua;
}
```

2. 모든 태그에 적용가능한 이벤트
- :hover : 마우스 이벤트
- :active : 마우스 클릭 이벤트
- :focust : 키보드 이벤트로 해당 객체거 포커싱 되어 있을때 활성화
포커스는 특정한 행동을 하는 객체(버튼, 입력, 이동)과 같은 상호작용을  
발생시키는 태그에만 적용할 수 있다.
```
p:hover{
    color: red;
}
p:active{
    color: blue;
}
a:focus{
    color: orange;
}
```

        /*
        가상 선택자
        특정한 순번을 찾는 선택자
        nth-child(n) :n은 순번을 의미하며, 특정 숫자가 아닌
        짝수와 홀수로 구분해서 지정할 수도 있다.   
        odd : 홀수
        even : 짝수

        숫자뒤에 n이 붙게 되면 해당 숫자의 배수로 지속적으로 선택한다.

        nth-child(n)의 가장 큰 특징은 태그와 선택자와 관계없이
        부모요소에서 해당하는 순번만 만족한다.

        nth-of-type(n) 부모요소를 기준으로 자식요소인 선태자 태그중에서만
        순번을 찾는다.(type과 순번 모두 만족)
        
        */
        ul li:nth-child(5n){
            background: coral;
        }

        p:nth-of-type(2){
            background: coral;
        }
