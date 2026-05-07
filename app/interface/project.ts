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
    name: "Spotential",
    description: "A geospatial location intelligence platform that predicts business favorability in Vancouver using machine learning and census-level demographic analysis.",
    publishedAt: "2026-05-01",
    techStack: [
      // Core Frameworks
      "FastAPI", "Next.js", "TypeScript",
      // Geospatial & Visualization
      "PostGIS", "MapLibre GL", "GeoPandas",
      // AI & Machine Learning
      "XGBoost", "Scikit-learn", "Polars", "MLflow",
      // Infrastructure & Database
      "SQLModel", "Alembic", "Neon (Postgres)", "Docker", "Railway"
    ],
    link: "https://spotential.brianctb.dev",
    imagePath: "spotential-preview.png",
    duties: [
      "Engineered a high-performance spatial data pipeline using PostGIS to aggregate 300+ census tracts for real-time analysis.",
      "Trained an XGBoost regression model on Statistics Canada demographics, achieving an R² of 0.58 for business density prediction.",
      "Optimized frontend map rendering for high-density geospatial datasets using MapLibre GL and custom vector tiles.",
      "Architected a type-safe backend with SQLModel and Pydantic, managing database schema evolutions via Alembic migrations."
    ],
  },
  {
    name: "AI Storyteller",
    description: "A web app that generates stories using OpenAI API. It allows user to control the story's direction and style, it even includes a plot twist feature for added excitement!",
    publishedAt: "2025-04-30",
    duties: [
      "Developed backend API implementing OpenAI integration for dynamic story generation.",
      "Designed route usage tracking system to monitor API endpoint consumption.",
      "Implemented secure authentication using HTTP-only cookies and session management.",
      "Configured PostgreSQL database including schema design, user privilege management"
    ],
    techStack: ["JavaScript", "Node.js", "Express", "PostgreSQL", "OpenAI API"],
    imagePath: "AI-Storyteller.png",
  },
  {
    name: "Canada Employment Visualization",
    description: "A data visualization web app to analyze and visualize employment trends in Canada.",
    publishedAt: "2023-06-15",
    techStack: ["JavaScript", "Python", "React", "Node.js", "MongoDB", "Chart.js"],
    link: "https://ca-jobs-viz.brianctb.dev",
    imagePath: "employment-visualization.png"
  }
];