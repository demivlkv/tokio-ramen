import * as React from 'react';
import { Link } from 'gatsby';

// import react icons
import { FiMapPin } from '@react-icons/all-files/fi/FiMapPin';
import { FiPhone } from '@react-icons/all-files/fi/FiPhone';
import { FiInstagram } from '@react-icons/all-files/fi/FiInstagram';
import { FiFacebook } from '@react-icons/all-files/fi/FiFacebook';

const Info = () => (
  <>
    <div className="w-full h-screen">
      <div className="bg-[#222] py-20">
        <h1 className="font-normal text-2xl text-[#fe4039] text-center uppercase tracking-widest">
          Information
        </h1>

        <div className="max-w-screen-lg w-full grid sm:grid-cols-2 gap-8 mx-auto mt-8 px-4 text-white">

          <div className="flex justify-center items-center">
            {/* <StaticImage src="../images/our-history.png" alt="Tokio Ramen Owners" className="drop-shadow-md" /> */}
          </div>

          {/* CONTACT INFO */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">

            <div className="inline-flex self-start items-center">
              <FiMapPin style={{ color: '#fe4039' }} size={20} className="mr-3" />
              <p className="font-medium uppercase">Location :</p>
            </div>
            <div className="inline-flex">
              <p className="">One Boynton Plaza<br />
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
    </div>
  </>
);

export default Info;