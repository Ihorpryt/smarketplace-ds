import React from "react";
import {useHistory} from "react-router-dom";
import {
    SBackButton,
    SBlock,
    ScheckLink,
    SFooter,
    SGrad,
    SInputs,
    SLeft,
    SRight,
    SSignUp,
    STextRight,
    SVideo,
    SWrapper
} from "./styles";
import Input from "../../../components/System/Input/Input";
import Button from "../../../components/System/Button/Button";
import Checkbox from "../../../components/System/Checkbox/Checkbox";
import {logoSVG} from "../../../assets/";
import {SLogo} from "../../../components/Sidebar/styles";
import video1 from "../../../assets/comp.mp4";
import grad from "../../../assets/gradientcover.png";

const Login = () => {
    let history = useHistory();

    return (
        <SWrapper >
            <SLeft>
                <SBlock>
                    <SLogo>
                        <img src={logoSVG} alt="logo" />
                    </SLogo>

                    <h1>Login</h1>
                    <p>Please enter your details.</p>
                    <SInputs>
                        <Input label="Email address" />
                        <Input label="Password" />
                    </SInputs>
                    <ScheckLink>
                        <Checkbox label="Remember me" />
                        <a href="#">Forgot password?</a>
                    </ScheckLink>
                    <Button text="Login" />
                    <SSignUp>
                        <p>New member?</p><a href="#">Sign Up</a>
                    </SSignUp>

                </SBlock>

                <SFooter>© 2017-2022 Portside, Inc. All rights reserved.</SFooter>
            </SLeft>

            <SRight>
                <SBackButton onClick={() => history.push("/pages")}>Back</SBackButton>
                <SGrad src={grad} alt=""/>
                <SVideo src={video1} width="100%" height="100%"  autoPlay="true" loop="true" />
                <STextRight>
                    <h1>Go ahead. <br/> Get the best job.</h1>
                    <p>Browse jobs posted on Staffing Marketplace, or jump right in and create a profile to find the work that you love to do.</p>
                </STextRight>

            </SRight>
        </SWrapper>
    );


};

export default Login;