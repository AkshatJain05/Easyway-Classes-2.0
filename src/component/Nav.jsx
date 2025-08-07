import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import logoEasyway from "../assets/logoEasyway.png";
import { NavLink ,useNavigate} from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

   const handleNavLinkClick = () => {
    setOpen(false); // Hide navbar when any nav link is clicked
  };
  
  const handleLoginBtn = ()=>{
    navigate("/login");
    setOpen(false)
  }

   const navigate = useNavigate();
  return (
    <>
      <nav className=" text-white bg-gray-950 opacity-95  flex items-center justify-between px-2 md:px-4 lg:px-10 xl:px- py-2 border-b fixed h-15 w-full border-gray-900 transition-all z-20">
        <NavLink to="/" className="flex items-center gap-1">
          <img src={logoEasyway} className="h-8 sm:h-9 md:h-10 w-auto "></img>
          <h1 className="font-bold text-[18px] sm:text-xl md:text-2xl mr-2">
            Easyway Classes 2.0
          </h1>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-end gap-5 p-1.5 px-7 font-sans  transition-all">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `px-2 py-[2px] border-1 border-slate-400  rounded-full bg-slate-800 hover:bg-slate-700`
                : null
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/study-material"
            className={({ isActive }) =>
              isActive
                ? `px-2 py-[2px] border-1 border-slate-400  rounded-full bg-slate-800 hover:bg-slate-700`
                : null
            }
          >
            Study Material
          </NavLink>
          <NavLink
            to="/courses"
            className={({ isActive }) =>
              isActive
                ? `px-2 py-[2px] border-1 border-slate-400  rounded-full bg-slate-800 hover:bg-slate-700`
                : null
            }
          >
            Courses
          </NavLink>
          <NavLink
            to="easyway-ai"
            className={({ isActive }) =>
              isActive
                ? `px-2 py-[2px] border-1 border-slate-400  rounded-full bg-slate-800 hover:bg-slate-700`
                : null
            }
          >
            Easyway AI
          </NavLink>
          <NavLink
            to="contact-us"
            className={({ isActive }) =>
              isActive
                ? `px-2 py-[2px] border-1 border-slate-400  rounded-full bg-slate-800 hover:bg-slate-700`
                : null
            }
          >
            Contact Us
          </NavLink>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button onClick={()=>navigate("/login")}  className="cursor-pointer  px-3 py-1 bg-slate-700 border-1 border-slate-400 hover:bg-slate-600 transition text-white rounded-sm">
            Login
          </button>
        </div>

        <button
          onClick={() => (open ? setOpen(false) : setOpen(true))}
          aria-label="Menu"
          className="lg:hidden"
        >
          {/* Menu Icon  */}
          {open ? (
            <RxCross2 className="mr-2 text-xl" />
          ) : (
            <FaBarsStaggered className="mr-2 sm:text-xl" />
          )}
        </button>

        {/* Mobile Menu */}
        <div
          className={`${
            open ? "flex" : "hidden"
          } absolute  top-[60px] left-0 w-full bg-gray-950  shadow-md py-4 flex-col items-start gap-2 px-5 text-sm lg:hidden`}
        >
          <NavLink to="/" onClick={handleNavLinkClick} className="block py-1 px-2 rounded hover:bg-slate-700">
            Home
          </NavLink>
          <NavLink to="/study-material" onClick={handleNavLinkClick}  className="block py-1 px-2 rounded hover:bg-slate-700">
            Study Material
          </NavLink>
          <NavLink to="/courses" onClick={handleNavLinkClick}  className="block py-1 px-2 rounded hover:bg-slate-700">
            Courses
          </NavLink>
          <NavLink to="easyway-ai" onClick={handleNavLinkClick}  className="block py-1 px-2 rounded hover:bg-slate-700">
            Easyway AI
          </NavLink>
          <NavLink to="contact-us" onClick={handleNavLinkClick}  className="block py-1 px-2 rounded hover:bg-slate-700">
            Contact Us
          </NavLink>
          <button onClick={handleLoginBtn} className="cursor-pointer px-3 py-1 mt-2 bg-slate-900 hover:bg-slate-500 transition text-white rounded-xl border-1 border-white text-sm">
            Login
          </button>
        </div>
      </nav>
      <div className="bg-red-50 h-15"></div>
    </>
  );
}

export default Nav;
