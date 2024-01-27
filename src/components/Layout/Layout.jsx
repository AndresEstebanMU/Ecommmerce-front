import Nav from "../../routes/Nav"
import { Outlet } from "react-router-dom"
import Footer from "../footer/Footer"

const Layout = () => {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout