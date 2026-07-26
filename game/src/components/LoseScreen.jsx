export default function LoseScreen({ mode, retry }) {
  return (
    <div className="container">
      <h1>❌ You Lost</h1>
      {mode === "puzzle" && <p>Wrong code.</p>}
      {mode === "tictactoe" && <p>The computer got lucky.</p>}

      <button onClick={retry}>Try Again</button>
    </div>
  );
}
