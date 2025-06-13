import {
  Atom,
  BarChartBig,
  BookOpen,
  Box,
  BrickWall,
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
import LazyLoad from "../components/LazyLoad";

const skills = [
  { name: "HTML", icon: <BookOpen />, category: "Languages & Frameworks", color: "#E34F26" },
  { name: "CSS", icon: <Paintbrush />, category: "Languages & Frameworks", color: "#1572B6" },
  { name: "JavaScript", icon: <FileCode />, category: "Languages & Frameworks", color: "#F7DF1E" },
  { name: "TypeScript", icon: <FileCode />, category: "Languages & Frameworks", color: "#3178C6" },
  { name: "React", icon: <Atom />, category: "Languages & Frameworks", color: "#61DAFB" },
  { name: "Next.js", icon: <Box />, category: "Languages & Frameworks", color: "#000000" },
  { name: "Angular", icon: <Atom />, category: "Languages & Frameworks", color: "#DD0031" },

  { name: "SASS", icon: <Paintbrush />, category: "Styling", color: "#CC6699" },
  { name: "Tailwind", icon: <Wind />, category: "Styling", color: "#06B6D4" },
  { name: "Bootstrap", icon: <Layers />, category: "Styling", color: "#7952B3" },
  { name: "Chakra UI", icon: <Shapes />, category: "Styling", color: "#319795" },
  { name: "Radix UI", icon: <Component />, category: "Styling", color: "#8B5CF6" },
  { name: "Material UI", icon: <BrickWall />, category: "Styling", color: "#0081CB" },

  { name: "MongoDB", icon: <Database />, category: "Tools & Platforms", color: "#47A248" },
  { name: "Firebase", icon: <Flame />, category: "Tools & Platforms", color: "#FFCA28" },
  { name: "Chart.js", icon: <BarChartBig />, category: "Tools & Platforms", color: "#FF6384" },
  { name: "Webpack", icon: <Puzzle />, category: "Tools & Platforms", color: "#8DD6F9" },
  { name: "Postman", icon: <Send />, category: "Tools & Platforms", color: "#FF6C37" },
  { name: "Prettier", icon: <Wand2 />, category: "Tools & Platforms", color: "#F7B93E" },
];

const SkillCard = ({ skill, index }) => {
  return (
    <div 
      className="skill-card group relative"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
      role="article"
      aria-label={`${skill.name} skill card`}
      tabIndex="0"
    >
      <div className="card-inner">
        <div className="card-front">
          <div 
            className="icon-container"
            style={{ color: skill.color }}
            aria-hidden="true"
          >
            {skill.icon}
          </div>
          <h3 className="skill-name">{skill.name}</h3>
          <div 
            className="skill-bar"
            style={{ backgroundColor: skill.color }}
            role="progressbar"
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div 
          className="card-back"
          style={{ 
            background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}40)`,
            borderColor: skill.color 
          }}
        >
          <div 
            className="back-icon"
            style={{ color: skill.color }}
          >
            {skill.icon}
          </div>
          <h3 className="back-title">{skill.name}</h3>
          <div className="skill-level">
            <div className="level-bar">
              <div 
                className="level-fill"
                style={{ backgroundColor: skill.color }}
              ></div>
            </div>
            <span className="level-text">Advanced</span>
          </div>
        </div>
      </div>
      
      {/* Glow effect */}
      <div 
        className="glow-effect"
        style={{ 
          boxShadow: `0 0 40px ${skill.color}30, 0 0 80px ${skill.color}20`
        }}
      ></div>
    </div>
  );
};

const SkillsGrid = () => {
  const categories = Array.from(new Set(skills.map((s) => s.category)));
  
  return (
    <div className="skills-container">
      {categories.map((category, categoryIndex) => (
        <div key={category} className="category-section">
          <h2 
            className="category-title"
            style={{ animationDelay: `${categoryIndex * 0.2}s` }}
          >
            {category}
          </h2>
          <div className="skills-grid">
            {skills
              .filter((s) => s.category === category)
              .map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  index={index}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const TechStack = () => {
  return (
    <section 
      className="tech-stack-container"
      aria-labelledby="tech-stack-title"
    >
      <div className="header-section">
        <h1 id="tech-stack-title" className="main-title">My Tech Stack</h1>
        <p className="subtitle">🚀 Technologies I Work With</p>
        <div className="title-underline" aria-hidden="true"></div>
      </div>
      <LazyLoad>
        <SkillsGrid />
      </LazyLoad>
      
      <style>{`
        .tech-stack-container {
          padding: 60px 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .header-section {
          text-align: center;
          margin-bottom: 80px;
          animation: fadeInDown 1s ease-out;
        }

        .main-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }

        .subtitle {
          font-size: 1.2rem;
          color: rgba(255,255,255,0.9);
          margin-bottom: 30px;
          font-weight: 500;
        }

        .title-underline {
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
          margin: 0 auto;
          border-radius: 2px;
          animation: pulse 2s infinite;
        }

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .category-section {
          margin-bottom: 80px;
        }

        .category-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          color: white;
          margin-bottom: 50px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
          position: relative;
        }

        .category-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, #ff6b6b, #4ecdc4);
          border-radius: 2px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 30px;
          padding: 0 20px;
        }

        .skill-card {
          perspective: 1000px;
          height: 200px;
          opacity: 0;
          animation: slideInUp 0.6s ease-out forwards;
        }

        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
          cursor: pointer;
        }

        .skill-card:hover .card-inner {
          transform: rotateY(180deg);
        }

        .card-front, .card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
        }

        .card-front {
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .card-back {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(15px);
          border: 2px solid;
          transform: rotateY(180deg);
        }

        .icon-container {
          font-size: 3rem;
          margin-bottom: 15px;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .icon-container {
          transform: scale(1.1) rotate(10deg);
        }

        .skill-name {
          font-size: 1.2rem;
          font-weight: 600;
          color: white;
          margin-bottom: 15px;
          text-align: center;
        }

        .skill-bar {
          width: 80%;
          height: 4px;
          border-radius: 2px;
          opacity: 0.8;
          animation: expandBar 1s ease-out 0.5s forwards;
          transform: scaleX(0);
          transform-origin: left;
        }

        .back-icon {
          font-size: 2.5rem;
          margin-bottom: 15px;
          animation: bounce 2s infinite;
        }

        .back-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
          margin-bottom: 20px;
          text-align: center;
        }

        .skill-level {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .level-bar {
          width: 100px;
          height: 8px;
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .level-fill {
          height: 100%;
          width: 85%;
          border-radius: 4px;
          animation: fillBar 1.5s ease-out;
        }

        .level-text {
          color: white;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .glow-effect {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 20px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .skill-card:hover .glow-effect {
          opacity: 1;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes expandBar {
          to {
            transform: scaleX(1);
          }
        }

        @keyframes fillBar {
          from {
            width: 0%;
          }
          to {
            width: 85%;
          }
        }

        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scaleX(1);
          }
          50% {
            transform: scaleX(1.1);
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 20px;
          }
          
          .skill-card {
            height: 160px;
          }
          
          .icon-container {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default TechStack;