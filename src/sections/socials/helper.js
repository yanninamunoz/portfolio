import { faLocationArrow, faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithubSquare } from "@fortawesome/free-brands-svg-icons";

export const data = [
  {
    id: 1,
    icon: faLinkedinIn,
    type: "brands",
    text: "Linkedin",
    link: "https://uy.linkedin.com/in/yanninamunozz",
  },
  {
    id: 2,
    icon: faGithubSquare,
    type: "brands",
    text: "Github",
    link: "https://github.com/yanninamunoz",
  },
  { id: 3, icon: faLocationArrow, text: "Canelones, Uruguay", link: "" },
  {
    id: 4,
    icon: faPhoneSquareAlt,
    text: "+59894646481",
    link: "tel:+59894646481",
  },
];
