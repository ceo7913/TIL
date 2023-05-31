## mysql 프로젝트에 연결

### mysql npm 설치 명령어
```
npm i mysql2
```

### mysql 과 mysql2의 차이점
mysql은 콜백 기반이기 때문에 promise를 사용하지 못하기 때문에 mysql2를 사용하고
mysql 을 보안한다 하면 promise-mysql 을 설치해서 사용해야 한다.
mysql2는 promise를 지원하기 때문에 바로 사용해도 된다.

mysql2 require함수로 모듈을 가져온다.
```
const mysql = require("mysql2");
```

### createConnection 옵션
- host : 연결할 호스트를 나타냄
- port : 연결할 포트
- user : 사용자의 이름
- password : 사용자 비밀번호
- database : 연결할 데이터 베이스 이름
- debug : 디버그 모드를 사용할 것인지

```
const temp = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "test4",
});
```
database : 'test4' = test4 이름의 데이터 베이스를 사용하겠음
query 함수의 첫번째 매개변수는 쿼리문을 입력해주고
두번째 매개변수는 콜백 함수 매개변수는 첫번째 쿼리 에러, 두번째 쿼리 결과 이후 등등

```
temp.query("SELECT * FROM products", (err, res) => {
  if (err) {
    const sql =
      "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20),  number VARCHAR(20), series VARCHAR(20))";
    temp.query(sql);
  } else {
    console.log(res);
  }
});

```
```
const http = require("http");
```
```
const server = http.createServer((req, res) => {
  req.statusCode = 200;
```

한글이 깨지면 왜 깨질까.. 인코딩 방식을 정해보자
res setHeader(내용) 함수를 사용해서 해더의 정보를 설정할 수 있다.
utf-8로 컨텐츠 내용을 인코딩하는 속성을 추가한다면
```
  res.setHeader("content-Type", "application/json", "charset=utf-8");
```

요청된 url 확인
> req.url

요청된 method 확인
> req.methob

js 내용이 수정되었을때 자동으로 모니터링 해서 서버를 재시작 해주는 툴
> nodemon 노드 모니터링
> nodemon 설치 명령어

개발환경에서만 사용 할꺼니까 -dev 를 붙여준다.
```
npm install --save-dev nodemon
```

터미널 창에서 직접 nodemone을 사용하려면 -g로 설치
```
npm install -g nodemon
```
```
  const URL = req.url;
  switch (URL) {
    case "/":
      res.end("메인페이지");
      break;
    case "/list":
      temp.query("SELECT * FROM products", (err, data) => {
        if (err) {
          console.log(err);
        } else {
        data에는 products 테이블의 안의 컬럼 내용
          res.end(JSON.stringify(data));
        }
      });
      break;
    case "/add":
    (name,number,series)VALUES(?,?,?) 작성하면 이렇게 벨류의 값을
    두번째 배열 타입의 매개변수로 추가할 수 있다.
    eslint-disable-next-line no-case-declarations
      const sql = "INSERT INTO products (name,number,series)VALUES(?,?,?)";
      temp.query(sql, ["이름", "123", "123"], () => {});
      break;

    default:
      break;
  }
  console.log(URL);
});
```
```
const PORT = 3000;
server.listen(PORT, () => {
  console.log("port : ", PORT);
});
```

### mysql 편하게 쓰기
swquelize 사용 그리고 FORIGN KEY 사용
관계형 데이터 베이스 만들기

### 지금 사용할 모듈 mysql2, dotenv
```
const mysql = require("mysql2");
const config = require("./config");
```
```
const client = mysql.createConnection(config.dev);
console.log(config);
```
```
node app.js
```
```
const sql ="CREATE TABLE users (id INT AUTO_INCREMENT, username varchar(255), PRIMARY KEY (id));";
const sql2 ="CREATE TABLE items (id INT AUTO_INCREMENT,name varchar(255),price INT,image varchar(255),PRIMARY KEY (id));";
const sql3 = "CREATE TABLE orders (id INT AUTO_INCREMENT,user_id INT,total_price INT,created_at datetime DEFAULT CURRENT_TIMESTAMP,PRIMARY KEY (id));"
const sql4 = "CREATE TABLE order_items (id INT AUTO_INCREMENT,order_id INT,item_id INT,order_quantity INT,PRIMARY KEY (id));"
```

#### ALTER 테이블 속성을 바꿔주는것
FOREIGN KEY 추가하는데 oreders 테이블의 user_id 와 users 테이블의 id를 연결 시킨다.
```
const sql5 = 
"ALTER TABLE orders ADD FOREIGN KEY (user_id) REFERENCES users (id);"
const sql6 = 
"ALTER TABLE order_items ADD FOREIGN KEY (order_id) REFERENCES orders (id);"
const sql7 = 
"ALTER TABLE order_items ADD FOREIGN KEY (item_id) REFERENCES items (id);"
client.query(sql5 + sql6 + sql7 );
```
```
const sql8 = `INSERT INTO items (name, price, image) VALUES
('첫번째',1000,"/"),
('두번째',2000,"/");`;
```
```
const sql9 = `INSERT INTO users(username) VALUES('안녕');`;
```
```
client.query(sql8 + sql9);
```

INNER JOIN 두개의 테이블이 공통된 부분만(참조된 것들) 합치는 것 
id, user_id, order_id, item_id 끼리 합쳐짐

SELECT 부분이 찾을 값들 FROM 전까지
```
INNER JOIN order_items ON (order_items.item_id = items.id)
order_items 의 item_id 값이랑 item 테이블 id 값이랑 같은 값을 합친다.
const sql13 = `SELECT orders.id, orders.created_at,
orders.total_price, items.name, items.price, items.image,
order_items.order_quantity FROM items
INNER JOIN order_items ON (order_items.item_id = items.id)
INNER JOIN orders ON (orders.id = order_items.order_id)
WHERE (orders.user_id = ?)`;
```
```
client.query(sql13,[1],(err,result)=>{
    console.log(result);
});
```