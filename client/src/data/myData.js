import { AiOutlineStock } from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";
import allStar from "../assets/watch.jpg";
import carV1 from "../assets/CarVersion1.PNG";
import lounge from "../assets/drink.png";
import portfolio2 from "../assets/bgMontreal.jpg";
import carV2 from "../assets/lambo.jpg";

const navListData = [
  { _id: 1, href: "/", name: "Home", active: true },
  { _id: 2, href: "/about", name: "About", active: false },
  { _id: 3, href: "/portfolio", name: "Portfolio", active: false },
  { _id: 4, href: "/contact", name: "Contact", active: false },
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
    description: "",
    projectImg: allStar,
    link: "#",
  },
  {
    category: "SCHOOL",
    name: "Car-Project-1",
    description: "",
    projectImg: carV1,
    link: "#",
  },
  {
    category: "UI/UX",
    name: "Lounge Website UI/UX",
    description: "",
    projectImg: lounge,
    link: "#",
  },
  {
    category: "APP",
    name: "Car Project-2 ",
    description:
      "Remade This APP project with a better understanding of fundation",
    projectImg: carV2,
    link: "#",
  },
  {
    category: "WEB",
    name: "This Portfolio",
    description: "",
    projectImg: portfolio2,
    link: "#",
  },
];
export { projects };

/* how export multiple or put everything in a constant or deconstruct when outside */
