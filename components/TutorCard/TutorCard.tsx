import Link from 'next/link';
import Button from '../Button/Button'
import styles from "./TutorCard.module.css"

interface Review {
    username: string,
    review: string,
    age: number
}

interface Tutor {
    id: number
    img: string,
    name: string,
    position: string,
    bio: string,
    rating: number,
    lessons_taught: number,
    hourly_rate: number,
    subjects: [], 
    about_me: string,
    about_class: string,
    reviews: Review[]
}
interface TutorProps {
    tutors: Tutor[];
}

const TutorCard = ({ tutors } : TutorProps) => {
    return (

        <div className={styles.container}>
           {tutors && tutors.map((tutor) => 
           <div className={styles.tutorCard}>
                <div className={styles.tutorTop}>
                <div className={styles.tutorReview}>
                    <img className={styles.tutorImg} src={tutor.img}></img>
                    <div className={styles.ratingContainer}>
                        <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                        <p className={styles.rating}>{tutor.rating}</p>
                    </div>
                    <p className={styles.reviewCount}>{tutor.lessons_taught} lessons</p>
                </div>
                <div className={styles.tutorBio}>
                    <p className={styles.tutorName}>{tutor.name}</p>
                    <p className={styles.tutorField}>{tutor.position}</p>
                    <p className={styles.tutorDescription}>{tutor.bio}</p>
                </div>
            </div>
            <div className={styles.tutorBottom}>
                <p className={styles.pricing}>${tutor.hourly_rate}</p>
                <Link href={`/find-a-tutor/${tutor.id}`} >
                    <Button 
                        content="view details"
                        buttonColor="lightYellowBg"
                        buttonTextColor="orangeText"
                        buttonSize="smallBtn"
                        buttonFontSize="smallFont"
                        height="mediumHeight"
                    />
                </Link>
          
            </div>
           </div>
           
           )}
      
        </div>
    )
}

export default TutorCard