import { useRef, useEffect } from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import TestimonialsSlider from "../TestimonialsSlider/TestimonialsSlider"
import styles from './Testimonials.module.css'
gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
    name: string,
    age: number,
    testimonial: string
}

interface ReviewsProps {
    testimonials: Testimonial[];
}

const Reviews = ({ testimonials }: ReviewsProps) => {
    const topCloudRef = useRef<HTMLDivElement>(null);
    const topCloudTrigger = useRef<HTMLDivElement>(null);
    const centerCloudRef = useRef<HTMLDivElement>(null);
    const bottomCloudRef = useRef<HTMLDivElement>(null);
    const bottomCloudTrigger = useRef<HTMLDivElement>(null);

    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if(isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(topCloudRef.current, {
                        duration: 4,
                        x: -600,
                        ease: "slow(0.7, 0.7, false)",
                        repeat: -1,
                        yoyo: true,
                        scrollTrigger: {
                            trigger: topCloudTrigger.current,
                            start: "top 20%",
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
                            start: "top top",
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
                            trigger: bottomCloudTrigger.current,
                            start: "top 20%", 
                            end: "bottom top"
                        }
                    });
                }, [topCloudRef, centerCloudRef, bottomCloudRef]);
                
                return () => ctx.kill();   
            }
        })
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
            <div className={`${styles.testimonialsContainer} ${styles.gridContainer}`}>
                <TestimonialsSlider testimonials={testimonials} />
            </div>
            <div ref={centerCloudRef} className={`${styles.cloudCenter} ${styles.gridContainer}`}>
                <img src="./assets/reviews/cloud.png"></img>
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
