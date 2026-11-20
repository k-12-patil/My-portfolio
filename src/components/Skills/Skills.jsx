// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo, certifications } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
      Technical skills with a growing focus on Data Science, Machine Learning, and programming.
      </p>
    </div>

    {/* Skill Categories */}
    <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
      {SkillsInfo.map((category) => (
        <div
          key={category.title}
          className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
        >
          <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
            {category.title}
          </h3>

          {/* Skill Items - 3 per row on larger screens */}
          <Tilt
            key={category.title}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 sm:py-2 sm:px-2 text-center"
                >
                  {skill.logo ? (
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                    />
                  ) : (
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-purple-500/20 border border-purple-400/50 text-purple-200 text-[9px] sm:text-[10px] font-bold flex items-center justify-center">
                      {skill.short}
                    </span>
                  )}
                  <span className="text-xs sm:text-sm text-gray-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </Tilt>
        </div>
      ))}
    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-2">
      <div className="bg-gray-900 rounded-2xl border border-white/15 p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Certifications & Badges</h3>
        <ul className="space-y-3 text-gray-300 text-sm">
          {certifications.map((item) => <li key={item} className="flex gap-2"><span className="text-purple-400">◆</span><span>{item}</span></li>)}
        </ul>
      </div>
      <div className="bg-gray-900 rounded-2xl border border-white/15 p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Additional Skills</h3>
        <p className="text-sm text-gray-300 leading-7"><strong className="text-white">Soft skills:</strong> Time Management, Collaboration, Adaptability, Critical Thinking, Problem Solving, Empathy</p>
        <p className="text-sm text-gray-300 leading-7 mt-3"><strong className="text-white">Languages:</strong> English, Hindi, Marathi</p>
      </div>
    </div>
  </section>
);

export default Skills;
