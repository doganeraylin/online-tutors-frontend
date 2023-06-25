import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import styles from './Hero.module.css'
gsap.registerPlugin(ScrollTrigger);

const Hero = () => { 
    const arrowRef = useRef(null);
    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if(isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(arrowRef.current, {
                        duration: 2.5,
                        y: 70,
                        ease: "power1.out",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: arrowRef.current,
                            start: "top 90%",
                        }
                    });
                }, [arrowRef]);
                
                return () => ctx.kill();   
            }
        })
    }, []); 
            
    return (
        <div className={styles.container}>
            <div className={styles.heroTextContainer}>
                <h1 className={styles.heroTextTitle}>Playful Learning Adventures</h1>
                <h2 className={styles.heroTextSubtitle}>Transform your child's learning experience with <span>Playful Minds!</span></h2>
                <p className={styles.heroTextDescription}>Unlock your child's full potential with our <span>fun</span> and  <span>engaging</span> online tutoring program. Our <span>expert tutors</span> provide personalized <span>one-on-one sessions</span> that cater to your child's <span>unique learning style</span>. Sign up today and watch your child's mind soar!</p>
                <div className={styles.arrowContainer}>
                    <img ref={arrowRef} src="/assets/hero/1.png"></img>
                </div>
            </div>
            {/* <div className={styles.heroImgContainer}>
                <img className={styles.heroImg} src="./assets/hero/hero-img.png"></img>
            </div> */}
        </div>  
    )   
}
 
export default Hero

