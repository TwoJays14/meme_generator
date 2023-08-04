import React from "react";
import { useEffect } from "react";
// import memesData from "../memesData";

export default function Meme() {
  
  
  
  const [meme, setMeme] = React.useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
    }
  );

  function handleChange(event) {
    const {name, value,} = event.target;
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: value
      }
    })
  }

  


  const [allMemeImages, setAllMemeImages] = React.useState([])
  

  useEffect(() => {
    async function getMeme() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json();
      setAllMemeImages(data.data.memes)
    }

    getMeme()

    // fetch("https://api.imgflip.com/get_memes")
    // .then(res => res.json())
    // .then(data => setAllMemeImages(data.data.memes))
  }, [])


  function getRandomMeme() {

    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    const url = allMemeImages[randomNumber].url
    setMeme(prevMeme => (
      {...prevMeme, 
        randomImage: url,
        topText: "",
        bottomText: ""
      })
    ) 
    
  }

 



  // const [isImportant, setIsImportant] = React.useState("Yes")

  // function handleClick() {
  //   setIsImportant("No")
  // }
  

  return (
    <main>
      <div className="meme-form">
        <input 
          id="input1" 
          type="text" 
          placeholder="First line"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input 
          id="input2" 
          type="text" 
          placeholder="Second line"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button 
        onClick={getRandomMeme} 
        className="form-btn">
          Get a new meme image
          </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>

    </main>
  )
}
