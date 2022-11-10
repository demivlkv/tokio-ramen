import * as React from 'react';
import { Link } from 'gatsby';

const Contact = () => (
  <>
    <div className="w-full h-screen">
      <div className="h-full flex flex-col justify-center items-center">

        <h2>Contact</h2>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>

      </div>
    </div>
  </>
);

export default Contact;