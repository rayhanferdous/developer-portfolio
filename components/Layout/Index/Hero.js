import DocumentSvg from "@/components/Svg/DocumentSvg";
import React from "react";
import Rectangle from "../Rectangle";
import Typed from "react-typed";

function Hero() {

  return (
    <div className="flex items-center xs-min:flex-col-reverse xl-min:flex-row xl-min:justify-between  relative">
      <div
        data-aos={"fade-right"}
        className="flex flex-col gap-16 mt-40 xs-min:justify-center xs-min:items-center xl-min:justify-start xl-min:items-start"
      >
        <div className="flex flex-col gap-10 xs-min:justify-center xs-min:items-center xl-min:justify-start xl-min:items-start">
          <div className="flex flex-col gap-10 xs-min:justify-center xs-min:items-center xl-min:justify-start xl-min:items-start">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-4xl text-white">
                <span className="font-medium text-4xl">Hello!</span> ✋ I am
                Umar
              </h3>
              <h2 className="font-bold text-56 text-btnPrimary">
                <Typed
                  loop
                  strings={[
                    "Full Stack Developer",
                    "React.Js Developer",
                    "Next.Js Developer",
                  ]}
                  typeSpeed={40}
                />
              </h2>
            </div>
            <p className="text-lg text-secondery xs-min:w-1/2 xl-min:w-full">
              I work as a full stack (mostly backend) engineer, work on
              end-to-end of features and help other engineers to get things done
              FAST. Need consultation ?
            </p>
          </div>
          <button className="bg-btnPrimary w-fit px-30 py-18 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
            <p>Get Resume</p>
            <DocumentSvg />
          </button>
        </div>
        <div className="stack-linear-gradient z-10">
          <div className="w-546 grid grid-cols-6 gap-16">
            {Array.from({ length: 24 }, (v, i) => (
              <img src={`/assets/hero/stack/image ${i + 3}.png`} />
            ))}
          </div>
        </div>
      </div>
      <img
        data-aos={"fade-left"}
        className="w-[636px]"
        src="/assets/hero/model.png"
        alt=""
      />
      <Rectangle className={"-bottom-[15%] -right-[15%]"} />
    </div>
  );
}

export default Hero;
