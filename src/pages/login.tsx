import Layout from "../../components/Layout/Layout";
import Account from "../../components/Account/Account"
import Button from "../../components/Button/Button";
import AstronautAnimation from "../../components/AstronautAnimation/AstronautAnimation";

const login = () => 

<Layout>
    <Account
        title="Login"
        routerPath="/"
        linkText="Are you new here? Register now!"
        href="/register"
        animationComponent={<AstronautAnimation imgProp="/assets/login/astronaut-2.png"/>}
        buttonComponent={
            <Button     
                content="Login"
                buttonColor="orangeBg"
                buttonTextColor="whiteText"
                buttonSize="largeBtn"
                buttonFontSize="largeFont"
                height="largeHeight"
            />
        }
    />
</Layout>

export default login


