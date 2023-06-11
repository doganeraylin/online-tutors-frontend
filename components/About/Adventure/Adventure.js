import { useRef, useEffect } from "react"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { matchMedia, mediaQueries } from "../../AnimationScreenSize/animationScreenSize"
import styles from "./Adventure.module.css"
gsap.registerPlugin(ScrollTrigger);

const Adventure = () => {
    const boyImgRef = useRef();
    const itemsContainerRef = useRef();

    useEffect(() => {
      matchMedia.add(mediaQueries, (context) => {
        let { isDesktop } = context.conditions;
        if (isDesktop) {
          let ctx = gsap.context(() => {
            gsap.to(".item-one", {
              y: 80,
              yoyo: true,
              ease: "bounce.out",
              duration: 1.5,
              scrollTrigger: {
                trigger: ".item-one",
                start: 'top 80%',
                end: "bottom bottom",
              }
            });
    
            gsap.to(".item-two", {
              y: 100,
              yoyo: true,
              ease: "bounce.out",
              duration: 1.5,
              delay: 0.3,
              scrollTrigger: {
                trigger: ".item-two",
                start: 'top 80%',
                end: "bottom bottom",
              }
            });
    
            gsap.to(".item-three", {
              y: 120,
              yoyo: true,
              ease: "bounce.out",
              delay: 0.5,
              duration: 1.5,
              scrollTrigger: {
                trigger: ".item-three",
                start: 'top 80%',
                end: "bottom bottom",
              }
            });
            gsap.from(boyImgRef.current, {
              x: -300,
              ease: "power1.out",
              duration: 2,
              scrollTrigger: {
                trigger: boyImgRef.current,
                start: "top 80%",
                scrub: true,
              }
            })
            gsap.to(boyImgRef.current, {
              x: 0,
              ease: "power1.out",
              duration: 2,
              scrollTrigger: {
                trigger: boyImgRef.current,
                start: "top 80%",
                scrub: true,
              }
            })
          }, [itemsContainerRef, boyImgRef]);
    
          return () => {
            ctx.revert();
          };
        }
      });
    }, [itemsContainerRef, boyImgRef]);
    return (
        <div className={styles.container}>
            <div className={`${styles.featureContainer} ${styles.lightYellowText}`}>
                <div className={`${styles.featureTitleContainer}`}>
                    <p className={`${styles.featureTitle} ${styles.lightYellowTitle}`}>Learning is an Adventure</p>
                    <img ref={boyImgRef} className={styles.featureBoyImg} src="./assets/about/boy.png"></img>
                </div>
                <div className={styles.featureDescriptionContainer}>
                    <p className={styles.featureDescription}>We provide a <span>safe</span> and <span> comfortable </span>learning environment where your child can...</p>
                </div>
                <div  ref={itemsContainerRef}  className={styles.featureDescriptionItems}>
                    <div className={`${styles.itemOne} ${styles.singleItemContainer} item-one`}>
                        <img className={`${styles.itemImgOne} ${styles.itemImg}`} src="./assets/about/star.png"></img>
                        <p>improve their grades</p>
                    </div>
                    <div className={`${styles.itemTwo} ${styles.singleItemContainer} item-two`}>
                        <img className={`${styles.itemImgTwo} ${styles.itemImg}`} src="./assets/about/yellow-shape.png"></img>
                        <p>explore new interests</p>
                    </div>
                    <div className={`${styles.itemThree} ${styles.singleItemContainer} item-three`}>
                        <img className={`${styles.itemImgThree} ${styles.itemImg}`}  src="./assets/about/shapes.png"></img>
                        <p>foster critical thinking</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adventure