import React from "react";
import "./App.css";
import mypfp from "./assets/pic.jpg";
import placeholder from "./assets/image-placeholder.webp";
import About from "./about";
import Card from "./Card";

function App() {
  return (
    <>
      <div
        id="main"
        className="sm:h-[60dvh] xs:h-[55dvh] | w-full font-Source bg-[#0d1117]"
      >
        <nav className="text-Turquoise flex flex-row bg-[#0d1117] z-50 | sm:pl-3 sm:text-[1.313rem] sm:w-full sm:top-0 sm:fixed | xs:text-[1rem] xs:justify-between xs:text-center xs:p-1">
          <h1 className="lg:hidden">PORTFOLIO</h1>
          <a href="#" className="lg:flex xs:hidden">
            MARK KENNETH V. LEMEN
          </a>
          <div className="flex flex-row gap-8 items-center | sm:mr-10">
            <a href="#about" className="lg:flex xs:hidden">
              About
            </a>
            <a href="#skills" className="lg:flex xs:hidden">
              Skill
            </a>
            <a href="#projects" className="lg:flex xs:hidden">
              Project
            </a>
            <a href="#contact" className="lg:flex xs:hidden">
              Contact
            </a>
          </div>
        </nav>
        <div className="w-full text-Turquoise sm:flex sm:flex-row sm:items-center sm:mt-[60px] | sm:gap-[15rem] | xs:flex xs:flex-col xs:items-center xs:text-[16px] xs:mt-5">
          <img
            src={mypfp}
            alt="mark"
            id="pfp"
            className="sm:w-[25%] sm:ml-15 | xs:w-[40%] border-4 border-white rounded-full"
          />
          <div className="flex flex-col gap-1 | xs:flex xs:items-center xs:text-[15px]">
            <p className="sm:text-[70px] | ">
              HI, I'M<span className="text-electricpurple"> MARK LEMEN</span>
            </p>
            <p className="">Future BackEnd Developer.</p>
            <p className="">Dedicated Student of STI COLLEGE ALABANG.</p>
            <div className="flex flex-row gap-5 | sm:text-[16px] sm:mt-1 | xs:text-[12px] ">
              <a
                href="#projects"
                className="border-1 p-2 rounded-lg hover:bg-white hover:text-whitetitleblack transition delay-100 ease-in-out "
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="border-1 p-2 rounded-lg  hover:bg-white hover:text-whitetitleblack transition delay-100 ease-in-out "
              >
                <i class="fa-solid fa-envelope"></i> Contact me
              </a>
                <a
                href=""
                className="border-1 p-2 rounded-lg  hover:bg-white hover:text-whitetitleblack transition delay-100 ease-in-out "
              >
                <i class="fa-brands fa-github"></i> Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
