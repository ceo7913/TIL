import React from 'react';

const ChildState = (props) => {
    const changeName = () =>{
        props.name = 'Rhon';
    }
    // 만약 이대로만 실행 한다면 "'#<Object>' 개체의 'name' 읽기 전용 속성을 할당할 수 없습니다." 라는 오류를 출력한다.
    return (
        <div>
            <p>이름은 : {props.name}</p>
        </div>
    );
};

export default ChildState;