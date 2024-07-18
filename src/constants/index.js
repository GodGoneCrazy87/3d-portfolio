import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    nfthing,
    garuda,
    carshowroom,
    bank,
    particles,
    threejs,
    logo,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Designer",
      icon: web,
    },
    {
      title: "Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Lecturer",
      company_name: "Garuda Classes",
      icon: garuda,
      iconBg: "#383E56",
      date: "April 2021 - March 2022",
      points: [
        "Working as a lecturer for a year taught me to be a better web developer,",
        "Clear Communication: Explaining complex ideas simply.",
        "Time Management: Balancing tasks and meeting deadlines.",
        "Organization: Keeping projects well-organized.",
        "Problem-Solving: Quickly finding solutions to challenges.",
        "Adaptability: Understanding and meeting diverse client needs.",
      ],
    },
    {
      title: "Frontend Designer & Developer",
      company_name: "NFThing",
      icon: nfthing,
      iconBg: "#E6DEDD",
      date: "June 2023 onwards",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Web Developer & Designer",
      company_name: "Janamejaya Technologies",
      icon: logo,
      iconBg: "#383E56",
      date: "May 2024 onwards",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Vishnurat proved me wrong.",
      name: "Viky",
      designation: "CeO",
      company: "Janamejaya Techologies",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Vishnurat does.",
      name: "Sudhanva K",
      designation: "CeO",
      company: "Garuda",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Vishnurat optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Pragna",
      designation: "CEO",
      company: "My home",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Showroom",
      description:
        "Web-based platform that allows users to search cars from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: carshowroom,
      source_code_link: "https://github.com/GodGoneCrazy87/car_showroom",
      weblink: "https://car-showroom-phi.vercel.app/",
    },
    {
      name: "HooBank",
      description:
        "Web application for banking website which enables businesses to accept card payments and expand their global reach.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: bank,
      source_code_link: "https://github.com/GodGoneCrazy87/Banking",
      weblink: "https://banking-delta-bice.vercel.app/",
    },
    {
      name: "Particles Portfolio",
      description:
        "Our portfolio website showcases projects and achievements, featuring a clean design, user-friendly navigation, and interactive elements to highlight our skills and expertise.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "framer-motion",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: particles,
      source_code_link: "https://github.com/GodGoneCrazy87/particles-portfolio",
      weblink:"https://particles-portfolio.vercel.app/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };