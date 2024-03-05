/*
    이런식으로 디렉토리를 설정해주게 되면 root 는 파일의 순서대로 설정된다.
    /about-us/company/sales

    page.tsx 가 없는 /about-us/company 경로의 경우 404 페이지가 표시된다.
*/

export default function Sales(){
    return <h1>sales team</h1>
}