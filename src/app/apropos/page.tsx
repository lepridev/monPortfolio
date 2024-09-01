import Image from "next/image";
import React from "react";

type Props = {};

const AproposPage = (props: Props) => {
  return (
    <div>
      <div className="flex mx-auto justify-center items-center bg-black md:p-10 p-5">
        <>
          <div className="flex flex-col items-center rounded-2xl w-full py-7 bg-[#ffffff] text-[#374151] shadow-xl">
            <div className="relative w-[240px] h-[240px] rounded-full">
              <Image
                src={"/armandlepri.jpeg"}
                alt="Card Preview"
                className="rounded-full object-contain"
                fill
              />
            </div>
            <div className="flex flex-col p-8 h-full">
              <div className="text-2xl  font-bold pb-6">LEPRI Armand AKPRO</div>
              <div className=" flex flex-col items-center justify-center gap-3  text-lg pb-12 text-center font-semibold">
                <p>
                  Développeur d&apos;applications web et mobiles, passionné par
                  les technologies de l&apos;information et autodidacte.
                </p>
                <p className="text-center text-sm font-normal">
                  J&apos;ai commencé ma formation en informatique industrielle
                  et maintenance (2IM) à l&apos;école EUROF-Zone4C en première
                  année. Au fil du temps, j&apos;ai découvert le métier de
                  développeur web, un domaine qui a rapidement capté mon
                  intérêt. Grâce aux bases acquises lors de ma formation en 2IM,
                  je me suis plongé dans l&apos;apprentissage et le
                  perfectionnement de la programmation. Aujourd&apos;hui, je
                  suis capable de réaliser un projet full-stack de manière
                  autonome ou en équipe, jusqu&apos;au déploiement de
                  l&apos;application.
                </p>
              </div>
              <div className="flex flex-col gap-2  text-base">
                <div className="flex flex-row gap-3">
                  <div className="text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm">Organiser</div>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm">
                    Capable de travailler en solo ou en équipe
                  </div>
                </div>
                <div className="flex flex-row gap-3">
                  <div className="text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <div className="text-sm">Gérer la maintenance</div>
                </div>
              </div>
              <div className="flex flex-grow"></div>
              <div className="flex pt-10">
                <button className=" text-sm bg-[#7e22ce] text-[#ffffff] font-bold p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">
                  Me Contacter
                </button>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default AproposPage;
