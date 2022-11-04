import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const Home = () => {
  return (
    <div className="w-full my-16">
        <div className="container max-w-screen-lg mx-auto px-16 flex flex-col justify-center h-full">
            <div className="about-us">
                <h3 className="mb-8 text-3xl font-semibold">Sometimes, a smaller scale ramen shop just works.</h3>
                <p className="mb-8">
                    In Japan due to its limited space, it's not unusual to find small shops like ours serve the finest ramen. What sets Tokio Ramen apart is the attention to detail in the art of ramen creation, and the fact that ramen is the centerpiece of our offerings. It is customary to taste the broth before enjoying the rest of the bowl to know that you have exquisite quality before you. And be sure to slurp away; we won't judge. Slurping is customary in Japan and is known to actually enhance the flavor that much more.
                </p>
                <p>
                    And about that "ramen" you've been raving about to your friends from that fusion place... yeah, you can forget about that after experiencing ours. We can post all we want about how glorious our ramen is, but you won't know until you come by and judge for yourself.
                </p>
            </div>

        </div>
    </div>
  );
};

export default Home;