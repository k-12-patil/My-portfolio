import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      <div className="relative">
        {/* The line runs behind the marker column on desktop and the marker rail on mobile. */}
        <div className="absolute top-0 bottom-0 left-5 sm:left-1/2 sm:-translate-x-1/2 w-1 bg-white/90 rounded-full" />

        {experiences.map((experience, index) => {
          const cardPosition = index % 2 === 0 ? "sm:col-start-3" : "sm:col-start-1";

          return (
            <div
              key={experience.id}
              className="relative grid grid-cols-[40px_minmax(0,1fr)] sm:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] items-center gap-x-3 sm:gap-x-4 mb-12 last:mb-0"
            >
              {/* One timeline marker per entry; it stays in this row instead of floating over the whole timeline. */}
              <div className="col-start-1 sm:col-start-2 row-start-1 flex justify-center items-center z-20 pointer-events-none">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-4 border-[#8245ec] bg-white flex items-center justify-center overflow-hidden p-1 shadow-[0_0_12px_rgba(130,69,236,0.45)]">
                  {experience.img ? (
                    <img
                      src={experience.img}
                      alt={experience.logoAlt || `${experience.company} timeline logo`}
                      className="w-full h-full object-contain rounded-full"
                    />
                  ) : (
                    <span className="text-sm font-bold text-purple-700">
                      {experience.monogram || experience.company.slice(0, 1)}
                    </span>
                  )}
                </div>
              </div>

              <article
                className={`col-start-2 ${cardPosition} row-start-1 relative z-0 w-full min-w-0 sm:max-w-md p-4 sm:p-7 rounded-2xl shadow-2xl border border-white/80 bg-gray-900/95 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.25)] transition-shadow duration-300 hover:shadow-[0_0_26px_2px_rgba(130,69,236,0.4)]`}
              >
                <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-xl bg-white flex items-center justify-center overflow-hidden border border-white/20 p-2">
                    {experience.img ? (
                      <img
                        src={experience.img}
                        alt={experience.logoAlt || `${experience.company} logo`}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-2xl font-extrabold text-purple-700">
                        {experience.monogram || experience.company.slice(0, 1)}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-white break-words">
                        {experience.role}
                      </h3>
                      <h4 className="text-sm sm:text-base text-gray-300 break-words">
                        {experience.company}
                      </h4>
                    </div>
                    {experience.date && (
                      <p className="text-sm text-gray-500 mt-2">
                        {experience.date}
                      </p>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-gray-300 leading-relaxed break-words">
                  {experience.desc}
                </p>
                <div className="mt-4">
                  <h5 className="font-semibold text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2 gap-2">
                    {experience.skills.map((skill) => (
                      <li
                        key={skill}
                        className="bg-[#8245ec] text-white px-4 py-1.5 text-xs sm:text-sm rounded-lg border border-purple-300/50"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
