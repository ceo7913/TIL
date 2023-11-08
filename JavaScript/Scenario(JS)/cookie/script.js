window.onload = () =>{
    // 팝업창 생성 메서드
    creatPopUp({
        name : '#popUp',
        data_url : './component/popUp.html', // 경로
    })
    
    const isCookie = document.cookie.indexOf('popUp=done'); // 체크를 했는지 안했는지 확인하는 조건
    // indexOf = 특정한 곳의 문자를 찾는것 / -1 은 없는것과 같음
    // 여기서 cookie 는 내장된 메서드
    console.log(isCookie); // => -1
    if(isCookie === -1){
        document.querySelector('#popUp').style.display = 'block';
    }else{
        document.querySelector('#popUp').style.display = 'none';
    }

    document.querySelector('.closeBtn').addEventListener('click',function(){ 
        // removerPopUp(this); // this = 화살표 함수면 window 
        removerPopUp(this); // this = function 함수면 el
    }) 
    document.querySelector('.del').addEventListener('click', function(){
        setCookie('popUp','done',0) // 0 => 현재시간
    }) // 쿠키 삭제 요소
}

// 함수를 하나 만들어서 동적으로 팝업창을 생성
function creatPopUp(opt){
    let popUpName = opt.name.split('#')[1] 
    // opt 에서 받아온 name 에 있는 # 을 분리해서 제거
    let popUpContainer = document.createElement('aside');
    // 팝업창을 담을 태그를 생성 (그릇 생성)

    popUpContainer.setAttribute('id',popUpName); // 새로 생성되는 팝업창에 아이디를 지정
    // setAttribute = .setAttribute()는 선택한 요소(element)의 속성(attribute) 값을 정한다.

    let content = document.createElement('div'); // div 생성
    content.classList.add('content'); // 생성된 div 에 class 부여
    popUpContainer.appendChild(content); //popUpContainer 의 자식요소로 content 삽입

    // 체크박스 요소 추가하기============================
    let wrap = document.createElement('div');
    let checkBox = document.createElement('input');
    checkBox.type = 'checkbox' // input type 지정
    let label = document.createElement('label');
    label.innerHTML = '오늘 하루 그만 보기'

    wrap.classList.add('wrap');
    label.appendChild(checkBox);
    wrap.appendChild(label); // 생성된 요소 wrap 안에 checkBox, label 추가

    popUpContainer.appendChild(wrap) // 생성된 요소 popUpContainer 안에 wrap 추가

    // ==================================================
    // 닫기 버튼 생성====================================
    const link = document.createElement('a');
    link.href = '#';
    link.classList.add('closeBtn');
    link.innerText = '닫기';
    
    wrap.appendChild(link)
    // ==================================================

    document.body.appendChild(popUpContainer);

    const xhr = new XMLHttpRequest();
    // XMLHttpRequest() = 웹 페이지에서 서버와 통신을 하기위한 방법중 하나.
    // 서버에 데이터를 보내고 결과를 받아오는 과정을 거치는데 
    // 이때 주고 받는 데이터를 다루는 방법

    console.log(xhr.readyState); // => 0 / 데이터를 요청하기 전

    xhr.open('GET',opt.data_url) // 서버에 데이터를 보내는 방식

    console.log(xhr.readyState); // => 1 / 데이터를 요청한 후
    /*
        (get, post, delet, put), 객체
    */
    xhr.onreadystatechange = () =>{
        /*
            console.log(xhr.readyState)
            console.log(xhr.status) = 현재 수신 상태 
            200 = 서버에 수신 성공
            400 = 서버에 수신이 실패 
        */
        if(xhr.readyState === XMLHttpRequest.DONE){
            if(xhr.status === 200){
                console.log('성공');
                content.innerHTML = xhr.responseText // responseText 요청한 요소 내부의 텍스트 
            }else{
                console.log('실패');
            }
        }
    }
    xhr.send()
    /*
        xhr.onreadystatechange = XMLHttpRequest 에서 받아온 
        state 의 값이 변경되면 호출되는 이벤트
        readystate 값에 따라서 처리 결과를 숫자로 전송
        0(unset) : 요청이 생성된 상태지만 서버에 요청은 하지 않은 상태
        1(open) : 함수를 호출한 상태로 open() 을 실행한 상태로 보며, 요청이 초기화된 상태를 의미
        2(header_received) : 함수를 호출하고, 결과를 요청한 상태, 보통 send() 로 수신한 상태에서 출력
        3(loading) : 서버에 요청한 결과를 받아오는 중
        4(done) : 서버에 요청한 결과를 받은 상태 (결과는 성공 / 실패)로만 나온다.
    */
}

function removerPopUp(el){
    const isChecked = el.parentNode.querySelector('input[type=checkbox]').checked;
    const popUpName = el.parentNode.parentNode.getAttribute('id')
    // console.log(popUpName);
    // console.log(isChecked);
    el.parentNode.parentNode.style.display = 'none' // 화면에서 제거 / parentNode.parentNode = 부모의 부모 요소
    el.parentNode.parentNode.parentNode.removeChild(el.parentNode.parentNode)// 구조상에서 삭제

    if(isChecked){
        setCookie(popUpName, 'done', 1);
    }
}
function setCookie(el,val, time){
    let today = new Date(); // 현재시간
    // console.log(today); // => Nov 08 2023 17:19:53 GMT+0900 (한국 표준시)
    let date = today.getDate();
    // console.log(date);
    today.setDate(date + time) // setDate(새로운 날짜) / 쿠키에서 정한 날짜를 오늘 날짜에 더해서 연장
    let dueDate = today.toUTCString();
    // toUTCString() = 브라우저 쿠키 만료일자 포맷 함수 GTM 기준으로 변경
    document.cookie = `${el}=${val}; path=/; expires=${dueDate};`
    // console.log(document.cookie = `${el}=${val}; path=/; expires=${dueDate};`);
}