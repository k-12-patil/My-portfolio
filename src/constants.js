import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import mcLogo from './assets/tech_logo/mc.png';
import hiresnixLogo from './assets/company_logo/hiresnix-logo.jpeg';
import sumagoScopeLogo from './assets/company_logo/sumago-scope-logo.jpeg';
import governmentPolytechnicLogo from './assets/education_logo/government-polytechnic-nashik.jpeg';
import shirpurEducationSocietyLogo from './assets/education_logo/shirpur-education-society.jpeg';

export const SkillsInfo = [
  {
    title: 'Data Science & Machine Learning',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'SQL', logo: mysqlLogo },
      { name: 'Machine Learning (ML)', logo: null, short: 'ML' },
      { name: 'Data', logo: null, short: 'DATA' },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C++', logo: cppLogo },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Node.js', logo: nodejsLogo },
    ],
  },
  {
    title: 'Databases & Tools',
    skills: [
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'SQL Server', logo: mcLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: hiresnixLogo,
    logoAlt: 'Hiresnix company logo',
    role: 'Intern',
    company: 'Hiresnix',
    date: 'Jul 2026 – Present',
    desc: 'Developing Data Science-related projects.',
    skills: ['Python', 'SQL', 'ML', 'Data'],
  },
  {
    id: 1,
    img: sumagoScopeLogo,
    logoAlt: 'Sumago Center of Practical Excellence logo',
    role: 'Full Stack Development Intern',
    company: 'Sumago Infotech Pvt. Ltd. — Nashik',
    date: '',
    desc: 'Industry internship experience in full-stack development.',
    skills: ['Full-Stack Development'],
  },
];

export const education = [
  {
    id: 0,
    img: shirpurEducationSocietyLogo,
    school: 'R.C. Patel Institute of Technology, Shirpur',
    date: '2025–2028',
    grade: '8.57 CGPA',
    desc: 'Currently pursuing a Bachelor of Technology in Computer Science Engineering.',
    degree: 'B.Tech — Computer Science Engineering',
  },
  {
    id: 1,
    img: governmentPolytechnicLogo,
    school: 'Government Polytechnic, Nashik',
    date: '2022–2025',
    grade: '88.94%',
    desc: 'Completed a Diploma in Computer Engineering.',
    degree: 'Diploma — Computer Engineering',
  },
];

export const projects = [
  {
    id: 0,
    title: 'RSNA Knee Abnormality Analysis',
    status: 'In Progress · Current Semester Project',
    description: 'A machine-learning project exploring knee MRI data for abnormality analysis. The current work focuses on preparing MRI studies and associated labels for model experimentation.',
    image: null,
    tags: ['Python', 'Machine Learning', 'PyTorch', 'MRI Analysis'],
    github: '',
    webapp: '',
  },
  {
    id: 1,
    title: 'Glam Connect',
    status: 'Project',
    description: 'A beauty parlour and e-commerce management web application concept, with a frontend built using HTML, CSS and JavaScript and a backend using Node.js and MongoDB.',
    image: null,
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    github: '',
    webapp: '',
  },
];

export const certifications = [
  'AWS Graduate — Cloud Foundations: Training Completion Badge',
  'Salesforce Trailhead — 5 Badges',
  'Coursera — Machine Learning in Production',
  'Coursera — AWS Certified DevOps Engineer',
];
