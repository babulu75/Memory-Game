import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

const generateCards = () => {
  // Create 8 pairs (0–7)
  const numbers = [...Array(8).keys(), ...Array(8).keys()];
  // Shuffle
  return numbers
    .sort(() => Math.random() - 0.5)
    .map((num, index) => ({
      id: index,
      value: num,
      flipped: false,
      matched: false,
    }));
};

export default function MemoryGame() {
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [time, setTime] = useState(0);
  const [best, setBest] = useState(
    localStorage.getItem("bestScore") || null
  );
  const [gameOver, setGameOver] = useState(false);

  // Timer
  useEffect(() => {
    if (!gameOver) {
      const timer = setInterval(() => setTime((t) => t + 1), 1000);
      return () => clearInterval(timer);
    }
  }, [gameOver]);

  // Handle flip
  const handleCardClick = (id) => {
    if (flippedCards.length === 2) return; // max 2 at once

    const updated = cards.map((card) =>
      card.id === id && !card.flipped && !card.matched
        ? { ...card, flipped: true }
        : card
    );
    setCards(updated);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      const [first, second] = newFlipped.map(
        (fid) => updated.find((c) => c.id === fid)
      );
      if (first.value === second.value) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, matched: true }
                : c
            )
          );
          setFlippedCards([]);
        }, 600);
      } else {
        // Not a match → flip back
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === first.id || c.id === second.id
                ? { ...c, flipped: false }
                : c
            )
          );
          setFlippedCards([]);
        }, 1000);
      }
    }
  };

  // Check game over
  useEffect(() => {
    if (cards.every((c) => c.matched)) {
      setGameOver(true);
      if (!best || time < best) {
        setBest(time);
        localStorage.setItem("bestScore", time);
      }
    }
  }, [cards, time, best]);

  // Restart game
  const restartGame = () => {
    setCards(generateCards());
    setTime(0);
    setGameOver(false);
    setFlippedCards([]);
  };

  return (
    <div className="memory-container">
      <h1>Memory Game</h1>
      <div className="scoreboard">
        <p>Time: {time}s</p>
        <p>Best: {best ? `${best}s` : "—"}</p>
      </div>

      <div className="cards-grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${card.flipped || card.matched ? "flipped" : ""}`}
            onClick={() => handleCardClick(card.id)}
          >
            {card.flipped || card.matched ? card.value : "?"}
          </div>
        ))}
      </div>

      <button id="restart" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}
