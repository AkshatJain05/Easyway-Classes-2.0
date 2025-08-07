import student1Img from "../assets/studentGroup.png";
import TypingMotion from "./TypingMotion.jsx";
import ScrollReveal from "./ScllorAnimation";
import { useNavigate } from "react-router-dom";
// import { motion } from "motion/react";
function HeroSection() {
  const navigate = useNavigate();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 focus:outline-none overflow-x-hidden select-none">
        <ScrollReveal from="left">
          <div className="m-3 mt-5 mx-3 md:mt-10 md:mx-10 lg:mt-25 lg:ml-20 m-center">
            <h2>
              <p
                className="text-3xl
                sm:text-5xl
                lg:text-6xl font-semibold m-2"
              >
                Learn with{" "}
              </p>
              <TypingMotion />
            </h2>
            <p className="hidden md:block text-justify p-2 pt-5 lg:pb-6 lg:pt-10 lg:text-xl font-medium text-slate-300">
              Easyway Classes is an e-learning website that helps students learn
              in a simple and smart way. We provide useful tools like a chatbot
              to answer your questions, a code analyzer to check your code, a
              to-do list, and notes.
            </p>
            <p className="md:hidden text-justify p-2 pt-5 lg:pt-8 lg:text-xl text-slate-300">
              Easyway Classes is an e-learning platform that makes learning
              simple and smart. Access tools like chatbot, code analyzer, to-do
              list, and notes — all in one place.
            </p>
            <button
              onClick={() => navigate("/courses")}
              className="border-1 p-2 rounded-sm mt-6 m-2 bg-slate-900 opacity-95 text-white hover:bg-slate-700 cursor-pointer shadow-sm shadow-blue-100"
            >
              Explore Course
            </button>
            <button
              onClick={() => navigate("/login")}
              className="border-1 p-2 rounded-sm mt-6 m-2 bg-slate-900 opacity-95 text-white hover:bg-slate-700 cursor-pointer shadow-sm shadow-blue-100"
            >
              Login
            </button>
          </div>
        </ScrollReveal>
        <ScrollReveal from="right">
          <div className="flex justify-center items-center ">

            <div
                className='h-60 w-60  md:h-100 md:w-100 bg-slate-100 shadow-2xl  shadow-white rounded-full  opacity-55 blur-2xl absolute  -z-1 object-contain'>
              </div> 

            <img
              src={student1Img}
              className="h-80  md:h-140 "
            ></img>
          </div>
        </ScrollReveal>
      </div>
      <hr className="my-4 text-slate-700" />
    </>
  );
}

export default HeroSection;
