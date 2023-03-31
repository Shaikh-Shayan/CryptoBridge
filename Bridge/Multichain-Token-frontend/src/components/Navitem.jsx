import React from "react";
import polygon from "../images/polygon.png" 
import eth from "../images/eth-diamond-purple.png" 
import bsc from "../images/bsc.png" 
import {AiOutlineArrowDown} from "react-icons/ai"
import logo from "../images/logo.png" 

const Navitem = ({chain,setChain}) => {
  let img,coinClass;
  if (chain==="Polygon") {
    img = polygon
    coinClass = "chain-logo"
  }else if(chain==="Etherum"){
    img = eth
    coinClass = "eth"
  }
  else{
    img = bsc
    coinClass = "chain-logo"

  }
 
  return (
    <div className="container">
      <div className="dropdown">
        <div className="button-container">
        <button className="dropbtn "><img src={img} alt="logo" className={coinClass}/>{chain} </button>
        <AiOutlineArrowDown fontSize={20} className="arrow"/>
        </div>
        <div class="dropdown-content">
          <button onClick={()=>(setChain("Polygon"))}>Polygon</button>
          <button onClick={()=>(setChain("Etherum"))}>Etherum</button>
          <button onClick={()=>(setChain("Bsc"))}>BSC</button>
        </div>
      </div>
      <div className="logo-container">

      <img src={logo} alt="logo" className="logo"/>
      </div>
    </div>
  );
};

export default Navitem;
