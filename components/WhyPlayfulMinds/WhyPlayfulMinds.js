import styles from './WhyPlayfulMinds.module.scss'

const WhyPlayfulMinds = () => (
    <div className={styles.whyContainer}>
        <h1 className={styles.whyTitle}>Why Playful Minds?</h1>
        <div className={styles.whyColumns}>
            <div className={styles.singleColumn}>
                <img src="./assets/whyPlayfulMinds/why-img-1.png"></img>
                <p className={styles.singleColumnDescription}>Playful Minds offers a variety of fun and interactive learning activities to keep children engaged. Our experienced tutors use a hands-on approach to encourage curiosity and critical thinking in children.</p>
            </div>
            <div className={styles.singleColumn}>
                <img className={styles.thirdImg} src="./assets/whyPlayfulMinds/why-img-2.png"></img>
                <p className={styles.singleColumnDescription}>We understand that every child has unique learning needs and styles, and we cater to them accordingly. Our personalized approach ensures that your child receives individual attention and support.</p>
            </div>
            <div className={styles.singleColumn}>
                <img src="./assets/whyPlayfulMinds/why-img-3.png"></img>
                <p className={styles.singleColumnDescription}>Playful Minds provides a safe and supportive online learning environment that fosters creativity and learning. Our tutors are trained to create an encouraging atmosphere, where children can learn and grow with confidence.</p>
            </div>
        </div>
    </div>
)

export default WhyPlayfulMinds