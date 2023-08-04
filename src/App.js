import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import TrollFace from "./components/images/Troll-Face.png"

export default function App() {
  return (
    <div className="app-container">
      <Header
      img={TrollFace} />
      <Meme />
    </div>
  )
}

