import React, { useEffect, useState } from 'react'

export const EffectMember = () => {
    const [item, setItem] = useState([]); // item 에 빈배열을 담아준다.
    const [check, setCheck] = useState(false); // 상태확인용
    useEffect(()=>{
        // 비동기 방식 데이터를 처리하는 메서드
        fetch(`data/${check ? 'no-':''}member.json`) 
        // fetch 는 기본적으로 public 정보를 담는다.
        // check 여부에 따라 삼항연산자로 가져올 json 파일 변경
            .then((res)=>res.json())
            .then((data)=>{setItem(data)}); // 가져온 json 값을 비워둔 item 배열에 setItem 으로 담아준다.
    },[check]); // check 값이 변경 되었을때만 실행
    const onCheckEvent = ()=>{ // 여기서 check 여부에 따라 json 값 변경
        setCheck((prev)=>!prev) // 토글 (true/false)
        console.log(check);
    }
  return (
    <div>
        {/* onChange = 상태값이 변경되었는지 확인하는 프로퍼티 */}
        <input type="checkbox" onChange={onCheckEvent} /> 비회원 체크

        <ul>
            {item.map((el)=>(
                <li key={el.id}>
                    <p>{el.name}</p>
                    <p>{el.price}</p>
                </li>
            ))}
        </ul>
    </div>
  )
}
