import React from 'react'
import { useParams } from 'react-router-dom'

export const ItemDetail = () => {
    /*
    useParams() = 리액트 라우터에 사용할 때 다른곳에 있는 파라미터(요소) 정보를 활용해야 하는 경우
    사용하는 리액트 라우터 구성요소
    */
    const {id} = useParams()
    console.log(id); // => 1, 2, 3  클릭한 id 의 값을 출력
    // item 이란 변수를 선언해서 useParams 로 받아온 id 의 정보들을 담아준다.
    const item = {id: id, name: `item${id}`}
  return (
    <div>
        <h1>상품 디테일 페이지 </h1>
        {/* 출력 */}
        <p>{item.id}</p>
        <p>{item.name}</p>
    </div>
  )
}
