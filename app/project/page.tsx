import { ProjectPosts } from "app/components/projects"

const metadata = {
    title: 'My Projects',
}

export default function ProjectsPage() {
    return (
        <section>
            <h1 className="section-title">{metadata.title}</h1>
            <ProjectPosts />
        </section>
    )
}
