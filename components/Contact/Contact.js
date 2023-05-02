import Button from '../Button/Button'
import styles from "./Contact.module.css";

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1>Let's Connect!</h1>
            <div className= {styles.formContainer}>
                <div className={styles.formImgsLeft}>
                    <img className={styles.stars} src="./assets/contact/stars.png"></img>
                    <img className={styles.formMeteor} src="./assets/contact/meteor.png"></img>
                    <img className={styles.sun} src="./assets/contact/sun.png"></img>
                </div>
                <div className={styles.form}>
                    <h2>Contact Form</h2>
                    <input type="text" placeholder="your name"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="text" placeholder="title"></input>
                    <textarea placeholder="your message"></textarea>
                </div>
                <div className={styles.formImgsRight}>
                    <img className={styles.formMeteorTwo} src="./assets/contact/meteor-2.png"></img>
                    <img className={styles.planet} src="./assets/contact/planet.png"></img>
                </div>
            </div> 
            <div className={styles.btnContainer}>
                <Button
                    content="submit"
                    buttonColor="lightYellowBg"
                    buttonTextColor="blueText"
                    buttonSize="largeBtn"
                    buttonFontSize="mediumFont"
                    height="mediumHeight"            
                />
            </div>
        </div>
    )
}

export default Contact