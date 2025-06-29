export const METADATA = {
  author: "Shubh Porwal",
  title: "Portfolio | Shubh Porwal",
  description:
    "Shubh Porwal is a passionate Frontend Engineer, dedicated to crafting aesthetic and modern apps that captivate and engage users.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "@shubhporwal24",
  keywords: [
    "Shubh Porwal",
    "Frontend Engineer",
    "React Native Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1721378510/social-preview.png",
  language: "English",
  themeColor: "#000000",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Frontend Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: mkdestiny2410@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/manishkumar2901/",
  },
  {
    name: "github",
    url: "https://github.com/manish2418",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/mkdestiny510/",
  },
  {
    name: "twitter",
    url: "https://x.com/ManishKuma323",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "nodejs",
    "webpack",
    "vite",
    "firebase",
    "figma",
    "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "sanity-io"],
};

export const PROJECTS = [
  {
    name: "Airbnb",
    image: "/projects/airbnb.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Airbnb UI clone using NextJS + Tailwind CSS 🛏️",
    gradient: ["#F14658", "#DC2537"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["react", "nextjs", "tailwindcss", "mapbox"],
  },
  {
    name: "Medium",
    image: "/projects/medium.webp",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "Medium UI clone using NextJS + Tailwind CSS ✍🏻",
    gradient: ["#FFA62E", "#EA4D2C"],
    url: "https://shubh73-medium.vercel.app/",
    tech: ["typescript", "react", "nextjs", "tailwindcss", "sanity.io"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

export const WORK_CONTENTS = {
  GRAPEVINE: [
    {
      title: "CreateBytes",
      description:
        "CreateBytes is a multifaceted studio offering: design, marketing, tech, product & application development aids and solutions.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Developed & Design
        </div>
      ),
    },
    {
      title: "PeerRobotics",
      description:
        "Implemented 5+ key features for robots, including multiple paths, no-go zones, work zones, and joystick controls.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "Ciny.me",
      description:
        "Making one of the complex flow Mobilization where the inetraction takes place between advert and recruiters",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    {
      title: "SweepSheet",
      description:
        "Built the entire front-end, creating an Admin User Dashboard and features like Sweep Add/Create.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Frontend Engineer
        </div>
      ),
    },
    
  ],
  DUKAAN: [
    {
      title: "E4Educares",
      description:
        "E4Educares is the Education Consultancy Company,Help student to get best College",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          Revolutionizing College Selection, one click at a time
        </div>
      ),
    },
    {
      title: "E4Educares WebProduct",
      description:
        "Engineered a responsive React-based UI featuring RESTful API integration, shrinking average page load times by 600ms and supporting a 75 percent increase in concurrent users.Collaborated with Marketing Founders, leading to a 15 percent increase in user engagement",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white px-4">
          FullStack Engineer
        </div>
      ),
    },
    // {
    //   title: "Evolution",
    //   description:
    //     "Recognizing the need for improved performance and user engagement, I spearheaded the migration of the Dukaan App from native to React-Native for iOS and Android platforms. This strategic move led to a X% enhancement in app performance and a Y% boost in user engagement, representing a significant milestone in the app's evolution.",
    //   content: (
    //     <div className="h-full w-full flex items-center justify-center text-white px-4">
    //       Frontend Engineer
    //     </div>
    //   ),
    // },
    // {
    //   title: "Optimization",
    //   description:
    //     "Leveraging user feedback and analytics, I improved the seller web dashboard design, reducing bounce rates. Simultaneously, I overhauled the build process, slashing bundle size and boosting overall performance.",
    //   content: (
    //     <div className="h-full w-full flex items-center justify-center text-white px-4">
    //       Frontend Engineer Intern
    //     </div>
    //   ),
    // },
  ],
  // AVIATE: [
  //   {
  //     title: "Aviate",
  //     description:
  //       "Aviate is a preparation and mentorship platform for job-seekers that are seeking non-technical roles across top companies",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Finding the right job isn&apos;t fate, it&apos;s navigation
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Innovation",
  //     description:
  //       "I spearheaded the development of Q-Rate, their flagship product, a voice-based applicant screening platform. Moreover, I took initiatives to enhance user engagement and drive substantial increases in daily traffic. Additionally, I implemented an error-logging and bug reporting system, significantly diminishing user-reported bugs.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Frontend Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
  // SPACENOS: [
  //   {
  //     title: "Spacenos",
  //     description:
  //       "A dynamic startup dedicated to creating innovative products that make the world a better place.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         We build apps that solve problems for the next billion people
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Trailblazing",
  //     description:
  //       "I led the comprehensive overhaul of the Admin Portal, implementing CRUD features for all services and providers. Additionally, I architected a feature enabling precise customer location tracking and delivering insightful usage statistics. Through optimized and compressed file serving, I catalyzed a remarkable Yx increase in page speed, resulting in a X% boost in customer retention.",
  //     content: (
  //       <div className="h-full w-full flex items-center justify-center text-white px-4">
  //         Web Developer Intern
  //       </div>
  //     ),
  //   },
  // ],
};

export const GTAG = "G-5HCTL2TJ5W";
