import React from 'react'
import { Link } from 'react-router-dom'

export const ItemList = () => {
    const item = [
        {id: 1, name: 'item1'},
        {id: 2, name: 'item2'},
        {id: 3, name: 'item3'},
    ]
  return (
    <div>
        <h1>아이템 리스트</h1>
        <ul>
            {item.map((el)=>(
                <li key={el.id}>
                    <Link to={`/items/${el.id}`}>
                        {el.name}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}
