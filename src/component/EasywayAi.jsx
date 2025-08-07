import ScrollReveal from "./ScllorAnimation";
import chatBot from "../assets/ChatBot.png"
import codeAnalyzer from "../assets/codeAnalyzer.png"
import todo from "../assets/todo.png"
import chatWithMentor from "../assets/chatWithTeacher.png"

function EasywayAI(){

     const easywayAIList = [
      {
        name:"Easyway AI chatBot",
        link:"/chatBot",
        img:chatBot
      },
      {
        name:"AI Code Analyzer",
        link:"/code-analyzer",
        img:codeAnalyzer
      },
       {
        name:"Todo List",
        link:"/todo-list",
        img:todo
      },
      {
        name:"Chat with Mentor",
        link:"/chat",
        img:chatWithMentor
      },
       
       
     ]   

    return<>
    
       <div className="text-xl mt-4 md:mt-8  lg:text-3xl  ml-2 md:ml-10 text-center text-slate-100 text-shadow-2xs text-shadow-amber-50 ">
          Easyway AI 
        </div>
        <div className="flex justify-center w-full">
          <hr className="bg-orange-500 ml-2 md:ml-10 h-1 rounded-full w-30 lg:w-40 mt-2 mb-5  border-yellow-500 " />
        </div>
         

        <div className='h-auto  mt-7 mb-4  rounded-2xl p-3 md:px-8 xl:px-35 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 '>
        
        {
          easywayAIList.map( (list,index) => 
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

export default EasywayAI;