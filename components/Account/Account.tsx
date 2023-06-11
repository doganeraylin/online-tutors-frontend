import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, ChangeEvent, ReactNode } from "react"
import FormValidation from "../FormValidation/FormValidation";
import styles from './Account.module.css'

interface accountProps {
    title: string
    routerPath: string
    animationComponent: ReactNode
    buttonComponent: ReactNode
    linkText: string
    href: string
} 

interface FormData {
    email: string;
    password: string;
}

const Account = (
    {title, 
    routerPath, 
    animationComponent, 
    buttonComponent, 
    linkText,
    href }: accountProps) => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        email: '',
        password: '',
    });
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          router.push(`${routerPath}`);
          console.log(response)
        } else {
          console.error('Registration failed');
        }
    };
    return (
    <>
    <div className={styles.container}>
        <div className={styles.form}>
            <div className={styles.imgContainer}>
                {animationComponent}
            </div>
            <div className={styles.formContent}>
                <h1>{title}</h1>
                <form onSubmit={handleRegister}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <FormValidation formData={formData} />
                    {buttonComponent}
                </form>
            </div>  
            <Link className={styles.link} href={`${href}`}>
                <p>{linkText}</p>
            </Link>
           
        </div>
    </div> 
</>
)















}
export default Account