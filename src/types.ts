import React from 'react';

export interface Project {
  title: string;
  description: string;
  link?: string;
  appstore?: string;
  playstore?: string;
  tags: string[];
  icon?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  value: string;
  href: string;
  icon: React.ComponentType<any>;
  copyable?: boolean;
}