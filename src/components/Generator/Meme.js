import React from "react";
import {SMeme} from "./styles";
import Input from "../System/Input/Input";
import {SRow} from "../Layout/styles";
import Button from "../System/Button/Button";
import memesData from "../../assets/memesData";



const Meme = () => {

    let randomImg
    
    function randomUrl() {
        let randomIndex = Math.floor(Math.random() * memesData.data.memes.length);
        randomImg = memesData.data.memes[randomIndex].url;
        console.log(randomImg);
    }


  return (
        <SMeme>

                <SRow>
                    <Input
                        label="Text on top"
                    />

                    <Input
                        label="Text on bottom"
                    />
                </SRow>

                <Button
                    text="Generate New Image"
                    onClick={randomUrl}
                />


        </SMeme>
  );
};

export default Meme;