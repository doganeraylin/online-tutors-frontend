import Link from 'next/link'
import { useRef, useEffect} from "react"
import { gsap } from 'gsap';
import { matchMedia, mediaQueries } from "../AnimationScreenSize/animationScreenSize"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Footer.module.css'
gsap.registerPlugin(ScrollTrigger);

const Footer = ({ showImgContainer = true}) => {

  const birdLeftRef = useRef(null);
  const birdRightRef = useRef(null);

  useEffect(() => {
    matchMedia.add(mediaQueries, (context) => {
      let { isDesktop } = context.conditions;
      if (isDesktop) {
        let ctx = gsap.context(() => {
          gsap.to(birdLeftRef.current, {
            duration: 3,
            x: -300,
            y: -100,
            ease: "slow(0.7, 0.7, false)",
            yoyo: true,
            scrollTrigger: {
              trigger: birdLeftRef.current,
              start: "top 100%", 
              end: "bottom top", 
            },
            onComplete: function() {
              gsap.to(birdLeftRef.current, {
                duration: 1.5,
                rotation: "180",
                onComplete: function() {
                  gsap.to(birdLeftRef.current, {
                    duration: 1.25,
                    x: 0,
                    y: 0,
                    ease: "slow(0.7, 0.7, false)",
                  });
                }
              });
            }
          });
          gsap.to(birdRightRef.current, {
            duration: 3,
            x: 300,
            y: -100,
            ease: "slow(0.7, 0.7, false)",
            yoyo: true,
            scrollTrigger: {
              trigger: birdRightRef.current,
              start: "top 100%", 
              end: "bottom top", 
            },
            onComplete: function() {
              gsap.to(birdRightRef.current, {
                duration: 1.5,
                rotation: "180",
                onComplete: function() {
                  gsap.to(birdRightRef.current, {
                    duration: 1.25,
                    x: 0,
                    y: 0,
                    ease: "slow(0.7, 0.7, false)",
                  });
                }
              });
            }
          });   
      }, [birdLeftRef, birdRightRef]);

      return () => ctx.revert();
    }
  }) 
  }, []);


  return (
    <div className={styles.container}>
      {showImgContainer && 
       <div className={styles.imgContainer}>
       <img ref={birdLeftRef} src="./assets/footer/bird-left.png"></img>
       <img ref={birdRightRef} src="./assets/footer/bird-right.png"></img>
      </div>
      }
      <div className={styles.navLinks}> 
        <Link className={styles.link} href="/">home</Link>
        <Link className={styles.link} href="/about">about</Link>
        <Link className={styles.link} href="/find-a-tutor">find a tutor</Link>
        <Link className={styles.link} href="/contact-page">contact</Link>
      </div>
      <div>
         <div className={styles.socialMediaContainer}>
            <p>follow us</p>
            <img src="./assets/footer/instagram.png"></img>
            <img src="./assets/footer/twitter.png"></img>
            <img src="./assets/footer/linkedin.png"></img>
        </div> 
      </div>
    </div>
  )
}

export default Footer