export interface Introduction {
    title: string;
    content: string[];
}

export interface Skill {
    genre: string;
    skills: string[];
}

export interface Interest {
    name: string;
    icon: string;
}

export interface Education {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    GPA?: string;
}

export interface WorkExperience {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    duties?: string[];
}

export const introduction: Introduction = {
    title: "Introduction",
    content: [
        "Hello! I'm a software engineer with a passion for building innovative solutions. I have a strong background in web development, data science, and cloud computing.",
        "I enjoy tackling complex problems and creating efficient, scalable applications. My experience includes working with various programming languages, frameworks, and cloud services.",
        "In my free time, I love to snowboard, hike, and play video games. I'm always eager to learn new technologies and improve my skills."
    ]
}

export const skills: Skill[] = [
  {
    genre: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "Kotlin", "Java", "R"]
  },
  {
    genre: "Web"
    , skills: ["React.Js", "Next.Js", "Express.Js", "Tailwind", "Selenium", "HTML", "CSS"]
  },
  {
    genre: "Data Science",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow", "Jupyter"]
  },
  {
    genre: "AWS",
    skills: ["S3", "Lambda", "CloudFront", "Athena", "Aurora"]
  },
  {
    genre: "Databases",
    skills: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"]
  }
]

export const educations: Education[] = [
  {
    degree: "Bcs. of Science (Mathematics Major)",
    institution: "University of Toronto",
    startDate: "2013-09-01",
    endDate: "2018-05-01",
  },
  {
    degree: "Computer Systems Technology Diploma",
    institution: "British Columbia Institute of Technology",
    startDate: "2023-01-06",
    endDate: "2025-05-30",
    GPA: "90%"
  }
]

export const interests: Interest[] = [
  { name: "Snowboard", icon: "🏂" },
  { name: "Hiking", icon: "🥾" },
  { name: "Gaming", icon: "🎮" },
]

export const workExperiences: WorkExperience[] = [
  {
    position: "Co-op Software Engineer",
    company: "Caracal Technologies Inc.",
    startDate: "2024-01-06",
    endDate: "2024-08-13",
    duties: [
      "Redeveloped the reporting interface with React and TypeScript, improving performance and refactoring the codebase into a maintainable component-based structure.",
      "Utilized Selenium to automate accounting reconciliation processing time from 8 hours to minutes.",
      "Recommended and implemented the migration to AWS Aurora.",
      "Developed a dynamic file explorer for managing S3 files with secure pre-signed URLs, embedded file previews, and download functionality.",
      "Automated frontend CD/CI pipelines deployment with AWS S3, CloudFront."
    ]
  },
  {
    position: "Project Supervisor",
    company: "Jooyee Network Inc.",
    startDate: "2020-09-01",
    endDate: "2022-04-08",
    duties: [
      "Led and provided guidance to team members, ensuring an efficient and collaborative work environment.",
      "Facilitated frequent QA team and client communication for project requirements.",
      "Outlined effective work plans resulting in early completion of projects.",
      "Demonstrated strong attention to detail from conducting QA on graphics, art, and script of interactive story app projects from clients."
    ]
  },
  {
    position: "Tax Analyst",
    company: "Grant Thornton LLP (Canada)",
    startDate: "2020-01-02",
    endDate: "2020-04-02",
    duties: [
      "Examine client's businesses to determine eligibility for various government grants, tax credits, and funding programs, developing the appropriate methodology to claim and maximize incentives.",
      "Understand the market and business environment and the impact on client development objectives.",
      "Assess and analyzes technical eligibility and structure projects."
    ]
  }
]