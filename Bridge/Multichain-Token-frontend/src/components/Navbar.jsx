import { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logo from "../images/favicon.png";
import { Link } from "react-router-dom";


const NavBarItem = ({ title, classprops, extraClass,redirect,a}) => (
    <div className={extraClass}>{
      <a href= {redirect} ><li className={`mx-3 text-black font-bold tag cursor-pointer ${classprops}`}>{title}</li></a>
    }
    </div>
);



const redirectLinks = ["#home", "#about-us", "#land-of-realm", "#roadmap", "#tokenomics"]
const SocialIcons = ({ extraStyles,fs }) => (
  <div className={`flex ml-20 ${extraStyles}`}>
    <a href="#" >
      <FaTelegramPlane
      fontSize={fs}
      className={`text-black mx-2 cursor-pointer icon-hover`}
      />
      </a>

    <AiOutlineTwitter
      fontSize={fs}
      className={`text-black mx-2 cursor-pointer icon-hover`}
    />
    <AiOutlineInstagram
      fontSize={fs}
      className={`text-black mx-2 cursor-pointer icon-hover `}
    />
    <FaDiscord
      fontSize={fs}
      className={`text-black mx-2 cursor-pointer icon-hover`}
    />
    <FaFacebook
      fontSize={fs}
      className={`text-black mx-2 cursor-pointer icon-hover `}
    />
  </div>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className=" flex md:justify-center w-[100vw] justify-between items-center p-4 box-shadow-down nav">
      <div className="md:flex-[0.5] flex  justify-initial items-center">
        <img src={logo} alt="logo" className="w-[50px]"/>
        <div className="logo-text flex flex-col ml-3 md:display-none">

        <h2 className="logo-text uppercase text-2xl font-bold">Land of realm</h2>
        <p className="uppercase font-thin">your virtual sweat Home</p>
        </div>
        

      </div>
      <ul className="text-black     text-lg md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Home", "About Us", "Land Of Realm", "Roadmap", "Tokenomics"].map(
          (item, index) => (
            <NavBarItem key={item + index} title={item} extraClass={"m"} redirect={redirectLinks[index]} a={true}/>
          )
        )}
        <Link to="/bridge " className="font-bold">Bridge</Link>

        <SocialIcons fs={20} />
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-black md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed h-[110vh] top-0 right-5 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-center rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl text-black w-full my-1 ">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {[
              "Home",
              "About Us",
              "Land Of Realm",
              "Roadmap",
              "Tokenomics",
            ].map((item, index) => (
              <NavBarItem
                key={item + index}
                title={item}
                classprops="my-3  text-lg"
                extraClass={"side-nav-li"}
                redirect={redirectLinks[index]
                }
                a={true}
              />
              ))}
              <Link to="/bridge" className="side-nav-li my-3  text-lg text-black ">Bridge</Link>
            <SocialIcons extraStyles={"ml-4 mt-5"} fs={25} />
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
