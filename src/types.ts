// src/types.ts
export type Project = {
    slug: string;
    title: string;
    country?: string;
    location?: string;
    period?: string;
    projectType?: string;
    creditType?: string;
    impact: { carbonRemoved?: number; hectares?: number; femalePct?: number; trainings?: number; };
    highlights: { title: string; body: string; image?: string }[];
    activities: { title: string; body: string; image?: string }[];
    sdgs?: { id:number; metric?: string }[];
    downloads?: { label: string; url: string }[];
    cover: string;
    gallery?: string[];
    excerpt: string;
    body?: string; // rich text / MD
  };
  
  export type Story = {
    slug: string; title: string; date: string; excerpt: string; cover: string; body: string;
  };
  