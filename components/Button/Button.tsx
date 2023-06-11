import styles from './Button.module.css'

interface ButtonProps {
    content: string
    buttonColor: "orangeBg" | "lightYellowBg" | "grayBg"
    buttonTextColor: "whiteText" | "blueText" | "grayText" | "orangeText"
    buttonSize: "smallBtn" | "mediumBtn" | "largeBtn" 
    buttonFontSize: "smallFont" | "mediumFont" | "largeFont"
    height: "smallHeight" | "mediumHeight" | "largeHeight"
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const Button: React.FC<ButtonProps> = 
  ({ content,
    buttonColor, 
    buttonTextColor, 
    buttonSize, 
    buttonFontSize, 
    height
  }) => {

    return (
      <button 
        className={`${styles[buttonColor]} 
                  ${styles[buttonTextColor]} 
                  ${styles[buttonSize]} 
                  ${styles[buttonFontSize]}
                  ${styles[height]}
                  ${styles.commonStyle}`}
                  >
                {content}
      </button>
    )
  }
  
  export default Button
  