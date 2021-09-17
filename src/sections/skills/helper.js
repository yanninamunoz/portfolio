import Design from "../../assets/design.png";
import Bug from "../../assets/bug.png";
import OthersSkills from "../../assets/skills.png";

export const title = "Skills";
export const body = "In my career, in addition to learning frontend, I was learning other skills that complement my work.";

const designText = "Design tools";
const skillsText = "Others";
const testingText = "Testing";

export const data = [
  {
    id: 1,
    text: designText,
    body: ["Figma", "Photoshop", "Sony Vegas"],
    src: Design,
  },
  {
    id: 2,
    text: skillsText,
    body: [
      "Power BI",
      "Google Analytics",
      "GIT",
      "GitHub",
      "Bitbucket",
      "GitLab",
      "Jira",
      "Azure DevOps"
    ],
    src: OthersSkills,
  },
  {
    id: 3,
    text: testingText,
    body: ["Unit Testing", "Functional Testing"],
    src: Bug,
  },
];
