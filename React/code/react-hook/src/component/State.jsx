// rsc => react 컴포넌트 자동생성
// rsc = react code snippets 의 약자 => React code snippets, Reactjs code snippets 확장자 필요
import React, { useState } from 'react';
import ChildState from './ChildState';

const State = () => {
    const [name, setName] = useState('Harry');
    console.log(name);
    return (
        <div>
            <ChildState name={name}/>
            <button onClick={()=>{
                let copy = name;
                if(copy === 'Harry'){
                    setName('Rhon');
                }else{
                    setName('Harry');
                }
            }}>클릭!</button>
        </div>
    );
};

export default State;

