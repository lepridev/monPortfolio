import Image from "next/image";
import React from "react";

type Props = {
  image: string;
  title: string;
  desc: string;
  btn: string;
};

const ProjetBox = ({ image, title, desc, btn }: Props) => {
  return (
    <div>
      <div className="flex flex-col rounded-2xl md:w-96 w-full h-[530px] bg-[#ffffff] shadow-xl">
        <div className="relative w-full h-3/5">
          <Image
            src={`/${image}`}
            alt="Card Preview"
            fill
            className="rounded-t-2xl object-contain"
          />
        </div>
        <div className="h-2/5 w-full flex flex-col px-3">
          <div className="text-lg font-bold   text-[#374151] pb-4">{title}</div>
          <div className=" text-sm   text-[#374151]">{desc}</div>
          <div className="flex justify-end pt-6">
            <button className="bg-[#7e22ce] text-[#ffffff]  font-bold text-sm  p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
              {btn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetBox;
