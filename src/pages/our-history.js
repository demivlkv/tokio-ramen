import * as React from 'react';
import Layout from '../components/layout';

const History = () => (
  <Layout pageTitle="Our History">
    <div className="w-full my-16">
      <div className="max-w-screen-md mx-auto px-8 flex flex-col justify-center h-full">
        <h2 className="pb-4 font-medium text-2xl text-[#fe4039] uppercase tracking-wide">About Us</h2>
        <p className="py-4">
          After immigrating to the United States from Japan in the 1990s, Chef Hiro owned and operated multiple restaurants over a 20-year period. Tokio Ramen was a dream project that came to fruition in which Chef Hiro wanted to offer a Japanese culinary staple known as ramen that is gaining attention with the word quickly spreading. Ramen is, put simply, Japanese style noodles bathed in broth with complementing toppings.
        </p>
        <p className="py-4">
          The menu is intentionally scaled down so that focus is directed at delivering the freshest, best quality ramen. This is the place you can come to and experience an impressionable taste of Japan without a plane ticket. Come join us for a delicious bowl of ramen with a side of steaming gyoza and a refreshing cold Japanese beverage. This is the real no-frills deal with no fusion element to it, because we prefer authenticity like you do.
        </p>
        <p className="py-4">
          We are firm believers in acknowledging and giving credit where it's due. With that, we'd like to let our utmost gratitude be known to those who've helped us along the way:
        </p>
        <p className="pt-4 text-center">
          City of Boynton Beach (with distinguished praise for the CRA!)  |  Catoe & Son Plumbing  |  Flameguard Fire Equipment | LifeSafety Management  |  Chip Brown of AMJ  |  Challenger Operations Inc
        </p>
      </div>
    </div>
  </Layout>
)

export default History;