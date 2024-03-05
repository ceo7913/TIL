// 여기서도 역시 함수명은 중요하지 않다.
import Navigation from "../components/navigation"

// 404 root 로 접근 하기 위해서는 not-found 폴더명이 중요하다.
export default function NotFound() {
    return (
        <>
            <div><Navigation /></div>
            <h1>NotFound!</h1>
        </>
    )
}