import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'Not Found',
}

// 404 root 로 접근 하기 위해서는 not-found 폴더명이 중요하다.
export default function NotFound() {
    return (
        <>
            <h1>NotFound!</h1>
        </>
    )
}