import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

const Hero = () => {
  return (
    <div className="relative flex align-center h-screen">
        <div className="container">
            <div className="row">
                <p className="z-[9] w-full absolute left-0 top-[50%] translate-y-2/4 text-6xl font-bold text-center uppercase tracking-[.3em] drop-shadow-lg">Ramen done right.</p>
                <div className="hero">
                    <StaticImage src="../images/hero.png" alt="Welcome to Tokio Ramen" className="fixed object-cover h-full w-full z-0" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;