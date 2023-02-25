import React from "react";
import Rectangle from "../Rectangle";
import TechnologyCard from "./TechnologyCard";

function FeatureProject({ flipCard }) {
  return (
    <div
      data-aos={flipCard ? "fade-right" : "fade-left"}
      className={`${
        flipCard
          ? "flex-row-reverse justify-end items-center gap-20 relative"
          : "bg-cardBg items-center justify-between"
      } h-625 rounded-20px p-60px flex`}
    >
      <div className="flex flex-col gap-16 w-590">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="text-secondery text-2xl leading-6">
                Featured Project
              </p>
              <h2 className="font-bold text-56 text-btnPrimary">
                Title of Projects
              </h2>
            </div>
            <p className="text-base leading-7 text-secondery">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before final copy is available.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-poppins text-lg text-white">
              Technology use for this project:
            </p>
            <div className="flex items-center gap-6">
              <TechnologyCard title={"Next.Js"} />
              <TechnologyCard title={"Node.Js"} />
              <TechnologyCard title={"Redux"} />
            </div>
          </div>
        </div>
        <button className="bg-btnPrimary w-fit px-30 py-18 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
          <p>Get Resume</p>
        </button>
      </div>
      <div className="rounded-20px h-530px w-514px bg-cardBgSecondery"></div>
      <Rectangle className={"-top-[10%] -left-[70%]"} />
    </div>
  );
}

export default FeatureProject;
