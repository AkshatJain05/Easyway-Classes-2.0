import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import logoEasyway from "../assets/logoEasyway.png";
import { NavLink, useNavigate } from "react-router-dom";

function Nav() {
  const [open, setOpen] = useState(false);

  const navList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Study Material",
      link: "/study-material",
    },
    {
      name: "Courses",
      link: "/courses",
    },
    {
      name: "Easyway AI",
      link: "/easyway-ai",
    },
    {
      name: "Contact Us",
      link: "/contact-us",
    },
  ];

  const handleNavLinkClick = () => {
    setOpen(false); // Hide navbar when any nav link is clicked
  };

  const handleLoginBtn = () => {
    navigate("/login");
    setOpen(false);
  };

  const navigate = useNavigate();
  return (
    <>
      <nav className=" text-white bg-gray-950 opacity-95  flex items-center justify-between px-2 md:px-4 lg:px-10 xl:px- py-2 border-b fixed h-15 w-full border-gray-900 transition-all z-20">
        <NavLink to="/" className="flex items-center gap-1">
          <img src={logoEasyway} className="h-8 sm:h-9 md:h-10 w-auto "></img>
          <h1 className="font-bold text-xl md:text-2xl mr-2">
            Easyway Classes 2.0
          </h1>
        </NavLink>

        {/* Desktop Menu */}

        <div className="hidden lg:flex items-end gap-5 p-1.5 px-7 font-sans  transition-all">
          {navList.map((list, index) => (
            <NavLink
              key={index}
              to={list.link}
              className={({ isActive }) =>
                isActive
                  ? `px-2 py-[2px] border-1 border-slate-400  rounded-full bg-slate-800 hover:bg-slate-700`
                  : null
              }
            >
              {list.name}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer  px-3 py-1 bg-slate-700 border-1 border-slate-400 hover:bg-slate-600 transition text-white rounded-sm"
          >
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
          } absolute  top-[60px] left-0 w-full bg-gray-950  shadow-md py-4 flex-col items-center gap-2 px-5 text-[16px] lg:hidden`}
        >
          {navList.map((list, index) => (
            <NavLink
              key={index}
              to={list.link}
              onClick={handleNavLinkClick}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-slate-700" : null
                } block m-1 py-1.5 px-2 roundedhover:bg-slate-700 opacity-95 rounded-sm`
              }
            >
              {list.name}
            </NavLink>
          ))}

          <button
            onClick={handleLoginBtn}
            className="cursor-pointer px-3 py-1 mt-2 bg-slate-900 hover:bg-slate-500 transition text-white rounded-xl border-1 border-white text-sm"
          >
            Login
          </button>
        </div>
      </nav>
      <div className="bg-red-50 h-15"></div>
    </>
  );
}

export default Nav;
