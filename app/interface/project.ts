export interface Project {
  slug: string;
  shortDescription: string;
  description: string;
  techStack: string[];
  duties: string;
  publishedAt: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "AI Storyteller",
    shortDescription: "A web application that generates stories using AI.",
    description: "Placeholder for AI Storyteller project description.",
    publishedAt: "2025-04-30",
    duties: "Developed a web application that generates stories using AI.",
    techStack: ["JavaScript", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
  },
  {
    slug: "Canada Employment Visualization",
    shortDescription: "A data visualization tool to analyze employment trends in Canada.",
    description: "Placeholder for Canada Employment Visualization project description.",
    publishedAt: "2023-06-15",
    duties: "Created a data visualization tool to analyze employment trends in Canada.",
    techStack: ["JavaScript", "Python","React", "Node.js", "MongoDB", "Chart.js"],
    link: "https://canada-employment-visualization.vercel.app"
  }
];