import { useRef, useEffect } from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Subjects.module.css'
gsap.registerPlugin(ScrollTrigger);

const Subjects = () => {
    const mathRef = useRef(null)
    const codingRef = useRef(null)
    const languageRef = useRef(null)
    const animationTriggerRef = useRef(null)

    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if(isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(mathRef.current, {
                        duration: 4,
                        x: 250,
                        y: 100,
                        ease: "slow(1, 1, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: animationTriggerRef.current,
                            start: "top 90%",
                        }
                    });
                    gsap.to(codingRef.current, {
                        duration: 4,
                        x: -90,
                        y: 80,
                        ease: "slow(1, 1, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: animationTriggerRef.current,
                            start: "top 90%",
                        }
                    });
                    gsap.to(languageRef.current, {
                        duration: 4,
                        x: -300,
                        y: 70,
                        ease: "slow(1, 1, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: animationTriggerRef.current,
                            start: "top 20%", 
                        }
                    });
                }, [mathRef, codingRef, languageRef, animationTriggerRef]);
                
                return () => ctx.kill();   
            }
        })
    }, []); 
    return (
        <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
            <div className={styles.featureTitleContainer}>
                <p className={`${styles.featureTitleCentered} ${styles.lightYellowTitle}`}>Unleash Unique Learning</p>
            </div>
            <div className={styles.featureDescriptionContainer}>
                <p className={styles.featureDescription}>Our core service is personalized <span>one-on-one</span> sessions with <span>expert tutors</span> who develop a <span>customized learning plan</span> that meets children's individual needs.</p>
                <p className={styles.featureDescription}>We also offer <span>group classes </span>and<span> workshops</span> on various subjects, including...</p>
            </div>
            <div ref={animationTriggerRef} className={styles.subjectsContainer}>
                <div ref={mathRef} className={styles.singleSubjectContainer}>
                    <p className={`${styles.subject} ${styles.math}`}>math</p>
                    <img className={styles.mathImg} src="./assets/about/sun.png"></img>
                </div>
                <div ref={codingRef} className={styles.singleSubjectContainer}>
                    <p className={`${styles.subject} ${styles.coding}`}>coding</p>
                    <img className={styles.codingImgOne} src="./assets/about/arrow.png"></img>
                    <img className={styles.codingImgTwo} src="./assets/about/smiley-face.png"></img>
                </div>
                <div ref={languageRef} className={styles.singleSubjectContainer}>
                    <p className={`${styles.subject} ${styles.language}`}>language</p>
                    <img className={styles.languageImg} src="./assets/about/ambitious.png"></img>
                </div>                 
            </div>
        </div>
    )
}
export default Subjects
