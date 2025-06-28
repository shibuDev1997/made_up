import React from 'react'
import Header from './_utilies/Header'
import MainLayout from './_utilies/Main'
import Footer from './_utilies/Footer'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <MainLayout>{children}</MainLayout>
      <Footer />
    </div>
  )
}

export default Layout