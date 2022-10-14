import React from "react";
import {useHistory} from "react-router-dom";
import {
    SBackButton,
    SBlock, SCheckLine,
    SFooter,
    SGrad,
    SLeft, SLines,
    SRight,
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
import checkmark from "../../../assets/circle_check.svg";

const GetStarted = () => {
    let history = useHistory();

    return (
        <SWrapper >
            <SLeft>
                    <SLogo>
                        <img src={logoSVG} alt="logo" />
                    </SLogo>


                    <STextRight>
                        <h1>Ready for your next big opportunity?</h1>
                        <SLines>
                            <SCheckLine>
                                <img src={checkmark} />
                                <p>Answer a few questions to build your profile</p>
                            </SCheckLine>
                            <SCheckLine>
                                <img src={checkmark} />
                                <p>It only takes 5-10 minutes and you can edit it later</p>
                            </SCheckLine>
                            <SCheckLine>
                                <img src={checkmark} />
                                <p>Profile needs to be 100% complete before being able to apply for a job</p>
                            </SCheckLine>
                        </SLines>
                    </STextRight>

                    <Button text="Get started" variant="primary" trailingIcon="true" />

                <SFooter>© 2017-2022 Portside, Inc. All rights reserved.</SFooter>
            </SLeft>

            <SRight>
                <SBackButton onClick={() => history.push("/pages")}>Back</SBackButton>
                <SGrad src={grad} alt=""/>
                <SVideo src={video1} width="100%" height="100%"  autoPlay="true" loop="true" />

            </SRight>
        </SWrapper>
    );


};

export default GetStarted;