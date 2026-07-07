import { useState } from "react";
import { sendWinnerEmail } from "../utils/email";

export default function WinScreen({ retry }) {

    const [email, setEmail] = useState("");

    function send() {

        sendWinnerEmail(email)
            .then(() => alert("Email sent!"))
            .catch(() => alert("Could not send email."));
    }

    return (
        <div className="container">

            <h1>🏆 Du hast gewonnen!</h1>

            <p>Fülle deine email (@gmail) und sichere dir deinen Preis</p>

            <input
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br />

            <button onClick={send}>
                Send Email
            </button>
            <br/>
            <button className="retrybutton" onClick={retry}>
                Try Again
            </button>

        </div>
    );
}