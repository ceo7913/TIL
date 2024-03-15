
/* 
    만약 이런식으로 루트폴더에 layout 파일을 만들어준다면 해당 루트 page 만 사용하는 layout 을 따로 만들어 줄 수 있다. But Layout 요소는 상위 요소부터 긁어 오기 때문에 따로 생긴다는 개념이라기 보다는 중첩되는 개념이라고 생각해야한다.

    이런 경우에는 해당 루트에 하위 폴더에도 같은 Layout 이 적용 된다는 것도 알아두자
*/
export default function AboutUsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            &copy; next JS is great!
        </div>
    )
}
