import './globals.css'

export const metadata = {
  title: 'Playground',
  description: 'comming soon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
