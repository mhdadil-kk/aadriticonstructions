import type { ReactNode } from "react";

export interface TeamMember {
  position: string;
  name: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: React.ReactNode;
}

export interface Stat {
  icon: string;
  value: number;
  isSqFt?: boolean;
  label: string;
}

export interface Project {
  Completion: ReactNode;
  id: string;
  status: 'completed' | 'ongoing';
  title: string;
  imageUrl: string;
  detailUrl: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  value: string;
  isLink?: boolean;
  href?: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

export interface Testimonial {
  author: string;
  role: string;
  text: string;
  rating: number;
}