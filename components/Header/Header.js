import Link from 'next/link'
import styles from "./Header.module.scss"



const Header = () => {
    const links = [
        { href: '/', text: 'about us' },
        { href: '/how-it-works', text: 'how it works' },
        { href: '/find-a-tutor', text: 'find a tutor' },
        { href: '/blog', text: 'blog' },
        { href: '/contact', text: 'contact' }
      ];

    
    return (
    <>
    <div className={styles.headerContainer}>
         <div className={styles.logoImgContainer}>
            <img className={styles.logoImg} src="./assets/header/flower-logo.png"></img>
            <div className={styles.logoTextContainer}>
                 <p className={styles.logoTextTop}>playful</p>
                 <p className={styles.logoTextBottom}>minds!</p>
            </div>
         </div>
       
         <div className={styles.navbarContainer}>
            {links.map((link, index) => (
                <div key={index}>
                    <Link className={styles.navLinks} href={link.href}>{link.text}</Link>
                    {index < links.length - 1 && <img className={styles.dotImg} src="./assets/header/header-dot.png"></img>}
                </div>
            ))}
         </div>
         <div className={styles.loginContainer}>
            <Link href="" ><button className={styles.loginBtn}></button></Link>
         </div>
    </div>
</>

    )
}


export default Header 