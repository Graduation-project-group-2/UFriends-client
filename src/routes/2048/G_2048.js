import React, { useState, useEffect } from 'react';
import Header from './component/Header';
import AboveGame from './component/AboveGame';
import Game from './component/Game';
import useLocalStorageNumber from './hook/useLocalStorage';
import './styled/G_2048.css'

export default function G_2048() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useLocalStorageNumber('bestScore', 0);

  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score);
    }
  });

  return (
    <div id="body2048">
      <div className="container">
        <Header score={score} bestScore={bestScore} />
        <AboveGame />
        <Game setScore={setScore} />
      </div>
    </div>
    
  );
}