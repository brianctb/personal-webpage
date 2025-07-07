export interface Project {
  slug: string;
  description: string;
  techStack: string[];
  duties: string[];
  publishedAt: string;
  link?: string;
  imagePath?: string;
}

export const projects: Project[] = [
  {
    slug: "AI Storyteller",
    description: "Placeholder for AI Storyteller project description.",
    publishedAt: "2025-04-30",
    duties: ["Developed a web application that generates stories using AI."],
    techStack: ["JavaScript", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
    imagePath: "question_mark.png",
  },
  {
    slug: "Canada Employment Visualization",
    description: "Placeholder for Canada Employment Visualization project description.",
    publishedAt: "2023-06-15",
    duties: ["Created a data visualization tool to analyze employment trends in Canada."],
    techStack: ["JavaScript", "Python","React", "Node.js", "MongoDB", "Chart.js"],
    link: "https://canada-employment-visualization.vercel.app",
    imagePath: "question_mark.png"
  }
];