import { Navbar, Footer, Marquee } from '@/components';
import './globals.css';
import { Providers } from '@/redux/Provider';

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
      <body className=''>
        <Providers>
          <Navbar />
          <Marquee />
          <div className='sm:w-11/12 mx-auto overflow-x-hidden'>
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
