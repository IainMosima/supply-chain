import './globals.css';

export const metadata = {
  title: 'Supply Chain Solution Hub Limited',
  description: 'Start up advisory and consulting firm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='sm:w-11/12 mx-auto'>{children}</body>
    </html>
  )
}
