import React from "react";

function ProjectShowcaseCard() {
  return (
    <div className="h-[70vh]">
      <div className="relative">
        <div className="absolute w-582 h-352 z-[10] rounded-20px project-gradient">
          {/* <img className="z-0 absolute" src="/assets/projects/page-1.png" /> */}
        </div>
        <div className="absolute top-40 z-[0] w-705 h-469 rounded-20px bg-[#112240]">
          <div className="absolute right-7 top-0 opacity-10 z-10 text-white font-bold text-[158px] leading-snug">
            1
          </div>
          <div className="mt-56 px-8">
            <h3 className="font-semibold text-lg text-projectsTitle">
              Cleaners World (Cleaning Service Provider)
            </h3>
            <p className="leading-7 text-secondery mt-2 mb-9">
              Built the client-side for general & admin users using ReactJS,
              React Hook Form, React Router, Bootstrap & Material UI and
              deployed on Firebase. Used NodeJS and ExpressJS to create
              personalized API on the server-side.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex gap-5">
                {Array.from({ length: 4 }, (v, i) => (
                  <img key={i} src={`/assets/hero/stack/image ${i + 3}.png`} />
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button className="w-[121px] h-[46px] rounded-5px font-medium text-white bg-btnSecondery">
                  Get Code
                </button>
                <button className="w-[121px] h-[46px] rounded-5px font-medium text-white bg-btnPrimary">
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectShowcaseCard;
