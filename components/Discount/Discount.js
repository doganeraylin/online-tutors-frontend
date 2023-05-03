import styles from './Discount.module.css'

const Discount = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.discountText}>50% OFF</h1>
            <img src="./assets/discount/plane.png" className={styles.discountImg}></img>
        </div>
    )
}


export default Discount