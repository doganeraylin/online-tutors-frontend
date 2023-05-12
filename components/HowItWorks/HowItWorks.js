import styles from './HowItWorks.module.css'
import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
    const stepsContainer = useRef();
    
    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let { isDesktop } = context.conditions;
            if (isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.from(".single-step-one", {
                        x: -50,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ".single-step-one",
                            start: 'top 80%',
                            scrub: true,
                        }
                    });
            
                    gsap.from(".single-step-two", {
                        x: -50,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ".single-step-two",
                            start: 'top 80%',
                            scrub: true,
                        }
                    });
                    
                    gsap.from(".single-step-three", {
                        x: -50,
                        opacity: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: ".single-step-three",
                            start: 'top 80%',
                            scrub: true,
                        }
                    });
                }, [stepsContainer]);
                
                return () => ctx.revert();
            }
        })
    }, []);
        
    return (
            <div ref={stepsContainer} className={styles.howItWorksWrapper}>
                <h1 className="title">Book Your Lesson in Minutes</h1>
                <div   className={styles.howItWorksContainer}>
                    <div className={` ${styles.stepOne} ${styles.singleStep} single-step-one`}>
                        <p className={styles.stepTitle}>Join Our Community</p>
                        <p className={styles.stepDescription}>Simply create an account and browse through our list of experienced tutors.</p>
                        <div className={styles.stepOneImgContainer}>
                            <img src="./assets/howItWorks/step-1-img-1.png"></img>
                        </div>                 
                    </div>
                    <div className={`${styles.singleStep} ${styles.stepTwo} single-step-two`}>
                        <img src="./assets/howItWorks/step-2-img-1.png"></img>
                        <p className={styles.stepTitle}>Perfect Class, Perfect Time</p>
                        <p className={styles.stepDescription}>Book your first class and customize the length to suit their schedule and learning style.</p>
                    </div>
                    <div className={`${styles.stepThree} ${styles.singleStep} single-step-three`}>
                        <div className={styles.stepThreeImgOne} >
                            <img src="./assets/howItWorks/step-3-img-1.png"></img>
                        </div>
                        <p className={styles.stepTitle}>Dive into the adventure</p>
                        <p className={styles.stepDescription}>Book your first class and on the day of the class, log in to your account and join the video call.</p>
                        <div className={styles.stepThreeDescContainer}>
                            <img className={styles.stepThreeImgTwo} src="./assets/howItWorks/step-3-img-2.png"></img>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

export default HowItWorks




