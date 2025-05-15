import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Work from './components/Work/Work'
import Skill from './components/Skills/Skill'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'
import Experience from './components/Experience/Experience'
import BlurBlob from './components/BlurBlob'
import ScrollToTop from "react-scroll-to-top";

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[#050414]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skill />
        <Experience />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop
        smooth
        color="#fff"
        style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          transform: "translateY(50%)",
          background: isHovered
            ? "linear-gradient(90deg, #a855f7, #3b9c3c)"
            : "linear-gradient(90deg, #3b9c3c, #a855f7)",
          boxShadow: isHovered
            ? "0 0 10px #fff, 0 0 20px #a855f7"
            : "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transformOrigin: "center",
          scale: isHovered ? "1.1" : "1",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}
