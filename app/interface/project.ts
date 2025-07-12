export interface Project {
  name: string;
  description: string;
  techStack: string[];
  duties?: string[];
  publishedAt: string;
  link?: string;
  imagePath?: string;
}

export const projects: Project[] = [
  {
    name: "AI Storyteller",
    description: "A web app that generates stories using OpenAI API. It allows user to control the story's direction and style, it even includdes a plot twist feature for added excitement!",
    publishedAt: "2025-04-30",
    duties: [
      "Developed backend API implementing OpenAI integration for dynamic story generation.",
      "Designed route usage tracking system to monitor API endpoint consumption.",
      "Implemented secure authentication using HTTP-only cookies and session management.",
      "Configured PostgreSQL database including schema design, user privilege management"
    ],
    techStack: ["JavaScript", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
    imagePath: "question_mark.png",
  },
  {
    name: "Canada Employment Visualization",
    description: "A data visualization web app to analyze and visualize employment trends in Canada.",
    publishedAt: "2023-06-15",
    techStack: ["JavaScript", "Python","React", "Node.js", "MongoDB", "Chart.js"],
    link: "https://canada-employment-visualization.vercel.app",
    imagePath: "question_mark.png"
  }
];