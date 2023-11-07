import allStar from "../assets/watch.jpg";
import carV1 from "../assets/CarVersion1.PNG";
import lounge from "../assets/drink.png";
import portfolio2 from "../assets/bgMontreal.jpg";
import carV2 from "../assets/lambo.jpg";

const navListData = [
  { _id: 1, href: "/", name: "Home", active: true },
  { _id: 2, href: "/about", name: "About", active: false },
  { _id: 3, href: "/portfolio", name: "Portfolio", active: false },
  { _id: 4, href: "/contact", name: "Contact & Resume", active: false },
];

export default navListData;

const skillsData = [
  { name: "Html", length: 90 },
  { name: "CSS", length: 80 },
  { name: "JavaScript", length: 60 },
  { name: "React.Js", length: 70 },
  { name: "Figma", length: 50 },
];

export { skillsData };

const interestsData = [
  { interest: "Cars", interestImg: "🚗💨" },
  { interest: "Stock Market", interestImg: "📈" },
  { interest: "Coffee", interestImg: "☕" },
  { interest: "Art", interestImg: "🖼️" },
  { interest: "Gaming", interestImg: "🎮" },
];

export { interestsData };

const navPortfolio = [
  { category: "ALL" },
  { category: "SCHOOL" },
  { category: "UI/UX" },
  { category: "APP" },
  { category: "WEB" },
];

export { navPortfolio };

const projects = [
  {
    category: "SCHOOL",
    name: "E-commerce School Project",
    description:
      "E-Commerce app for wearable tech (Group Project), I was part of the FrontEnd Team,  [React, JS, CSS, HTML] ",
    projectImg: allStar,
    link: "https://cb-group-project-client.vercel.app/",
  },
  {
    category: "SCHOOL",
    name: "Car-Project-1",
    description:
      "App to set-up car meetings [React, JS, CSS, HTML, NodeJS, MongoDb] (Being fixed now)",
    projectImg: carV1,
    link: "#",
  },
  {
    category: "UI/UX",
    name: "Lounge Website UI/UX",
    description:
      "Made a figma page than a landing page following a tutorial in order to learn and pratice Figma & BootStrap [React, BootStrap, HTML, CSS]",
    projectImg: lounge,
    link: "https://davidvida1.github.io/Lounge/",
  },
  {
    category: "APP",
    name: "Car Project-2 ",
    description:
      "Reworked the design of CarApp 1 to set-up car meetings with a new design FrontEnd, Login function incoming [React, JS, CSS, HTML, NodeJS, MongoDb]",
    projectImg: carV2,
    link: "https://davidvida1.github.io/carV2/",
  },
  {
    category: "WEB",
    name: "This Portfolio",
    description: "This Portfolio was made by Me!! [React, JS, CSS, HTML]",
    projectImg: portfolio2,
    link: "https://davidvida1.github.io/",
  },
];
export { projects };

/* how export multiple or put everything in a constant or deconstruct when outside */
