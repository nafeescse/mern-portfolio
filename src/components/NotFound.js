import React from 'react';
import { Typewriter } from 'react-typewriting-effect';

const NotFound = () => {
    return (
        <div>
        <p className='text-5xl text-center text-primary font-bold my-32'>
            <Typewriter
                options={{
                    strings: ["404 ... Not Found", "Try Again"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 30,
                }}
            /></p>

    </div>
    );
};

export default NotFound;