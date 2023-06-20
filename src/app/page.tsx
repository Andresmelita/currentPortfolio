import React from "react";
import compass from "../assets/images/compass.png";
import { useEffect, useState } from 'react';
import Image from "next/image";
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";

import 'animate.css';
import Loading from "@/components/Loading/Loading";

export default function Home() {
  return (
    <div>
      <div
        id="home"
        className="relative h-[100vh] flex justify-center items-center"
      >
        {/* <div className="absolute h-[100%] w-[100%] bg-[#00000049] polygon"></div> */}
        <div className="h-[100%] w-[100%] flex flex-row p-3 justify-center">
          <div className="my-presentation w-[50%] flex">
            <div className="flex justify-center flex-col text-[#fff] h-[100%] px-28 w-[100%]">
              <div className="name w-[100%] flex justify-start animate__animated animate__fadeInLeftBig">
                <p>
                  Andrés Salazar Melita
                </p>
              </div>
              <div className="presentation animate__animated animate__fadeInLeftBig pb-[24px] text-[28px] font-semibold">
                <p>
                  I am FullStack Developer
                </p>
              </div>
              <div className="social-icons animate__animated animate__fadeIn flex flex-wrap gap-4">
                <div className="linkedin text-[32px]">
                  <BsLinkedin></BsLinkedin>
                </div>
                <div className="github text-[32px]">
                  <BsGithub></BsGithub>
                </div>
                <div className="whatsapp text-[32px]">
                  <BsWhatsapp></BsWhatsapp>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%] relative bg-[#0000006c]">
            <div className=" absolute w-[660px] h-[660px] bottom-[180px] bg-[#000000b2] align-middle flex flex-wrap">
              <div className="bg-[#ffffff7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffbdbd7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffffff7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffbdbd7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffffff7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffbdbd7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffffff7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffbdbd7a] w-[220px] h-[220px]"></div>
              <div className="bg-[#ffffff7a] w-[220px] h-[220px]"></div>
            </div>
            <Image
            src={compass}
            alt=""
            width={660}
            className="compass absolute bottom-[180px] animate__fadeIn animate__animated"
          ></Image>
          </div>
        </div>
      </div>
    </div>
  );
};