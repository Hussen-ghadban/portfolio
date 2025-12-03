import { Mail, Phone, Github, Linkedin} from 'lucide-react';
import { type Project, type SkillCategory, type SocialLink } from './types';

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Python", "R"]
  },
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "React", "Redux", "Next.js", "Tailwind CSS", "Material UI", "Tanstack Query", "ShadCN"]
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "NestJS", "GraphQL", "REST APIs", "MicroServices", "WebSocket.io"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Redis", "Mongoose"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "Jenkins", "AWS", "CI/CD"]
  },
  {
    title: "Data Analysis",
    skills: ["Tableau", "Power BI", "Excel", "Statistical Modeling"]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    title: "Doctor & Pharmacy Platform",
    description: "A healthcare platform connecting doctors, pharmacies, and patients with features for prescription management, validation, and secure authentication. Built with a modular backend architecture and integrated with PostgreSQL and AWS services.",
    tags: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "AWS S3", "Neon"],
    icon: "Stethoscope"
  },
  {
    title: "Deal – Mobile App Backend",
    description: "Backend and admin panel for a marketplace app enabling users to post and request products. Focused on performance, authentication, and integrations. Deployed with a full CI/CD pipeline.",
    tags: ["Express.js", "TypeScript", "MongoDB", "React", "Redux", "Docker", "CI/CD"],
    icon: "Monitor"
  },
  {
    title: "E-Commerce Website",
    description: "An e-commerce platform for product browsing and cart management. Built with a scalable architecture, deployed to AWS, and optimized for performance and maintainability.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "AWS"],
    icon: "ShoppingBag"
  },
  {
    title: "Interactive Experiment Sim",
    description: "A web-based MVP for simulating interactive biology and physics experiments in real time. Designed an engaging and responsive interface with real-time physics rendering and AI assistant.",
    tags: ["React", "TypeScript", "Konva", "Pixi.js", "Matter.js", "OpenAI API"],
    icon: "FlaskConical"
  },
  {
    title: "Hotel Management System",
    description: "Comprehensive hotel management system backend using a microservices architecture. Implemented secure authentication and role-based access control for staff roles.",
    tags: ["Node.js", "Express.js", "TypeScript", "Prisma", "PostgreSQL", "RBAC"],
    icon: "Hotel"
  },
  {
    title: "Learning Management System",
    description: "Comprehensive LMS built with a microservices architecture. Focused on scalability, secure authentication, and role-based access control for efficient multi-role operations.",
    tags: ["Express.js", "REST API", "TypeScript", "PostgreSQL", "Prisma", "Zod"],
    icon: "GraduationCap"
  },
  {
    title: "Full-Featured Blog Platform",
    description: "Robust blog platform using the MERN stack. Users can create, edit, and delete posts, upload images, and engage with content. Admin users can moderate posts via a custom admin panel.",
    tags: ["React", "Node.js", "MongoDB", "Mongoose", "Express.js", "REST API"],
    icon: "PenTool"
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    value: "houssenghadban@gmail.com",
    href: "mailto:houssenghadban@gmail.com",
    icon: Mail,
    copyable: true
  },
  {
    name: "Phone",
    value: "+961 76 639205",
    href: "tel:+96176639205",
    icon: Phone,
    copyable: true
  },
  {
    name: "GitHub",
    value: "Hussen-ghadban",
    href: "https://github.com/Hussen-ghadban",
    icon: Github,
    copyable: false
  },
  {
    name: "LinkedIn",
    value: "Hussein Ghadban",
    href: "https://linkedin.com/in/hussein-ghadban",
    icon: Linkedin,
    copyable: false
  }
];