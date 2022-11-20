import * as React from 'react';
import '../styles/global.css';
import { motion } from 'framer-motion';

// import components
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout pageTitle="Boynton Beach, FL">
    <div className="w-full h-screen">
      <motion.div 
        className="max-w-screen-md mx-auto px-8 flex flex-col justify-center h-full"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        viewport={{ once: true }}
      >
          <h1 className="mb-8 text-2xl font-normal tracking-wider uppercase">Sometimes, a smaller scale ramen shop just works.</h1>
          <p className="mb-8">
            In Japan due to its limited space, it's not unusual to find small shops like ours serve the finest ramen. What sets Tokio Ramen apart is the attention to detail in the art of ramen creation, and the fact that ramen is the centerpiece of our offerings. It is customary to taste the broth before enjoying the rest of the bowl to know that you have exquisite quality before you. And be sure to slurp away; we won't judge. Slurping is customary in Japan and is known to actually enhance the flavor that much more.
          </p>
          <p>
            And about that "ramen" you've been raving about to your friends from that fusion place... yeah, you can forget about that after experiencing ours. We can post all we want about how glorious our ramen is, but you won't know until you come by and judge for yourself.
          </p>
      </motion.div>
    </div>
  </Layout>
);

export default IndexPage;
