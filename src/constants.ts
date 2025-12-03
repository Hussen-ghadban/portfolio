import type { SkillCategory, SocialLink } from './types';
import { 
  Stethoscope,
  Monitor,
  ShoppingBag,
  PenTool,
  FlaskConical,
  Hotel,
  Mail,
  Phone,
  Linkedin,
  Github,
  BookOpen,
} from 'lucide-react';

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
export const PROJECTS_DATA = [
  {
    title: "Doctor & Pharmacy Platform",
    description: "A healthcare platform connecting doctors and pharmacies. Users can manage prescriptions, validate medicines, and communicate securely in real-time.",
    tags: ["Express", "TypeScript", "PostgreSQL", "Prisma","Socket.Io", "AWS", "Docker","CI/CD"],
    icon: Stethoscope
  },
  {
    title: "Deal – Mobile App Backend",
    description: "A marketplace platform where users can post and request products. Features include product listings with advanced filtering, in-app chat between buyers and sellers, and an admin panel for moderation.",
    appstore: "https://apps.apple.com/lb/app/dealsy/id6743057671",
    playstore: "https://play.google.com/store/apps/details?id=com.rida.deal",
    tags: ["Express.js", "TypeScript", "MongoDB", "React","Socket.Io", "Node.js", "AWS", "Docker","CI/CD"],
    icon: Monitor
  },
  {
    title: "E-Commerce Website",
    description: "An online store allowing users to browse products, manage shopping carts. Admins can manage products, and update platform settings.",
    link: "https://www.mezhercosmetics.com",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Express.js", "Prisma", "PostgreSQL", "AWS", "Docker","CI/CD"],
    icon: ShoppingBag
  },
  {
    title: "ShardInk Collaborative Notes",
    description: "Full-stack note-taking platform with real-time collaboration. Users can create panels, invite collaborators, and work together in real-time.",
    tags: ["NestJS", "React", "PostgreSQL", "Socket.io", "TypeScript"],
    icon: PenTool
  },
  {
    title: "Hotel Management System",
    description: "A system for managing hotel operations, including room bookings, guest management. Role-based access ensures secure and efficient workflows.",
    tags: ["Node.js","GraphQl", "Express.js", "TypeScript", "PostgreSQL", "RBAC"],
    icon: Hotel
  },
  {
    title: "Interactive Experiment Sim",
    description: "A web-based platform for simulating interactive biology and physics experiments. Users can manipulate variables, visualize outcomes in real time, and receive AI-guided assistance.",
    tags: ["React", "TypeScript", "React Konva", "Pixi.js"],
    icon: FlaskConical
  },
  {
    title: "Learning Management System",
    description: "A learning management platform where teachers can create courses, assign submissions and exams, and monitor student progress. Students can submit their answers, track their progress",
    tags: ["TypeScript", "Express", "PostgreSQL"],
    icon: BookOpen
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