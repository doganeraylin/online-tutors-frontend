import OurStory from './ourStory/OurStory'
import Adventure from './Adventure/Adventure'
import Subjects from './Subjects/Subjects'
import Resources from './Resources/Resources'
import Summary from './Summary/Summary'
import CTA from './CTA/CTA'
import styles from "./About.module.css"

const About = () => {
  return (
    <div  className={styles.container}>
        <OurStory/>
        <Adventure/>
        <Subjects/>
        <Resources/>
        <Summary/>
        <CTA/>
    </div>
  )
}

export default About