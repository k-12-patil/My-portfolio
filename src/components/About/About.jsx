import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profilePhoto from '../../assets/profile/kajal-profile.jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Kajal Patil
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                
                'Data Science Student',
                
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I am a third-year Computer Science Engineering student in Data Science. I enjoy building software projects and exploring machine learning, full-stack development, and practical problem-solving.
          </p>
          {/* Recruiter actions / Resume link stays disabled until a real file is added */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          
            <a href="#contact" className="portfolio-secondary">Contact Me ↗</a>
            <a
              href="https://github.com/k-12-patil"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-secondary"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/kajal-patil-8a45262a5"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-secondary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-[#251f38] via-[#17122b] to-[#8245ec] drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]">
              <img
                src={profilePhoto}
                alt="Kajal Patil"
                className="w-full h-full object-cover object-[center_25%]"
              />
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
