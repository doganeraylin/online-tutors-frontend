import Header from "../Header/Header"

const Layout = ({ children, bgColor }) => (
  <div style={{ backgroundColor: bgColor }}>
    <Header />
    {children}
  </div>
)

export default Layout
