## e.preventDefault() 와 e.stopPropagation() 의 차이

### e.preventDefault()?
기본 동작으로 되어 있는 이벤트를 방지하기 위해 만들어진 메서드  
ex) 링크버튼의 링크 이동이벤트, submit의 제출 기능  
e.preventDefault() 는 기본동작을 중지 시키는 것은 가능하지만 버블링을 막지는 않는다.

### e.stopPropagation()?
이벤트가 DOM 객체를 상위객체로 버블링되거나 혹은 하위요소로 전달되는  
캡쳐링을 방지하는 목적으로 사용되는 메서드  
e.stopPropagation() 는 기본동작을 중지시키지는 않는다