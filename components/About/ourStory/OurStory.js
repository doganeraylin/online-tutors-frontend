// import { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { matchMedia, mediaQueries } from "../../AnimationScreenSize/animationScreenSize"
import styles from "./ourStory.module.css"
import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ourStory = () => {
    const titleRef = useRef(null)
    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let { isDesktop } = context.conditions;
            if (isDesktop) {
                let ctx = gsap.context(() => {
               
                gsap.from(titleRef.current, {
                    scrollTrigger: {
                        trigger: titleRef.current,
                        toggleClass: {
                            targets: titleRef.current,
                            className : styles.titleActive
                        },
                        start: "top 90%", 
                    }
                })}, [titleRef]);
            
                return () => ctx.revert();
            }
        })
    }, []);
        
    return (
        <>
        <div  className={`${styles.introContainer} ${styles.lightYellowTitle}`}>
            <p ref={titleRef} className={styles.titleItalic}>from vision to reality:</p>
            <p  className={styles.title}>the story of</p>
            <p className={styles.titleColored}>Playful Minds!</p>
        </div>
        <div className={`${styles.storyContainer} ${styles.lightYellowText}`}>
            <p><span className={styles.companyName}>Playful Minds!</span> was founded in 2018 by a group of <span>experienced educators</span> who saw a need for a new kind of online learning platform for kids.</p>
            <p>They wanted to create a platform that was not only <span>fun</span> and<span> engaging</span> but also <span>personalized</span> to meet the unique needs of each child. </p>
            <p>Over the years, <span className={styles.companyName}>Playful Minds!</span> has grown into a thriving <span>community of learners and educators</span>, and we continue to expand our offerings to provide the best possible learning experience for children.</p>
        </div>
        </>
    )
}

export default ourStory