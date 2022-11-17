import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

// import react icons
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin';
import { FiPhone } from '@react-icons/all-files/fi/FiPhone';
import { FiClock } from '@react-icons/all-files/fi/FiClock';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook';

const Info = () => (
  <section id="info">
    <div className="w-full md:h-screen">
      <StaticImage src="../../images/info/top-border-2.png" alt="" className="w-full bg-[#222]" />
      <div className="bg-[#222] py-4 md:py-0">

        <h2>Information</h2>
        <div className="text-white text-center mb-8">
          <p className="italic">
            Closed MONDAYS, select holidays and during planned closures.<br />
            Free covered garage parking available.
          </p>
        </div>

        <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-4 mx-auto px-4 text-white">

          <div className="flex justify-center items-center">
            <StaticImage src="../../images/info/tokio-map.png" alt="Tokio Ramen Location" className="mr-4 drop-shadow-md" />
          </div>
          {/* CONTACT INFO */}
          <div className="w-full grid grid-cols-2 gap-2">
            <div className="inline-flex self-start items-center">
              <FiMapPin style={{ color: '#fe4039' }} size={20} className="mr-3" />
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
              <FiPhone style={{ color: '#fe4039' }} size={20} className="mr-3" />
              <p className="font-medium uppercase">Phone :</p>
            </div>
            <div className="inline-flex">
              <p>(561) 509-8131</p>
            </div>
            {/* HOURS OF OPERATION */}
            <div className="inline-flex self-start items-center">
              <FiClock style={{ color: '#fe4039' }} size={20} className="mr-3" />
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
          </div>
        </div>
        
        <div className="w-full mx-auto mt-10 flex justify-center items-center">
          <Link to="https://www.instagram.com/tokioramen/">
            <button className="mx-4 w-[55px] h-[55px] inline-flex justify-center items-center rounded-full bg-[#fe4039] hover:bg-white text-white hover:text-[#fe4039]">
              <FiInstagram size={25} />
            </button>
          </Link>
          <Link to="https://www.facebook.com/tokioramenbb">
            <button className="mx-4 w-[55px] h-[55px] inline-flex justify-center items-center rounded-full bg-[#fe4039] hover:bg-white text-white hover:text-[#fe4039]">
              <FiFacebook size={25} />
            </button>
          </Link>
        </div>

      </div>
      <StaticImage src="../../images/info/btm-border-2.png" alt="" className="w-full bg-[#222]" />
    </div>
  </section>
);
export default Info;