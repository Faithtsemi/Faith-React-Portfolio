
import { useState, useEffect, useRef } from "react";

interface Bug {
  id: number;
  x: number;
  y: number;
  emoji: string;
  expiresAt: number;
}

export default function BugHunter() {
  const [bugs, setBugs] = useState<Bug[]>([]);
  const [score, setScore] = useState<number>(0);

  const [bestScore, setBestScore] = useState<number>(() => {
  return Number(localStorage.getItem("bugHunterBest")) || 0;
});

  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [playing, setPlaying] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [showInstruction, setShowInstruction] = useState<boolean>(false);
  const idRef = useRef<number>(0);

  // Spawn bugs
  useEffect(() => {
    if (!playing) return;

    const spawnSpeed = Math.max(300, 800 - score * 30);
    const spawn = setInterval(() => {
      const newBug: Bug = {
        id: idRef.current++,
        x: Math.random() * 85,
        y: Math.random() * 70,
        emoji: ["🐛", "🐞", "🦟"][Math.floor(Math.random() * 3)],
        expiresAt: Date.now() + 2500,
      };

      setBugs((prev) => [...prev.slice(-4), newBug]);
      setShowInstruction(false);
    },  spawnSpeed);

    return () => clearInterval(spawn);
  },  [playing, score]);
// Remove bugs that have escaped
useEffect(() => {
  if (!playing) return;

  const escapeTimer = setInterval(() => {
    setBugs((prev) =>
      prev.filter((bug) => bug.expiresAt > Date.now())
    );
  }, 200);

  return () => clearInterval(escapeTimer);
}, [playing]);
  // Timer
  useEffect(() => {
    if (!playing) return;

    if (timeLeft === 0) {
      setPlaying(false);
      setGameOver(true);
      setBugs([]);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [playing, timeLeft]);
  // Update personal best when the score increases
useEffect(() => {
  if (score > bestScore) {
    setBestScore(score);
  }
}, [score, bestScore]);
// Save personal best in the browser
useEffect(() => {
  localStorage.setItem("bugHunterBest", String(bestScore));
}, [bestScore]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setBugs([]);
    idRef.current = 0;
    setGameOver(false);
    setShowInstruction(true);
    setPlaying(true);
  };

const fixBug = (id: number) => {
  const bugExists = bugs.some((bug) => bug.id === id);

  if (!bugExists) return;

  setBugs((prev) => prev.filter((bug) => bug.id !== id));
  setScore((prev) => prev + 1);
};
  
  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
        minHeight: "380px",
      }}
    >
      <h2 style={{ fontSize: "28px", margin: "0" }}>
        🐛 Bug Hunter
      </h2>

      <p style={{ opacity: 0.8 }}>
        Can you fix bugs faster than Faith? Click them before they escape!
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          fontWeight: "bold",
          margin: "15px 0",
          flexWrap: "wrap",
          rowGap: "10px",
        }}
        >
        <span>Score: {score} ✅</span>
        <span>Best: {bestScore} 🏆</span>
        <span>
        {gameOver ? "Finished! 🏁" : `Time: ${timeLeft}s ⏰`}
        </span>
        
      </div>

      {!playing && !gameOver && (
        <button
          onClick={startGame}
          style={{
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: "14px 28px",
            borderRadius: "999px",
            fontSize: "16px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          ▶️ Start Hunting
        </button>
      )}

      {gameOver && (
        <div>
          <h3>🎉 Game Over! You fixed {score} bugs!</h3>

          <p>
            {score >= 15
              ? "Wow! You'd make a great developer! Hire Faith 😉"
              : score >= 8
              ? "Not bad! Faith fixes them faster though 😜"
              : "The bugs won this time... Try again!"}
          </p>

          <button
            onClick={startGame}
            style={{
              background: "#a855f7",
              color: "white",
              border: "none",
              padding: "12px 24px",
              borderRadius: "999px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Play Again
          </button>
        </div>
      )}
      
      {!gameOver && (
        <div
          style={{
            position: "relative",
            height: "220px",
            width: "100%",
            background: "#1e293b",
            borderRadius: "12px",
            marginTop: "20px",
            overflow: "hidden",
          }}
        >
          {playing && showInstruction && bugs.length === 0 && (
        <p
        style={{
         color: "#cbd5e1",
         fontSize: "14px",
         padding: "15px",
    }}
   >
       🐛 Tap the bugs to fix them before they escape!
        </p>
        )}
          {bugs.map((bug) => (
            <button
              key={bug.id}
              onClick={() => fixBug(bug.id)}
              aria-label="Fix bug"
              style={{
                position: "absolute",
                left: `${bug.x}%`,
                top: `${bug.y}%`,
                fontSize: "38px",
                minWidth: "48px",
                minHeight: "48px",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "transform 0.1s",
              }}
            >
              {bug.emoji}
            </button>
          ))}
        </div>
      )}

      <p style={{ marginTop: "20px", fontSize: "12px", opacity: 0.6 }}>
        Built by Faith Tsemi • React • Software Developer
      </p>
    </div>
  );
}

        
       
