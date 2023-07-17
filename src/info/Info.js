import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

export let colors = ["rgb(247, 187, 197)", " rgb(111, 20, 193)"];

export const info = {
  firstName: "Abhishek",
  lastName: "Aggarwal",
  initials: "Ak",
  position: "a MERN Stack Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "fueled by coffee",
    },
    {
      emoji: "🌎",
      text: "based in the India",
    },
    {
      emoji: "💻",
      text: "competitive programmer",
    },
    {
      emoji: "📖",
      text: "B.Tech Student at Delhi Technological University",
    },
    {
      emoji: "📧",
      text: "abhishekaggarwal2801@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://www.instagram.com/ashu.aggarwal_/",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/Koro-Coder",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/abhishek-aggarwal-375b661b0/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: "I am Abhishek Aggarwal, a passionate MERN stack developer and a dedicated student pursuing a B.Tech degree at Delhi Technological University. With a strong foundation in Data Structures and Algorithms (DSA), and competitive programming, I strive to create efficient and elegant solutions to complex problems.",
  skills: {
    proficientWith: [
      "C++",
      "javascript",
      "react",
      "git",
      "node.Js",
      "mongoDB",
      "html5",
      "css3",
      "express",
    ],
    exposedTo: ["python", "Java", "ML Concepts", "AI Algorithms"],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "chess",
      emoji: "♟",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "stargazing",
      emoji: "✨",
    },
  ],
  portfolio: [
    {
      title: "Project 1",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock1,
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: mock2,
    },
  ],
};
