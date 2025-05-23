import React from "react";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/Hasan.png";
import Typewriter from "typewriter-effect";


const About = () => {
  return (
    <section
      id="about"
      className="py-4 select-none px-[7vw] md:px-[7vw] lg:px-[18vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hey✌️I'm
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            <span className="">A</span>hteshamul Ha
            <span className="text-shop_light_green">s</span>an
          </h2>
          {/* Skills Heading with Typing Effect */}
          <div className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <h1 className="flex gap-5 items-center">
              <span className="text-white">A</span>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer...",
                    "Frontend Developer...",
                    "Backend Developer...",
                    "FullStack Developer !",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a dedicated and passionate web developer with expertise in
            JavaScript, React.js, React Native, Next.js, Node.js, MongoDB, and
            Socket.io. I’m a fast learner with a collaborative mindset, focused
            on building dynamic, high-performance web applications and
            delivering seamless user experiences through modern, innovative
            technologies.
          </p>
          {/* Resume Button */}
          <div className="flex gap-5 items-center">
            <a
              href="https://drive.google.com/file/d/1ewnKK8vmY0N41JBsjLL8_HB748z3nu5c/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
            <a
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
              href="http://api.whatsapp.com/send?phone=+8801924542671"
            >
              Hire Me
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
            <img
              src={profileImage}
              alt="Tarun Kaushik"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
