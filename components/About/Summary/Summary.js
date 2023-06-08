import styles from './Summary.module.css'

const Summary = () => {
    return (
        <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
            <div className={styles.summaryContainer}>
                <p>Overall, our goal at <span className={styles.companyName}>Playful Minds!</span> is to provide a <span>safe</span> and <span>supportive</span> learning environment that fosters <span>creativity</span> and <span>learning</span>.</p>
                <p>We believe that <span>every child has the potential</span> to achieve great things, and we're committed to helping them unlock their full potential through <span>fun</span> and <span>engaging</span> learning experiences.</p>
            </div>
    </div>
    )
}

export default Summary