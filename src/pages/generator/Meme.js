import React from "react";
import {BottomText, bottomText, SmallRow, SMeme, TopText} from "./styles";
import Input from "../../components/System/Input/Input";
import Button from "../../components/System/Button/Button";
import memesData from "../../assets/memesData";



const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/3si4.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const randomImg = allMemeImages.data.memes[randomIndex].url;

        setMeme(prevMeme => ({
                ...prevMeme,
                randomImage: randomImg
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return (
        <SMeme>
                <SmallRow>
                    <Input
                        label="Text on top"
                        name="topText"
                        value={meme.topText}
                        onChange={handleChange}
                    />

                    <Input
                        label="Text on bottom"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                </SmallRow>

                <Button
                    text="Generate New Image"
                    onClick={getMemeImage}
                />


                <SmallRow>
                    <img src={meme.randomImage}/>
                    <TopText>{meme.topText}</TopText>
                    <BottomText>{meme.bottomText}</BottomText>
                </SmallRow>


        </SMeme>
  );
};

export default Meme;