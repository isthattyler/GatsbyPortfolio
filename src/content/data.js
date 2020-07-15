import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Tyler | Developer',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Tyler',
  subtitle: "I'm a",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a UConn graduate and a Software Engineer with a focus on Backend Development.",
  paragraphTwo:
    'I like to build applications and learn new technology to grow professionally in the technology field.',
  paragraphThree: 'Feel free to reach out to me anytime via email.',
  resume: 'https://shorturl.at/eiI45',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'FlappyBird.png',
    title: 'Flappy Bird Clone',
    info: 'My own implementation of the popular Flappy Bird game',
    info2: 'Utilized: Java, Java Swing Framework, Maven',
    url: '',
    repo: 'https://github.com/isthattyler/FlappyBird',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Interview Problem',
    info: 'Solving coding problems',
    info2: 'Utilized: Python',
    url: '',
    repo: 'https://github.com/isthattyler/InterviewProblem',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email Me',
  email: 'tyler.t.nguyen@uconn.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/isthatthinh/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/tylertnguyen/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/isthattyler',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
