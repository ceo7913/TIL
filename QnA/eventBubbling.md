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