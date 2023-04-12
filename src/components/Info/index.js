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
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          Information
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.75 }}
          viewport={{ once: true }}
        >
          <p className="mb-8 text-white text-center italic">
            Closed MONDAYS, select holidays and during planned closures.<br />
            Free covered garage parking available.
          </p>

          <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-4 mx-auto px-4 text-white">
            <div className="flex justify-center items-center">
              <StaticImage src="../../images/info/tokio-map.png" alt="Tokio Ramen Location" className="mr-4 drop-shadow-md" />
            </div>
            {/* CONTACT INFO */}
            <div className="w-full grid grid-cols-2 gap-2">
              <div className="flex self-start items-center">
                <MapPin style={{ color: '#fe4039' }} size={20} className="mr-3" />
                <p className="font-medium uppercase">Location :</p>
              </div>
              <div>
                <p>
                  One Boynton Plaza<br />
                  307 E Woolbright Rd<br />
                  Boynton Beach, FL 33435
                </p>
              </div>
              <div className="flex self-start items-center">
                <Phone style={{ color: '#fe4039' }} size={20} className="mr-3" />
                <p className="font-medium uppercase">Phone :</p>
              </div>
              <div>
                <p>(561) 509-8131</p>
              </div>
              {/* HOURS OF OPERATION */}
              <div className="flex self-start items-center">
                <Clock style={{ color: '#fe4039' }} size={20} className="mr-3" />
                <p className="font-medium uppercase">Hours of Operation :</p>
              </div>
              <div></div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Sun</p>
              </div>
              <div className="flex items-center">
                <p>12 pm to 7 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Mon</p>
              </div>
              <div className="flex items-center">
                <p>CLOSED</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Tues & Thurs</p>
              </div>
              <div className="flex items-center">
                <p>12 pm to 10 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Wed</p>
              </div>
              <div className="flex items-center">
                <p>12 pm to 10 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Fri</p>
              </div>
              <div className="flex items-center">
                <p>12 pm to 10 pm</p>
              </div>
              <div className="flex justify-end items-center pr-4">
                <p className="font-medium uppercase">Sat</p>
              </div>
              <div className="flex items-center">
                <p>12 pm to 10 pm</p>
              </div>
            </div>
          </div>
        
          <div className="w-full mx-auto mt-10 flex justify-center items-center">
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
          </div>
        </motion.div>

      </div>
      <StaticImage src="../../images/info/btm-border.png" alt="" className="w-full" />
    </div>
  </section>
);
export default Info;