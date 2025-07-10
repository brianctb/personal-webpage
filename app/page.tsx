import { WorkExperience, Education, Interest, Skill } from "./interface/homepage";

const homePageContent = [
  {
    title: 'Introduction',
    content: `PlaceHolder intro...`,
  }
];

const skills: Skill[] = [
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

const educations: Education[] = []

const interests: Interest[] = [
  { name: "Snowboard", icon: "🏂" },
  { name: "Hiking", icon: "🥾" },
  { name: "Gaming", icon: "🎮" },
]

const workExperiences: WorkExperience[] = [
]

export default function HomePage() {
  return (
    <section>

      {homePageContent.map((section, index) => (
        <div key={index} className={index > 0 ? "mt-12" : ""}>
          {index === 0 ? (
            <h1 className="text-3xl font-bold mb-4 lg: flex">{section.title}</h1>
          ) : (
            <h2 className="text-2xl font-semibold mb-3">{section.title}</h2>
          )}
          <p className="text-lg ">{section.content}</p>
        </div>
      ))}
    </section>
  );
}