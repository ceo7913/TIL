## JS 선행
### 표기법
- dash-case(kebab-case)
> '-' 기호를 사용하는 표기법 / 단어와 단어 사이를 '-' 기호를 사용해서 연결 
> HTML 과 CSS 에서 많이 사용된다. 

- snake_case
> '_' 언더바를 사용해서 단어와 단어 사이를 묶는다
> HTML 과 CSS 에서 많이 사용한다.

- camelCase
> 첫글자는 소문자 그다음에 단어의 첫글자는 대문자로 표기 
> JS 에서 주로 사용한다.

- ParcelCase
> 첫글자도 대문자 그 다음 단어 또한 대문자로 표기
> JS 에서 주로 사용한다.

### 데이터 종류
- String(문자 데이터)
> 따옴표를 사용한다 (큰따옴표, 작은따옴표는 구분하지 않는다.)
```
let myName = "HEROPY";
let hello = `Hello ${myName}?!` // 보간법 `${}`

console.log(myName); // HEROPY
console.log(hello); // hello HEROPY?!
```

- Number(숫자 데이터)
> 정수 및 부동소수점 숫자를 나타낸다.
```
let number = 123;
let opacity = 1.57;

console.log(number); // 123
console.log(opacity); // 1.57
```

- Boolean(불린 데이터)
> true, false 두 가지의 값을 가진 논리 데이터
```
let checked = true; // 참
let isShow = false; // 거짓

console.log(checked); // true
console.log(isShow); // false
```

- Undefined
> 값이 __할당되지 않은 상태__
```
let undef
let obj = { abc: 123 };

console.log(undef) // undefinde
console.log(obj.abc); // 123
```

- Null
> 어떤 값이 __의도적으로 비어있음을__ 의미함
> 어떠한 변수에 비어있는 값(null)을 할당한 경우
```
let empty = null;

console.log(empty); // null
``` 

- Object(객체 데이터)
> 여러 데이터를 Key:Value 형태로 저장한다. {}
```
let user = {
  // key = Value,
  name: 'HEROPY',
  age: 85,
  isValid: true
};

console.log(user.name); // HEROPY
console.log(user.age); // 85
console.log(user.isValid); // true
```

- Array(배열 데이터)
> 여러 데이터를 순차적으로 저장한다. []
```
let fruits = ['Apple', 'Banana', 'Cherry'];

console.log(fruits[0]); // 'Apple'
console.log(fruits[1]); // 'Banana'
console.log(fruits[2]); // 'Cherry'
```

### 변수 
데이터를 저장하고 참조(사용)하는 데이터의 이름
- var, let, const 
