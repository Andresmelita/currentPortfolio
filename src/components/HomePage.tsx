import React from "react";
import background from "../assets/images/09.jpg";
import Image from "next/image";
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";
import 'animate.css';

const HomePage = () => {
  return (
    <div>
      <div
        id="home"
        className="relative h-[100vh] flex justify-center items-center"
      >
        <Image
          src={background}
          alt=""
          objectFit="cover"
          layout="fill"
          className="absolute -z-20"
        ></Image>
        {/* <div className="absolute h-[100%] w-[100%] bg-[#00000049] polygon"></div> */}
        <div className="h-[100%] w-[100%] flex flex-row p-3 justify-center bg-[#00000036]">
          <div className="my-presentation w-[50%] flex">
            <div className="flex justify-center flex-col text-[#000000cc] h-[90%] px-28">
              <div className="name animate__animated animate__fadeInLeftBig">Andrés Salazar Melita</div>
              <div className="pb-[24px] text-[28px] font-semibold">I am Developer / FullStack</div>
              <div className="flex flex-wrap gap-4">
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
          <div className="w-[50%]"></div>
        </div>
      </div>
      {/* <div className="custom-shape-divider-bottom-1687101961">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div> */}
    </div>
  );
};

export default HomePage;
