import React from 'react';

const Props02 = ({name, local, job, age}) => {
    // 비 구조화 할당 방법
    return (
        <div>
            <p>안녕하세요 저는 {name} 입니다.</p>
            <p>저는 {local}에 살고 있습니다.</p>
            <p>직업은 {job} 입니다.</p>
            <p>나이는 {age}살 입니다.</p>
        </div>
    );
};

export default Props02;