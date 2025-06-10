import React from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperiance from "../components/HeroModels/HeroExperiance";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 1, duration: 4, ease:"power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>
      <div className="hero-layout">
        {/* //left: Hero contant */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7 ">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words?.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <span>
                          <img
                            src={item.imgPath}
                            alt={item.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                        </span>
                        <span>{item.text}</span>
                      </div>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>That deliver </h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Ankit Sinha, a developer based in India with a passion for
              code.
            </p>
            <Button
              className="md:w-80 md:h-16 w-60 h-12"
              id="button"
              text="See my Work"
            />
          </div>
        </header>
        {/* //Right: side of the hero section */}
        <figure>
          <div className="hero-3d-layout">
            <HeroExperiance />
          </div>
        </figure>
      </div>
      <AnimatedCounter/>
    </section>
  );
};

export default Hero;
