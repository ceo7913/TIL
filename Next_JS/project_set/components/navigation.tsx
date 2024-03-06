"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

// next.js 를 사용하여 nav 를 만들때 react-router 처럼 a 태그를 사용하지 않고 Link 를 사용한다.
// 아래 예제가 최선의 방법은 아니지만 가장 기초적인 방법이라고 생각하면 된다.
export default function Navigation() {
    const path = usePathname(); // usePathname() 은 유저의 현재 경로를 알려주는 hook
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">Home</Link>{path === "/" ? "★" : ""}
                </li>
                <li>
                    <Link href="/about-us">About-us</Link>{path === "/about-us" ? "★" : ""}
                </li>
            </ul>
        </nav>
    )
}