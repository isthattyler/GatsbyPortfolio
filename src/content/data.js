import { nanoid } from 'nanoid';

export const headData = {
  title: 'Tyler | Software Engineer',
  lang: 'en',
  description: 'Backend-focused Software Engineer specializing in Java, Python, and scalable systems.',
};

export const heroData = {
  title: '',
  name: 'Tyler',
  subtitle: "I'm ",
  cta: '',
};

export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I'm a backend-focused software engineer who enjoys turning complex problems into clean, reliable systems. I work primarily with Java and Python, building APIs and services that handle real traffic.",
  paragraphTwo:
    "When I'm not deep in Spring Boot configs, I'm probably refining a database schema or writing scripts to automate the boring stuff. Currently working at Optum as a Software Engineer.",
  paragraphThree:
    "Feel free to reach out anytime — I'm always open to discussing new projects or opportunities.",
  resume: 'https://shorturl.at/eiI45',
};

export const projectsData = [
  {
    id: nanoid(),
    title: 'Flappy Bird Engine',
    info: 'A custom game loop built from scratch in Java. Implemented physics-based movement, collision detection, and procedural pipe generation without relying on external game libraries.',
    info2: 'Java, Java Swing, Maven',
    url: '',
    repo: 'https://github.com/isthattyler/FlappyBird',
  },
  {
    id: nanoid(),
    title: 'Algorithm Sandbox',
    info: 'A collection of coding challenges solved with clean, efficient Python. Covers sorting algorithms, dynamic programming, tree traversals, and graph theory problems with detailed explanations.',
    info2: 'Python, Algorithms',
    url: '',
    repo: 'https://github.com/isthattyler/InterviewProblem',
  },
];

export const contactData = {
  cta: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
  btn: 'Email Me',
  email: 'tyler7nguyen@duck.com',
};

export const footerData = {
  networks: [
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

export const githubButtons = {
  isEnabled: false,
};