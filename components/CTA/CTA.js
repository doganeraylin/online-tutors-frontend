import Link from 'next/link'
import Button from '../Button/Button'
import styles from './CTA.module.css'

const CTA = () => 
    <div className={styles.container}>
        <h1 className={styles.ctaText}>Sign up now for your child's first lesson and get <span>50% off</span>!</h1>
        <Link href="">
            <Button 
                content="sign up"
                buttonColor="orangeBg"
                buttonTextColor="whiteText"
                buttonSize="largeBtn"
                buttonFontSize="largeFont"
                height="largeHeight"
                />
        </Link>
    </div>

export default CTA