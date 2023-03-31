import React,{useState} from "react";
import polygon from "../images/polygon.png" 
import eth from "../images/eth-diamond-purple.png" 
import bsc from "../images/bsc.png" 
import {AiOutlineArrowDown} from "react-icons/ai"
const Tocrypto = () => {
    const [cryptoChain, setCryptoChain] = useState("Binance Smart Chain")
    let coinClass,img;
    if (cryptoChain==="Polygon") {
        img = polygon
        coinClass = "chain-logo"
      }else if(cryptoChain==="Etherum"){
        img = eth
        coinClass = "eth"
      }
      else{
        img = bsc
        coinClass = "chain-logo"
    
      }
     
  return (
    <div>
      <div className="dropdown dropdown-to">
          TO
        <div className="button-container ">
          <button className="dropbtn button-to ">
            <img src={img} alt="logo" className={coinClass} />
            {cryptoChain}{" "}
          </button>
          <AiOutlineArrowDown fontSize={20} className="arrow" />
        </div>
        <div class="dropdown-content to-content">
          <button onClick={() => setCryptoChain("Binance Smart Chain")}>Binance Smart Chain</button>
        </div>
      </div>
    </div>
  );
};

export default Tocrypto;
