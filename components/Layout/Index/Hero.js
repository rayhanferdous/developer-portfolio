import DocumentSvg from "@/components/Svg/DocumentSvg";
import React from "react";
import Rectangle from "../Rectangle";

function Hero() {
  return (
    <div className="flex items-center justify-between relative">
      <div className="flex flex-col gap-16 mt-40">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="font-bold text-4xl text-white">
                <span className="font-medium text-4xl">Hello!</span> ✋ I am
                Umar
              </h3>
              <h2 className="font-bold text-56 text-btnPrimary">
                Full Stack Developer |
              </h2>
            </div>
            <p className="text-lg text-secondery">
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
        <div className="stack-lin ear-gradient z-10">
          <div className="w-546 grid grid-cols-5 gap-16">
            {Array.from({ length: 24 }, (v, i) => (
              <img src={`/assets/hero/stack/image ${i + 3}.png`} />
            ))}
          </div>
        </div>
      </div>
      <img className="-mt-40" src="/assets/hero/model.png" alt="" />
      <Rectangle className={"-bottom-[15%] -right-[15%]"} />
    </div>
  );
}

export default Hero;
