// import './globals.css';
import '@styles/global.css';
import Provider from '@components/Provider';
import { Inter } from 'next/font/google'
import { Open_Sans } from 'next/font/google'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Streamline',
  description: 'Harnessing the Power of Data',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
