import { AiOutlineStock } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import allStar from "../assets/AllStarProject.PNG";
import carV1 from "../assets/CarVersion1.PNG";
import lounge from "../assets/Lounge.PNG";
import portfolio2 from "../assets/portfolio2.PNG";
import carV2 from "../assets/carV2.PNG";

const skillsData = [
  { skillName: "Html", skillLength: 90 },
  { skillName: "CSS", skillLength: 75 },
  { skillName: "JavaScript", skillLength: 60 },
  { skillName: "React.Js", skillLength: 70 },
  { skillName: "Figma", skillLength: 50 },
];

export { skillsData };

const interestsData = [
  { interest: "Cars", interestImg: "🚗💨" },
  { interest: "Stock Market", interestImg: "📈" },
  { interest: "Coffee", interestImg: "☕" },
];

export { interestsData };

const navPortfolio = [
  { category: "ALL" },
  { category: "UI/UX" },
  { category: "APP" },
  { category: "WEB" },
];

export { navPortfolio };

const projects = [
  {
    category: "APP",
    name: "E-commerce School Project",
    description: "",
    projectImg: allStar,
  },
  {
    category: "APP",
    name: "Car-Project-1",
    description: "",
    projectImg: carV1,
  },
  {
    category: "UI/UX",
    name: "Lounge Website UI/UX",
    description: "",
    projectImg: lounge,
  },
  {
    category: "APP",
    name: "Car Project-2 ",
    description:
      "Remade This APP project with a better understanding of fundation",
    projectImg: portfolio2,
  },
  {
    category: "WEB",
    name: "This Portfolio",
    description: "",
    projectImg: carV2,
  },
];
export { projects };

/* how export multiple or put everything in a constant or deconstruct when outside */
