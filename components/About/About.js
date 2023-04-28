import styles from "./About.module.css"

const About = () => {
    return (
        <div className={`${styles.container} d-flex flex-column justify-content-center align-items-center`}>
            <div className={`${styles.introContainer} ${styles.lightYellowTitle}`}>
                <p className={styles.titleItalic}>from vision to reality:</p>
                <p className={styles.title}>the story of</p>
                <p className={styles.titleColored}>Playful Minds!</p>
            </div>
            <div className={`${styles.storyContainer} ${styles.lightYellowText}`}>
                <p><span className={styles.companyName}>Playful Minds!</span> was founded in 2018 by a group of <span>experienced educators</span> who saw a need for a new kind of online learning platform for kids.</p>
                <p>They wanted to create a platform that was not only <span>fun</span> and<span> engaging</span> but also <span>personalized</span> to meet the unique needs of each child. </p>
                <p>Over the years, <span className={styles.companyName}>Playful Minds!</span> has grown into a thriving <span>community of learners and educators</span>, and we continue to expand our offerings to provide the best possible learning experience for children.</p>
            </div>
            <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
                <div className={`${styles.featureTitleContainer}`}>
                    <p className={`${styles.featureTitle} ${styles.lightYellowTitle}`}>Learning is an Adventure</p>
                    <img className={styles.featureBoyImg} src="./assets/about/boy.png"></img>
                </div>
                <div className={styles.featureDescriptionContainer}>
                    <p className={styles.featureDescription}>We provide a <span>safe</span> and <span>comfortable</span>learning environment where your child can...</p>
                </div>
                <div className={styles.featureDescriptionItems}>
                    <div className={`${styles.itemOne} ${styles.singleItemContainer}`}>
                        <img className={`${styles.itemImgOne} ${styles.itemImg}`} src="./assets/about/star.png"></img>
                        <p>improve their grades</p>
                    </div>
                    <div className={`${styles.itemTwo} ${styles.singleItemContainer}`}>
                        <img className={`${styles.itemImgTwo} ${styles.itemImg}`} src="./assets/about/yellow-shape.png"></img>
                        <p>explore new interests</p>
                    </div>
                    <div className={`${styles.itemThree} ${styles.singleItemContainer}`}>
                        <img className={`${styles.itemImgThree} ${styles.itemImg}`}  src="./assets/about/shapes.png"></img>
                        <p>foster critical thinking</p>
                    </div>
                </div>
            </div>
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
            <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
                <div clasName={styles.featureTitleContainer}>
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
            <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
                <div className={styles.summaryContainer}>
                    <p>Overall, our goal at <span>Playful Minds!</span> is to provide a safe and supportive learning environment that fosters creativity and learning.</p>
                    <p>We believe that every child has the potential to achieve great things, and we're committed to helping them unlock their full potential through fun and engaging learning experiences.</p>
                </div>
                <div className={`${styles.ctaTextContainer} ${styles.lightYellowTitle}`}>
                    <p className={styles.ctaText}>embark on an exciting learning adventure today!</p>
                </div>
                <div className={styles.btn}>
                    <button>sign up</button>
                </div>
            </div>
        </div>
    )
}

export default About