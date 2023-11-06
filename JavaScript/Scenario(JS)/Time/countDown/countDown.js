// 카운트 다운이라 1초씩 빠지는 방식
window.onload = () =>{
    countDown("2023/11/06 15:11:00")
}

// Dday 를 메서드로 받는다.
function countDown(dday){
    const countDate = new Date(dday).getTime() // 매개변수의 값을 시간으로 받아온다. ms 으로 받아옴
    // console.log(countDate);
    
    const second = 1000; // 1(1000ms)초 단위로 쪼개야 하기 때문에 이런식으로 받아옴
    const min = second*60 // 1분
    const hour = min *60 // 1시간
    const day = hour*24 // 1일
    
    // 시간을 쪼개서 반복할 때 setInterval
    const timer = setInterval(()=>{
        const nowDate = new Date().getTime() // 현재 시간을 ms 으로 받아옴
        const disTime = countDate - nowDate
        // console.log(disTime); ms 단위로 나옴
        let disD = Math.floor(disTime / day) // 소수점 제외 (Math.floor) => 몇일 남았는지
        let disH = Math.floor((disTime % day) / hour) // 남은값을 시간으로 나눈다.
        let disM = Math.floor((disTime % hour) / min)
        let disS = Math.floor((disTime % min) / second)

        if(disD < 0){ // -1 이 나오지 않도록 하는 구문
            disD = 0;
            disH = 0;
            disM = 0;
            disS = 0;
            clearInterval(timer) // timer 의 setInterval 정지
        }

        document.querySelector('.day').textContent = disD;
        document.querySelector('.hour').textContent = disH;
        document.querySelector('.min').textContent = disM;
        document.querySelector('.sec').textContent = disS;
    },1000)
}