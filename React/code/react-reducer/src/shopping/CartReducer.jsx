// 상품카트 로직

export const init = {
    // 초기값
    items: [], // 몇개를 선택할지 모르기 때문에 배열로 담아준다. 빈배열 선언
    totalItems: 0, // 전체 선택 아이템의 갯수
    totalAmount: 0, // 전체 아이템의 가격
}

// 사용 할 함수
export function cartReducer(state, action){
    // let aa = {...state};
    // console.log(aa); // => {items: Array(2), totalItems: 2, totalAmount: 20000} => state 에 담긴 이전 값을 들고 있음
    switch(action.type){
        // 장바구니 버튼을 누르면, 선택한 item 의 name 이 빈 배열에 담기고 계속해서 클릭한 대상의 name 이 빈 배열에 담겨야 한다.
        case 'add-item':
            // state 에 담긴 item 의 id 와 action 된 pay item 의 id 가 같은지 체크
            const ownIndex = state.items.findIndex((item)=>item.id === action.pay.id); // => 중복선택시 0 하나 담으면 -1
            console.log(ownIndex);
            if(ownIndex >= 0){
                const updateItems = state.items.map((item,index)=>
                index === ownIndex ? {...item, quantity : (item.quantity || 1)+1}: item)
                return {
                    ...state,
                    // 배열안에 값이 계속 추가되는 형태이기 때문에 동적으로 state 의 값을 가져오기 위해서
                    // ...state 처럼 전개 연산자를 쓴다.
                    items: updateItems,
                    // 클릭한 item 의 price 를 더해준다.
                    totalAmount: state.totalAmount + action.pay.price
                }
            }
            else{
                return{
                    ...state, 
                    item: [...state.items,{...action.pay, quantity : 1}],
                    totalItems: state.totalItems + 1,
                    totalAmount: state.totalAmount+ action.pay.price,
                }
            }
        case 'remove-item':
            const itemIndex = state.items.findIndex(item => item.id === action.pay.id);
            if(itemIndex < 0){
                return state
            };

            const updateItem = state.items.filter((_,index)=> index !== itemIndex);
            const removeItem = state.items[itemIndex];

            return{
                ...state,
                items: updateItem,
                totalItems: state.totalItems -1,
                totalAmount: state.totalAmount - (removeItem.price * removeItem.quantity)
            }
        case 'update-item':
            const updateItemIndex = state.items.findIndex(item => item.id === action.pay.id);
            if(updateItemIndex === -1){

            }
            const itemUpdate = state.items[updateItemIndex];
            const itemUpdateQu = {...state.itemUpdate, quantity : action.pay.quantity}
            const itemUpdateList = state.items.map((el,index)=>
            index === updateItemIndex ? updateItem: el)
            console.log(updateItemIndex,itemUpdate,itemUpdateQu,itemUpdateList);
            return{
                ...state,
                items : itemUpdateList,
                totalAmount: state.items.reduce((total,item)=> total + item.price * item.quantity, 0)
            }
        default: break;
    }
}