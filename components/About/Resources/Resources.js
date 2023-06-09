import { useRef, useEffect } from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from "./Resources.module.css"
gsap.registerPlugin(ScrollTrigger);

const Resources = () => {
    const gamesRef = useRef(null)
    const quizzesRef = useRef(null)
    const ebooksRef = useRef(null)
    const animationTriggerRef = useRef(null)

    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if(isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(gamesRef.current, {
                        duration: 4,
                        x: -180,
                        y: 100,
                        ease: "slow(1, 1, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: animationTriggerRef.current,
                            start: "top 90%",
                        }
                    });
                    gsap.to(quizzesRef.current, {
                        duration: 4,
                        x: 100,
                        y: 100,
                        ease: "slow(1, 1, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: animationTriggerRef.current,
                            start: "top 90%",
                        }
                    });
                    gsap.to(ebooksRef.current, {
                        duration: 4,
                        x: 300,
                        y: 100,
                        ease: "slow(1, 1, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: animationTriggerRef.current,
                            start: "top 90%", 
                        }
                    });
                }, [gamesRef, quizzesRef, ebooksRef, animationTriggerRef]);
                
                return () => ctx.kill();   
            }
        })
    }, []); 
    return (
        <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
            <div className={styles.featureTitleContainer}>
                <p className={`${styles.featureTitleCentered} ${styles.lightYellowTitle}`}>Fun and Engaging Learning Resources</p>
            </div>
            <div className={styles.featureDescriptionContainer}>
                <p className={styles.featureDescription}>We offer a variety of learning resources and tools to help children learn and grow. 
                These include...</p>
            </div>
            <div ref={animationTriggerRef} className={styles.materialsContainer}>
                <div ref={gamesRef} className={styles.singleMaterialContainer}>
                    <p className={`${styles.material} ${styles.games}`}>games</p>
                    <img className={styles.gamesImg} src="./assets/about/happy-boy.png"></img>
                </div>
                <div ref={quizzesRef} className={styles.singleMaterialContainer}>
                    <p className={`${styles.material} ${styles.quizzes}`}>quizzes</p>
                    <img className={styles.quizzesImgOne} src="./assets/about/cloud.png"></img>
                    <img className={styles.quizzesImgTwo} src="./assets/about/arrow.png"></img>
                </div>
                <div ref={ebooksRef} className={styles.singleMaterialContainer}>
                    <p className={`${styles.material} ${styles.ebooks}`}>e-books</p>
                    <img className={styles.ebooksImg} src="./assets/about/ambitious.png"></img>
                </div>                 
            </div>
        </div>
    )
}

export default Resources