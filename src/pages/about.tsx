import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer"
import Layout from "../../components/Layout/Layout";

const about = () => 
<Layout bgColor=" #BAD0F6">
   <About/>
   <Footer showImgContainer={false} />
</Layout>

export default about;