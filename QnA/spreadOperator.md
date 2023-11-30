## 전개 연산자 ( Spread Operator )
혹은 스프레드 연산자라고 부른다.
JavaScript 스프레드 연산자(...)를 사용하면 기존 배열이나 객체의 전체 또는 일부를 다른 배열이나 객체로 빠르게 복사할 수 있다.

스프레드 연산자 예시(배열)
```
const fruitOne = ['apple', 'banana'];
const fruitTwo = ['grape', 'peach'];

// 기존 방법
let fruitAll = fruitOne.concat(fruitTwo);

console.log(fruitAll); // ['apple', 'banana', 'grape', 'peach']

// ES6 spread 연산사 활용 방법
const fruitAll = [...fruitOne, ...fruitTwo];

console.log(fruitAll); // ['apple', 'banana', 'grape', 'peach']
```
위의 예시 코드처럼 두 개의 배열을 하나의 배열로 병합하려고 할 때 기존에는 concat 메서드를 사용해 병합을 했지만 ES6에서는 spread 연산자를 활용해 보다 간편하고 깔끔하게 병합이 가능하다.

