import React from "react";
import { socialImgs } from "../constants";

const FooterSection = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a href="/">Visit my Blog</a>
        </div>
        <div className="socials">
          {socialImgs.map((item) => (
            <a href={item.url} key={item.url} className="icon" target="_blank">
              <img src={item.imgPath} alt="" />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center md:itemsS-start items-center">
          <p className="text-center md:text-end">
            &#169;{new Date().getFullYear()} Ankit Sinha | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
