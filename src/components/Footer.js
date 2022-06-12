import React from 'react';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-white flex flex-col items-center justify-center">

            <div className='flex flex-col items-center'><p className="text-4xl">Abdur Rahman</p><a href="https://mail.google.com/" className="">abdur17@student.sust.edu</a>
                <span className="">(+880) 1521321696</span>
                <a href="https://www.google.com/maps/place/Sylhet/" className="">Sylhet, Bangladesh</a></div>
            <div className="flex gap-5">
                <a href="https://www.facebook.com/nafeesbinz/" className=""><i class='text-3xl bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/nafees_zafer" className=""><i class='bx bxl-instagram text-3xl' ></i></a>
                <a href="https://www.snapchat.com/add/aminafees?share_id=LZbj173-NaI&locale=en-GB" className=""><i class='text-3xl bx bxl-snapchat' ></i></a>
            </div>
            <div className="bg-white w-screen h-1 p-0 m-0"></div>
            <p> &#169; 2022 copyright all right reserved</p>
        </footer>
    );
};

export default Footer;