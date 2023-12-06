import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar"

export const metadata= {
  title: 'Harvest Moon',
  description: 'Your Smart Farm Partner',
}

const RootLayout = ({children}) => {
  return (
      <html lang="en">
        <body>
          <div className="main">
              <div className='gradient'/>
          </div>
          {/**Calls the navbar to be present in all the pages */}
          <main className='app'>
              <Navbar/>
              {children}
          </main>
        </body>
      </html>
  )
}

export default RootLayout
