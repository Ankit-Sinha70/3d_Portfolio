import React from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => (
  <div className="fles-none flex-center marquee-item">
    <img src={icon.imgPath} alt={icon.name} />
  </div>
);

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((item) => {
            <LogoIcon key={item.name} icon={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
