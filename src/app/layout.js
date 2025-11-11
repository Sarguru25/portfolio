import './globals.css'

export const metadata = {
  title: 'Sarguru',
  description: 'Created with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
