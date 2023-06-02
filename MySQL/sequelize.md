## 시퀄라이즈(Sequelize)?
시퀄라이즈를 쓰는 이유가
ORM (객체 관계 매핑)(object relational mapping)

웹의 가장 기본의 디자인 패턴
MVC 패턴 (으로 작업을 하는게 좋다)
(model viewfile contorller)

#### 시퀄라이즈의 장점
> 가독성 좋고 편하고 재사용 및 유지보수도 좋다.

#### 시퀄라이즈는 ORM 라이브러리
> 시퀄라이즈를 사용을 하면 자바스크립트 코드만으로 SQL을 제어할 수 있다.
> 객체와 데이터베이스를 ORM 라이브러리가 매핑을 시켜주기 때문에 
> 자바스크립트 구문을 SQL로 바꿔준다.

SQL 작업을 쉽게 할 수 있도록 도와주는 라이브러리

```
const dot = require("dotenv").config();
```

데이터 베이스 접속에 필요한 설정값 객체
```
const config = {
  dev: {
    username: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "test",
    host: "127.0.0.1", // 여기에 만약 우리가 AWS RDS 를 쓰거나 지원 데이터 베이스 등등
    // 사용한다면 이곳에 주소를 넣어주면 된다.
    dialect: "mysql",
  },
};
```

### return 만드는법
```
module.exports = {config,config2}; // 이렇게 여러개를 내보내고 싶으면 객체로 묶으면 됨
module.exports = config;
```
index.js 가 model 안에 model js 파일들들 모아서 사용하는곳이라고 생각하면 된다.
다 모은 다음에 빈객채에 넣어서 사용하는 식
```
const Sql = require("sequelize");
```
config.js 에서 module.exports = config; 내보내기를 하고
require('../config/config') 로 가져오면 내보낸 객체가 받아 진다.
config.js 에서 보내고 index.js 로 받는다
```
const {config,config2} = require('../config/config') 여러개 내보낼때
const config = require("../config/config");
const User = require("./users");
const Post = require("./posts");
```
```
console.log(config);
```

시퀄라이즈 객체 생성 이 옵션을 적용한 객체를 만들어 놓는다
```
const sequelize = new Sql(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);
```

빈객체를 만드는 이유 = 여기다 키값을 넣어서 계속 exports 에 넣으려고
```
const db = {};
```
그 빈객체에 sequelize 키값으로 시퀄라이즈 객체 만든것을 넣어준다.
```
db.sequelize = sequelize;
```
User 도 내보내서 사용할 예정이라 키값에 추가해 주고
```
db.User = User;
db.Post = Post;
```
이 구문이 없으면 테이블이 생성되지 않는다.
```
User.init(sequelize); // 실행
Post.init(sequelize);
```
관계형 맺어주는 함수 사용
```
User.associate(db)
```
관계형 맺어주는 함수 사용
```
Post.associate(db)
```
보내고 싶은 값을 다 넣은 객체를 내보낸것
```
module.exports = db;
```
```
const Sql = require("sequelize");

class Post extends Sql.Model {
  static init(sequelize) {
    return super.init(
      {
        msg: {
          type: Sql.STRING(100),
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Post",
        tableName: "posts", // 이름은 맘대로 정해도 되는데 modelName 에서 소문자로 변경뒤 뒤에 s 를 붙히는게 일반적
        charset: "utf8",
        collate: "utf8_general_ci",
      } // 두번째는 속성값
    );
  }
  static associate(db) {
    // belongsTo 함수를 사용해서 User 테이블과 연결 이 테이블이 자식
    // belongsTo 첫번째 매개변수는 연결될 테이블 이름
    // 유저의 id가 타겟이고 연결해주는 키는 user_id 다.
    db.Post.belongsTo(db.User, { foreignKey: "user_id", targetKey: "id" });
  }
}

module.exports = Post;

```
```
const Sql = require("sequelize");
```
User 클래스에서 시퀄라이즈 안에 모듈 객체의 기능을 상속시켜주기 위해서
User 클래스에서 Sql.Model 기능을 준다.
```
class User extends Sql.Model {
  // static init 메서드에서 테이블을 생성해주는건데
  // 사용하면 테이블을 생성 및 연결까지(매핑) 구성
  static init(sequelize) {
    // 상속받은 함수를 쓰려면
    // super 사용
    // init 함수의 첫번째 매개변수가 테이블의 구성
    // 컬럼이 뭐뭐 있는지 그 타입과 속성이 뭔지
    // 여기에 정리해서 테이블 생성해줌 매핑해줌

    // 두번째 테이블 자체에 대한 설정값을 객체로 전달
    // 테이블 자료형 사이트
    // https://pjt3591oo.github.io/sequelizejs_translate/build/html/CoreConcepts/DateTypes.html

    return super.init(
      {
        // name 컬럼 하나
        name: {
          // 시퀄라이즈 모델 안에 있는 데이터 타입을 사용해야 한다. 꼭
          // 그래서 가져온 시퀄라이즈 모듈 안에 있는 STRING 객체를 사용
          // 여기서 한거는 컬럼의 데이터 타입을 정한것
          type: Sql.STRING(20),
          // 이 값이 무조건 있어야 하는지 이 컬럼값이 없으면 안된다고 표시하는 것
          // false 면 없으면 안되고
          // true 면 없어도 된다는 뜻
          allowNull: false,

          unique: true,
          // 고유키로 사용할 것인지를 묻는 unique
          // 여기서는 컬럼에 name 값이 겹치지 않도록 사용
          // 주민번호나 전화번호 겹치지 않는 값들 혹여나 안겹치게
          // 중복되지 않는 키
          // 우리가 쓰고 싶을 때 쓰면 됨

          // primaryKey: true,
          // 기본키로 설정을 할 것인지
          // 중복되지 않는 키
          // 기본키는 컬럼에 하나는 무조건 있다.
        },
        // 나이 컬럼
        age: {
          // type 은 무조건 넣어줘야 함
          // 나이는 숫자로 받을 거니까 INTEGER
          type: Sql.INTEGER,
          // 없으면 안되니까 false
          allowNull: false,
        },
        meg: {
          // 문자 형태로 받아야 하니까 TEXT
          type: Sql.TEXT,
          // 굳이 안써도 되니까 true
          allowNull: true,
        },
        // createde_at :{
        //     // 시간 타입 DATE
        //     type : Sql.DATE,
        //     allowNull : false,
        //     // 기본 값 설정
        //     // 현재 시간 NOW
        //     defaultValue : Sql.NOW,
        // }
      },
      {
        // sequelize 이건 위에서 매개변수 쓴걸 연결 시켜주는 옵션
        sequelize,
        timestamps: true,
        // 이거를 써도 되고 위에 createde_at 로 써도 됨
        // 생성한 시간이 필요할 때는 createde_at 를 사용해야 한다.
        // timestamps 는 업데이트된 시간도 표시해 준다. createde_at 만 생기는게 아니라
        // updated_at 도 생겨서 우리가 수정을 했을 때 시간도 같이 기록해줌

        // underscored = ( 시퀄라이즈는 기본적으로 userData 카멜표기법인데
        // 스네이크 표기법으로 바꿔주는 옵션 user-data ( false 일때 ))
        underscored: false,
        // 얘는 모듈의 이름을 설정할 수 있다.
        modelName: "User", // 관경형으로 구성할 때 사용한다.
        tableName: "users", // 데이터 베이스의 테이블의 이름을 설정한다.
        // paranoid true 로 설정하면 deletedAt 이라는 컬럼이 만들어진다.
        // 컬럼값은 남아있고 deletedAt 이 값에 삭제한 시간이 추가 된다.
        paranoid: false,
        // charset, collate = 각각 밑에 처럼 설정해주면 한글이 입력 가능하게 되고
        // 이모티콘을 사용하고 싶으면 utf-8 뒤에 mb4 를 붙히면 된다.
        // 가나다 ㄱㅏㄴㅏㄷㅏ = 인코딩 방식이 다른것
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
  ```
  1 : N(다수) (foreignkey) 외래키
  ```
  static associate(db) {
    // 1:N 관계 (hasMany, belongTo)
    // 시퀄라이즈에서 1:N 관계를 hasMany 함수로 정의를 한다.
    // hasMany 함수를 이용해서 테이블의 관계를 정의해준다.
    // 첫번째 매개변수로 연결할 테이블
    // sourceKey User 테이블 안에 무슨 키를 foreignKey 와 연결 할지
    // hasMany() 첫번째로 넘겨준 테이블이 foreignkey 연결되고 foreignKey 이름은 user_id 다.
    db.User.hasMany(db.Post, { foreignKey: "user_id", sourceKey: "id" });
  }
}
```

module.exports = User; // 내보내기