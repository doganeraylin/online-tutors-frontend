import About from "../../components/About/About"
import Footer from "../../components/Footer/Footer"
import Layout from "../../components/Layout/Layout";

const about = () => 
<Layout>
   <About/>
   <Footer showImgContainer={false} />
</Layout>

export default about;