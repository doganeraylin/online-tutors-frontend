import styles from './HowItWorks.module.css'

const HowItWorks = () => {
    return (
        <div className={styles.howItWorksWrapper}>
            <div className={styles.howItWorksContainer}>
                <h1 className={styles.howItWorksContainerTitle}>how it works</h1>
                <div className={`${styles.stepsContainer} d-flex flex-column align-items-center align-items-lg-center flex-lg-row justify-content-lg-evenly`}>
                    <div className={`${styles.stepTwo} ${styles.singleStep}`}>
                        <div className={`${styles.stepBackground} position-relative`} >
                            <div className={`${styles.textContainer} position-absolute top-50 start-50 translate-middle`}>
                                <h2>Join Our Community</h2>
                                <p>Simply create an account and browse through our list of experienced tutors.</p>
                                <img className={styles.stepOneImgOne} class="w-50 position-absolute top-100 start-100 translate-middle" src="./assets/howItWorks/step-1-img-1.png"></img>
                            </div>
                            <div className={styles.stepOneImgs}>
                              
                                {/* <img className={styles.stepOneImgTwo} class="w-25 position-absolute top-50 start-100 translate-middle" src="./assets/howItWorks/step-1-img-2.png"></img> */}
                            </div>
                        </div>
                         
                    </div>
                    <div className={`${styles.stepTwo} ${styles.singleStep}`}>
                        <div className={`${styles.stepBackground} position-relative`}>
                            <img className="w-25 p-2 " src="./assets/howItWorks/step-2-img-1.png"></img>
                            <div className={`${styles.textContainer} position-absolute top-50 start-50 translate-middle mt-4`}>
                                <h2>Perfect Class, Perfect Time</h2>
                                <p> Once you find the perfect fit for your child, book your first class and customize the length to suit their schedule and learning style.</p>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.stepThree} ${styles.singleStep}`}>
                        <div className={`${styles.stepBackground} position-relative`}>
                            <img class="w-25" src="./assets/howItWorks/step-3-img-1.png"></img>
                            <div  className={`${styles.textContainer} position-absolute top-50 start-50 translate-middle mt-4`}>
                                <h2>Dive into the adventure</h2>
                                <p>Book your first class and on the day of the class, simply log in to your account and join the video call.</p>
                            </div>
                        
                            <div className={`${styles.stepThreeImgs}`}>
                                {/* <img className={`${styles.stepThreeImgOne} w-25 top-50 start-50 bottom-0 end-0`} src="./assets/howItWorks/step-3-img-2.png"></img> */}
                                {/* <img className={`${styles.stepThreeImgTwo} w-25 position-absolute bottom-0 end-0 me-2`} src="./assets/howItWorks/step-3-img-3.png"></img> */}
                                <img className={`${styles.stepThreeImgThree} w-25 position-absolute bottom-0 end-0`}  src="./assets/howItWorks/step-3-img-4.png"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     
    )
}

export default HowItWorks




