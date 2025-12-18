import React from "react";
import {
  SiFacebook,
  SiInstagram,
  SiX,
  SiLinkedin,
} from "react-icons/si";
import { GiIsland } from "react-icons/gi";
import {
  ArrowUpRight,
  ChevronDown,
  Search,
  Menu,
  LucideMenu,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";


const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Booking", path: "/booking" },
  ];

const Header = () => {
  const { pathname } = useLocation();

  const isActive = (path) => pathname === path || (path === "/" && pathname === "/");



  return (
    <header className="fixed top-0 z-50 w-full">

      {/* ================= TOP BAR ================= */}
      <div className="topbar px-16">
   
          <ul className="t-1-u">
            <li>7631 Sabina Park, 115 Devon Isle, USA</li>
            <li>info@domain.com</li>
            <li>(+1) 987 654 3210</li>
          </ul>

          <ul className="t-2-u">
            <li><SiFacebook /></li>
            <li><SiX /></li>
            <li><SiInstagram /></li>
            <li><SiLinkedin /></li>
          </ul>
   
      </div>

      {/* ================= MAIN BAR ================= */}
      <div className="bg-[#272727] h-20">
        <div className="flex max-w-[1400px] items-center justify-between h-full">

          {/* LOGO — FLUSH LEFT */}
           <div className="sp-1 relative -mb-2 flex h-[90px] w-[300px] items-center gap-3 bg-white pl-6 text-3xl font-bold text-black">
            <GiIsland className="text-[#2E9C7A]" />
            <span>Fixyland</span>
          </div>

          {/* NAVBAR */}
          <nav className="hidden lg:block">
            <ul className="navbar flex gap-10 text-sm text-white">
              {navItems.map((item) => (
                <li key={item.label} className={`hover:text-yellow-400 transition ${isActive(item.path) ? 'text-yellow-400' : ''}`}>
                  <Link to={item.path} className="flex items-center gap-2">
                    <span>{item.label}</span>
                    <ChevronDown size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-4 pr-6">

            <button className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#4E5250] hover:scale-105 transition">
              <Search size={20} color="white" />
            </button>

            {/* Mobile menu */}
            <button className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-[#4E5250]">
              <RiMenu2Fill size={22} color="white" />
            </button>

            <button className="hidden md:flex items-center gap-2 rounded-md bg-yellow-500 px-6 py-3 font-medium hover:scale-105 transition">
              Book Your Stay
              <ArrowUpRight size={16} />
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
