import React from "react";

function NavMenuCard() {
  const NavLinks = [
    "{ Home }",
    ".About Me{}",
    ".Experience{}",
    ".My Projects{}",
  ];
  return (
    <div className="flex gap-12">
      <div className="flex items-center gap-30">
        {NavLinks.map((item) => (
          <div
            className={`${
              item == "{ Home }" ? "text-btnPrimary" : "text-secondery"
            } flex items-center  text-lg leading-5`}
          >
            {item}
          </div>
        ))}
      </div>
      <button className="bg-btnPrimary px-7 py-3 rounded-5px text-white  text-lg leading-5">
        {".Hire Me{}"}
      </button>
    </div>
  );
}

export default NavMenuCard;
