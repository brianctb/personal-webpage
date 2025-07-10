import { projects } from "app/interface/project";
import { ProjectCard } from "./projectCard";


export const ProjectPosts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            {projects.sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                    return -1;
                }
                return 1;
            }).map((projectData) => (
                <ProjectCard key={projectData.name} project={projectData} />
            ))
            }
        </div>
    )
}
