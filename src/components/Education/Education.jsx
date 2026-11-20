import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      <div className="relative">
        {/* The line stays centered behind the row-based timeline markers. */}
        <div className="absolute top-0 bottom-0 left-5 sm:left-1/2 sm:-translate-x-1/2 w-1 bg-white/90 rounded-full" />

        {education.map((edu, index) => {
          const cardPosition = index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-3";

          return (
            <div
              key={edu.id}
              className="relative grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] items-center gap-x-3 sm:gap-x-4 mb-12 last:mb-0"
            >
              <div className="col-start-1 sm:col-start-2 row-start-1 flex justify-center items-center z-20 pointer-events-none">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#8245ec] bg-white flex items-center justify-center overflow-hidden p-1 shadow-[0_0_12px_rgba(130,69,236,0.45)]">
                  {edu.img ? (
                    <img
                      src={edu.img}
                      alt={`${edu.school} timeline logo`}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <span className="text-sm font-bold text-purple-700">
                      {edu.school.slice(0, 1)}
                    </span>
                  )}
                </div>
              </div>

              <article
                className={`col-start-2 ${cardPosition} row-start-1 relative z-0 w-full min-w-0 sm:max-w-md p-4 sm:p-7 rounded-2xl shadow-2xl border border-white/80 bg-gray-900/95 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] transition-shadow duration-300 hover:shadow-[0_0_26px_2px_rgba(130,69,236,0.4)]`}
              >
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-white/20 p-2">
                    {edu.img ? (
                      <img
                        src={edu.img}
                        alt={`${edu.school} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-xl font-bold text-purple-800">
                        {edu.school.slice(0, 1)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col justify-between min-w-0">
                    <h3 className="text-lg sm:text-xl font-semibold text-white break-words">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm sm:text-base text-gray-300 break-words">
                      {edu.school}
                    </h4>
                    <p className="text-sm text-gray-500 mt-2">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-300 font-semibold break-words">
                  Grade: {edu.grade}
                </p>
                <p className="mt-3 text-gray-300 leading-relaxed break-words">
                  {edu.desc}
                </p>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
