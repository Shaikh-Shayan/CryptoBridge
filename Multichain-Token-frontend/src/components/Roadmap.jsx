import React from "react";
import shareVideo from "../images/roadMap.mp4";

const Roadmap = () => {
  return (
    <div className="roadmap relative h-full w-full" id="roadmap">
       <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full absolute object-cover"
        />
      <div className="roadmap-container flex flex-col pt-[5%]  pb-12 z-100">
        <div className="flex justify-center align-center">
          <h2 className=" text-bold g1 g2 relative  text-white head-roadmap z-1000 ">
            ROADMAP
          </h2>
        </div>
        <div className="roadmap-main text-black flex flex-col md:flex-row justify-space align-center m-[auto]">
          <div className="content-box glassmorphism m-5 h-[500px] flex flex-col  md:w-[400px]  w-[320px]">
            <div className="roadmap-heading   mt-10 font-bold  text-3xl">PHASE 1</div>
            <div className="roadmap-box-content mt-4 text-lg flex align-center justify-center font-bold text-black">
              <ul>
                <li>Smart contract Audit (dessert finance)</li>
                <li>Private Sale</li>
                <li>Launch Token and the Website</li>
                <li>Smart contract Audit (Tech Rate)</li>
                <li>Game preview release during AMA</li>
                <li>CG & CMC Listing</li>
                <li>Smart contract Audit (Certik Audit)</li>
                <li>Influencer Marketing</li>
                <li>Trending on Dextools</li>
              </ul>
            </div>
          </div>
          <div className="content-box glassmorphism m-5 h-[500px] flex flex-col md:w-[400px]  w-[320px]">
            <div className="roadmap-heading  mt-10 font-bold text-3xl">PHASE 2</div>
            <div className="roadmap-box-content flex mt-4 text-lg align-center justify-center font-bold">
              <ul>
                <li>Game Preview</li>
                <li>Poly Chain Bridgee</li>
                <li>Huge Promotions and Influencers Push</li>
                <li>Listing on first major CEX Exchange)</li>
                <li>Staking</li>
                <li>Eth Bridge</li>
                <li>Celebs Influencer Onboard</li>
                <li>Plot Presale for Virtual Land</li>
                <li>Game Beta Test</li>
                <li>Phase 1 Game Launch</li>
              </ul>
            </div>
          </div>
          <div className="content-box glassmorphism m-5 h-[500px] flex flex-col  md:w-[400px]  w-[320px]">
            <div className="roadmap-heading  mt-10 font-bold text-3xl">PHASE 3</div>
            <div className="roadmap-box-content flex mt-4 align-center text-lg justify-center font-bold">
              <ul>
                <li>NFTs</li>
                <li>Partnerships with major studiose</li>
                <li>Exchange Ads</li>
                <li>Much more and beyond...</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
