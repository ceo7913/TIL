## json 활용
React 에서 json 을 사용할때에는 정적요소 이기 때문에 public 에 만들어준다.

- 회원일때의 정보(member.json)
```
- public/member.json
[
    { // 중괄호 하나가 하나의 정보 item / 여기서는 '' 으로 담으면 에러가 난다.
        "id": "1",
        "name": "회원용 상품명1",
        "price": "9,000원"
    },
    { 
        "id": "2",
        "name": "회원용 상품명2",
        "price": "18,000원"
    },
    { 
        "id": "3",
        "name": "회원용 상품명3",
        "price": "7,000원"
    },
    { 
        "id": "4",
        "name": "회원용 상품명4",
        "price": "2,000원"
    },
    { 
        "id": "5",
        "name": "회원용 상품명5",
        "price": "100,000원"
    }
]
```
- 비회원일때의 정보(no-member.json)
```
- public/no-member.json
[
    {
        "id": "1",
        "name": "비회원용 상품명1",
        "price": "19,000원"
    },
    { 
        "id": "2",
        "name": "비회원용 상품명2",
        "price": "118,000원"
    },
    { 
        "id": "3",
        "name": "비회원용 상품명3",
        "price": "17,000원"
    },
    { 
        "id": "4",
        "name": "비회원용 상품명4",
        "price": "12,000원"
    },
    { 
        "id": "5",
        "name": "비회원용 상품명5",
        "price": "1100,000원"
    }
]
```

React 에 가져오기(EffectMember.jsx)
```
- src/EffectMember.jsx

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
```
json 파일에 정보들을 담는 방법과
React 에서 어떻게 json 파일을 어떻게 가져와서 어떻게 출력해 주는지에 대한 예제