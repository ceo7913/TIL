import React, { useEffect, useRef, useState } from 'react'
import img from '../../game.png'
export const ExGame = () => {
    /*
        가위 바위 보 게임
        조건은 내 점수와 pc 의 점수를 비교해서 
        0점은 비기기, 1점이 된 상대는 승리, -1 점이 된 상대는 패배

        결과값에 따라
        예를 들어 setting 처럼
        바위: 0 vs 가위 : 1 이면 1점이 가위니까 가위가 이기는것 같지만
        0 - 1 = -1 이 나오기 때문에 -1 이 나오면 이기는 게임
    */
   const settings = {
        가위: 1,
        바위: 0,
        보: -1,
   };
   const gamePosition={
        바위: '-100px',
        가위: '-500px',
        보: '-800px'
   };

   const [result, setResult] = useState(''); // 결과값(승리, 패배, 비기기);
   const [score, setScore] = useState(0) // 기본 점수
   const interval = useRef(); // setinterval 관리
   const [imgPo,setImgPo] = useState(gamePosition.바위); // 게임 시작 위치 설정 

   const changeHand = () =>{
       if(imgPo === gamePosition.바위){
           setImgPo(gamePosition.가위);
       }else if(imgPo === gamePosition.가위){
           setImgPo(gamePosition.보);
       }else if(imgPo === gamePosition.보){
           setImgPo(gamePosition.바위)
       }
   }

   const onClickBtn = (choice) =>() =>{
        // setinterval 을 정지
        clearInterval(interval.current);
        // console.log(choice); // => 선택한 '가위','바위','보'
        // 나와 컴퓨터의 선택지에 대한 점수 제공
        const myScore = settings[choice];
        const comScore = settings[getChoicePc(imgPo)] // key 값을 받으면 myScore 와 점수를 계산할 수 있다.

        const diffScore = myScore - comScore; // -1+1 이라면 음수값에 +1 이 돼서 -2 가 된다.  
        console.log(diffScore);
        
        // if(diffScore === 0){
        //     setResult('비겼습니다.');
        // }else if([-1,2].includes.(diffScore)){
        //     setResult('이겼습니다.');
        // }else{
        //     setResult('졌습니다.');
        // };

        switch(diffScore){
            case 0 :
                setResult('비겼습니다.')
                break;
            case -1 :
                setResult('이겼습니다.')
                setScore((prev)=>prev+1);
                break;
            case 2 :
                setResult('이겼습니다.')
                setScore((prev)=>prev+1);
                break;
            default:
                setResult('졌습니다.')
                setScore((prev)=>prev-1);
                break;    
        }

        setTimeout(()=>{
            interval.current = setInterval(changeHand, 50);
        },3000);
        // 완료 후 다시 돌아가게 해준다.
   }

   const getChoicePc = (imgPo) =>{
        // imgPo 의 key 값을 찾아준다.
        return Object.keys(gamePosition).find((key)=>gamePosition[key] === imgPo)
   }

   useEffect(()=>{
        interval.current = setInterval(changeHand, 50);
        // console.log(interval);
        return()=>{
            clearInterval(interval.current);
        }
   },[imgPo])


  return (
    <div>
        <div className='hand' style={{width:'350px',height:'500px',background:`url(${img})${imgPo} 0`}} />
        <div>
            <button onClick={onClickBtn('가위')}>가위</button>
            <button onClick={onClickBtn('바위')}>바위</button>
            <button onClick={onClickBtn('보')}>보</button>
        </div>
        <p>{result}</p>
        <p>{score}</p>
    </div>
  )
}
