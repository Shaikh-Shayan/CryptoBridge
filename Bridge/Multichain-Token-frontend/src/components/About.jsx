import React from "react";
import img3 from "../images/about.png"


const About = () => {
  return (
    <div className="about w-full bg-[#badae9c5] h-[auto] " id="about-us">
      <div className="about-container flex flex-col md:flex-row pb-[8%]  pl-[15%] pr-[15%]  ">
        <div className="left-content text-justify ">
          <h2 className="font-extrabold  g1 text-4xl">ABOUT US</h2>
          <p className="mt-5  text-lg text-black font-bold">
            These days People are spending more time in virtual worlds, for both
            recreation and work. This occurs predominantly in 2D interfaces such
            as the web and mobile phones. However, a traversable 3D world adds
            an immersive component, enabling physical clusters of communities,
            being able to visit one another community; add to this the ability
            to create unique items within your virtual world, and the
            possibilities are endless.<br/><br/>
            
            Our Token Land Of Realm is a new token on
            the Binance Smart Chain to be built around a series of NFTs and new
            virtual land to explore.<br/><br/> In your new territory, you will be free to
            own virtual lands, collect and build items to use in-game, and trade
            them with other players. Inspired by games such as Decentraland and
            Alice, $LOR will allow users to claim ownership over Non Fungible
            Assets, and create or acquire other, in-game assets.<br/><br/> The team has
            been working relentlessly to create the foundations for an in world
            economy and this adoption falls perfectly in place with the
            maturation of cryptocurrency, as a global and instant payment
            method, while also creating many possibilities to produce amazing
            income and generational wealth for your family.
          </p>
        </div>
        <div className="right-content-about mt-[20%] md:mt-[2%] w-full ">
            <img src={img3} alt="bgimg "className="w-[100%] h-[110%] lg:w-[500px] a"  />
        </div>
      </div>
    </div>
  );
};

export default About;
