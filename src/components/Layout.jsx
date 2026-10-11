import { Outlet } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import Header from "./header/Header"
import Footer from './footer/Footer'

const Layout = () => {
  return (
    <>
      <Toaster position="bottom-center"/>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout