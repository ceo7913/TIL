window.onload = () =>{
    // 호출 요소만 window.onload 안에 넣어 놓으면 가시성이 좋다.
    clock();
}
function clock(){

    setInterval(()=>{ // 실시간으로 1(1000ms)초마다 반복해서 값을 받아오기 위한 작업
        const currentDate = new Date(); // 현재 시간을 모두 받아오기
        const currentYear = currentDate.getFullYear() // 연도
        // 월 단위는 0 부터 시작하기 때문에 +1 을 해줘야한다.(1월2월... 식으로 읽는 나라는 우리나라 밖에 없다.)
        const currentMonth = currentDate.getMonth()+1 // 달
        const currentDay = currentDate.getDate() // 일
        const currentWeek = currentDate.getDay() // 요일 => 0,1,2 로 시작 변환 필요 일요일 = 0
    
        const currentHour = currentDate.getHours(); // 시간 => 24시 기준
        const currentMin = currentDate.getMinutes(); // 분 
        const currentSec = currentDate.getSeconds(); // 초 => 로드 될때의 값 한번만 가져오기 때문에 실시간으로 이용하려면 작업이 필요함

        // const dateResult = `현재 시간은 : ${currentHour} / ${currentMin} / ${currentSec} 입니다. `
        const dateResult = `현재 시간은 : 
            ${String(currentHour).padStart(2,0)} /
            ${String(currentMin).padStart(2,0)} /
            ${String(currentSec).padStart(2,0)} 
            입니다. `
            /*
                String 형태로 변환해서 padStart(몇글자로 표시할것인지, 무엇을 기입할건지) 
                즉 2글자로 빈곳에 0을 추가하겠다는 뜻
                Start 는 앞에 무엇을 넣을것인지 End 라면 뒤에 무엇을 넣을지가 달라진다.
            */ 

        // .date class 를 가진 객체에 Html 형태로 dateResult 를 넣는 작업
        // 이렇게 하면 10 미만의 숫자들은 01,02 이런 형태가 아니라 그냥 1,2 로 출력되기 때문에 가시성을 위해
        // 추가 작업이 필요함
        document.querySelector('.date').innerHTML = dateResult

        /*  
            예전에는 if로 10 미만의 숫자 앞에 0을 붙히는 식이였지만 es8 에서 새로운 메서드가 나옴

            es8 버전에 새로 추가된 메서드
            padStart(), padEnd();
            좌우에 특정한 문자열로 채우는 기능을 가진 메서드
        */
    },1000)

}