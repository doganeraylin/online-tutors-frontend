import Link from 'next/link'
import { useRouter } from 'next/router'
import Button from "../Button/Button"
import styles from "./Header.module.css"

const Header = () => {
  const links = [
      { href: '/about', text: 'about us' },
      { href: '/find-a-tutor', text: 'find a tutor' },
      { href: '/contact', text: 'contact' },
      { href: '/login', text: 'login' }
    ];

    const router = useRouter()

    return (
      <nav className={`${styles.navbarContainer} navbar navbar-expand-md`}>
        <div className={`${styles.containerFluid} container-fluid`}>
            <Link href="/" legacyBehavior>
              <img className={`${styles.navbarLogo}`}src="./assets/header/logo.png" alt="logo-img"></img>
            </Link>
          <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`${styles.navbarToggleIcon} navbar-toggler-icon `} ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className={`${styles.navLinksContainer} navbar-nav`} style={{ '--bs-scroll-height': '180px' }}>
              {links.map((link, index) => (
                <div key={index}>
                  <Link onClick={() => router.push(link.href)} href={link.href}>{link.text}</Link>
                    {index < links.length - 1 && <img className={`${styles.dotImg}`}src="./assets/header/header-dot.png"></img>}
                </div>
              ))}
            </ul>
          </div>
          <div onClick={() => router.push("./login")} className={`${styles.loginBtnContainer}`}>
            <Button 
              content="login"
              buttonColor="orangeBg"
              buttonTextColor="whiteText"
              buttonSize="mediumBtn"
              buttonFontSize="mediumFont"
              height="mediumHeight"
            />
          </div>
        </div>
      </nav>
    ) 
}

export default Header


