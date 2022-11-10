import React from 'react';
import bgImg from '../../images/hero/main-bg.png';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <div className="relative flex align-center h-screen">
      <div className="container">
        <div
            className="hero bg-fixed bg-cover bg-center absolute top-0 left-0 w-full h-full"
            style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="h-screen flex flex-col justify-center items-center">
            <StaticImage src="../../images/hero/tokio-main.png" alt="Tokio Ramen Logo" className="z-[5] max-w-screen-md" />
            <div className="z-[5] pt-12 text-2xl md:text-3xl text-[#222] font-normal uppercase tracking-[.2em] drop-shadow">
              Ramen done right
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;