import Link from 'next/link'
import styles from './Hero.module.scss'

const Hero = () => (
    <div className={styles.heroContainer}>
        <div className={styles.heroTextContainer}>
            <h1 className={styles.heroTextTitle}>Playful Learning Adventures</h1>
            <h2 className={styles.heroTextSubtitle}>Transform your child's learning experience with Playful Minds!</h2>
            <p className={styles.heroTextDescription}>Unlock your child's full potential with our fun and engaging online tutoring program. Our expert tutors provide personalized one-on-one sessions that cater to your child's unique learning style. Whether it's improving grades, developing critical thinking skills, or exploring new subjects, we're here to help. Sign up today and watch your child's mind soar!</p>
            <div className={styles.heroBtnContainer}>
                <Link href=""><button className={styles.heroBtn}>get started</button></Link>
            </div>
        </div>
        <div className={styles.heroImgContainer}>
            <img className={styles.heroImg}src="./assets/hero/hero-img.png"></img>
        </div>
    </div>
)

export default Hero