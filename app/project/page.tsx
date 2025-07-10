import { ProjectPosts } from "app/components/project/projects"

const metadata = {
    title: 'My Projects',
}

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="section-title mb-4">{metadata.title}</h1>
            <ProjectPosts />
        </section>
    )
}
