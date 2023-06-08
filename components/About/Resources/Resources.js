import styles from "./Resources.module.css"

const Resources = () => {
    return (
        <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
            <div className={styles.featureTitleContainer}>
                <p className={`${styles.featureTitleCentered} ${styles.lightYellowTitle}`}>Fun and Engaging Learning Resources</p>
            </div>
            <div className={styles.featureDescriptionContainer}>
                <p className={styles.featureDescription}>We offer a variety of learning resources and tools to help children learn and grow. 
                These include...</p>
            </div>
            <div className={styles.materialsContainer}>
                <div className={styles.singleMaterialContainer}>
                    <p className={`${styles.material} ${styles.games}`}>games</p>
                    <img className={styles.gamesImg} src="./assets/about/happy-boy.png"></img>
                </div>
                <div className={styles.singleMaterialContainer}>
                    <p className={`${styles.material} ${styles.quizzes}`}>quizzes</p>
                    <img className={styles.quizzesImgOne} src="./assets/about/cloud.png"></img>
                    <img className={styles.quizzesImgTwo} src="./assets/about/arrow.png"></img>
                </div>
                <div className={styles.singleMaterialContainer}>
                    <p className={`${styles.material} ${styles.ebooks}`}>e-books</p>
                    <img className={styles.ebooksImg} src="./assets/about/ambitious.png"></img>
                </div>                 
            </div>
        </div>
    )
}

export default Resources