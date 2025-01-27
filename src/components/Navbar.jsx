import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (

      <nav className="sticky top-0 flex justify-between items-center gap-5 text-white w-11/12 md:w-10/12 mx-auto mt-6">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold">LOGO</h1>
        </div>
        {/* Nav-list */}
        <ul className="flex gap-3">
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
        </ul>
        {/* Button */}
        <div>
            <Button variant="secondary">Contact Me</Button>
        </div>
      </nav>

  );
};

export default Navbar;
