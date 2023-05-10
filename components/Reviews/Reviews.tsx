import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Reviews.module.css'
gsap.registerPlugin(ScrollTrigger);

const Reviews = () => {
    const topCloudRef = useRef<HTMLDivElement>(null);
    const topCloudTrigger = useRef<HTMLDivElement>(null);
    const centerCloudRef = useRef<HTMLDivElement>(null);
    const bottomCloudRef = useRef<HTMLDivElement>(null);
    const bottomCloudTrigger = useRef<HTMLDivElement>(null);

useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.to(topCloudRef.current, {
        duration: 4,
        x: -600,
        ease: "slow(0.7, 0.7, false)",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
            trigger: topCloudTrigger.current,
            start: "top 100%",
            end: "bottom top",
        }
        });
    
        gsap.to(centerCloudRef.current, {
        duration: 4,
        x: 100,
        ease: "slow(0.7, 0.7, false)",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
            trigger: centerCloudRef.current,
            start: "top 100%",
            end: "bottom top",
        }
        });

        gsap.to(bottomCloudRef.current, {
            duration: 4,
            x: 400,
            ease: "slow(0.7, 0.7, false)",
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: bottomCloudRef.current,
                start: "top 100%", 
                end: "bottom top",
            }
            });
    }, [topCloudRef, centerCloudRef, bottomCloudRef]);
    
    return () => {
        ctx.kill();
    }
    }, []);
    
    return (
        <div className={styles.container}> 
        <div className={styles.containerTitle}>
            <h1 ref={topCloudTrigger} className="title">Real People, Real Stories</h1>
        </div>
        <div className={styles.reviewsWrapper}>
            <div ref={topCloudRef} className={`${styles.cloudTop} ${styles.gridContainer} cloud-top`}>
                <img  src="./assets/reviews/cloud.png"></img>
            </div>
            <div ref={centerCloudRef} className={`${styles.cloudCenter} ${styles.gridContainer}`}>
                <img src="./assets/reviews/cloud.png"></img>
            </div>
            <div className={`${styles.reviewContainer} ${styles.gridContainer}`}>
                <img className={styles.arrow} src="./assets/tutor/previous.png"></img>
                <div className={styles.reviewContent}>
                    <p>"I'm just happy, and I know it works instantly and very useful tactic. I wasn't expecting this, thank you."</p>
                    <img className={styles.profileImg} src="./assets/contact/round-shape.png"></img><img></img>
                    <p className={styles.reviewerName}>Donna Stroupe</p>
                </div>
                <img className={styles.arrow} src="./assets/tutor/next.png"></img>
            </div>
            <div ref={bottomCloudTrigger} className={`${styles.flyingAirplane} ${styles.gridContainer}`}>
                <img src="./assets/reviews/flying-airplane.png"></img>
            </div>
            <div ref={bottomCloudRef} className={`${styles.cloudBottom} ${styles.gridContainer}`}>
                <img src="./assets/reviews/cloud.png"></img>
            </div>
        </div>
    </div>
           
    )
}

export default Reviews
