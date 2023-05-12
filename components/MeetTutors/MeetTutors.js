import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './MeetTutor.module.css'
gsap.registerPlugin(ScrollTrigger);

const MeetTutor = () => {
    const topCloudRef = useRef(null);
    const bottomCloudRef = useRef(null);

    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let { isDesktop } = context.conditions;
            if (isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(topCloudRef.current, {
                    duration: 4,
                    x: 600,
                    ease: "slow(0.7, 0.7, false)",
                    repeat: -1,
                    yoyo: true,
                    scrollTrigger: {
                        trigger: topCloudRef.current,
                        start: "top 100%", 
                        end: "bottom top", 
                    }
                    });
            
                    gsap.to(bottomCloudRef.current, {
                        duration: 4,
                        x: -700,
                        ease: "slow(0.7, 0.7, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: bottomCloudRef.current,
                            start: "top 100%", 
                            end: "bottom top",
                        }
                        });
                }, [topCloudRef, bottomCloudRef]);
                
                return () => {
                    ctx.kill();
                }
            }
        })
    }, []);
        
    return (
        <div className={styles.container}>
            <div className={styles.mainContent}>
                <div className={` ${styles.meetContainer} ${styles.textImgContainer}`}>
                    <img className={styles.textImg} src="./assets/meetTutors/big-orange-cloud.png"></img>
                    <p>meet</p>
                </div>
                <div  ref={topCloudRef}  className={styles.cloudsTopLeft}>
                    <img className={styles.blueBorderCloud} src="./assets/meetTutors/blue-border-cloud.png"></img>
                </div>
                <div className={`${styles.ourContainer} ${styles.textImgContainer}`}>
                    <img className={styles.textImg} src="./assets/meetTutors/orange-border-cloud.png"></img>
                     <p>our</p>
                </div>
                <div ref={bottomCloudRef} className={styles.bottomCloudContainer}>
                    <img className={styles.bottomCloud} src="./assets/meetTutors/blue-border-cloud.png"></img>
                </div> 
                <div className={`${styles.tutorsContainer} ${styles.textImgContainer}`}>
                    <img className={styles.textImg} src="./assets/meetTutors/big-orange-cloud.png"></img>
                     <p>tutors</p>
                </div>
            </div> 
        </div>
    )
}

export default MeetTutor