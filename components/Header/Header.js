import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Button from "../Button/Button"
import styles from "./Header.module.css"

const Header = () => {
  const router = useRouter()
  const [screenSize, setScreenSize] = useState(null); 
  const links = [
    { href: '/', text: 'home', id: "0" },
    { href: '/about', text: 'about us', id: "1" },
    { href: '/find-a-tutor', text: 'find a tutor', id: "2" },
    { href: '/contact', text: 'contact', id: "3"},
  ];

  useEffect(() => {
    const activeLink = document.querySelector(`.${styles.activeLink} li`)
  })

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (screenSize && screenSize < 768) {
    links.push({ href: '/login', text: 'login', id: "3" });
  }

  const handleLogoClick = () => {
    router.push('/')
  }

  const handleLinkClick = (link) => {
    router.push(link)
  }

  return (
    <nav className={`${styles.navbarContainer} navbar navbar-expand-md`}>
      <div className={`${styles.containerFluid} container-fluid`}>
          <Link href="/" legacyBehavior>
            <img onClick={handleLogoClick} className={`${styles.navbarLogo}`}src="./assets/header/logo.png" alt="logo-img"></img>
          </Link>
        <button className={`${styles.navbarToggler} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className={`${styles.navbarToggleIcon} navbar-toggler-icon `} ></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className={`${styles.navLinksContainer} navbar-nav`} style={{ '--bs-scroll-height': '180px' }}>
            {links.map((link, index) => (
              <li className={router.pathname === link.href ? styles.activeLink : ''}  key={index}>
                <Link 
                      className={styles.navLink}
                      onClick={() =>  handleLinkClick(link.href)} href={link.href}
                      >
                      {link.text}
                </Link>
                  {index < links.length - 1 && <img className={`${styles.dotImg}`}src="./assets/header/header-dot.png"></img>}
              </li>
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


