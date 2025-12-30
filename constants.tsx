
import React from 'react';
import { 
  Instagram, 
  Mail, 
  Phone, 
  TrendingUp, 
  Video, 
  PenTool, 
  Layout, 
  Cpu, 
  Target,
  Zap,
  BarChart3,
  Users
} from 'lucide-react';
import { Service, PricingPlan, ProcessStep } from './types';

export const BRAND_INFO = {
  name: "Growth with Hardik",
  email: "growthwithhardik@gmail.com",
  phone: "7455067426",
  instagram: "@growthwithhardik",
  instagramUrl: "https://instagram.com/growthwithhardik",
  tagline: "Scaling impact through content, AI, and design.",
  experience: "Worked with 100+ clients and helped improve reach by 200%",
};

export const SERVICES: Service[] = [
  {
    id: 'smm',
    title: 'Social Media Management',
    description: 'Complete handle oversight focused on consistent engagement and growth strategy.',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 'video',
    title: 'Video Editing',
    description: 'High-retention Reels and Shorts that capture attention in the first 3 seconds.',
    icon: <Video className="w-6 h-6" />
  },
  {
    id: 'graphic',
    title: 'Graphic Designing',
    description: 'Sleek, brand-focused visuals that maintain a premium grid aesthetic.',
    icon: <PenTool className="w-6 h-6" />
  },
  {
    id: 'content',
    title: 'Content Writing & Strategy',
    description: 'Performance-driven scripts and captions that convert followers into fans.',
    icon: <Target className="w-6 h-6" />
  },
  {
    id: 'web',
    title: 'Web Designing',
    description: 'Clean, high-conversion landing pages built for mobile-first experiences.',
    icon: <Layout className="w-6 h-6" />
  },
  {
    id: 'ai',
    title: 'AI Automation',
    description: 'Intelligent workflows to streamline your marketing and save hours of manual work.',
    icon: <Cpu className="w-6 h-6" />
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'basic',
    name: 'Basic Plan',
    price: 'Custom',
    description: 'For beginners and small creators starting their journey.',
    features: ['10 Reels Editing', 'Basic Content Strategy', 'Grid Planning', 'Standard Support'],
    cta: 'Get Started'
  },
  {
    id: 'medium',
    name: 'Medium Plan',
    price: 'Custom',
    description: 'For growing influencers and small businesses scaling fast.',
    features: ['20 Reels Editing', 'Advanced SEO Captions', 'Daily Engagement', 'Monthly Growth Report', 'AI Automation Intro'],
    cta: 'Get Started',
    highlighted: true
  },
  {
    id: 'advanced',
    name: 'Advanced Plan',
    price: 'Custom',
    description: 'For serious creators and premium brands dominating the niche.',
    features: ['Unlimited Reels Editing', 'Full SMM Management', 'Custom Landing Page', 'Advanced AI Workflows', 'Priority Support'],
    cta: 'Get Started'
  }
];

export const PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Audit',
    description: 'Deep dive into your current metrics and identifying untapped opportunities.'
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Crafting a bespoke content and growth roadmap tailored to your brand.'
  },
  {
    number: '03',
    title: 'Execute',
    description: 'High-quality production and management of your digital presence.'
  },
  {
    number: '04',
    title: 'Optimize',
    description: 'Continuous refinement based on performance data and AI insights.'
  }
];
