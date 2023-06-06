

  import Button from '../../Button/Button'
import styles from './Checkout.module.css'

const Checkout = ({ plan, time, tutorName, onConfirm}) => {
    return (
        <>
        <div className={styles.checkoutContainer}>
            <div className={styles.cardInfoContainer}>
                <h2>Card Details</h2>
                <div className={styles.inputContainer}>
                    <label htmlFor="cardNumber">Card Number:</label>
                    <input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor="cardName">Cardholder Name:</label>
                    <input type="text" id="cardName" name="cardName" placeholder="John Doe" required />
                </div>
                <div className={`${styles.verificationInput}`}>
                    <div>
                        <label htmlFor="expiryDate">Expiry Date:</label>
                        <input type="date" id="expiryDate" name="expiryDate" required />
                    </div>
                    <div>    
                        <label htmlFor="securityCode">Security Code:</label>
                        <input type="number" id="securityCode" name="securityCode" placeholder="123" required />
                    </div>
                </div>
            </div>

            <div className={styles.summary}>
                <div className={styles.lessonDetailsContainer}>
                    <img className={styles.tutorImg} src="./assets/contact/sun.png"></img>
                    <div className={styles.lessonDetails}>
                        <p>name</p>
                        <p className={styles.lessonPlan}>sth</p>
                        <p className={styles.lessonTime}>sth</p>
                    </div>
                </div>
                <div className={styles.pricingContainer}>
                    <div className={styles.pricing}>
                        <p className={styles.pricingTitle}>Sub-total</p>
                        <p>$25</p>
                    </div>
                    <div className={`${styles.pricing} ${styles.feeContainer}`}>
                        <p className={styles.pricingTitle}>Processing fee</p>
                        <p className={styles.fee}>$0.95</p>
                    </div>
                </div>
                <div className={styles.totalContainer}>
                    <p>Total</p> 
                    <p>$25.95</p>
                </div>
                <div className={styles.btnContainer}>
                    <Button 
                        content="confirm"
                        buttonColor="orangeBg"
                        buttonTextColor="whiteText"
                        buttonSize="smallBtn"
                        buttonFontSize="smallFont"
                        height="smallHeight"
                    />
                </div>
            </div>
        </div>
        </>
   
    )
}

export default Checkout