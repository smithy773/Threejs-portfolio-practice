const navLinks: { name: string; link: string }[] = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words: { text: string; imgPath: string }[] = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems: { value: number; suffix: string; label: string }[] = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 6, suffix: "+", label: "Completed Projects" },
];

const abilities: { imgPath: string; title: string; desc: string }[] = [
  {
    imgPath: "/images/seo.png",
    title: "Motivated to learn and grow",
    desc: "Delivering high-quality results while maintaining attention to every detail is my goal. I want to expand my knowledge and get professional experience so I can achieve it.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Transparency and clarity is a must when working with other people. I want everybody's input when working on a team project. Every team member must be satisfied with the final product.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Great things take time, but they shouldn't take too much. Finishing projects in the agreed timeframe without sacrificing quality is of utmost importance to me.",
  },
];

const expCards: {
  imgPath: string;
  logoPath: string;
  title: string;
  date: string;
  addInfo: string[];
}[] = [
  {
    imgPath: "", // "/images/exp1.png"
    logoPath: "", // "/images/logo1.png"
    title: "Working on projects, searching for a job opportunity",
    date: "April 2025 - Present",
    addInfo: [
      "After graduating from Telerik Academy's Alpha JavaScript course I received my Ministry of Education certificate for Application Programming with JavaScript.",
      "Started working on all sorts of web projects, learned how to properly host websites using Firebase Hosting.",
      "Focused on learning and gathering experience by coding my own projects and reviewing other programmers' code.",
    ],
  },
  {
    imgPath: "", // "/images/exp2.png"
    logoPath: "", // "/images/logo2.png"
    title: "Student at Telerik Academy's Alpha JavaScript course",
    date: "October 2024 - April 2025",
    addInfo: [
      "Studied JavaScript, React, HTML, CSS, OOP principles, different programming paradigms, AJAX, DSA, Recursion and more.",
      "Practiced JavaScript's core - from learning the difference between let, const and var to using array methods and working with objects and classes.",
      "Graduated after working on 3 Team Projects - one that uses GIPHY API to display/search/favorite GIF, a forum for sharing outdoor adventures (VIA-Outdoors) and one that acts as a real-time messenger web app that can be used similarly to Teams (VIALogue)",
    ],
  },
  {
    imgPath: "", ///images/exp3.png
    logoPath: "", ///images/logo3.png
    title:
      "Working at TELUS International, learning programming in my free time",
    date: "August 2023 - July 2024",
    addInfo: [
      "Used English to assist foreign customers with their issues, achieving 95%+ satisfaction rate while simultaneously helping coworkers.",
      "In my free time, I took up learning HTML, CSS and JavaScript to prepare for Telerik Academy's Alpha JavaScript course.",
      "Finished some basic FrontendMentor projects available on my GitHub Repositories page to practice basic HTML, CSS and JavaScript - dynamic styling, event handling, etc.",
    ],
  },
];

const expLogos: { name: string; imgPath: string }[] = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs: { name: string; imgPath: string }[] = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  navLinks,
};
