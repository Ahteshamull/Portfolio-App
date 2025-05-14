// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import androidStudioLogo from "./assets/tech_logo/android.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import reactNativeLogo from "./assets/tech_logo/reactnative.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";


// Experience Section Logo's
import cpointLogo from "./assets/company_logo/cpoint.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/download.png";
import bsaLogo from "./assets/education_logo/download.jpg";
import vpsLogo from "./assets/education_logo/download (1).jpg";

// Project Section Logo's
import AhshopLogo from "./assets/work_logo/work1.png";
import EventManagLogo from "./assets/work_logo/work6.png";
import ButazzoLogo from "./assets/work_logo/Work5.png";
import SilverLogo from "./assets/work_logo/work4.png";
import NextELogo from "./assets/work_logo/work3.png";
import SocketChatLogo from "./assets/work_logo/work2.png";
import GithubLogo from "./assets/work_logo/work9.png";
import FchatLogo from "./assets/work_logo/work8.jpg";
import innovativeLogo from "./assets/work_logo/work7.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      
      { name: "React JS", logo: reactjsLogo },
      { name: "Android Studio", logo: androidStudioLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "React Native", logo: reactNativeLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Compass", logo: mcLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: cpointLogo,
    role: "Full Stack Developer",
    company: "Computer Point Bd",
    date: "May 2025 - Present",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
        "Redux",
      "Express JS",	
      " Next Js",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "Creative It Institute",
    date: "Dec 2023 - March 2025",
    desc: "I completed a one-year MERN Stack development course at Creative IT, gaining skills in MongoDB, Express.js, React.js, and Node.js. The program focused on real-world projects and teamwork, helping me build dynamic full-stack applications. This training prepared me for a professional career in modern web development..",
    degree: "MERN Stack Development",
  },
  {
    id: 1,
    img: bsaLogo,
    school: "Sherpur Polytechnic Institute",
    date: "April 2019 - May 2023",
    grade: "3.29 CGPA",
    desc: "I have completed a 4-year Diploma in Computer Engineering from Sherpur Polytechnic Institute. During this time, I gained strong foundational knowledge in computer hardware, software, networking, and programming. The program enhanced my technical and problem-solving skills, preparing me for various roles in the IT sector and further professional development.",
    degree: "Diploma in Computer Engineering",
  },
  {
    id: 2,
    img: vpsLogo,
    school: "Hirannoyee High School, Nalitabari,Sherpur",
    date: "Apr 2014 - Feb 2019",
    grade: "4.06 GPA",
    desc: "I completed my SSC from Hirannoyee High School with a concentration in Science. During this time, I developed a strong foundation in Physics, Chemistry, Mathematics, and Biology. ",
    degree: "Secondary School Certificate. ,(SSC)",
  }
  
];

export const projects = [
  {
    id: 0,
    title: "Ah Shop E-Commerce",
    description:
      "I designed an e-commerce website named Ah Shope using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse products, add items to the cart, and securely make purchases. I implemented features like user authentication, product management, and order processing, creating a seamless and efficient online shopping experience with a user-friendly interface.",
    image: AhshopLogo,
    tags: [
      "JavaScript",
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Npm Packages",
    ],
    github: "https://github.com/Ahteshamull/Class_E-Commerce-B_F_D.git",
    webapp: "https://ah-e-commerce.netlify.app/",
  },
  {
    id: 1,
    title: "Event Management System",
    description:
      "I designed an Event Management website named Event Management System using the MERN stack (MongoDB, Express.js, React.js, Node.js). The platform allows users to browse products, add items to the cart, and securely make purchases. I implemented features like user authentication, product management, and order processing, creating a seamless and efficient online shopping experience with a user-friendly interface.",
    image: EventManagLogo,
    tags: [
      "JavaScript",
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Npm Packages",
    ],
    github: "https://github.com/Ahteshamull/Event-management.git",
    webapp: "https://eventmanagement-full-stack.netlify.app/",
  },
  {
    id: 2,
    title: "Butazzo Pizza Shop",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: ButazzoLogo,
    tags: [, "HTML", "CSS", "React JS", "JavaScript", "Npm Packages"],
    github: "https://github.com/Ahteshamull/Butazzo-Pizza.git",
    webapp: "https://butazzo-pizza.netlify.app/",
  },
  {
    id: 3,
    title: "Silver Hawk",
    description:
      "I designed a website named Silvar Hawk using HTML and CSS, focusing on a clean, responsive layout with a user-friendly interface, providing an engaging and visually appealing browsing experience.",
    image: SilverLogo,
    tags: ["HTML", "CSS"],
    github: "https://github.com/Ahteshamull/silver-hawk.git",
    webapp: "https://ahteshamull.github.io/silver-hawk/",
  },
  {
    id: 4,
    title: "E@STORE E-Commerce",
    description:
      "I designed E@STORE, an e-commerce platform using MERN technology with Next.js and Sanity& Clerk. The website features seamless product browsing, secure checkout, and dynamic content management. Next.js enabled fast rendering and SEO optimization, while Sanity provided a flexible backend for efficient content updates. The project focuses on creating a smooth, responsive, and scalable online shopping experience.",
    image: NextELogo,
    tags: [
      "JavaScript",
      "React JS",
      "Node.js",
      "MongoDB",
      "Sanity",
      "Next js",
      "Clerk",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Npm Packages",
    ],
    github: "https://github.com/Ahteshamull/Next.js-E-Commerce.git",
  },
  {
    id: 5,
    title: "Real Time Chat App",
    description:
      "I designed a real-time chat application using MERN technology and Socket.IO. The app enables instant messaging between users with live notifications, real-time updates, and message history. Socket.IO ensures efficient communication, while the MERN stack handles user authentication, data storage, and seamless performance. The app offers a smooth and interactive chat experience across devices.",
    image: SocketChatLogo,
    tags: [
      "JavaScript",
      "React JS",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Redux",
      "Socket.IO",
      "Npm Packages",
    ],
    github: "https://github.com/Ahteshamull/Real-Time-ChatApp.git",
  },
  {
    id: 6,
    title: "Git Hub Profile",
    description:
      "I updated my GitHub profile using HTML and CSS, creating a clean, responsive layout to showcase my projects and skills.",
    image: GithubLogo,
    tags: ["HTML", "CSS", "React"],
  },
  {
    id: 7,
    title: "Firebase Chatting Application",
    description:
      "I designed a real-time chat application using React and Firebase, integrating various NPM packages for enhanced functionality. The app supports instant messaging, user authentication, and live notifications. Firebase ensures secure data storage and real-time updates, offering a smooth and interactive communication experience for users.",
    image: FchatLogo,
    tags: [
      "JavaScript",
      "React JS",
      "Bootstrap",
      "Firebase",
      "Redux",
      "Npm Packages",
    ],
    github: "https://github.com/Ahteshamull/ChatApp.git",
  },
  {
    id: 8,
    title: "Innovative",
    description:
      "I designed an innovative blog website using HTML, SCSS, and JavaScript, focusing on a clean, interactive layout with smooth navigation, responsive design, and engaging user experience for readers.",
    image: innovativeLogo,
    tags: ["HTML", "SCSS", "Javascript"],
    github: "https://github.com/Ahteshamull/2nd-sass.git",
  },
];
