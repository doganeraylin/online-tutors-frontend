import Layout from "../../components/Layout/Layout";
import Account from "../../components/Account/Account"
import Button from "../../components/Button/Button";
import AstronautAnimation from "../../components/AstronautAnimation/AstronautAnimation";

const register= () => {
    return (
        <Layout>
            <Account
                title="Create an account"
                routerPath="/success"
                linkText="Already have an account? Login now!"
                href="/login"
                animationComponent={
                    <AstronautAnimation 
                        imgProp="/assets/register/astronaut.png"/>
                    }
                buttonComponent={
                <Button content="Register"
                    buttonColor="orangeBg"
                    buttonTextColor="whiteText"
                    buttonSize="largeBtn"
                    buttonFontSize="largeFont"
                    height="largeHeight"/>
                }
            />
        </Layout>
    )
}

export default register




