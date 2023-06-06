import { useState } from "react"
import Button from "../Button/Button"
import Chip from "../Chip/Chip"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styles from "./TutorDetails.module.css"

interface Review {
  username: string,
  review: string,
  rating: number
}

interface Tutor {
  id: number
  img: string,
  name: string,
  position: string,
  rating: number,
  lessons_taught: number,
  hourly_rate: number,
  subjects: [], 
  speaks: [],
  about_me: string,
  about_class: string,
  reviews: Review[]
}
interface TutorProps {
  tutors: Tutor;
}

const TutorReview = ( {tutors} : TutorProps) => {

const [currentTab, setCurrentTab] = useState<string>('aboutMe')

  const tabList = [
    {
      name: 'aboutMe',
      label: 'About Me',
    },
    {
      name: 'aboutClass',
      label: 'About Class',
    },
    {
      name: 'reviews',
      label: 'Reviews',
    },
  ];
  

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const tabId = e.currentTarget.id 
    setCurrentTab(tabId)
  }
  const AboutMe = ({ aboutMe }: { aboutMe: string }) => (
    <div>
      <p>{aboutMe}</p>
    </div>
  )
  
  const AboutClass = ({ aboutClass }: { aboutClass: string }) => (
    <div>
      <p>{aboutClass}</p>
    </div>
  )

  
  
  const TutorReviews = ({ reviews }: { reviews: Review[] }) => (
    <div className={styles.reviewsContainer}>
      {reviews.map((review) => 
        <div key={review.username} className={styles.singleReview}>
          <p>@{review.username}</p>
          <div>
          {Array.from({ length: review.rating }).map((_, index) => (
           <img key={index} className={styles.ratingStars} src="/assets/tutor/rating.png"></img>
          ))}
        </div>
          <p>{review.review}</p>
     
        </div>
      )}
    </div>
  )

  return (
    <div className={styles.wrapper}>
      <Header/>
      <div className={styles.container}>
            <div className={styles.tutorDetailsContainer}>
              <div className={styles.tutorHeaderContainer}>
                  <img className={styles.tutorImg} src={tutors.img}></img>
                  <div className={styles.tutorPersonalInfo}>
                      <p className={styles.tutorName}>{tutors.name}</p>
                      <p className={styles.tutorField}>{tutors.position}</p>
                  </div>
                  <div className={styles.ratingWrapper}>
                      <div className={styles.ratingContainer}>
                          <img className={styles.ratingImg} src="/assets/tutor/rating.png"></img>
                          <p className={styles.rating}>{tutors.rating}</p>
                      </div>
                      <p className={styles.lessonCount}>{tutors.lessons_taught} lessons</p>
                  </div>
              </div>    
              <div className={styles.tutorSkilsContainer}>
                  <div className={styles.skillsContainer}>
                      <p className={styles.skillTitle}>Teaches</p>
                      <div className={styles.chipsContainer}>
                        {tutors.subjects.map((subject, index) => (
                          <Chip key={index} text={subject}/>
                        ))}
                          <div className={styles.nextIcon}></div>
                      </div>
                  </div>
              <div className={styles.skillsContainer}>
                  <p className={styles.skillTitle}>Speaks</p>
                  <div className={styles.chipsContainer}>
                    {tutors.speaks.map((language, index) => (
                    <Chip 
                      key={index} 
                      text={language} 
                    />
                    ))}
                     <div className={styles.previousIcon}></div>
                  </div>
              </div>
          </div>
            <div className={styles.tutorAboutContainer}>
                <div className={`${styles.tabsContainer}`}>
                    {tabList.map((tab, i) =>
                    <div className={styles.tabTitleContainer}>
                        <button 
                            key={i} 
                            id={tab.name} 
                            disabled={currentTab === `${tab.name}`} 
                            onClick={(handleTabClick)}
                            className={currentTab === tab.name ? `${styles.tabBtn} ${styles.tabBtnSelected}` : `${styles.tabBtn}`}
                        > 
                            {tab.label}
                        </button>
                    </div>
                    )}
                </div>
                <div className={styles.tabContent}>

                        {currentTab === 'aboutMe' && <AboutMe aboutMe={tutors.about_me} />}
                        {currentTab === 'aboutClass' && <AboutClass aboutClass={tutors.about_class} />}
                        {currentTab === 'reviews' && <TutorReviews reviews={tutors.reviews} />}
                </div>
            </div>
        </div> 
    </div>
    {/*  */}
        <div className={styles.tutorBookingCard}>
            <Button 
                content="book lesson"
                buttonColor="orangeBg"
                buttonTextColor="whiteText"
                buttonSize="mediumBtn"
                buttonFontSize="mediumFont"
                height="mediumHeight"
            />
        </div>
    </div>

    // 

    
  )
}

export default TutorReview