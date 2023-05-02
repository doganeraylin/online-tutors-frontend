import Link from 'next/link'
import Button from '../Button/Button'
import styles from './Hero.module.css'

const Hero = () => (
    <div className={`${styles.heroContainer} d-flex flex-column flex-md-row align-items-lg-center`}>
        <div className={`${styles.heroTextContainer} w-100 me-4`}>
            <h1 className={styles.heroTextTitle}>Playful Learning Adventures</h1>
            <h2 className={styles.heroTextSubtitle}>Transform your child's learning experience with Playful Minds!</h2>
            <p className={styles.heroTextDescription}>Unlock your child's full potential with our <span>fun</span> and  <span>engaging</span> online tutoring program. Our <span>expert tutors</span> provide personalized <span>one-on-one sessions</span> that cater to your child's <span>unique learning style</span>. Sign up today and watch your child's mind soar!</p>
            <div className={styles.heroBtnContainer}>
                <Link href="">
                    <Button 
                        content="get started"
                        buttonColor="orangeBg"
                        buttonTextColor="whiteText"
                        buttonSize="largeBtn"
                        buttonFontSize="largeFont"
                        height="largeHeight"
                      
            
                    />
                </Link>
            </div>
        </div>
        <div className={styles.heroImgContainer}>
            <img className={`${styles.heroImg} w-100 d-none d-lg-block`}src="./assets/hero/hero-img.png"></img>
        </div>
    </div>
)

export default Hero

