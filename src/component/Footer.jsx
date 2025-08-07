import logo2Img from '../assets/easywayLogo.png'
import ScrollReveal from "./ScllorAnimation";
import { NavLink } from 'react-router-dom';

function Footer() {
    return (
        
        <footer className="w-full bg-gradient-to-b from-slate-950 to-slate-900 text-white border-t-1" >
            <div className=" px-4 py-12 flex flex-col items-center">
                <div className="flex items-center space-x-3 mb-3">
                    <img alt="" className="h-18 sm:h-18 md:h-24 mb-4 rounded-2xl border-2 border-yellow-300"
                        src={logo2Img} />
                </div>
                <p className="text-center max-w-xl text-sm md:text-shadow-xs font-normal leading-relaxed">
                    Easyway Classes is your smart learning companion, offering tools like AI chatbot, code analyzer, and more to make learning easier.
                </p>
        
            </div>
            <div className="border-t border-slate-200">
               <div className="flex flex-col md:flex-row gap-3 items-center justify-around w-full py-4 text-sm bg-slate-950 text-white/70 p-2">
            <p>© 2025 Easyway Classes. All rights reserved. All rights reservered.</p>
            <div className="flex items-center gap-4">
                <NavLink to="/contact-us" className="hover:text-white transition-all">
                    Contact Us
                </NavLink>
                <div className="h-8 w-px bg-white/20"></div>
                <NavLink to="/privacy-policy" className="hover:text-white transition-all">
                    Privacy Policy
                </NavLink>
                <div className="h-8 w-px bg-white/20"></div>
                <NavLink to="/TAC" className="hover:text-white transition-all">
                    Term and Condition
                </NavLink>
            </div>
        </div>
            </div>
        </footer>
        
    );
};

export default Footer;
