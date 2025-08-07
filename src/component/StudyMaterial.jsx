import bgBanner from '../assets/bgBanner.png'
import ScrollReveal from "./ScllorAnimation";
import notes from "../assets/notes.png"
import quiz from "../assets/quizImg.png"
import pyq from "../assets/pyqImg.png"
import onlineLecture from "../assets/onlineLecture.png"
import roadmap from '../assets/roadMap.png'
import syllabus from '../assets/syllabusImg.png'

function StudyMaterial(){

     const studyMaterialList = [
      {
        name:"AKTU PYQ's",
        link:"/pyq",
        img:pyq
      },
       {
        name:"Quizs",
        link:"/quizs",
        img:quiz
      },
       {
        name:"Notes",
        link:"/notes",
        img:notes
      },
       {
        name:"Video Lectures",
        link:"/video-lectures",
        img:onlineLecture
      },
       {
        name:"Roadmaps",
        link:"/roadmaps",
        img:roadmap
      },
       {
        name:"AKTU Syllabus",
        link:"/syllabus",
        img:syllabus
      },
       
     ]   

    return<>
    
       <div className="text-xl mt-4 md:mt-8 lg:text-3xl  ml-2 md:ml-10 text-center text-slate-100 text-shadow-2xs text-shadow-amber-50 ">
          Study Material
        </div>
        <div className="flex justify-center w-full">
          <hr className="bg-orange-500 ml-2 md:ml-10 h-1 rounded-full w-30 lg:w-40 mt-2 mb-5  border-yellow-500 " />
        </div>
         

        <div className='h-auto  mt-7 mb-4  rounded-2xl p-3 md:px-8 xl:px-35 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        
        {
          studyMaterialList.map( (list,index) => 
          <ScrollReveal from="bottom" key={index}>
          <div className='h-55   place-self-center border-1  border-slate-400 m-1  w-60 md:w-60 rounded-xl shadow-2xl shadow-gray-600 hover:scale-[1.02] active:scale-[1] transition-all hover:border-2 '>
            <img src={list.img} className='h-40 w-80 rounded-t-xl border-1 border-blacks brightness-90'></img>
            <p className='h-14 text-xl pt-3 bg-gray-900 text-center rounded-b-xl font-semibold opacity-95'>{list.name}</p>
          </div>
          </ScrollReveal>)
        }
        </div>
        
    </>
}

export default StudyMaterial;