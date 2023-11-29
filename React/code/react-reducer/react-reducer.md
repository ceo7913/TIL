## useReducer()
useState 의 상위 버전(선택값을 관리) 으로 복잡한 로직이거나 
다음 상태값이 이전 상태값에 의존해야 되는 경우가 큰 경우
포괄적으로 state 보다 효율적으로 관리할 수 있게 만들어진 *hook*

useState 나 useReducer 둘다 상태값을 관리하는 hook 이지만 로직이 복잡해지거나 하는경우
state 보다 reducer 의 의존도가 더 커지게 된다.