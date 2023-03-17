import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';

// import icons
import { MapPin, Phone, Clock, Instagram, Facebook } from 'react-feather';

const Info = () => (
  <section id="info">
    <div className="w-full md:h-screen">
      <StaticImage src="../../images/info/top-border.png" alt="" className="w-full" />
      <div className="bg-[#222] py-4 md:py-0">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          Information
        </motion.h2>
        <motion.div
          className="text-white text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="italic">
            Closed MONDAYS, select holidays and during planned closures.<br />
            Free covered garage parking available.
          </p>
        </motion.div>

        <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-4 mx-auto px-4 text-white">

          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <StaticImage src="../../images/info/tokio-map.png" alt="Tokio Ramen Location" className="mr-4 drop-shadow-md" />
          </motion.div>
          {/* CONTACT INFO */}
          <motion.div
            className="w-full grid grid-cols-2 gap-2"
            initial={{opacity: 0, x: 75}}
            whileInView={{opacity: 1, x: 0}}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex self-start items-center">
              <MapPin style={{ color: '#fe4039' }} size={20} className="mr-3" />
              <p className="font-medium uppercase">Location :</p>
            </div>
            <div className="inline-flex">
              <p>
                One Boynton Plaza<br />
                307 E Woolbright Rd<br />
                Boynton Beach, FL 33435
              </p>
            </div>
            <div className="inline-flex self-start items-center">
              <Phone style={{ color: '#fe4039' }} size={20} className="mr-3" />
              <p className="font-medium uppercase">Phone :</p>
            </div>
            <div className="inline-flex">
              <p>(561) 509-8131</p>
            </div>
            {/* HOURS OF OPERATION */}
            <div className="inline-flex self-start items-center">
              <Clock style={{ color: '#fe4039' }} size={20} className="mr-3" />
              <p className="font-medium uppercase">Hours of Operation :</p>
            </div>
            <div></div>
            <div className="inline-flex justify-end items-center pr-4">
              <p className="font-medium uppercase">Sun</p>
            </div>
            <div className="flex">
              <p>12 pm to 7 pm</p>
            </div>
            <div className="inline-flex justify-end items-center pr-4">
              <p className="font-medium uppercase">Mon</p>
            </div>
            <div className="flex">
              <p>CLOSED</p>
            </div>
            <div className="inline-flex justify-end items-center pr-4">
              <p className="font-medium uppercase">Tues & Thurs</p>
            </div>
            <div className="flex">
              <p>12 pm to 10 pm</p>
            </div>
            <div className="inline-flex justify-end items-center pr-4">
              <p className="font-medium uppercase">Wed</p>
            </div>
            <div className="flex">
              <p>12 pm to 10 pm</p>
            </div>
            <div className="inline-flex justify-end items-center pr-4">
              <p className="font-medium uppercase">Fri</p>
            </div>
            <div className="flex">
              <p>12 pm to 10 pm</p>
            </div>
            <div className="inline-flex justify-end items-center pr-4">
              <p className="font-medium uppercase">Sat</p>
            </div>
            <div className="flex">
              <p>12 pm to 10 pm</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="w-full mx-auto mt-10 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="https://www.instagram.com/tokioramen/" target="_blank">
            <button className="mx-4 w-[55px] h-[55px] inline-flex justify-center items-center rounded-full bg-[#fe4039] hover:bg-white text-white hover:text-[#fe4039]">
              <Instagram size={25} />
            </button>
          </Link>
          <Link to="https://www.facebook.com/tokioramenbb" target="_blank">
            <button className="mx-4 w-[55px] h-[55px] inline-flex justify-center items-center rounded-full bg-[#fe4039] hover:bg-white text-white hover:text-[#fe4039]">
              <Facebook size={25} />
            </button>
          </Link>
        </motion.div>

      </div>
      <StaticImage src="../../images/info/btm-border.png" alt="" className="w-full" />
    </div>
  </section>
);
export default Info;