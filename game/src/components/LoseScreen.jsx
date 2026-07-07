export default function LoseScreen({ retry }) {

    return (
        <div className="container">

            <h1>❌ You Lost</h1>

            <p>The computer got lucky.</p>

            <button onClick={retry}>
                Try Again
            </button>

        </div>
    );

}