import Link from 'next/link'
import { useRouter } from 'next/router';
import Button from '../Button/Button'
import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import styles from './ExploreTutors.module.css'
gsap.registerPlugin(ScrollTrigger);

const ExploreTutors = () => {
    const router = useRouter()
    const animationRef = useRef<HTMLDivElement>(null);
    const handleBtnClick = () => router.push('/find-a-tutor')

    useEffect(() => {
        matchMedia.add(mediaQueries, (context) => {
            let isDesktop = context.conditions?.isDesktop ?? false;
            if (isDesktop) {
                let ctx = gsap.context(() => {
                    gsap.to(".first-star", {
                        duration: 1.5,
                        scale: 1.3,
                        ease: "power4.out",
                        yoyo: true,
                        scrollTrigger: {
                            trigger: ".first-star",
                            start: "top 20%", 
                            end: "bottom top",
                            scrub: true,
                        }
                        });
                    gsap.to(".second-star", {
                        duration: 1.5,
                        scale: 1.3,
                        ease: "power4.out",
                        yoyo: true,
                        scrollTrigger: {
                            trigger: ".second-star",
                            start: "top 20%", 
                            end: "bottom top",
                            scrub: true,
                        }
                        });
                        gsap.to(".third-star", {
                            duration: 1.5,
                            scale: 1.3,
                            ease: "power4.out",
                            yoyo: true,
                            scrollTrigger: {
                                trigger: ".third-star",
                                start: "top 20%", 
                                end: "bottom top",
                                scrub: true,
                            }
                            });
                }, [animationRef]);

                return () => ctx.kill();
            }   
        })
    }, [animationRef]);

    return (
        <div ref={animationRef} className={styles.container}>
            <div className={styles.tutorsContainer}>
                <div className={`${styles.thirdStar} ${styles.singleTutor} first-star`}>
                    <div>
                        <img className={`${styles.star}`} src="./assets/exploreTutors/star-center.png"></img>
                        <div className={styles.tutorInfo}>
                            <div className={styles.tutorProfile}>
                                <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                                <p>Jack Sth</p>
                            </div>
                            <div className={styles.tutorRating}>
                                <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                                <p className={styles.rating}>4.9</p>
                                <p className={styles.dotShape}></p>
                                <p>232 reviews</p>
                            </div>
                            <div className={styles.tutorQuote}>
                                <p>"I'm here to help you learn and reach your full potential!"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.secondStar} ${styles.singleTutor} second-star`}>
                    <div>
                        <img className={`${styles.star}`} src="./assets/exploreTutors/star-center.png"></img>
                        <div className={styles.tutorInfo}>
                            <div className={styles.tutorProfile}>
                                <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                                <p>Jack Sth</p>
                            </div>
                            <div className={styles.tutorRating}>
                                <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                                <p className={styles.rating}>4.9</p>
                                <p className={styles.dotShape}></p>
                                <p>232 reviews</p>
                            </div>
                            <div className={styles.tutorQuote}>
                                <p>"I'm here to help you learn and reach your full potential!"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.thirdStar} ${styles.singleTutor} third-star`}>
                    <img className= {styles.star} src="./assets/exploreTutors/star-center.png"></img>
                    <div className={styles.tutorInfo}>
                        <div className={styles.tutorProfile}>
                            <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                            <p>Jack Sth</p>
                        </div>
                        <div className={styles.tutorRating}>
                            <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                            <p className={styles.rating}>4.9</p>
                            <p className={styles.dotShape}></p>
                            <p>232 reviews</p>
                        </div>
                        <div className={styles.tutorQuote}>
                            <p>"I'm here to help you learn and reach your full potential!"</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <Link href="">
                    <Button 
                        content="explore all tutors"
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

export default ExploreTutors