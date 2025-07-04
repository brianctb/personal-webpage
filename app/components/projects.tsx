import { projects } from "app/interface/project";
import { formatDate } from "app/utils/date/format";


export const ProjectPosts = () => {
    return (
        <div>
            {projects.sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                    return -1;
                }
                return 1;
            }).map((project) => (
                <div key={project.slug} className="flex flex-col space-y-1 mb-4">
                    <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
                        <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                            {formatDate(project.publishedAt, false)}
                        </p>
                        <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                            {project.slug}
                        </p>
                    </div>
                </div>
            ))
            }
        </div>
    )
}
