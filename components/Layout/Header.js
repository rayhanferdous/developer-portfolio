import React from "react";
import LogoSvg from "../Svg/LogoSVG";
import NavMenuCard from "./NavMenuCard";

function Header() {
  return (
    <header className="flex items-center justify-between mt-10 z-10">
      <LogoSvg className={"w-16"} />
      <NavMenuCard />
    </header>
  );
}

export default Header;
