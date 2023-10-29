import carSVG from "../assets/carSvg.svg";
import { AiOutlineStock } from "react-icons/ai";

const skillsData = [
  { skillName: "Html", skillLength: 90 },
  { skillName: "CSS", skillLength: 75 },
  { skillName: "JavaScript", skillLength: 60 },
  { skillName: "ReactJs", skillLength: 70 },
  { skillName: "Figma", skillLength: 50 },
];

export { skillsData };

const interestsData = [
  { interest: "cars", interestImg: carSVG },
  { interest: "Stock Market", interestImg: <AiOutlineStock /> },
  { interest: "Stock Market" },
];

export { interestsData };

/* how export multiple or put everything in a constant or deconstruct when outside */
