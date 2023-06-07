import Link from "next/link"
import Button from "../Button/Button"
import styles from "./Login.module.css"

const Login = () => {
    return (
    <>
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.imgContainer}>
                    <img className={styles.pencil} src="./assets/login/astronaut.png"></img>
                </div>
                <div className={styles.formContent}>
                <h1>Login</h1>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <Link className={styles.registerLink} href="">New here? <span>Register Now!</span> </Link>
                    <div className={styles.btnContainer}>
                        <Link href="">
                            <Button 
                                content="login"
                                buttonColor="orangeBg"
                                buttonTextColor="whiteText"
                                buttonSize="mediumBtn"
                                buttonFontSize="mediumFont"
                                height="mediumHeight"
                            
                            />
                        </Link>
                    </div>
             
                </div>  
            </div>
        </div>
    </>
    )
}

export default Login