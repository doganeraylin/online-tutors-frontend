import Button from '../Button/Button'
import styles from "./SignUpModal.module.css"

const SignUpModal = () => 
    <div className={styles.container}>
        <img className={styles.modalImg} src="./assets/signUpModal/bumper-cars.png"></img>
        <div className={styles.textContainer}>
            <h1 className={styles.title}>Unlock Learning Adventures</h1>
            <p>To book a lesson with one of our tutors, you'll need to create an account with us first. Once you're signed up, you'll be able to access all of our available tutors and book lessons at your convenience.</p>
            <Button 
                content="sign up today"
                buttonColor="orangeBg"
                buttonTextColor="whiteText"
                buttonSize="mediumBtn"
                buttonFontSize="mediumFont"
                height="mediumHeight"     
                />
        </div>
        
    </div>

export default SignUpModal