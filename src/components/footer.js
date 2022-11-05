import React from 'react';

const Footer = () => (
    <footer>
        <div className="relative w-full flex justify-center items-center p-8 bg-gradient-to-t from-[#fe4039] via-[#fe3f3967]">
            <div className="max-w-screen-md w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="address text-sm leading-snug">
                    <p className="pb-4">One Boynton Plaza<br />
                    307 E Woolbright Rd<br />
                    Boynton Beach, FL 33435</p>

                    <p>(561) 509-8131</p>
                </div>
                <div className="text-base">
                    <p>© 2022 T<span className="text-[#fe4039]">o</span>kio Ramen. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;