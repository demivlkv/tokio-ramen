import React from 'react';
import heroImg from '../images/hero.png'

const Hero = () => {
  return (
    <div className="relative flex align-center h-screen">
        <div className="container">
            <div className="row">
                <div
                    className="hero bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-full saturate-[120%]"
                    style={{ backgroundImage: `url(${heroImg})` }}
                >
                    <p className="z-[9] w-full absolute left-0 top-[50%] translate-y-[-50%] pl-10 text-7xl text-gray-300 mix-blend-color-dodge font-medium uppercase tracking-[.2em] drop-shadow-lg">Ramen done right.</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;