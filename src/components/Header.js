import React from 'react';
import trollFace from '../components/images/Troll-Face.png'

export default function Header() {
  return(
    <header>
      <img src={trollFace}></img>
      <h2>Meme Generator</h2>
      <h3>React Course - Project 3</h3>
    </header>

  )
}