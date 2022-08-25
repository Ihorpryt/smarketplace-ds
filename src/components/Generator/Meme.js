import React from "react";
import {SmallRow, SMeme} from "./styles";
import Input from "../System/Input/Input";
import Button from "../System/Button/Button";
import memesData from "../../assets/memesData";



const Meme = () => {

    //const [memeImage, setImage] = React.useState("https://i.imgflip.com/3si4.jpg")
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg",
    })

    const [allMemeImages, setAllImages] = React.useState(memesData)

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const randomImg = allMemeImages.data.memes[randomIndex].url;

        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: randomImg
        }))
    }




    return (
        <SMeme>
                <SmallRow>
                    <Input
                        label="Text on top"
                    />

                    <Input
                        label="Text on bottom"
                    />
                </SmallRow>

                <Button
                    text="Generate New Image"
                    onClick={getMemeImage}
                />


                <SmallRow>
                    <img src={meme.randomImage}/>
                </SmallRow>



        </SMeme>
  );
};

export default Meme;