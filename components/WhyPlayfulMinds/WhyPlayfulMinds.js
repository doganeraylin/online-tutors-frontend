import styles from './WhyPlayfulMinds.module.css'

const WhyPlayfulMinds = () => (
    <div className={styles.whyContainer}>
        <h1 className={`${styles.whyTitle} text-center mt-5 mb-4`}>Why Playful Minds?</h1>
        <div className={`${styles.whyColumns} d-flex flex-column w-75 mx-auto flex-lg-row justify-content-lg-around w-100 `}>
            <div className={styles.singleColumn}>
                <img className="w-75"src="./assets/whyPlayfulMinds/why-img-1.png"></img>
                <p className={styles.singleColumnDescription}>We offer a variety of fun and interactive learning activities to keep children engaged. Our experienced tutors use a hands-on approach to encourage curiosity and critical thinking in children.</p>
            </div>
            <div className={styles.singleColumn}>
                <img className="w-75" src="./assets/whyPlayfulMinds/why-img-2.png"></img>
                <p className={styles.singleColumnDescription}>We understand that every child has unique learning needs and styles, and we cater to them accordingly. Our personalized approach ensures that your child receives individual attention and support.</p>
            </div>
            <div className={styles.singleColumn}>
                <img className="w-75" src="./assets/whyPlayfulMinds/why-img-3.png"></img>
                <p className={styles.singleColumnDescription}>We provide a safe and supportive online learning environment that fosters creativity and learning. Our tutors are trained to create an encouraging atmosphere, where children can learn with confidence.</p>
            </div>
        </div>
    </div>
)

export default WhyPlayfulMinds

