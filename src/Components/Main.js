import React from 'react'

export default function Main(){
    // const [count, setCount] = React.useState(0);
    // function add(){
    //     setCount(prevCount => prevCount + 1)
    // }
    // function subtract(){
    //     setCount(prevCount => prevCount - 1)
    // }


    // const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme, setMeme] = React.useState({
        toptext: "",
        bottomtext: "",
        randomimage: "http://i.imgflip.com/1bij.jpg",
    })
    const [allmemesimages, setAllmemesimages] = React.useState([])
    React.useEffect(()=> {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllmemesimages(data.data.memes))
     }, [])
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allmemesimages.length)
        const randomurl = allmemesimages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomimage: randomurl
        }))
        
    
    }
    function handleclick(event){
        const {name, value} = event.target
        setMeme(prevMeme =>({
            ...prevMeme, 
            [name]: value
        }

        ))

    }
    


    return(
        <div className='main'>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="toptext"
                    value={meme.toptext}
                    onChange={handleclick}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomtext"
                    value={meme.bottomtext}
                    onChange={handleclick}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className='meme-image'>
            <img src={meme.randomimage} className="meme--image" />
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.toptext}</h2>
                <h2 className="meme--text bottom">{meme.bottomtext}</h2>
            </div>


        {/* <div className="counter">
            <button className="counter--minus" onClick={subtract} >–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
     */}

        </div>
    )
}