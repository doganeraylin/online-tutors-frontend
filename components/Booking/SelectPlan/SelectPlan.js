import styles from './SelectPlan.module.css'

const SelectPlan = ({onSelect, pricing}) => {

    const plans = [
        {name: "Arcade", duration: 30, img: "./assets/selectPlan/arcade.png"},
        {name: "Turbo", duration: 45,  img: "./assets/selectPlan/turbo.png"},
        {name: "Divin'", duration: 60,  img: "./assets/selectPlan/deep-dive.png"}
    ]
    const handlePlanSelect = (plan) => {
        onSelect(plan);
        console.log("select plan component")
    };
    const prices = plans.map((plan, index) => pricing[index]);
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Select your plan</h1>
            <div className={styles.planContainer}>
               {plans.map((plan, index) => 
                    <div 
                        className={styles.singlePlan} 
                        key={index}
                        onClick={() => handlePlanSelect(plan)}
                    >
                        <img className={styles.planImg} src={plan.img}></img>
                        <div className={styles.planInfo}>
                            <h2 className={styles.planName}>{plan.name}</h2>
                            {/* added pricing index/prop */} 
                            <p className={styles.planPricing}>${prices[index]} / {plan.duration}min</p>
                            {/*  */}
                        </div>
                    </div>
               )}
            </div>

        </div>
    )
}

export default SelectPlan