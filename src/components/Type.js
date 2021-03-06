import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <div className="text-2xl text-primary font-bold flex gap-2">
            <Typewriter
                options={{
                    strings: ["Front End Developer", "Full Stack Developer", "React Developer", "Quick Learner"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                }}
            />
        </div>
    );
}

export default Type;
