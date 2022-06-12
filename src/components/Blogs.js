import React from 'react';
import Typewriter from "typewriter-effect";

const Blogs = () => {
    return (
        <div>
            <p className='text-5xl text-center text-primary font-bold my-32'>
                <Typewriter
                    options={{
                        strings: ["Coming Soon ...", "Surprise ...", "Stay tuned ...", "Thank You !!!"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 30,
                    }}
                /></p>

        </div>
    );
};

export default Blogs;