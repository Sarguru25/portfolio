import './globals.css'
// import AnimationWrapper from './AnimationWrapper'

export const metadata = {
  title: 'Sarguru',
  description: 'Created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html>
      {/* <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      /> */}

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Bitcount+Prop+Single:wght@100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap');
      </style>
      <body>
        {/* <AnimationWrapper> */}
        {children}
        {/* </AnimationWrapper> */}
      </body>
    </html>
  )
}
