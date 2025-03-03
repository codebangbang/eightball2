import React, { useState } from "react";
import "./EightBall.css";
import defaultAnswers from "./answers.json";
import { choice } from "./random";

function EightBall({ answers = defaultAnswers }) {
    const [answer, setAnswer] = useState({
        msg: "Think of a Question",
        color: "black",
    });

    function handleClick() {
        setTimeout(() => {
            const newAnswer = choice(answers);
            setAnswer(newAnswer);
        }, 1500); // 1000 milliseconds = 1 second
    }
    
    return (
        <div
            className="EightBall"
            onClick={handleClick}
            style={{ backgroundColor: answer.color }}
        >
            <b>{answer.msg}</b>
        </div>
    );
}

export default EightBall;
