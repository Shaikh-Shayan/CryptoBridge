import React from "react";

const Tokenomics = () => {
  return (
    <div className="w-full">
      <div className="tokenomics w-full bg-[#c1e1e3]" id="tokenomics">
          <div className="flex justify-center align-center w-full bg-[#c1e1e3]">

          <h2 className="m-[auto] text-5xl mt-7 mb-7 uppercase font-extrabold g1 ">Tokenomics</h2>
          </div>
        <div className="flex flex-col md:flex-row mb-8">
          <div className="reflections bg-white m-7 h-[270px] p-4 flex flex-col md:w-[600px] ">
            <h2 className=" align-self-center text-2xl uppercase  text-black font-extrabold g1">
              Reflections
            </h2>
            <p className="text-base text-black font-bold">
              3% from every Buy & Sell order is paid in reflections and will be
              distribute to holders as an incentive for holding Land Of Realm
            </p>
          </div>
          <div className="liquidity bg-white m-7 h-[270px] p-4 flex flex-col md:w-[600px]">
            <h2 className=" text-2xl uppercase font-bold g1">Liquidity</h2>
            <p className="text-base text-black font-bold">
              3% from every Buy & Sell order is transformed into liquidity for
              Multi Chain Dex. It's automatic and helps create a price floor
              (stability).
            </p>
          </div>
          <div className="marketing bg-white m-7 h-[270px] p-4 flex flex-col md:w-[600px]">
            <h2 className=" text-2xl uppercase font-bold g1">Marketing</h2>
            <p className="text-base text-black font-bold">
              3% from every Buy and 5% from every Sell order is sent to
              marketing in BNB for a constant marketing push & Project
              Development. This helps to expand our community and make $LOR
              known globally
            </p>
          </div>
          <div className="devlopment bg-white m-7 h-[270px] p-4 flex flex-col md:w-[600px]">
            <h2 className="text-2xl uppercase font-bold g1">Development</h2>
            <p className="text-base text-black font-bold">
              1% from every Buy and 3% from every Sell order is sent to
              developing in BNB for Project Development. This helps to keep work
              moving forward on Land Of Realm
            </p>
          </div>
        </div>

        <div className="tokenomics-sect-2 flex bg-white justify-center text-center items-center w-[100%] ">
          <div className="w-full h-[auto]">
            <h2 className="text-3xl mt-3 mb-3 uppercase font-bold">Liquidity locked for 3 years</h2>
            <p className="mb-3 mt-3 text-xl">UNLOCK - FEBRUARY 11 2022 (POLY BRIDGE)</p>
            <p className="mb-3 mt-3 text-xl">2ND UNLOCK - MARCH 11 2022 (ETH BRIDGE)</p>
            <p className="mb-3 mt-3 text-xl"> 3RD UNLOCK - MARCH 11 2025</p>
          </div>
        </div>

        <div className="text-xl font-bold bg-[#c1e1e3] w-[100%] h-[100%] pt-7 pb-7 text-center m-[auto] ">
          TOTAL CIRCULATING SUPPLY 1 BILLION 1,000,000,000
        </div>
        <div />
        <div className="disclimer text-center mr-2 ml-2 p-5 md:mr-11 md:ml-11 text-[#9fbdac]">
          **Disclaimer** The Content shared on this website is for information
          purposes only and, thus, should not be considered as financial advice.
          Trading/Investing is risky and you should never invest more than you
          can afford to lose. Cryptocurrencies are risky. Never invest more than
          you can afford to lose. You alone assume the sole responsibility of
          evaluating the merits and risks associated with the use of any
          information or other Content on the Site before making any decisions
          based on such information or other Content.
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
