import React from 'react';

const Props = (props) => {
    console.log(props);
    return (
        <div>
            <p>안녕하세요 저는 {props.name} 입니다.</p>
            <p>저는 {props.local}에 살고 있습니다.</p>
            <p>직업은 {props.job} 입니다.</p>
            <p>나이는 {props.age}살 입니다.</p>
        </div>
    );
};

export default Props;