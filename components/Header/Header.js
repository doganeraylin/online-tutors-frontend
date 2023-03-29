import Link from 'next/link'
import styles from "./Header.module.css"



const Header = () => {
    const links = [
        { href: '/', text: 'about us' },
        { href: '/how-it-works', text: 'how it works' },
        { href: '/find-a-tutor', text: 'find a tutor' },
        { href: '/blog', text: 'blog' },
        { href: '/contact', text: 'contact' }
      ];

      return (
        <nav className={`${styles.navbarContainer} navbar navbar-expand-md`}>
          <div className="container-fluid d-flex align-items-start align-items-md-center">
            {/*  */}
            {/* <div className={`${styles.logoContainer}`}>
              <Link href="/" legacyBehavior>
                <img className={`${styles.navbarLogo} w-25`}src="./assets/header/logo.png" alt="logo-img"></img>
              </Link>
            </div> */}
            {/*  */}

              <Link href="/" legacyBehavior>
                <img className={`${styles.navbarLogo} w-25`}src="./assets/header/logo.png" alt="logo-img"></img>
              </Link>
         
            <button className={`${styles.navbarToggler} navbar-toggler d-md-none mt-1`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className={`${styles.navbarToggleIcon} navbar-toggler-icon `} ></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className={`${styles.navLinks} navbar-nav mb-2 mb-md-0 `} style={{ '--bs-scroll-height': '180px' }}>
              {links.map((link, index) => (
               <div key={index}>
                 <Link className="text-decoration-none px-md-2" href={link.href}>{link.text}</Link>
                {index < links.length - 1 && <img className={`${styles.dotImg} d-none d-md-inline`}src="./assets/header/header-dot.png"></img>}
               </div>
              ))}
              </ul>
            </div>
            <div className={`${styles.btnContainer} d-none d-md-block`}>
              <button type="button" className={styles.loginBtn}>Login</button>
              {/* <button className={`${styles.loginBtn} px-3 py-1`}>Login</button> */}
            </div>
          </div>
        </nav>
      ) 

 
  
}

export default Header 


