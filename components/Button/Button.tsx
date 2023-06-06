import styles from './Button.module.css'

interface ButtonProps {
    content: string
    buttonColor: "orangeBg" | "lightYellowBg" | "grayBg"
    buttonTextColor: "whiteText" | "blueText" | "grayText" | "orangeText"
    buttonSize: "smallBtn" | "mediumBtn" | "largeBtn" 
    buttonFontSize: "smallFont" | "mediumFont" | "largeFont"
    height: "smallHeight" | "mediumHeight" | "largeHeight"

    onClick?: () => void
  }
  
  const Button: React.FC<ButtonProps> = 
  ({ content,
     buttonColor, 
     buttonTextColor, 
     buttonSize, 
     buttonFontSize, 
     height, 
     onClick }) => {

    const handleClick = () => {
      if (onClick) {
        onClick()
      }
    }
  
    return (
      <button 
        className={`${styles[buttonColor]} 
                  ${styles[buttonTextColor]} 
                  ${styles[buttonSize]} 
                  ${styles[buttonFontSize]}
                  ${styles[height]}
                  ${styles.commonStyle}`}
                  onClick={handleClick}>
                  {content}
      </button>
    )
  }
  
  export default Button
  