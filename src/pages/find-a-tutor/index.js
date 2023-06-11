import Layout from "../../../components/Layout/Layout"
import TutorCard from "../../../components/TutorCard/TutorCard"
import { getTutors} from '../../../lib/tutors'

export async function getStaticProps() { 
  const tutors = await getTutors()
  return {
    props: {
      tutors
    },
  };
}

export default function FindTutors ({ tutors }) {
  return (
      <Layout>
        <TutorCard tutors={tutors} />
      </Layout>
  )
}







