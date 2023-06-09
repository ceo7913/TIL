## Private Network 
가상 사설망 이란 뜻인데  
회사 조직에서 독립적으로 사용하는 네트워크로 보면 되고  
geht로 사용할거고  
우분투 폴더 경로 접속  
```
\\wsl$
```
root 폴더가 안들어가지면  
경로상에 /mnt/c/WINDOWS/system32#  
mnt폴더의 밖으로 이동 cd .. 쭉이동해서  
root폴더 확인하고 ls -a로 확인하고  
```
sudo chmod 777 -R root
```


Looking for peers 이더리움 네트워크상 다른 노드와 peer를 맺어 주기 위해  
peer 맺으면 이더리움 네트워크 상에 있는 데이터들을 로컬에 다운 받을수 있다  
다운 받은 내용은   
 
MacOs는 ~/Library/Ethereum  
Linux는 ~/.ethereum  

기본적으로 chaindata 폴더와 keystore 폴더를 확인해보면   
chaindata 폴더 : 블록 헤더 내용, 블록의 바디 트랜잭션 내용이 들어있다.  
keystore 폴더 : geht에서 관리하는 계정들의 정보가 들어있다.  

이런 내용을 geth로 다운 받는 것을 동기화라고 부르고  

full sync, fast sync, light sync이렇게 3가지가 있고  

- full sync : 제네시스 블록 부터 지금 현재 블록 까지 모든 블록을 동기화
- fast sync : 블록 헤더 정보 동기화, 블록 바디 마지막 트랜잭션 기준
            -1024개의 트랜잭션 데이터만 동기화
- light sync : 블록 해더 정보와 마지막 snapshot 동기화
- snapshot : 데이터를 파일이나 이미지로 저장 한다고 보면됨

이렇게 있고 아무 옵션 없이 geht를 실행할 경우  
디폴트 값이 fast sync가 되고 light sync로 실행 하고 싶으면  
```
geth --syncmode light
```

light sync 동기화 할때는 lightchaindata폴더에 값이 저장된다.  

### IPC 프라이빗 네트워크를 구축하면서 IPC 개념을 알고 가자  
IPC는 프로세스 간 통신  
프로세스끼리 서로 데이터를 전송 수신 하는 행위 또는 그 방법을 말하는것  

### IPC의 종류 
메시지 전달, 메모리 공유

메시지 전달은 커널이 제공하는 API를 사용해서 커널 공간을 통해서 통신하고
소켓 로컬에서도 통신이 가능하다.

### 메모리 공유
프로세스끼리 공통의 메모리 영역을 공유하고 상호간 통신 하는 방법  
데이터 자체를 공유하도록 지원한다.  

간단하게 IPC는 실행중인 프로세스 간에 데이터를 주고 받는것  
프로세스는 할당된 메모리 내의 정보에만 접근 할수 있게 해주고  
이를 벗어나서 접근할 경우 오류를 발생 시키는데  
안정성을 위해서 운영 체제가 자기 프로세스의 메모리에만 접근하도록  
하고 있기 때문에 이런 부분들 때문에 우리가 IPC를 사용해서  
다른 프로세스 간에 데이터를 주고 받아야한다.  

geth.ipc 파일을 사용해서 geth와 IPC 통신을 할수 있게 된다.  

터미널을 하나더 열어서  
통신을 하는 명령어  

```
geth attach ~/.ethereum/geth.ipc
```
자바스크립트 콘솔창에 접속이 되고 go언어로 만들어놓았고  
자바스크립트로 호출 해서 사용할수 있게 끔 만들어 놓은것.  

personal 모듈중 하나이다.  
personal을 콘솔에 입력   
속성과 메소드 등등이 쭉 보이게 된다  
이것들이 자바스크립트로 호촐 할수 있게 끔 만들어 놓은것  

#### admin
1. admin.nodeinfo : 노드의 정보 조회
2. admin.nodeinfo.enode : enode 값을 이용해서 peer를 맺는다.
3. admin.datadir : admin 관련 데이터의 폴더 경로

#### personal
1. personal.newAccount : 계정 생성

#### eth
1. eth.syncing : 동기화 여부 확인(true, false 값으로 구분)
2. eth.chainId : 체인 ID 조회
3. eth.accounts : 노드에 존재하는 계정 목록 확인
4. eth.coinbase : 코인베이스 계정(마이너 계정)

#### web3
web3.fromWei(eth.getBalance(account), "ether") : 웨이 -> 이더 로 단위 변환

private network 구축  

geth를 실행해보면 Chain ID:  1 (mainnet) 구분이 보이는데  
geth가 실행되고 있는 이더리움 메인넷 Chain ID:  1 (mainnet)에 연결된 노드로  
동기화가 이루어 지고 있다.  

private network를 만드는데 geth의 기능은 사용하지만 최초블록을 교체해서  
자체적인 프라이빗 네트워크를 구축할것.  

json으로도 제네시스 블록의 속성값을 지정해줄수 있다.  

```
const genesis = {
    // nonce값을 발견할 난이도 설정
    "difficulty" : "200000",
    // 블록체인 블록당 가스 제한량
    "gasLimit" : "3100000",
    // 제네시스 블록 생성시 지정한 지갑에 할당된 양의 정보
    "alloc" : {},
    "config" :{
        // 블록체인 네트워크 체인 아이디
        "chainId" : 1234,
        // 이더리음 release 버전
        "homesteadBlock" : 0,
        // eip는 Ethereum Imporvement Proposal을 의미하고
        // 적용할지 여부를 확인 할수 있다. 기본값 0
        "eip150Block" : 0,
        "eip155Block" : 0
        // eip는 이더리움 개선안 
        // 이더리움 커뮤니티 구성원들이 추진하는 이더리움 암호화폐와
        // 스마트 컨트랙트의 발전을 위해 제안하는것
    }
}
```

wsl 접속하고  
경로를 cd ~/ 루트로 이동후  
geht가 설치 되어있는 곳으로 이동 .ethereum 폴더로 이동  
```
cd .ethereum/
```

제네시스 블록 설정값 적용  
```
geth --datadir node init genesis.json
```
실행 명령어
```
geth --datadir node
```
Puppeth는 이더리움 노드 배포를 쉽게 도와주는 프로그램  
geth를 빌드해서 실행 부터  
make geht로 빌드를 했었고   
make all 빌드를 할거다.  
make all의 명령어를 사용하면 geth이외에 go ethereum의 모든 파일도 빌드 된다.  
이 make all 빌드를 하면 폴더 안에 Puppeth이 생성이 되는데  
Puppeth를 사용할거고 사용하는 이유는   
최초블록 속성 설정이나 여러가지 유용한 부분이 많기 때문에   
초기설정을 도와주는 프로그램으로 생각하면 된다.  
초기 세팅값을 사용하려고 쓰는것  

폴더 경로를 go-ethereum 폴더로 이동해서    
make all  

puppeth 실행 하고  
설정값 다 설정하고 파일명이 root에 .puppeth폴더에 설정한   
파일 이름으로 json 생성  

json 파일을 가지고 geth 생성하기  
```
geth --datadir node init "json 경로"  
```

실행 명령어
```
geth --datadir node
```

web3 통신하고  
IPC를 사용해서 로컬에 실행시킨 geth 프라이빗 네트워크를  
블록체인 네트워크에서 메타마스크나 다른 pc도 통신하려면 설정이 필요한데  
geth를 실행할때 옵션을 설정해 주면 된다.  

### 설정 명령어
```
--http.addr"0.0.0.0" : 모든 ip허용
--http.port 8000 : 사용할 포트를 8000으로 설정
--http.corsdomain"*" : cors설정 모든 도메인 허용
--http.api"admin,txpool,web3" : 외부에서 어떤 모듈을 사용할수 있게 설정할것인지
--syncmode full : 동기화 모드 full
--networkId : 체인 아이디와 동일한 값 입력 해주면 된다. 네트워크 아이디
```

### 실행 명령어
```

명령어 실행후
geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
--http.api "admin,miner,txpool,web3,personal,eth,net" --syncmode full --networkid 7722

터미널에 wsl 하나더 열어서
geth attach http://127.0.0.1:9000

```

프라이빗 네트워크에서 통신할수 있는 상태가 된거고  
nodejs나 메타마스크에서 프라이빗 네트워크에 통신 하는것이 가능한 상태  

npm init -y로 package.json 만들고  
테스트코드 작성으로 jest 사용  
```
npm install jest
```

통신을 사용 해야하니까 web3 설치
```
npm install web3
```

코인 베이스 계정으로 채굴하기  

코인베이스 계정을 마이너로 설정  
```
miner.setEtherbase(eth.accounts[0]);
```
```
miner.start(1); start(갯수는 스레드 개수);
```
스레드는 일해주는 인력이 많다.  

#### 마이닝 스탑
```
miner.stop();
```

코인 베이스 계정의 채굴한 잔고 확인 해보자
```
eth.getBalance(eth.accounts[0])
```

코인 베이스 계정의 잔고에서 트랜잭션을 보내서 잔고를 보내보자
```
eth.sendTransaction({from : eth.accounts[0], to : eth.accounts[1], value: web3.toWei(10,"ether")});
```

계정 잠금 해제하고 실행
```
geth --datadir node --http --allow-insecure-unlock --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
--http.api "admin,miner,txpool,web3,personal,eth,net" --syncmode full --networkid 7722
```

트랜잭션을 보내면 txpool 트랜잭션 풀에 먼저 들어오고  
아직 트랜잭션이 pending 상태로 들어있고  
마이닝을 실행하면 트랜잭션 풀에서 트랜잭션이 처리가 된다.  

특정 계정 unlock 시켜주기 
```
geth --datadir node --http --http.addr "127.0.0.1" --http.port 9000 --http.corsdomain "*" \
 --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --syncmode full --networkid 7722\
 --port 30300 --ws --ws.addr "127.0.0.1" --ws.port 9005 --ws.origins "*" \
 --ws.api "admin,eth,debug,miner,net,txpool,personal,web3" \
 --allow-insecure-unlock --unlock "0,1" --password "./node/password.txt"
```

자바스크립트 콘솔창에  
bytecode="0x뒤에 솔리디티로 컴파일한 bin파일의 내용을 붙여 넣어준다."  
자바스크립트 콘솔창에서 bytecode 변수에 값을 할당  

abi=솔리디티로 컴파일한 abi 파일의 내용을 붙여 넣어준다  
자바스크립트 콘솔창에서 abi 변수에 값을 할당  

트랜잭션 객체를 만들어준다  
from 키값과 data 키값으로 객체를 생성해준다.  
txObject = { from : eth.coinbase, data : bytecode};  
eth.sendTransacion(위에서 만든 트랜잭션 객체 txObject)  

eth.getTransacion(트랜잭션의 해쉬값)  
