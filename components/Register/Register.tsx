import Link from "next/link"
import Button from "../Button/Button"
import styles from "./Register.module.css"

const Register = () => {
    return (
    <>
        <div className={styles.container}>
            <div className={styles.form}>
                <div className={styles.imgContainer}>
                    <img className={styles.pencil} src="./assets/login/astronaut.png"></img>
                </div>
                <div className={styles.formContent}>
                <h1>Create an account</h1>
                    <input type="text" placeholder="username"></input>
                    <input type="email" placeholder="email"></input>
                    <input type="password" placeholder="password"></input>
                    <div className={styles.btnContainer}>
                        <Link href="/">
                            <Button 
                                content="register"
                                buttonColor="orangeBg"
                                buttonTextColor="whiteText"
                                buttonSize="largeBtn"
                                buttonFontSize="largeFont"
                                height="largeHeight"
                            />
                        </Link>
                    </div>
             
                </div>  
            </div>
        </div>
    </>
    )
}

export default Register