import React, {useCallback, useRef} from "react";
import {BottomText, SmallRow, SMeme, TopText} from "./styles";
import Input from "../../components/System/Input/Input";
import Button from "../../components/System/Button/Button";
import {toPng} from 'html-to-image';



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



    const ref = useRef(null)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, quality:0.9 })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])


    return (
        <SMeme>
                <SmallRow margin={"0 0 24px 0"}>
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



                <SmallRow ref={ref} margin={"0px"}>
                    <img src={meme.randomImage} />
                    <TopText>{meme.topText}</TopText>
                    <BottomText>{meme.bottomText}</BottomText>
                </SmallRow>

                <SmallRow>
                    <Button
                        text="Generate new image"
                        onClick={getMemeImage}
                        variant="primary"
                    />
                    <Button
                        text="Download image"
                        onClick={onButtonClick}
                        variant="secondary"
                    />
                </SmallRow>


        </SMeme>
  );
};

export default Meme;