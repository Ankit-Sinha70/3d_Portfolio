import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const ShowcaseSection = () => {
  const sectionRef = useRef();
  const project1Ref = useRef();
  const project2Ref = useRef();
  const project3Ref = useRef();

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );
  }, []);

  useGSAP(() => {
    const projects = [
      project1Ref.current,
      project2Ref.current,
      project3Ref.current,
    ];
    projects.forEach((item, index) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: item,
            start: "top bottom = 100",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* Left side */}
          <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="project1" />
            </div>
            <div className="text-content">
              <h2>
                On-demand Rides Simple With a Powerfull, User-friendly App
                called Ryde
              </h2>
              <p>
                An app built with React/Vite & Tailwindcss for a fast user
                friendly experience.
              </p>
            </div>
          </div>
          {/* Right side */}
          <div className="project-list-wrapper">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/project2.png" alt="project2" />
              </div>
              <h2>This is my project 2</h2>
            </div>
            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/project3.png" alt="project3" />
              </div>
              <h2>This is my project 3</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
