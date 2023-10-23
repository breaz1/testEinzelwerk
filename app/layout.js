import Header from '@/components/header/header'
import './globals.css'
import Footer from '@/components/footer/footer'

export default function LayoutEn({ children }) {

  return (
    <html lang="en">
      <body>
         <Header />  
         <main>
          {children}
         </main>    
        <Footer  />
        </body>
    </html>
  )
}
