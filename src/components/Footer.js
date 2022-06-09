import React from 'react';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-neutral text-white flex flex-col items-center justify-center">
            <p class="text-4xl">Abdur Rahman</p>
            <div class="flex gap-5">
                <a href="https://www.facebook.com/nafeesbinz/" class=""><i class='text-3xl bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/nafees_zafer" class=""><i class='bx bxl-instagram text-3xl' ></i></a>
                <a href="https://www.snapchat.com/add/aminafees?share_id=LZbj173-NaI&locale=en-GB" class=""><i class='text-3xl bx bxl-snapchat' ></i></a>
            </div>
            <p> &#169; 2022 copyright all right reserved</p>
        </footer>
    );
};

export default Footer;