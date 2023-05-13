import Link from 'next/link'
import { Router, useRouter } from 'next/router'
import Button from '../Button/Button'
import styles from './Hero.module.css'


const Hero = () => { 

    const router = useRouter()

    const handleBtnClick = () => router.push('/register')

    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.heroTextContainer} w-100`}>
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
                            onClick={handleBtnClick}
                        />
                    </Link>
                </div>
            </div>
            <div className={styles.heroImgContainer}>
                <img className={`${styles.heroImg} w-100 `}src="./assets/hero/hero-img.png"></img>
            </div>
        </div>  
    )   
}
 
export default Hero

