import { useEffect, useRef } from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './AstronautAnimation.module.css'
gsap.registerPlugin(ScrollTrigger);

interface imgProps {
    imgProp : string
}

const AstronautAnimation = ({imgProp} : imgProps) => {
    const imgRef = useRef(null);
    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if (isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(imgRef.current, {
                    duration: 4,
                    rotate: "90",
                    ease: "slow(0.7, 0.7, false)",
                    repeat: -1,
                    yoyo: true,
                    scrollTrigger: {
                        trigger: imgRef.current,
                        start: "top 100%", 
                        end: "bottom top", 
                    }
                    });
                }, [imgRef]);
                
                return () => {
                    ctx.kill();
                }
            }
        })
    }, []);
    return (
        <img 
            ref={imgRef} 
            src={imgProp}
            className={styles.img}   
        >
            
        </img>
    )
}

export default AstronautAnimation