import styles from './Chip.module.css'

interface ChipProps {
  subject: string;
}
const Chip = ({ subject } : ChipProps) => {
  return (
    <div className={styles.chipContainer}>
        <p className={styles.chip}>{subject}</p>
    </div>
  )
}
export default Chip
