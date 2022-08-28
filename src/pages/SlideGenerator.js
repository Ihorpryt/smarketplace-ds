import React from "react";
import {SHeader} from "../components/Layout/styles";
import Meme from "./generator/Meme";

const SlideGenerator = () => {
    return (
        <>
            <SHeader>
                <h5>Enhance</h5>
                <h1>Slide Generator</h1>
                <p>You can easily generate "meme like" image with aircraft and maybe add to you presentation. </p>
            </SHeader>

            <Meme />

            {/*Image*/}
        </>
    );


};

export default SlideGenerator;