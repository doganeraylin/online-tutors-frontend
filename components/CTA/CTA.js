import Link from 'next/link'
import { useRouter } from 'next/router';
import Button from '../Button/Button'
import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './CTA.module.css'
gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
    const textRef = useRef(null)
    const buttonRef = useRef(null);
    const router = useRouter()

    const handleBtnClick = () => router.push('/register')

    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let { isDesktop } = context.conditions;
            if (isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(buttonRef.current, {
                    duration: 4,
                    scale: 1.2,
                    ease: "slow(0.7, 0.7, false)",
                    yoyo: true,
                    scrollTrigger: {
                        trigger: buttonRef.current,
                        start: "bottom bottom", 
                        end: "top 20%", 
                        scrub: true,
                    }
                });
                gsap.from(textRef.current, {
                    opacity: 0,
                    y: 100,
                    ease: "power3",
                    duration: 2,
                    yoyo: true,
                    
                    scrollTrigger: {
                        trigger: textRef.current,
                        start: "top 100%", 
                        end: "bottom top", 
                        scrub: true,
                    }
                })}, [buttonRef, textRef]);
            
                return () => ctx.revert();
            }
        })
    }, []);
        
    return (
        <div  className={styles.container}>
            <h1 ref={textRef} className={`${styles.ctaText} cta-text`}>Sign up now for your child's first lesson and get <span>50% off</span>!</h1>
            <div ref={buttonRef}>
                <Link href="">
                    <Button 
                        content="sign up"
                        buttonColor="orangeBg"
                        buttonTextColor="whiteText"
                        buttonSize="largeBtn"
                        buttonFontSize="largeFont"
                        height="largeHeight"
                        onClick={handleBtnClick}
                        />
                </Link>
            </div>
        </div>
    )
}

   

export default CTA