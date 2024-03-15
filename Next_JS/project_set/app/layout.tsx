import { Metadata } from "next"
import Navigation from "../components/navigation"

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Next Movies"
  },
  description: 'The best movies on the best frameworks',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* layout 컴포넌트에서 전체적인 레이아웃을 잡는다. React 에서 app 이나 index 의 역할을 한다고 보면 된다. */}
        <Navigation />
        {children}
      </body>
    </html>
  )
}
