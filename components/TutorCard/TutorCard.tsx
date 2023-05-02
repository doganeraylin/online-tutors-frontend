import Button from '../Button/Button'
import styles from "./TutorCard.module.css"

const TutorCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tutorTop}>
                <div className={styles.tutorReview}>
                    <img className={styles.tutorImg} src="./assets/contact/sun.png"></img>
                    <div className={styles.ratingContainer}>
                        <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                        <p className={styles.rating}>4.9</p>
                    </div>
                    <p className={styles.reviewCount}>602 lessons</p>
                </div>
                <div className={styles.tutorBio}>
                    <p className={styles.tutorName}>tutor name</p>
                    <p className={styles.tutorField}>tutor position</p>
                    <p className={styles.tutorDescription}>Hi I'm an ESL teacher with 3 years of experience. I like preparing activities for children. I like birds.</p>
                </div>
            </div>
            <div className={styles.tutorBottom}>
                <p className={styles.pricing}>$10/hr</p>
                <Button 
                        content="book"
                        buttonColor="lightYellowBg"
                        buttonTextColor="orangeText"
                        buttonSize="smallBtn"
                        buttonFontSize="smallFont"
                        height="smallHeight"
                      
            
                    />
            </div>
        </div>
    )
}

export default TutorCard