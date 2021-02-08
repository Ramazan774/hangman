import React from "react";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from './components/WrongLetters'
import Word from './components/Word'

import "./App.css";

const words = ['application', 'programming', 'interface', 'wizard']
let selectedWord = words[Math.floor(Math.random() * words.length)]


function App() {
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
    </>
  );
}

export default App;
