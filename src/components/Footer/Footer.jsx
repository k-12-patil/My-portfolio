import React from "react";

const Footer = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold text-purple-500">Kajal Patil</h2>
        <p className="text-sm text-gray-400 mt-2">Computer Science Engineering Student · Data Science</p>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-5">
          {[{ name: "About", id: "about" }, { name: "Skills", id: "skills" }, { name: "Experience", id: "experience" }, { name: "Projects", id: "work" }, { name: "Education", id: "education" }, { name: "Contact", id: "contact" }].map((item) => (
            <button key={item.id} onClick={() => handleScroll(item.id)} className="hover:text-purple-400 text-sm">{item.name}</button>
          ))}
        </nav>
        <p className="text-sm text-gray-500 mt-6">© {new Date().getFullYear()} Kajal Patil. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
