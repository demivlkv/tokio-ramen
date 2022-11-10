import React from 'react';

const Footer = () => (
    <footer>
        <div className="relative w-full flex justify-center items-center p-8 bg-[#1b1b1b] border-t border-gray-300 text-white">

            <div className="text-base">
                <p>© {new Date().getFullYear()} &middot; T<span className="text-[#fe4039]">o</span>kio Ramen. All rights reserved.</p>
            </div>

        </div>
    </footer>
);

export default Footer;