import styles from './Chip.module.css'

interface ChipProps {
  text: string;
}
const Chip = ({ text } : ChipProps) => {
  return (
    <div className={styles.chipContainer}>
        <p className={styles.chip}>{text}</p>
    </div>
  )
}
export default Chip
