## 이벤트 버블링과 캡쳐링

### 이벤트 버블링(Event Bubbling)
이벤트 버블링이란 A 요소에 이벤트가 발생하면 A 요소에 할당된 핸들러가 동작하고,  
이어서 부모 요소의 핸들러가 동작하고 최상단 부모요소를 만날 때까지 반복되면서 핸들러가   
동작하는 현상을 말한다.

> 이벤트 버블링 현상 예시
```
    searchBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    searchWrapper.classList.add('on');
    console.log('ck2');
    })
    header.addEventListener('click',()=>{
    searchWrapper.classList.remove('on');
    console.log('ck');
    })
```
두가지 이벤트 동시 출력        

### 이벤트 캡처링 (Event Capturing)
캡처링은 버블링과는 반대로 최상위 태그에서 해당 태그를 찾아 내려간다.
캡처링은 잘 사용되지는 않지만 코드로 구현한다면 다음과 같이 표현할 수 있다.
```
const divs = document.querySelectorAll("div");

const clickEvent = (e) => {
  console.log(e.currentTarget.className);
};

divs.forEach((div) => {
  div.addEventListener("click", clickEvent, { capture: true });
});
```
addEventListener 의 옵션 객체에 { capture: true } 또는 true 를 설정해주면 캡처링을 구현할 수 있다.  
<div class="DIV3">DIV3</div>를 클릭한다면 위에서부터 찾아 내려오기 때문에 콘솔에는 DIV1, DIV2, DIV3이 순서대로 찍힐 것이다.

3. 이벤트 전파 막기
버블링은 해당 타깃에서 document 객체를 만날 때까지 핸들러가 모두 호출되는데 코드를 작성하다보면 원하는 타깃에서만 이벤트를 발생하게 하고 싶을때가 있다.  
그럴 때에는 event.stopPropagation() 을 사용하면 되는데 버블링의 경우에는 클릭한 타깃의 이벤트만 발생하고 상위 요소로 이벤트가 전파되는 것을 막을 수 있다.  

버블링에서 작성된 코드에 event.stopPropagation() 을 추가하고 실행해보자.
```
searchBtn.addEventListener('click',(e)=>{
    toggleSearch(true);
    e.stopPropagation(); // 이벤트 버블링 방지 / => 이벤트가 다른요소에 영향을 주는것을 방지
})
header.addEventListener('click',()=>{
    toggleSearch(false);
})
```
이렇게 하면 이벤트가 다른요소에 영향을 주는것을 방지 할 수 있다.