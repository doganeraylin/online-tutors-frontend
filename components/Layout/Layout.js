import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = ({ children, bgColor }) => (
  <div style={{ backgroundColor: bgColor }}>
    <Header />
    {children}
    <Footer/>
  </div>
)

export default Layout
