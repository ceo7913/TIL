import React, { useReducer } from 'react'
import { cartReducer, init } from './CartReducer';

export const ShoppingCart = () => {
    
    const items = [
        {id: 1, name: 'item1', price: 5000},
        {id: 2, name: 'item2', price: 15000},
        {id: 3, name: 'item3', price: 49000},
        {id: 5, name: 'item5', price: 13000},
        {id: 6, name: 'item6', price: 11000},
    ]

    const [state, dispatch] = useReducer(cartReducer, init);

    const addItemCart =(product)=>{
        dispatch({type: 'add-item', pay:product })
    }
    const removeItemCart =(product)=>{
        dispatch({type: 'remove-item', pay:product })
    }

  return (
    <div>
        <h1>아이템 리스트</h1>
        <ul>
            {items.map((el)=>( // map 으로 돌릴거면 {} 가 아니라 () 로 감싸자 (실수 많이함)
                <li key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                    <button onClick={()=>addItemCart(el)}>장바구니</button>
                    <button onClick={()=>removeItemCart(el)}>장바구니 삭제</button>
                </li>
            ))}
        </ul>

        <h1>카트 리스트</h1>
        {state.items.map(el=>(
            <div key={el.id}>
                <p>{el.name} : {el.price}</p>
            </div>
        ))}
        <p>Total Items : {state.totalItems}</p>
        <p>Total Amount : {state.totalAmount}</p>
    </div>
  )
}
