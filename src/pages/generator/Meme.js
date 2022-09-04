import React from "react";
import {BottomText, bottomText, SmallRow, SMeme, TopText} from "./styles";
import Input from "../../components/System/Input/Input";
import Button from "../../components/System/Button/Button";



const Meme = () => {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjEwMzJ8MHwxfHNlYXJjaHwzfHxqZXR8ZW58MHwwfHx8MTY2MjI1MDIzNA&ixlib=rb-1.2.1&q=80&w=1080",
    })

    const [allMemes, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.unsplash.com/search/photos?&per_page=50&orientation=landscape&query=private+jet&client_id=T49q6EPSwJfnw8eYncCYtXyWCU44fXuZdFy3jGtRQFY")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.results))


    },[])
    console.log(allMemes)
    function getMemeImage() {
        const randomIndex = Math.floor(Math.random() * allMemes.length);
        const randomImg = allMemes[randomIndex].urls.regular;
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