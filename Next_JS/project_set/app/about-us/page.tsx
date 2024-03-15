import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'About Us',
}

// 여기서 function name 은 폴더명과 관계 없이 자유롭게 생성해도 출력 되는건 관계 없다.
export default function AboutUs() {
    return (
        <>
            <h1>About Us!</h1>
        </>
    )
}