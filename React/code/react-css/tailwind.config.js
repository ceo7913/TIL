/** @type {import('tailwindcss').Config} */
module.exports = {
  // tailwind 기본 세팅
  // src 폴더안에 *{모든 디렉터리} 에서 .{확장자명} 을 받아오겠다는 뜻
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

