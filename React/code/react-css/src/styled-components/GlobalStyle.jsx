// styled-component 로 전역 스타일 (reset) 설정하기

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    margin: 0;
    padding: 0;
`
/*
   styled-component 는 기본적으로 지역 스타일이기 때문에 전역으로 사용하려면 
   createGlobalStyle 를 import 해서 변수에 담은 뒤 export 해서 
   최상위 jsx 에 상단에 import 해준다. 

   보통 reset css 를 추가하거나, 전역으로 광범위하게 사용되는 css 를 포함한다.
*/
export default GlobalStyle