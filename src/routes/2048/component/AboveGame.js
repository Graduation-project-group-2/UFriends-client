import React from 'react';

export default function AboveGame() {
  return (
    <div className="above-game">
      <p id="p2048" className="game-intro">
        Join the numbers and get to the <strong>2048 tile!</strong>
      </p>
      <a id="a2048" href="/G_2048" className="restart-button">
        New Game
      </a>
    </div>
  );
}