import styles from "./ourStory.module.css"

const ourStory = () => {
    return (
        <>
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
        </>
    )
}

export default ourStory