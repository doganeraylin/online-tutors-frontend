import Link from 'next/link'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <img src="./assets/footer/bird-right.png"></img>
                <img src="./assets/footer/bird-left.png"></img>
            </div>
            <div className={styles.navLinks}> 
                <Link className={styles.link} href="/about">about</Link>
                <Link className={styles.link} href="/find-a-tutor">find a tutor</Link>
                <Link className={styles.link} href="/contact">contact</Link>
            </div>
            <div>
                <div className={styles.socialMediaContainer}>
                    <p>follow us</p>
                    <img src="./assets/footer/instagram.png"></img>
                    <img src="./assets/footer/twitter.png"></img>
                    <img src="./assets/footer/linkedin.png"></img>
                </div>
            </div>
        </div>
    )
}

export default Footer