import React from 'react'
import Nav from './Nav'
import Footer from './Footer'

const MainLayout = ({children}) => {
  return (
    <div>
        <Nav />
            {children}
        <Footer />
    </div>
  )
}

export default MainLayout