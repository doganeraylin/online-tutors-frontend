import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Button from "../Button/Button"
import styles from "./Success.module.css"

const Success = () => {
    const [counter, setCounter] = useState(6);
    const router = useRouter();
  
    useEffect(() => {
      const redirectTimer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);

      if (counter === 0) {
        router.push('/');
        return;
      }
      return () => {
        clearInterval(redirectTimer);
      };
    }, [counter, router]);
      
    return (
        <div className={styles.container}>
           <h1>Welcome to <span>Playful Minds!</span></h1>
           <p>Your account registration is confirmed, and we can't wait to see where your playful imagination takes you.!</p>
           <p>Let the adventure begin!</p>
           <Link href="/">
                <Button 
                    content="back to home"
                    buttonColor="grayBg"
                    buttonTextColor="blackText"
                    buttonSize="mediumBtn"
                    buttonFontSize="mediumFont"
                    height="mediumHeight"
                />
            </Link>
            <p className={styles.redirectText}>Redirecting to the homepage in <span className={styles.counter}>{counter}</span> seconds...</p>
        </div>
    )
}
export default Success