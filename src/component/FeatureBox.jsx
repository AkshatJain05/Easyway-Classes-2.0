import ScrollReveal from "./ScllorAnimation";
import {Link} from "react-router-dom"
function FeatureBox() {
  const featureList = [
    { name: "Easyway Classes 2.0", featureLink: "/login" },
    { name: "Todo-List", featureLink: "#" },
    { name: "Notes", featureLink: "#" },
    { name: "PYQ", featureLink: "#" },
    { name: "Course", featureLink: "#" },
    { name: "ChatBot AI", featureLink: "#" },
    { name: "Code Analyzer", featureLink: "#" },
    { name: "Aktu Result", featureLink: "https://erp.aktu.ac.in/webpages/oneview/oneview.aspx" },
    { name: "Live Metor Chat", featureLink: "#" },
  ];

  return (
    <>
      <div className="  w-full  p-6 text-white ">
        <div className="text-2xl  lg:text-3xl  ml-2 md:ml-10 text-center text-slate-200">
          Features
        </div>
        <div className="flex justify-center w-full">
          <hr className="bg-orange-300 ml-2 md:ml-10 h-0.5 rounded-full w-24 lg:w-30 mb-4 border-1 border-orange-300 " />
        </div>

        <div className="h-auto w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 text-xl md:text-2xl gap-5 p-2 md:p-10 font-semibold overflow-hidden overflow-x-hidden">
          {featureList.map((feature, index) => (
            <ScrollReveal from="bottom" key={index} className="w-full">
              <Link
                to={feature.featureLink}
                className="flex justify-center items-center h-16 md:h-20 transform -skew-x-7 bg-gradient-to-b from-gray-900 to-slate-750  opacity-90 border-r-3 border-b-3 border-slate-400 rounded-sm p-2 hover:border-orange-300 hover:scale-[1.02] active:scale-[1] shadow-sm shadow-blue-100 "
              >
                {feature.name}
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
export default FeatureBox;
