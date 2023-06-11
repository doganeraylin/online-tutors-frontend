import { useState, useEffect } from "react"
import styles from "./Carousel.module.css"

const Carousel = (props) => {
    const {children} = props
    const [length, setLength] = useState(children.length)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carouselWrapper}>
                <button 
                    className={styles.leftArrow}
                    onClick={prev}
                    >&lt;
                </button>
                <div className={styles.carouselContentWrapper}>
                    <div 
                        className={styles.carouselContent}
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    
                    >
                        {children}
                    </div>
                </div>
                <button 
                    className={styles.rightArrow}
                    onClick={next}
                    >&gt;</button>
            </div>
        </div>
    )
}
export default Carousel