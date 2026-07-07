export default function StartScreen({ onStart }) {
    return (
        <div className="container">
            <h1>🎮 Tic Tac Toe Challenge</h1>

            <button onClick={onStart}>
                Start
            </button>
        </div>
    );
}