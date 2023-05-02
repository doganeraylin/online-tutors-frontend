import Button from "../Button/Button"
import styles from "./Success.module.css"

const Success = () => 
<div className={styles.container}>
    <p>Thank you for choosing <span>Playful Minds!</span></p>
    <p>A confirmation email with your booking details has been sent to your email.</p>
    <p>Contact us if you have any questions or concerns.</p>
    <p>See you in the next session!</p>
    <Button 
        content="back to home"
        buttonColor="grayBg"
        buttonTextColor="blackText"
        buttonSize="mediumBtn"
        buttonFontSize="mediumFont"
        height="mediumHeight"
    />
</div>

export default Success