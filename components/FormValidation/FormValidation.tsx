import styles from "./FormValidation.module.css"

interface FormValidationProps {
    formData: FormData;
}
  
interface FormData {
    email: string;
    password: string;
}

const isValidEmail = (email: string): boolean => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

const FormValidation: React.FC<FormValidationProps> = ({ formData }) => {
  const errors: { [key: string]: string } = {};
  
  if (formData.email.trim() === '') {
    errors.email = 'Email is required';
  } else if (!isValidEmail(formData.email)) {
    errors.email = 'Invalid email address';
  }

  if (formData.password.trim() === '') {
    errors.password = 'Password is required';
  } else if (formData.password.length < 6) {
    errors.password = 'Password should contain at least 6 characters';
  }

  return <>{errors && Object.values(errors).map((error) => <p className={styles.errorMsg} key={error}>{error}</p>)}</>;
};

export default FormValidation;
