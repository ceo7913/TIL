## 웹소켓과 클라이언트가 양방향 통신할 수 있게 도와주는 소켓

### socket.io 는 왜 쓰고 뭘까
실시간 웹을 위한 자바스크립트 라이브러리
웹 클라이언트와 서버간의 실시간 양방향 통신을 가능하게 해주는

### node.js 모듈

가상화폐 거래소 같은 데이터 전송이 많은 경우 빠르고 비용이 싸게
표준 웹소켓을 사용하는게 좋다.
실제 업비트나 바이낸스 소켓 API를 사용하면 
데이터가 정말 많이 들어온다.

socket.io 는 웹소켓 프로토콜을 지원해주는 네트워킹 라이브러리 
비동기 이벤트 방식으로 실시간으로 간단하게 데이터를 요청하고 받을 수 있다.

예를 들어 웹에 고객 센터 채팅 같은 것도 socket.io 라이브러리를 사용해
페이지를 새로고침 하지 않아도 실시간으로 응답한다.

socket.io 많이 쓰는 메서드
    on : 이벤트에 매칭해서 소켓 이벤트 연결 (연결)
    emit : 소켓 이벤트 발생 (발생)

express, fs, socket.io

서버를 편리하게 실행하기 위해 따로 설치함
nodemon

express 설치 명령어
```
npm i express
```  

socket.io 설치 명령어
```
npm i socket.io
```    

설치한거 js 로 가져오는법
```
const express = require("express");
const fs = require('fs');
const socketio = require('socket.io');
```
js로 가져와서 실행하는 법
```
const app = express()
```
```
app.get('/',(req, res)=>{
    js 에서 html 파일 불러오기
    fs.readFile('page.html',(err,data)=>{
        res.end(data);
    });
});
```
```
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(PORT,"번 포트 사용중");
});
```
```
const server = app.listen(PORT,()=>{
    console.log(PORT,"번 포트 사용중");
});
```


### socketio(매개 변수) 매개변수는 express sever
```
const io = socketio(server);
let userid = [];
socketio 사용해서 연결
connection -> 클라이언트가 웹소켓 서버에 접속할때 발생
io.sockets.on("connection",(socket)=>{
    console.log('유저가 접속함');
    userid.push(socket.id);
    console.log(userid);
    socket.on("hi",(data)=>{
        console.log(data,"에서 보냄 웹소켓 hi 이벤트가 실행");
        
        자기자신에게 발생
        socket.emit("hi","웹소켓에서 클라이언트로 보냄");
        
        모든대상에게 발생
        io.sockets.emit("hi", "모두에게");

        자기 제외 모든 대상 발생(방송)
        socket.broadcast.emit("hi","나 빼고 모두에게");

        비밀대화 
        io.sockets.to(data.id).emit("hi",data.text);

    });
});
```

### express 모듈 사용
```
const express = require('express');
fs 모듈 사용
const fs = require('fs')
soket.io 모듈 사용
const socketio = require('socket.io')
```
### 서버 객체 만들기
```
const app = express();
const server = express().listen(PORT,()=>{})

사용할 포트 변수에 바인딩 (할당해 놓는다)
const PORT = 3000;

const server = app.listen(PORT,()=>{
    console.log(PORT, "에 잘 열렸어요");
});
```

### socketio 생성 및 실행
```
const io = socketio(server);

app.get('/',(req,res)=>{
    fs.readFile('page2.html',(err, data)=>{
        res.end(data);
    });
});
```

```
io.sockets.on('connection'); 클라이언트가 접속 했을 때
io.sockets.on('disconnect'); 클라이언트가 종료 했을 때
```
```
io.sockets.on('connection',(socket)=>{
    클라이언트에서 socket.emit("massage",data);
    웹소켓에 연결되어 있는 massage 이벤트를 실행 시켜 준다.
    밑에 코드 
    socket.on("message",(data)=>{
        요기
        console.log('dd')
        io.sockets.emit('message',data); 
    });
});
```
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!--socket.io 모듈은 내부적으로 "루트/socket.io" 이 경로에
        socket.io.js 파일을 자동으로 등록해준다.
        결과적으로 위에 불러온 스크립트는 
        http://localhost:3000/socket.io/socket.io.js
        에 접근해서 js 스크립트를 불러오게 된다. -->
    <script src="/socket.io/socket.io.js"></script>
</head>
<body>
    <div>첫 페이지</div>
    <input type="text" id="text">
    <input type="text" id="user">
    <button id="button"></button>
</body>
    <script>
        // window.onload html이 로드가 된 후 
        window.onload = () =>{
            // 소켓 객체를 뽑아서 클라이언트에 연결
            const socket = io.connect();
            socket.on("hi",(data)=>{
                alert(data);
            });
            button.onclick = ()=>{
                const msg = text.value;
                const id = user.value;
                socket.emit("hi",{msg,id});
            };
        };
    </script>
</html>
```
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="/socket.io/socket.io.js"></script>
</head>
<body>
    <div>버디버디</div>
    <div>모두의 채팅</div>
    <input type="text" id="userName" />
    <input type="text" id="message" />
    <button id="button">메시지 보내기</button>
    <ul id="content"></ul>
</body>
<script>

    window.onload = ()=>{
        const socket = io.connect();
        // 클라이언트 이벤트 연결
        socket.on('message',(data)=>{
            let el = `
            <li>
                <h3>${data.name}</h3>
                <p>${data.message}</p>
                <p>${data.data}</p>
            </li>
            `;
            content.innerHTML += el;
        })
        button.onclick = ()=>{
            socket.emit('message',{
                name : userName.value,
                message : message.value,
                data : new Date().toString(),
            });
        };
    };
</script>
</html>
```
