import './globals.css';
import '@styles/global.css';
import Provider from '@components/Provider';
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });
const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300']  });

export const metadata = {
  title: 'Streamline',
  description: 'Harnessing the Power of Data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
