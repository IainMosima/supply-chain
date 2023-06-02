import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata = {
  title: 'Supply Chain Solutions Hub Limited',
  description: 'Start up advisory and consulting firm',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/<generated>"
        sizes="<generated>"
      />
      <body>
        <Navbar/>
        <div className='sm:w-11/12 mx-auto overflow-x-hidden'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
