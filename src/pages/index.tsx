import ExploreTutors from '../../components/ExploreTutors/ExploreTutors';
import MeetTutor from '../../components/MeetTutors/MeetTutors'
import Testimonials from '../../components/Testimonials/Testimonials';
import Footer from '../../components/Footer/Footer'
import CTA from '../../components/CTA/CTA'
import Discount from '../../components/Discount/Discount'
import Hero from "../../components/Hero/Hero"
import WhyPlayfulMinds from "../../components/WhyPlayfulMinds/WhyPlayfulMinds"
import HowItWorks from "../../components/HowItWorks/HowItWorks"
import Layout from "../../components/Layout/Layout"
import { getTestimonials } from "../../lib/tutors"

interface Testimonials {
  testimonials: []
}

export async function getStaticProps() { 
  const testimonials = await getTestimonials()
  return {
    props: {
      testimonials,
    },
  };
}

export default function Home({ testimonials }: Testimonials ) {
  return (
  <>
  <Layout>
    <Hero />
    <WhyPlayfulMinds />
    <HowItWorks />
    <Testimonials testimonials={testimonials}/>
    <MeetTutor/>
    <ExploreTutors/>
    <Discount />
    <div className="home-page-bg-transition">
      <CTA />
      <Footer /> 
    </div>
  </Layout>
  </>
  )
}