import { useEffect, useRef } from 'react';
import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './WhyPlayfulMinds.module.css'


    
gsap.registerPlugin(ScrollTrigger);

const WhyPlayfulMinds = () => { 

    const columnsContainerRef = useRef();
    
    useEffect(() => {
        let ctx = gsap.context(() => {
           gsap.to(".column-one", {
                scale: 1.2,
                duration: 1,
                
                scrollTrigger: {
                    trigger: ".column-one",
                    start: 'top 80%',
                    scrub: true,
                }
            });
    
           gsap.to(".column-two", {
                scale: 1.2,
                duration: 1,
                
                scrollTrigger: {
                    trigger: ".column-two",
                    start: 'top 80%',
                    scrub: true,
                 
                }
            });
            
           gsap.to(".column-three", {
                scale: 1.2,
                duration: 1,
                
                scrollTrigger: {
                    trigger: ".column-three",
                    start: 'top 80%',
                    scrub: true,
                }
            });
        }, [columnsContainerRef]);
        
        return () => {
            ctx.revert();
        }
        }, []);
        





    

return(
<div className={styles.whyContainer}>
    <h1 className="title">Why Playful Minds?</h1>
    <div className={`${styles.whyColumns} why-columns`} ref={columnsContainerRef} >
        <div className={`${styles.singleColumn} column-one`}>
            <img src="./assets/whyPlayfulMinds/why-img-1.png"></img>
            <p className={styles.singleColumnDescription}>We offer a variety of fun and interactive learning activities to keep children engaged. Our experienced tutors use a hands-on approach to encourage curiosity and critical thinking in children.</p>
        </div>
        <div className={`${styles.singleColumn} column-two`}>
            <img src="./assets/whyPlayfulMinds/why-img-2.png"></img>
            <p className={styles.singleColumnDescription}>We understand that every child has unique learning needs and styles, and we cater to them accordingly. Our personalized approach ensures that your child receives individual attention and support.</p>
        </div>
        <div className={`${styles.singleColumn} column-three`}>
            <img src="./assets/whyPlayfulMinds/why-img-3.png"></img>
            <p className={styles.singleColumnDescription}>We provide a safe and supportive online learning environment that fosters creativity and learning. Our tutors are trained to create an encouraging atmosphere, where children can learn with confidence.</p>
        </div>
    </div>
</div>
)}

export default WhyPlayfulMinds

