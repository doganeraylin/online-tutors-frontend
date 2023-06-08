import Button from '../../Button/Button'
import styles from './CTA.module.css'

const CTA = () => {
    return (
        <div className={`${styles.ctaTextContainer} ${styles.lightYellowTitle}`}>
            <p className={styles.ctaText}>embark on an exciting learning adventure today!</p>
                <div className={styles.btn}>
                <Button 
                    content="sign up"
                    buttonColor="lightYellowBg"
                    buttonTextColor="orangeText"
                    buttonSize="largeBtn"
                    buttonFontSize="largeFont"
                    height="largeHeight"
                    />
            </div>
        </div>
    )
}

export default CTA