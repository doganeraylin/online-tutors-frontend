import styles from './ExploreTutors.module.css'

const ExploreTutors = () => {
    return (
        <div className={styles.container}>
            <div className={styles.wavyLinesContainer}>
                <img src=""></img>
                <img src=""></img>
            </div>
            <div className={styles.tutorsContainer}>
                <div className={`${styles.firstStar} ${styles.singleTutor}`}>
                    <img className= {styles.star} src="./assets/exploreTutors/star-center.png"></img>
                    <div className={styles.tutorInfo}>
                        <div className={styles.tutorProfile}>
                            <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                            <p>Jack Sth</p>
                        </div>
                        <div className={styles.tutorRating}>
                            <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                            <p className={styles.rating}>4.9</p>
                            <p className={styles.dotShape}></p>
                            <p>232 reviews</p>
                        </div>
                        <div className={styles.tutorQuote}>
                            <p> <p>"I'm here to help you learn and reach your full potential!"</p></p>
                        </div>
                    </div>
                </div>
                <div className={`${styles.secondStar} ${styles.singleTutor}`}>
                    <div>
                        <img className={`${styles.star}`} src="./assets/exploreTutors/star-center.png"></img>
                        <div className={styles.tutorInfo}>
                            <div className={styles.tutorProfile}>
                                <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                                <p>Jack Sth</p>
                            </div>
                            <div className={styles.tutorRating}>
                                <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                                <p className={styles.rating}>4.9</p>
                                <p className={styles.dotShape}></p>
                                <p>232 reviews</p>
                            </div>
                            <div className={styles.tutorQuote}>
                                <p> <p>"I'm here to help you learn and reach your full potential!"</p></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.thirdStar} ${styles.singleTutor}`}>
                    <img className= {styles.star} src="./assets/exploreTutors/star-center.png"></img>
                    <div className={styles.tutorInfo}>
                        <div className={styles.tutorProfile}>
                            <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                            <p>Jack Sth</p>
                        </div>
                        <div className={styles.tutorRating}>
                            <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                            <p className={styles.rating}>4.9</p>
                            <p className={styles.dotShape}></p>
                            <p>232 reviews</p>
                        </div>
                        <div className={styles.tutorQuote}>
                            <p> <p>"I'm here to help you learn and reach your full potential!"</p></p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExploreTutors