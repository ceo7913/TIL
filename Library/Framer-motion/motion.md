## Framer-motion

Framer Motion 은 직관적인 코드를 통해 손쉽게 애니메이션을 제작하게 해준다. 그리고 React 기반 라이브러리이므로 리액트 개발자라면 배울것이 많을것 같아서 검색을 하기 시작했다. 하지만 정보가 적고 대부분 영문 자료 였기 때문에 따로 찾아볼 필요없이 내가 필요할때 마다 찾아서 공부하기 위해 기록한다.

먼저 리액트 기반 라이브러리 이기 때문에 리액트 앱을 만들어 준다.

```
npx create-react-app 파일명  
```

그리고 framer-motion 을 설치 해준다.  

```
npm i framer-motion 
```

### Framer Motion 의 Main Concept

애니메이션을 다룰 때에는 3가지 요소를 중요하게 생각해야 한다.

 1. 애니메이션 시작전에는 어디서, 어떤 모습을 나타낼까? 

 2. 애니메이션이 끝났을 때 어떤 모습일까?

 3. 애니메이션은 어떻게 진행될까? 


이는 Framer-Motion 의 컨셉과 일맥상통한다. Framer-Motion 은 우리에게 motion 이라는 컴포넌트를 제공하는데 motion 컴포넌트는 위 세가지에 대한 props 를 제공한다. 우리는 이 props 를 통해서 animation 을 만들 수 있다.

```
<motion.div
	initial={{ // 처음 마운트 될 때 상태,
    	// 마운트시 애니메이션을 원하지 않다면 initial = {false}
        x : 0,
        rotate : 45,
      }}
    animate={{ // 애니메이션이 끝났을 때의 상태
    	x : 50,
        rotate : 270,
      }}
    transition={{ // animate state 까지 어떻게 변할지 정하는 옵션
    	// 여러 transition type을 정의 할 수 있다.
        ease : "easeIn",
        duration : 0.7,
      }}
/>
```

transition props 에서는 delay, 반복 횟수 등의 애니메이션이 어떻게 진행될지 정할 수 있다. 그리고 애니메이션은 3가지 타입을 가질 수 있다.

● tween : default 값이다. (between 의 약어다.) 아무것도 설정하지 않은 css 애니메이션과 같다.

● spring : 스프링 처럼 애니메이션이 끝나도 조금 탄성을 가진다.

● Inertia : 관성과 관련 되어 있다.

### Variants

props 들을 열거하다 보면 코드가 지저분해진다.  따라서 variants 를 이용해 미리 애니메이션 상태를 정의 할 수 있다.

```
import React from 'react'
import {motion} from 'framer-motion'

const AnimatedComponent = () => {
    const variants = {
        first: {
            x: 0,
            rotate: 45
        },
        animationEnd: {
            x: 50,
            rotate: 270
        }
    };

    return (
        <motion.div
            variants={variants}
            initial="first"
            animate="animationEnd"
            transition={{
                ease: "easeIn",
                duration: 0.7
            }}/>
    );
};

export default AnimatedComponent
```

이렇게 미리 정의 한다면 의문이 들 수 있다. 항상 정해진 애니메이션 상태만 나타내야 할까? 동적으로 애니메이션을 바꾸려면 어떻게 해야할까? 이를 위해서 framer motion 은 함수 형태의 variants 를 지원한다. 

variants 를 함수로 정의해 동적으로 애니메이션을 바꿀 수 있게 할 수 있다. (이 함수는 하나의 인수를 받고 animation 객체를 반환한다.) 이 인수는 컴포넌트의 cutom prop 에 의해서 값을 전달받는다 예시를 살펴보자.

```
import React, {useState} from 'react'
import {motion} from 'framer-motion'

const AnimatedButton = () => {
    const buttonVariants = {
        //function 으로 정의하는 모습
        hover: (clicked) => ({
            // 클릭된 버튼은 scale 이 커지지 않는다.
            scale: clicked
                ? 1
                : 1.5
        }),
        pressed: {
            scale: 0.5
        },
        rest: {
            scale: 1
        }
    };
    const [clicked, setClicked] = useState(false);

    return (
        <motion.div initial="rest" whileHover="hover"
            // hover 상태일 때 hover animation 발생
            whileTap="pressed" variants={buttonVariants} custom={clicked}
            // custom 을 통해 값을 전달 할 수 있다.
            onClick={() => setClicked(true)}>
            Click Me !
        </motion.div>
    )
}

export default AnimatedButton
```

여기 까지가 기본개념이고 이게 더욱 깊이 알아보자.
```
Advanced Concepts : Motion Values 
```

MotionValue 는 애니메이션 상태를 나타내는 값이다. UseMotionValue  를 이용하면 애니메이션 상태를 계속 관찰할 수 있다. (애니메이션 상태를 구독한다.) React 의 State 와 비슷하다고 생각하면 된다. 그러나 state 가 변할 때 다시 랜더링 하는 반면, MotionValue 는 다시 랜더링을 일으키지 않는다. (React render tree 밖에 존재하기 때문이다.)

 
어떻게 활용할 수 있을까 https://toss.im/career 에 접속 하면 스크롤 정도에 따라 Opacity 가 달라지고 텍스트의 위치가 변하는 애니메이션을 체험할 수 있다. 이런 복잡한 애니메이션을 보면 항상 여러 값들이 서로 얽혀 있다.  이렇게 하나의 애니메이션이 다른 애니메이션 상태와 연관되었을 때 MotionValue 를 황용할 수 있다. 애니메이션 상태 사이를 연결시키려면 useTransform 의 도움을 받아야 한다. 자세한 예시를 보자.


rotate 에 따라 scale 이 달라지는 애니메이션을 만들어보자. 우선 Variants 를 정의한다.

```
// Animated Component 
const blockVariants ={
    initial:{
        rotate:0,
    }, // 처음 컴포넌트를 나타낼 때의 상태
    target:{
        rotate:270,
    }, // 애니메이션이 끝날 때의 상태
};
```

그리고 motionValue 를 정의 하고 useTransform 을 통해 둘의 상태를 연결한다.
```
const rotate = useMotionValue(0); // 변수이름 달라도 됨, 애니메이션 상태 구독
const scale = useTransform(rotate,[0,270],[0,1]); // 변수 이름 달라도 된다.
```

위 예시에서는 rotate MotionValue 를 만들었고, scale 에 이를 연결시켰다. rotate 가 0~270 의 값을 가질 때 이에 비례해 scale 은 0의 값을 가지고 rotate 가  270 이라면  scale 은 1 의 값을 가진다. 그 사이 값들은 rotate 에 비례해서 변한다.

둘의 관계를 간단하게 그림으로 표현하면 이렇다.


이제 컴포넌트를 반환한다.
```
return (
    <motion.div
        style={{
            background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
            height: "100px",
            width: "100px",
            borderRadius: "10px",
            rotate, // rotate: rotate 와 동일
            scale, // scale : scale 과 동일
        }}
        variants={blockVariants}
        initial="initial"
        animate="target"
        transition={{
            ease: "easeInOut",
            duration: 4
        }}/>
);
```

컴포넌트가 로드되면 initial 에서 animate 까지 진행되는 애니메이션이 시작된다.

(rotate 가 0~270 까지 변하는 애니메이션) 그러면 style 의 rotate 값이 변하는데 이에 따라 scale 의 값도 달라진다.

쉽게 애니메이션을 지휘한다고 생각하자. 비슷한 애니메이션을 순차적으로 진행할 때

딜레이를 주거나 반복 횟수를 설정할 때 orchestration 을 사용한다.

motion 컴포넌트의 transition 속성의 repeat, delay, repeatDelay, repeatType 을 통해 delay 와 repeat 을 구현할 수 있다.

```
import React from 'react'
import {motion} from 'framer-motion'

const RepeatComponent = () => {
    const blockVariants = {
        initial: {
            y: -50
        },
        target: {
            y: 100
        }
    };
    return (
        <motion.div
            style={{
                background: "linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)",
                height: "100px",
                width: "100px",
                borderRadius: "50%"
            }}
            variants={blockVariants}
            initial="initial"
            animate="target"
            transition={{
                ease: "easeInOut",
                duration: 0.7, // 애니메이션이 총 걸리는 시간
                delay: 2, // 처음 애니메이션 delay
                repeat: 3, // 3번 반복
                // repeat: Infinity,
                repeatType: "loop", //   "loop" | "reverse" | "mirror";
                repeatDelay: 1, // 반복 될 때 delay
            }}/>
    );
};

export default RepeatComponent
``` 

위의 설정을 간단하게 설명하자면 

2초 기다린 후 애니메이션이 시작되고 반복되기 전 1초 기다린다. 그리고 3번 반복해서 총 4번 실행된다.
 
자식 컴포넌트 Animation 에 Delay 주기 ( 순차적으로 Delay 주기 )

자식 컴포넌트 애니메이션에 순차적으로 delay 를 주고 싶을 때는 어떻게 해야할까?

Framer Motion 은 transition 옵션에 delayChildren 속성과 staggerChildren 속성을 제공해 이를 구현하게 해준다. ( stagger 는 '망설이다' 의 뜻을 가진다. )

```
import React from 'react'
import {motion} from 'framer-motion';

const ChildrenDelayComponent = () => {
    const boxVariants = {
        out: {
            y: 600
        }, in: {
            y: 0,
            transition: {
                // first child 는 parent 가 나타나고 0.6s 후에 나타난다.
                duration: 0.6,
                // first child 의 sibling child 는 0.5s 의간격을 두고 나타난다.
                delayChildren: 0.5,
                // staggerChildren 이 없다면 모든 child 가 parent 가 나타나고 0.7s 후 동시에 나타난다.
                staggerChildren: 0.7
            }
        }
    };

    const iconVariants = {
        out: {
            x: -600, // translateX(-600)
        }, in: {
            x: 0
        }
    };
    return (
        <motion.ul variants={boxVariants} initial="out" animate="in">
            <motion.li role="img" aria-labelledby='magic wand'
                // parent 의 initial, animate 를 그대로 상속 받기 때문에               
                // 속성을 입력하지 않아도 된다.
                variants={iconVariants}>
                🚀
            </motion.li>
            <motion.li role="img" aria-labelledby='sparkles' variants={iconVariants}>
                ✨
            </motion.li>
        </motion.ul>
    )
}

export default ChildrenDelayComponent
``` 

여기까지는 사실상 Framer-Motion 의 기본개념일 뿐이지만 이제 간단한 애니메이션은 Framer-Motion 으로 작성할 수 있다.

### Framer Motion 응용을 위한 개념 ( layout, AnimatePresence )

Framer Motion 으로 아래와 같은 Tab 컴포넌트를 구현하기 위해 알아야할 개념을 다룬다.

#### Layout Props

Layout props 를 true 로 설정하면 컴포넌트의 layout 이 변할 때 그 모습을 부드럽게 이어준다. layout 이 변하는 경우는 다음과 같다.

● 리스트의 순서가 바뀌었을 때

● width 나 position 이 변했을 때

● 부모의 레이아웃이 변할 때 ( flex 혹은 grid 로 변할때 )

● 이외의 컴포넌트의 레이아웃이 변할 때

layout props 를 이용하면 다음과 같은 컴포넌트를 만들 수 있다. 우선 체험해보고 자세히 알아보자.


- 레이아웃 기능이 특별한 이유
```
export default function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(!isOn);

  return (
    <div className="switch" data-isOn={isOn} onClick={toggleSwitch}>
      <motion.div className="handle"  transition={spring} />
    </div>
  );
}

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
```

예시로 살펴본 버튼의 동작 원리는 다음과 같다. 사용자가 토글버튼을 클릭하면 data-isOn 의 값이 변하면서 css 의 justify-content 가 부드럽게 변한다. ( css 파일에서 data-isOn 에 따라 스타일을 다르게 하는 코드가 있다. )

여기서 핵심은 "부드럽게" 변하는 것이다. 본래 justify-content 속성은 transition 과 animation 에서 사용할 수 없다.

transition 이 가능한 속성 목록 에서 transition 과 animation 에서 사용할 수 있는 속성을 볼 수 있다. 하지만 justify-content 는 찾을 수 없다.

토글 버튼에 layout props 를 삭제하고 css 에서 transition 을 주었다. 이해를 돕기 위해 클릭시에 background-color 를 변경 시켰다. 이제 다시 클릭 해보자


배경 색깔에는 transition 이 적용 되지만 justify-content 에서는 적용되지 않았다.