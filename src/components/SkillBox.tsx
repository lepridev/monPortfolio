import Image from "next/image";
import React from "react";

type Props = { image: string; title: string; desc: string; btn: string };

const SkillBox = ({ image, title, desc, btn }: Props) => {
  return (
    <div className="px-3 md:py-6 ">
      <div className="flex flex-col h-[600px] rounded-2xl md:w-[450px] w-full bg-[#ffffff] shadow-xl">
        <div className="flex relative h-3/5 justify-center items-center rounded-2xl">
          <Image
            src={`/${image}`}
            alt="Card Preview"
            className="rounded-t-2xl"
            fill
          />
        </div>
        <div className="flex flex-col justify-between p-4 h-2/5">
          <div className="text-xl font-bold   text-[#374151] pb-3">{title}</div>
          <div className=" text-sm   text-[#374151]">{desc}</div>
          <div className="flex justify-end items-center ">
            <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-base  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillBox;
