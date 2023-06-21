import React from "react";
import compass from "../assets/images/compass.png";
import react from '../assets/images/icons/react.svg';
import javascript from '../assets/images/icons/js.svg';
import typescript from '../assets/images/icons/ts.svg';
import background from '../assets/images/mountain.jpg';
import git from '../assets/images/icons/git.svg';
import python from '../assets/images/icons/python.svg';
import node from '../assets/images/icons/node.svg';
import angular from '../assets/images/icons/angular.svg';
import html from '../assets/images/icons/html.svg';
import css from '../assets/images/icons/css.svg';
import Image from "next/legacy/image";
import 'animate.css';
import { BsLinkedin, BsWhatsapp, BsGithub } from "react-icons/bs";

export default function Home() {
  return (
    <div className="relative w-[100vw] h-[100vh]">
      <Image
        src={background}
        alt=""
        objectFit="cover"
        layout="fill"
        className="absolute -z-20 brightness-[0.75]"
      >
      </Image>
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
          <div className="w-[50%] relative">
            <div className="w-[660px] h-[660px] absolute bottom-[110px] align-middle flex flex-wrap">
              <div className="w-[220px] h-[220px] flex justify-start items-start animate-pulse">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={react} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-start items-end animate-pulse">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={javascript} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-start items-center animate-pulse">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={typescript} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-center items-center animate-pulse">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={git} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-end items-end animate-pulse">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={python} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-end items-start animate-pulse">
              <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={angular} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-start items-end animate-pulse">
              <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={html} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-start items-center animate-pulse">
              <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={css} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="w-[220px] h-[220px] flex justify-center items-center animate-pulse">
              <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] rounded-[10px]">
                  <Image src={node} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[110px]">
              <Image
                src={compass}
                priority
                alt=""
                width={660}
                className="compass animate__fadeIn animate__animated"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};