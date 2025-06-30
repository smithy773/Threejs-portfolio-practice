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

const logoIconsList: { imgPath: string }[] = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
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

const techStackImgs: { name: string; imgPath: string }[] = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons: {
  name: string;
  modelPath: string;
  scale: number;
  rotation: number[];
}[] = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
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

const testimonials: {
  name: string;
  mentions: string;
  review: string;
  imgPath: string;
}[] = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
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
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
