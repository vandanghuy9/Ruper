"use client";
import NavBarDesktop from "./NavBarDesktop";
import NavBarMobile from "./NavBarMobile";

const Navbar = () => {
  return (
    <>
      <NavBarMobile />
      <NavBarDesktop />
    </>
  );
};

export default Navbar;
