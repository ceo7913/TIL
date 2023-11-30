## useReducer()
useState 의 상위 버전(선택값을 관리) 으로 복잡한 로직이거나 
다음 상태값이 이전 상태값에 의존해야 되는 경우가 큰 경우
포괄적으로 state 보다 효율적으로 관리할 수 있게 만들어진 *hook*

useState 나 useReducer 둘다 상태값을 관리하는 hook 이지만 로직이 복잡해지거나 하는경우
state 보다 reducer 의 의존도가 더 커지게 된다.

## useState(), useReducer() 비교 예시

useState-ver
```
const [count, setCount] = useState(0);

const countPluse = () =>{
    setCount(prev=>prev+1);
}
const countMinus = () =>{
    setCount(prev=>prev-1);
}
```
useState 의 경우 count 와 setCount 로 현재 값과 변화될 값을 담을 변수를 선언해 주고 useState(0) 로 초기값을 설정해 준다.
여기서 변화되기 이전의 값은 count 에 담기기 때문에 setCount(prev=>prev+1) => prev 에 이전 값을 담아주고 새로운 값에 추가 해주는 식을 세운다.
```
<div>
    count : {count} 
    <button onClick={countPluse}>+</button>
    <button onClick={countMinus}>-</button>
</div>
```
이후 이런식으로 출력하는것이 일반적인 useState 사용 방식이다.

useReducer-ver
기본적으로 useState 로 만드는것이 더 간단하고 쉽다. 다만 로직이 복잡하거나 양이 많아 지는 경우
useReducer 로 관리하는것도 좋은 방법이 될 수 있다.
```
1. const init = {count : 0}        
2. const reducer = (state, action) =>{ // dispatch = action  
     switch(action.type){
         case 'countPluse' : 
             return {count : state.count + 1};
         case 'countMinus':
             return {count: state.count -1};
         default:
             break
     } 
}
3. let [state, dispatch] = useReducer(reducer, init);

4. 출력
count : {state.count}
<button onClick={()=>dispatch({type: 'countPluse'})}>+</button>
<button onClick={()=>dispatch({type: 'countMinus'})}>-</button>
```
init = useState(0) 과 같은 역할을 한다. 이전 방법과 는 다르게 init 을 먼저 선언해주고 이후에 useReducer 에 담아주는 형식이라고 보면된다.

reducer = 함수는 useReducer 에 담길 함수이다. 상태값을 변경하기 위해 만들어진 함수라고 보면된다. 이것도 역시 먼저 선언하고 이후에 useReducer(reducer, init) 에 다음과 같이 담아주는 형태이다.

state = state 는 useState 에서 현재 상태값을 가지고 있을 state 와 같다고 보면된다. 

dispatch = 

    /*
        state : 상태값을 가질 변수
        dispatch : 상태값을 변경하기 위해 일어나는 이벤트

        reducer : reduer함수 자체를 의미 => 그냥 state 변경 함수인듯
        init : 초기값을 의미 (useState 에 넣어주는 초기값)
    */