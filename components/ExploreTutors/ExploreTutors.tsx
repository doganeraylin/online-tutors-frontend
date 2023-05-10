import Link from 'next/link'
import Button from '../Button/Button'
import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import styles from './ExploreTutors.module.css'

const ExploreTutors = () => {

    const starRef = useRef<HTMLDivElement>(null);
    const starRef2 = useRef<HTMLDivElement>(null);
    const starRef3 = useRef<HTMLDivElement>(null);

    useEffect(() => {
    let ctx = gsap.context(() => {
        gsap.to(starRef.current, {
        duration: 4,
        scale: 1.3,
        // rotate: "+360",
        ease: "slow(2, 2, false)",
        repeat: -1,
        yoyo: true,
        scrollTrigger: {
            trigger: starRef.current,
            start: "top 100%",
            end: "bottom top",
        }
        });
        gsap.to(starRef2.current, {
            duration: 4,
            scale: 1.3,
            // rotate: "+360",
            ease: "slow(2, 2, false)",
            repeat: -1,
            yoyo: true,
            scrollTrigger: {
                trigger: starRef2.current,
                start: "top 100%",
                end: "bottom top",
            }
            });
            gsap.to(starRef3.current, {
                duration: 4,
                scale: 1.3,
                // rotate: "+360",
                ease: "slow(2, 2, false)",
                repeat: -1,
                yoyo: true,
                scrollTrigger: {
                    trigger: starRef3.current,
                    start: "top 100%",
                    end: "bottom top",
                }
                });

    }, [starRef, starRef2, starRef3]);
    
    return () => {
        ctx.kill();
    }
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.wavyLinesContainer}>
                <img src=""></img>
                <img src=""></img>
            </div>
            <div className={styles.tutorsContainer}>
                <div ref={starRef}  className={`${styles.firstStar} ${styles.singleTutor}`}>
                    <div >
                        <img className={styles.star} src="./assets/exploreTutors/star-center.png"></img>
                    </div>
                 
                    <div className={styles.tutorInfo}>
                        <div className={styles.tutorProfile}>
                            <img className={styles.tutorImg} src="./assets/contact/round-shape.png"></img>
                            <p>Jack Sth</p>
                        </div>
                        <div className={styles.tutorRating}>
                            <img className={styles.ratingIcon} src="./assets/tutor/rating.png"></img>
                            <p className={styles.rating}>4.9</p>
                            <p className={styles.dotShape}></p>
                            <p className={styles.reviewCount}>232 reviews</p>
                        </div>
                        <div className={styles.tutorQuote}>
                            <p>"I'm here to help you learn and reach your full potential!"</p>
                        </div>
                    </div>
                </div>
                <div ref={starRef2} className={`${styles.secondStar} ${styles.singleTutor}`}>
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
                <div ref={starRef3} className={`${styles.thirdStar} ${styles.singleTutor}`}>
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
                    />
                </Link>
            </div>
        </div>
    )
}

export default ExploreTutors