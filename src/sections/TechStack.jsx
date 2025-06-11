import {
  Atom,
  BarChartBig,
  BookOpen,
  Box,
  Component,
  Database,
  FileCode,
  Flame,
  Layers,
  Paintbrush,
  Puzzle,
  Send,
  Shapes,
  Wand2,
  Wind,
} from "lucide-react";
import React from "react";
import HeaderTitle from "../components/HeaderTitle";

const skills = [
  { name: "HTML", icon: <BookOpen />, category: "Languages & Frameworks" },
  { name: "CSS", icon: <BookOpen />, category: "Languages & Frameworks" },
  {
    name: "JavaScript",
    icon: <FileCode />,
    category: "Languages & Frameworks",
  },
  {
    name: "TypeScript",
    icon: <FileCode />,
    category: "Languages & Frameworks",
  },
  { name: "React", icon: <Atom />, category: "Languages & Frameworks" },
  { name: "Next.js", icon: <Box />, category: "Languages & Frameworks" },
  { name: "Angular", icon: <Atom />, category: "Languages & Frameworks" },

  { name: "SASS", icon: <Paintbrush />, category: "Styling" },
  { name: "TailwindCSS", icon: <Wind />, category: "Styling" },
  { name: "Bootstrap", icon: <Layers />, category: "Styling" },
  { name: "Chakra UI", icon: <Shapes />, category: "Styling" },
  { name: "Radix UI", icon: <Component />, category: "Styling" },

  { name: "MongoDB", icon: <Database />, category: "Tools & Platforms" },
  { name: "Firebase", icon: <Flame />, category: "Tools & Platforms" },
  { name: "Chart.js", icon: <BarChartBig />, category: "Tools & Platforms" },
  { name: "Webpack", icon: <Puzzle />, category: "Tools & Platforms" },
  { name: "Postman", icon: <Send />, category: "Tools & Platforms" },
  { name: "Prettier", icon: <Wand2 />, category: "Tools & Platforms" },
];

const facesToShow = ["front", "back", "left", "right", "top", "bottom"];

const getFaceTransform = (face, dist) => {
  switch (face) {
    case "front":
      return `rotateY(0deg) translateZ(${dist}px)`;
    case "back":
      return `rotateY(180deg) translateZ(${dist}px)`;
    case "left":
      return `rotateY(-90deg) translateZ(${dist}px)`;
    case "right":
      return `rotateY(90deg) translateZ(${dist}px)`;
    case "top":
      return `rotateX(90deg) translateZ(${dist}px)`;
    case "bottom":
      return `rotateX(-90deg) translateZ(${dist}px)`;
    default:
      return "";
  }
};

const SkillCube = ({ skill }) => {
  return (
    <div
      className="relative group"
      style={{
        width: "clamp(70px, 15vw, 100px)",
        height: "clamp(70px, 15vw, 100px)",
        perspective: "800px",
      }}
    >
      <div
        className="cube transition-transform duration-700 ease-in-out"
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          animation: "spinCube 10s linear infinite",
        }}
      >
        {facesToShow.map((face) => (
          <div
            key={face}
            className="cube-face absolute flex flex-col items-center justify-center text-center text-xs md:text-sm font-medium text-white border border-white/30 bg-gradient-to-br from-slate-700 to-transparent rounded-lg shadow-lg hover:scale-110 transition-all duration-300"
            style={{
              width: "100%",
              height: "100%",
              transform: getFaceTransform(face, 50),
              backfaceVisibility: "hidden",
            }}
          >
            <div className="mb-1 text-xl">{skill.icon}</div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsGrid = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));
  return (
    <div className="space-y-16">
      {categories.map((cat) => (
        <div key={cat} className="text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 animate-gradient-x">
            {cat}
          </h2>
          <div className=" pt-10 gap-18 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:px-1 justify-items-center">
            {skills
              .filter((s) => s.category === cat)
              .map((skill) => (
                <SkillCube key={skill.name} skill={skill} />
              ))}
          </div>
        </div>
      ))}

      <style>
        {`
            @keyframes spinCube {
              0% { transform: rotateX(0deg) rotateY(0deg); }
              100% { transform: rotateX(360deg) rotateY(360deg); }
            }
  
            @keyframes fadeInUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
            }
  
            .animate-fade-in-up {
              animation: fadeInUp 0.8s ease-out;
            }
  
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradientX 5s ease infinite;
            }
  
            @keyframes gradientX {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
      </style>
    </div>
  );
};

const TechStack = () => {
  return (
    <div id="skills" className="flex-enter section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <HeaderTitle
          title="My Preferred TechStack"
          sub="🤝The Skills I Bring To The Table"
        />
      </div>
      <div className="w-full max-w-6xl mx-auto py-1">
        <SkillsGrid />
      </div>
    </div>
  );
};

export default TechStack;
