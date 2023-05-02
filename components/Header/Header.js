import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from "../Button/Button"
import styles from "./Header.module.css"



const Header = () => {
    const links = [
        { href: '/about', text: 'about us' },
        { href: '/find-a-tutor', text: 'find a tutor' },
        { href: '/contact', text: 'contact' }
      ];

      const router = useRouter()

      return (
        <nav className={`${styles.navbarContainer} navbar navbar-expand-md`}>
          <div className="container-fluid d-flex align-items-start align-items-md-center">
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
                 <Link onClick={() => router.push(link.href)} className="text-decoration-none px-md-2" href={link.href}>{link.text}</Link>
                {index < links.length - 1 && <img className={`${styles.dotImg} d-none d-md-inline`}src="./assets/header/header-dot.png"></img>}
               </div>
              ))}
              </ul>
            </div>
            <div onClick={() => router.push("./login")} className={`${styles.btnContainer} d-none d-md-block`}>
              <Button 
                content="login"
                buttonColor="orangeBg"
                buttonTextColor="whiteText"
                buttonSize="smallBtn"
                buttonFontSize="smallFont"
                height="smallHeight"
              />
            </div>
          </div>
        </nav>
      ) 

 
  
}

export default Header 


