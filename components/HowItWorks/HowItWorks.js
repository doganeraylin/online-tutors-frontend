import styles from './HowItWorks.module.css'

const HowItWorks = () => {
    return (
        <div className={styles.howItWorksWrapper}>
            <h1 className={styles.title}>how it works</h1>
            <div className={styles.howItWorksContainer}>
                <div className={` ${styles.stepOne} ${styles.singleStep}`}>
                    <p className={styles.stepTitle}>Join Our Community</p>
                    <p className={styles.stepDescription}>Simply create an account and browse through our list of experienced tutors.</p>
                    <div className={styles.stepOneImgContainer}>
                        <img src="./assets/howItWorks/step-1-img-1.png"></img>
                    </div>                 
                </div>
                <div className={`${styles.singleStep} ${styles.stepTwo}`}>
                    <img src="./assets/howItWorks/step-2-img-1.png"></img>
                    <p className={styles.stepTitle}>Perfect Class, Perfect Time</p>
                    <p className={styles.stepDescription}>Book your first class and customize the length to suit their schedule and learning style.</p>
                </div>
                <div className={`${styles.stepThree} ${styles.singleStep}`}>
                    <div className={styles.stepThreeImgOne} >
                        <img src="./assets/howItWorks/step-3-img-1.png"></img>
                    </div>
                    <p className={styles.stepTitle}>Dive into the adventure</p>
                    <p className={styles.stepDescription}>Book your first class and on the day of the class, log in to your account and join the video call.</p>
                    <div className={styles.stepThreeDescContainer}>
                        <img className={styles.stepThreeImgTwo} src="./assets/howItWorks/step-3-img-2.png"></img>
                    </div>
                </div>
            </div>
        </div> 
    )
}

export default HowItWorks




