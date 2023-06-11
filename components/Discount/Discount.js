import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import styles from './Discount.module.css'
gsap.registerPlugin(ScrollTrigger);

const Discount = () => {
    const textRef = useRef(null);
    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if(isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(textRef.current, {
                        duration: 4,
                        x: 1300,
                        y: -120,
                        scale: (1.2),
                        ease: "sine.out",
                        scrollTrigger: {
                            trigger: textRef.current,
                            start: "bottom 90%",
                            scrub: true,
                        }
                    });
                }, [textRef]);
                
                return () => ctx.kill();   
            }
        })
    }, []); 
        
    return (
        <div className={styles.container}>
            <div ref={textRef} className={styles.content}>
                <h1 className={styles.discountText}>50% OFF</h1>
                <img  r src="./assets/discount/plane.png" className={styles.discountImg}></img>
            </div>
        </div>
    )
}

export default Discount