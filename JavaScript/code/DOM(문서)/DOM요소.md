## DOM
- html 문서 내에 있는 모든 요소들을 의미한다.
- 페이지 내의 모든 html 요소들을 컨트롤할 수 있다.(추적, 생성, 변형)
- 페이지 내의 모든 css 요소들을 컨트롤할 수 있다.
- 페이지 내의 모든 요소에 이벤트를 적용할 수 있다.
```
window.onload = function(){
  <body>
    <p class="text">Lorem ipsum dolor sit amet.</p>
    <p class="text">Lorem ipsum dolor sit amet.</p>
    <p class="text">Lorem ipsum dolor sit amet.</p>
    <p class="text">Lorem ipsum dolor sit amet.</p>
    <p class="text">Lorem ipsum dolor sit amet.</p>
    <p id="text">Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet.</p>
</body>
}
```
window.onload 가 다 로딩이 끝나면 실행하라는 함수

```
let a = document.getElementById('text')
console.log(a); // => <p id="text">Lorem ipsum dolor sit amet.</p>
```
이미 ID 를 명시하고 있기때문에 식별자 넣을 필요는 없다.

```
let b = document.getElementsByClassName('text')[0];
let c =document.getElementsByTagName('p')[3];
console.log(b); // => <p class="text">Lorem ipsum dolor sit amet.</p>
console.log(c); // => <p class="text">Lorem ipsum dolor sit amet.</p>
```
뒤에 [] 는 중복되는 클래스명을 가진 객체들의 index 번호를 넣어 하나를 지정할 수 있다.

JS 에서 선언된 변수 a 에 스타일을 넣을때
```
a.style.backgroundColor = 'gray';
```

id 나 class 를 따로 지정하지않고 모두 선택가능 but 그렇기 때문에 식별자를 넣어야 한다.  
querySelector 는 중복 선택자일 경우 항상 첫 요소를 선택  
```
let d = document.querySelector('.text');
d.style.color = 'pink'
```

querySelectorAll 은 배열 형태로 들어오기 때문에 배열 위치를 넣어줘야함
모든 요소들을 참조, 배열처럼 순번으로 저장 => 호출도 배열 호출방식을 사용해야함
```
let e = document.querySelectorAll('p')[2];
e.style.color = 'green'
```

DOM 요소에 스크립트가 접근할 때에는 순서나 선언에 유의 한다.
1. dom 요소보다 스크립트가 먼저 로드되면 안됨
> (body 아래에 script 를 선언 하거나 혹은 window 이벤트를 넣어서 지연시켜야 됨)
2. 선택자에 따라 index 를 추가하는 경우가 생긴다.
> (id 는 중복되지 않기 때문에 상관 없지만 class, tag 일 경우 반드시 index 번호가 포함되어야 선택 가능하다.)
3. style 적용은 카멜기법을 사용한다.
> (background-color = backgroundColor)
