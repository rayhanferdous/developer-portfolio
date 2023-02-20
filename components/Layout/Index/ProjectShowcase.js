import React from "react";
import ProjectShowcaseCard from "./ProjectShowcaseCard";

function ProjectShowcase() {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-projectsTitle font-bold text-[56px] mb-4">
          My Projects
        </h2>
        <p className="text-secondery text-lg">
          Here is my some project. I am trying to somthing is better then other
          websites and <br /> developers. Thats why I used modern technology in those
          websites.
        </p>
      </div>
      <div className="grid grid-cols-2 h-full gap-8">
        {Array.from({ length: 4 }, (v, i) => (
          <ProjectShowcaseCard key={i} />
        ))}
      </div>
    </div>
  );
}

export default ProjectShowcase;
