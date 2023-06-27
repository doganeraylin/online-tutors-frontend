import styles from './Button.module.css'

interface ButtonProps {
    content: string
    buttonColor: "orangeBg" | "lightYellowBg" | "grayBg"
    buttonTextColor: "whiteText" | "blueText" | "grayText" | "orangeText"
    buttonSize: "smallBtn" | "mediumBtn" | "largeBtn" 
    buttonFontSize: "smallFont" | "mediumFont" | "largeFont"
    height: "smallHeight" | "mediumHeight" | "largeHeight"
    textTransform: "uppercase"  | "lowercase"
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }
  
  const Button: React.FC<ButtonProps> = 
  ({ content,
    buttonColor, 
    buttonTextColor, 
    buttonSize, 
    buttonFontSize, 
    height,
    textTransform
  }) => {

    return (
      <button 
        className={`${styles[buttonColor]} 
                  ${styles[buttonTextColor]} 
                  ${styles[buttonSize]} 
                  ${styles[buttonFontSize]}
                  ${styles[height]}
                  ${styles[textTransform]}
                  ${styles.commonStyle}`}
                  >
                {content}
      </button>
    )
  }
  
  export default Button
  