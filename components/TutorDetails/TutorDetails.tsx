import { useState } from "react"
import Button from "../Button/Button"
import Chip from "../Chip/Chip"
import styles from "./TutorDetails.module.css"

const TutorReview = () => {
const [currentTab, setCurrentTab] = useState<string>('0')
    
  const tabs = [
    { tab: "about me", id: "0" },
    { tab: "about the class", id: "1" },
    { tab: "reviews", id: "2" },
  ]

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabId = e.currentTarget.id 
    setCurrentTab(tabId)
  }

    return (
        <div className={styles.container}>
            <div className={styles.tutorDetailsContainer}>
                <div className={styles.tutorHeaderContainer}>
                    <img className={styles.tutorImg} src="./assets/about/sun.png"></img>
                    <div className={styles.tutorPersonalInfo}>
                        <p className={styles.tutorName}>Aylin Doğaner</p>
                        <p className={styles.tutorField}>Frontend Developer</p>
                    </div>
                    <div className={styles.ratingWrapper}>
                        <div className={styles.ratingContainer}>
                            <img className={styles.ratingImg} src="./assets/tutor/rating.png"></img>
                            <p className={styles.rating}>4.9</p>
                        </div>
                        <p className={styles.lessonCount}>602 lessons</p>
                      
                     
                    </div>
                </div>    
                <div className={styles.tutorSkilsContainer}>
                    <div className={styles.skillsContainer}>
                        <p className={styles.skillTitle}>Teaches</p>
                        <div className={styles.chipsContainer}>
                            {/* <img className={styles.previousIcon} src="./assets/tutor/previous.png"></img> */}
                            <div className={styles.chips}>
                                <Chip />
                                <Chip />
                            </div>
                            {/* <img className={styles.nextIcon} src="./assets/tutor/next.png"></img> */}
                        </div>
                    </div>
                    <div className={styles.skillsContainer}>
                        <p className={styles.skillTitle}>Speaks</p>
                        <div className={styles.chipsContainer}>
                            {/* <img className={styles.previousIcon} src="./assets/tutor/previous.png"></img> */}
                            <div className={styles.chips}>
                                <Chip />
                                <Chip />
                            </div>
                            {/* <img className={styles.nextIcon} src="./assets/tutor/next.png"></img> */}
                        </div>
                    </div>
                </div>
                <div className={styles.tutorAboutContainer}>
                    <div className={`${styles.tabsContainer}`}>
                        {tabs.map((tab, i) =>
                            <button 
                                key={i} 
                                id={tab.id} 
                                disabled={currentTab === `${tab.id}`} 
                                onClick={(handleTabClick)}
                                className={currentTab === tab.id ? `${styles.tabBtn} ${styles.tabBtnSelected}` : `${styles.tabBtn}`}
                            > 
                                {tab.tab}
                            </button>
                        )}
                    </div>
                </div>
            </div>
            {/* <div className={styles.tutorBookingCard}>
                <img className="w-75" src="./assets/signUpModal/bumper-cars.png"></img>
                <Button 
                    content="book lesson"
                    buttonColor="orangeBg"
                    buttonTextColor="whiteText"
                    buttonSize="mediumBtn"
                    buttonFontSize="smallFont"
                    height="mediumHeight"
                />
                <Button 
                    content="contact tutor"
                    buttonColor="grayBg"
                    buttonTextColor="whiteText"
                    buttonSize="mediumBtn"
                    buttonFontSize="smallFont"
                    height="mediumHeight"
                />
            </div> */}
        </div>
    )
}

export default TutorReview