import styles from "./ContactInfo.module.css"

const ContactInfo = () => {
    return (
        <div className={styles.container}>
            <h1 className="title">Let's Connect!</h1>
            <div className= {styles.contactContainer}>
                <div className={styles.contactImgsLeft}>
                    <img className={styles.stars} src="/assets/contact/stars.png"></img>
                    <img className={styles.contactMeteor} src="/assets/contact/meteor.png"></img>
                    <img className={styles.sun} src="/assets/contact/sun.png"></img>
                </div>
                <div className={styles.contactInfoContainer}>
                    <h2>We're thrilled to hear from you! </h2>
                    <p>At <span className={styles.companyName}>Playful Minds, </span>we value your feedback, questions, and suggestions.</p>
                    <p>Feel free to reach out to us using the contact information below:</p>
                    <p>email: support@playfulminds.com</p>
                    <p>phone: +1-555-123-4567</p>
                    <div className={styles.socialMediaContainer}>
                        <h2 className={styles.socialMediaText}>Stay up to date with all the latest news, updates, and exciting developments happening at <span>Playful Minds</span> by following us on social media.</h2>
                        <div className={styles.socialMediaIcons}>
                            <img src="/assets/footer/instagram.png"></img>
                            <img src="/assets/footer/linkedin.png"></img>
                            <img src="/assets/footer/twitter.png"></img>
                        </div> 
                    </div>
                </div>
                <div className={styles.contactImgsRight}>
                    <img className={styles.contactMeteorTwo} src="/assets/contact/meteor-2.png"></img>
                    <img className={styles.planet} src="/assets/contact/planet.png"></img>
                </div>
            </div> 
        </div>
    )
}

export default ContactInfo