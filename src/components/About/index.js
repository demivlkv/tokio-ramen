import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <section id="about">
    <div className="w-full md:h-screen">
      <StaticImage src="../../images/about/top-border.png" alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">

        <h2>Our History</h2>
        <div className="max-w-screen-lg w-full grid px-4 sm:grid-cols-2 gap-8 mx-auto text-white">
          <div className="flex justify-center items-center">
            <StaticImage src="../../images/about/our-history.png" alt="Tokio Ramen Owners" className="rounded drop-shadow-lg" />
          </div>
          <div>
            <p className="pb-2">
              After immigrating to the United States from Japan in the 1990s, Chef Hiro owned and operated multiple restaurants over a 20-year period. Tokio Ramen was a dream project that came to fruition in which Chef Hiro wanted to offer a Japanese culinary staple known as ramen that is gaining attention with the word quickly spreading. Ramen is, put simply, Japanese style noodles bathed in broth with complementing toppings.
            </p>
            <p className="py-2">
              The menu is intentionally scaled down so that focus is directed at delivering the freshest, best quality ramen. This is the place you can come to and experience an impressionable taste of Japan without a plane ticket. Come join us for a delicious bowl of ramen with a side of steaming gyoza and a refreshing cold Japanese beverage. This is the real no-frills deal with no fusion element to it, because we prefer authenticity like you do.
            </p>
          </div>
        </div>

        <div className="max-w-screen-md w-full mx-auto text-white px-4">
          <p className="py-4">
            We are firm believers in acknowledging and giving credit where it's due. With that, we'd like to let our utmost gratitude be known to those who've helped us along the way:
          </p>
          <p className="text-center">
            City of Boynton Beach (with distinguished praise for the CRA!)
          </p>
          <p className="text-center">
            Catoe & Son Plumbing | Flameguard Fire Equipment | LifeSafety Management
          </p>
          <p className="text-center">
            Chip Brown of AMJ  |  Challenger Operations Inc
          </p>
        </div>

      </div>
      <StaticImage src="../../images/about/btm-border.png" alt="" className="w-full" />
    </div>
  </section>
)

export default About;