import { projects } from "app/interface/project";
import { formatDate } from "app/utils/date/format";
import { ProjectCard } from "./projectCard";


export const ProjectPosts = () => {
    return (
        <div>
            {projects.sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                    return -1;
                }
                return 1;
            }).map((projectData) => (
                <ProjectCard key={projectData.slug} project={projectData} />
            ))
            }
        </div>
    )
}
