// 상품카트 로직

export const init = {
    // 초기값
    items: [], // 몇개를 선택할지 모르기 때문에 배열로 담아준다. 빈배열 선언
    totalItems: 0, // 전체 선택 아이템의 갯수
    totalAmount: 0, // 전체 아이템의 가격
}

// 사용 할 함수
export function cartReducer(state, action){
    let aa = {...state};
    console.log(aa); // => {items: Array(2), totalItems: 2, totalAmount: 20000} => state 에 담긴 이전 값을 들고 있음
    switch(action.type){
        // 장바구니 버튼을 누르면, 선택한 item 의 name 이 빈 배열에 담기고 계속해서 클릭한 대상의 name 이 빈 배열에 담겨야 한다.
        case 'add-item':
            return {
                // ... = 기존값
                ...state,
                items: [...state.items, action.pay],

                // 클릭한 item 의 갯수를 나타냄
                totalItems: state.totalItems+1,

                // 클릭한 item 의 price 를 더해준다.
                totalAmount: state.totalAmount + action.pay.price
            }
        case 'remove-item':
            const itemIndex = state.items.findIndex(item => item.id === action.pay.id);
            const updateItem = state.items.filter((_,index)=> index !== itemIndex);
            const removeItem = state.items[itemIndex];
            return{
                ...state,
                items: updateItem,
                totalItems: state.totalItems -1,
                totalAmount: state.totalAmount -removeItem.price
            }
        case 'update-item':
            const updateItemIndex = state.items.findIndex(item => item.id === action.pay);
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