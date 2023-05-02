import styles from './SelectPlan.module.css'

const SelectPlan = () => {


    const plans = [
        {name: "Arcade", pricing: 15, duration: 30, img: "./assets/selectPlan/arcade.png"},
        {name: "Turbo", pricing: 25, duration: 45,  img: "./assets/selectPlan/turbo.png"},
        {name: "Divin'", pricing: 35, duration: 60,  img: "./assets/selectPlan/deep-dive.png"}

    ]

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Select your plan</h1>
            <div className={styles.planContainer}>
               {plans.map((plan) => 
                    <div className={styles.singlePlan} key={plan.planName}>
                        <img className={styles.planImg} src={plan.img}></img>
                        <div className={styles.planInfo}>
                            <h2 className={styles.planName}>{plan.name}</h2>
                            <p className={styles.planPricing}>${plan.pricing} / {plan.duration}min</p>
                        </div>
                    </div>
               )}
            </div>

        </div>
    )
}

export default SelectPlan