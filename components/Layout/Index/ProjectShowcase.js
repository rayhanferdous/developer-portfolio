import React from "react";
import Rectangle from "../Rectangle";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

function ProjectShowcase() {
  return (
    <div className="relative">
      <div className="mb-12">
        <h2 className="text-projectsTitle font-bold text-[56px] mb-4">
          My Projects
        </h2>
        <p className="text-secondery text-lg">
          Here is my some project. I am trying to somthing is better then other
          websites and <br /> developers. Thats why I used modern technology in
          those websites.
        </p>
      </div>
      <div className="grid gap-8 xs-min:grid-cols-1 lg-min:grid-cols-2 ">
        {Array.from({ length: 4 }, (v, i) => (
          <ProjectShowcaseCard key={i} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="w-[138px] h-[49px] mt-[58px] rounded-[7px] border-2 border-solid border-btnPrimary text-btnPrimary font-medium text-lg">
          See More
        </button>
      </div>
      <Rectangle className={"top-[25%] -right-[55%]"} />
    </div>
  );
}

export default ProjectShowcase;
