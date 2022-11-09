import * as React from "react";
import { Link } from "gatsby";

const Info = () => (
  <>
    <div className="w-full h-screen">
      <div className="h-full flex flex-col justify-center items-center">

        <h1 className="font-normal text-2xl text-[#fe4039] text-center uppercase tracking-widest">Information</h1>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>

      </div>
    </div>
  </>
)

export default Info;