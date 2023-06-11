import Layout from "../../../components/Layout/Layout"
import { getTutors } from '../../../lib/tutors'
import { getTutorById } from '../../../lib/tutors'
import TutorDetails from "../../../components/TutorDetails/TutorDetails"

export default function Tutor({ tutor }) {
  return (
    <Layout>
      <TutorDetails tutors={tutor}></TutorDetails>
    </Layout>
  );
}

export async function getStaticPaths() {
  const tutors = await getTutors();
  const paths = tutors.map((tutor) => ({
    params: { id: tutor.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const tutor = await getTutorById(params.id);
  return { props: { tutor } };
}
