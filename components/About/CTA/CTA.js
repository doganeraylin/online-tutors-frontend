import Link from 'next/link'
import Button from '../../Button/Button'
import styles from './CTA.module.css'

const CTA = () => {
    return (
        <div className={`${styles.ctaTextContainer} ${styles.lightYellowTitle}`}>
            <p className={styles.ctaText}>Embark on an exciting learning adventure today!</p>
            <div className={styles.btn}>
                <Link href="/register">
                    <Button 
                        content="sign up"
                        buttonColor="lightYellowBg"
                        buttonTextColor="orangeText"
                        buttonSize="largeBtn"
                        buttonFontSize="largeFont"
                        height="largeHeight"
                    />
                </Link>
            </div>
        </div>
    )
}

export default CTA