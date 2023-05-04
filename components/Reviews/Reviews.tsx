import styles from './Reviews.module.css'

const Reviews = () => {
    return (
        <> 
        <div className={styles.containerTitle}>
            <h1>some reviews</h1>
        </div>
        <div className={styles.reviewsWrapper}>
            <div className={`${styles.cloudTop} ${styles.gridContainer}`}>
                <img src="./assets/reviews/cloud.png"></img>
            </div>
            <div className={`${styles.cloudCenter} ${styles.gridContainer}`}>
                <img src="./assets/reviews/cloud.png"></img>
            </div>
            <div className={`${styles.reviewContainer} ${styles.gridContainer}`}>
                <img className={styles.arrow} src="./assets/tutor/previous.png"></img>
                <div className={styles.reviewContent}>
                    <img className={styles.ratingStar} src="./assets/tutor/rating.png"></img>
                    <img className={styles.ratingStar} src="./assets/tutor/rating.png"></img>
                    <img className={styles.ratingStar} src="./assets/tutor/rating.png"></img>
                    <img className={styles.ratingStar} src="./assets/tutor/rating.png"></img>
                    <img className={styles.ratingStar} src="./assets/tutor/rating.png"></img>
                    <p>I'm just happy, and I know it works instantly and very useful tactic. I wasn't expecting this, thank you.</p>
                    <img className={styles.profileImg} src="./assets/contact/round-shape.png"></img><img></img>
                    <p>Donna Stroupe</p>
                </div>
                <img className={styles.arrow} src="./assets/tutor/next.png"></img>
            </div>
            <div className={`${styles.flyingAirplane} ${styles.gridContainer}`}>
                <img src="./assets/reviews/flying-airplane.png"></img>
            </div>
            <div className={`${styles.cloudBottom} ${styles.gridContainer}`}>
                <img src="./assets/reviews/cloud.png"></img>
            </div>
        </div>
    </>
           
    )
}

export default Reviews