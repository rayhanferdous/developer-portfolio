import { BoxIconSvg } from "@/components/Svg/BoxIconSvg";
import { GithubSvg } from "@/components/Svg/GithubSvg";
import InstagramSvg from "@/components/Svg/InstagramSvg";
import { LinkedInSvg } from "@/components/Svg/LinkedInSvg";
import TwitterSvg from "@/components/Svg/TwitterSvg";
import React from "react";
import Rectangle from "../Rectangle";

function Footer() {
  return (
    <footer className="relative">
      <div className="flex justify-between lg-min:items-center gap-10 mb-[129px] xs-min:flex-col lg-min:flex-row ">
        <div className="flex flex-col">
          <h2 className="font-bold text-56 text-projectsTitle mb-4">
            Let’s Talk About Projects
          </h2>
          <p className="text-lg text-secondery">
            Here is my some project. I am trying to somthing is better then
            other websites and <br /> developers. Thats why I used modern
            technology in those websites.
          </p>
        </div>
        <button className="bg-btnPrimary w-fit px-30 py-18 rounded-lg text-white text-lg leading-5 flex items-center gap-4">
          <p>Get In Touch</p>
        </button>
      </div>
      <div className="flex lg-min:items-center justify-between mb-20 gap-10 xs-min:flex-col lg-min:flex-row ">
        <div className="flex flex-col gap-1.5">
          <p className="text-secondery text-lg">Phone</p>
          <p className="font-medium text-2xl text-white">+123 456 789</p>
        </div>
        <div className="flex flex-col gap-1.5">
          <p className="text-secondery text-lg">Email</p>
          <p className="font-medium text-2xl text-white">example@gmail.com</p>
        </div>
        <div className="flex gap-6 items-center">
          <p className="text-secondery text-lg">Follow Me:</p>
          <div className="flex gap-9 items-center bg-cardBg px-9 py-4 rounded-5px">
            <InstagramSvg />
            <TwitterSvg />
            <LinkedInSvg />
            <BoxIconSvg />
            <GithubSvg />
          </div>
        </div>
      </div>
      <Rectangle className={"-top-[70%] -left-[45%]"} />
    </footer>
  );
}

export default Footer;
