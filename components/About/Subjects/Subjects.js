import styles from './Subjects.module.css'

const Subjects = () => {
    return (
        <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
            <div className={styles.featureTitleContainer}>
                <p className={`${styles.featureTitleCentered} ${styles.lightYellowTitle}`}>Unleash Unique Learning</p>
            </div>
            <div className={styles.featureDescriptionContainer}>
                <p className={styles.featureDescription}>Our core service is personalized <span>one-on-one</span> sessions with <span>expert tutors</span> who work closely with your child to develop a <span>customized learning plan</span> that meets their individual needs.</p>
                <p className={styles.featureDescription}>We also offer <span>group classes </span>and<span> workshops</span> on various subjects, including...</p>
            </div>
            <div className={styles.subjectsContainer}>
                <div className={styles.singleSubjectContainer}>
                    <p className={`${styles.subject} ${styles.math}`}>math</p>
                    <img className={styles.mathImg} src="./assets/about/sun.png"></img>
                </div>
                <div className={styles.singleSubjectContainer}>
                    <p className={`${styles.subject} ${styles.coding}`}>coding</p>
                    <img className={styles.codingImgOne} src="./assets/about/arrow.png"></img>
                    <img className={styles.codingImgTwo} src="./assets/about/smiley-face.png"></img>
                </div>
                <div className={styles.singleSubjectContainer}>
                    <p className={`${styles.subject} ${styles.language}`}>language</p>
                    <img className={styles.languageImg} src="./assets/about/ambitious.png"></img>
                </div>                 
            </div>
        </div>
    )
}
export default Subjects
