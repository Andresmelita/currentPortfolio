'use client'
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
import Link from "next/link";
import { useState } from 'react'
import sharingService from "../services/sharing.service";

export default function Home() {

  const [clickOne, setClickOne] = useState(false)
  const [loading, setLoading] = useState(true)
  const handleClickOne = () => setClickOne(!clickOne)
  const hoverClickOne = () => {
    setClickOne(false)
  }

  const downloadCV = () => {
    sharingService.downloadFile('https://drive.google.com/file/d/1f4EyTvBm4tIzQJofoJdsYwGnrOvn_GPM/view?usp=sharing', 'salazar-melita')
  }

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
            <div className="flex justify-center flex-col text-[#ffffff] h-[100%] px-28 w-[100%]">
              <div className="name-style w-[100%] flex justify-start animate__animated animate__fadeInLeftBig">
                <div className="flex">
                  <p className="glitch" data-text="Andrés">Andrés</p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p className="glitch" data-text="Salazar">Salazar</p>&nbsp;&nbsp;&nbsp;&nbsp;
                  <p className="glitch" data-text="Melita">Melita</p>
                </div>
              </div>
              <div className="presentation animate__animated animate__fadeInLeftBig pb-[24px] text-[28px] font-medium">
                <p>
                  I am FullStack Developer
                </p>
              </div>
              <div className="social-icons animate__animated animate__fadeIn animate__slower flex flex-wrap gap-8">
                <div className="linkedin text-[32px] hover:text-[#2365a7] hover:scale-125 ease-in-out duration-300">
                  <Link href={'https://www.linkedin.com/in/andresmelita/'} target="_blank">
                    <BsLinkedin />
                  </Link>
                </div>
                <div className="github text-[32px] hover:text-[#6d41a4] hover:scale-125 ease-in-out duration-300">
                  <Link href={'https://github.com/Andresmelita'} target="_blank">
                    <BsGithub />
                  </Link>
                </div>
                <div className="whatsapp text-[32px] hover:text-[#409237] hover:scale-125 ease-in-out duration-300">
                  <Link href={'https://wa.me/+56979384744'} target="_blank">
                    <BsWhatsapp />
                  </Link>

                </div>
                <button className="button-defeat hover:bg-[#000] hover:text-[#fff] hover:scale-[1.15] cursor-pointer ease-in-out duration-500" onClick={downloadCV}>Curriculum</button>
              </div>
            </div>
          </div>
          <div className="w-[50%] relative">
            <div className="w-[660px] h-[660px] absolute bottom-[110px] align-middle flex flex-wrap ">
              <div className="icon-home w-[220px] h-[220px] flex justify-start items-start animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={javascript} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-start items-end animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={react} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-start items-center animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={typescript} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-center items-center animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={git} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-end items-end animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={python} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-end items-start animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={angular} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-start items-end animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={html} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-start items-center animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
                  <Image src={css} alt="" width={80} height={80} className="rounded-[8px]"></Image>
                </div>
              </div>
              <div className="icon-home w-[220px] h-[220px] flex justify-center items-center animate__fadeIn animate__animated animate__repeat-1">
                <div className="border-[#ffffff77] border-[2px] w-[80px] h-[80px] animate-pulse rounded-[10px]">
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