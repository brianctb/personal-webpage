"use client"

import { useState } from "react";
import { Project } from "app/interface/project";
import { formatDate } from "app/utils/date/format";

export const ProjectCard = ({ project }: { project: Project }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="mb-4 p-4 rounded-2xl bg-neutral-900">
            <div className="flex flex-col items-center justify-center">
                <div className="flex w-full">
                    <div className="flex-1 flex justify-center">
                        <img
                            src={`/image/${project.imagePath}`}
                            alt={project.slug}
                            className="w-30 h-20"
                        />
                    </div>
                    <div className="flex-2 flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <p className="text-xl text-center text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                                {project.slug}
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                                {formatDate(project.publishedAt, false)}
                            </p>
                        </div>
                    </div>
                </div>
                {isExpanded && (
                    <div className="w-full mt-2 flex flex-col items-center">
                        <p className="mt-2 w-full text-xl text-left lg:text-center text-neutral-300">
                            {"Description"}
                        </p>
                        <p className="w-full text-left lg:text-center text-neutral-400">
                            {project.description}
                        </p>
                        <p className="mt-2 w-full text-xl text-left lg:text-center text-neutral-300">
                            {"Technologies"}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2 lg:justify-center">
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full font-medium bg-emerald-900/70 text-neutral-400  min-w-[100px] text-center"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="mt-2 w-full text-xl text-left lg:text-center text-neutral-700 dark:text-neutral-300">
                            {"Duties"}
                        </p>
                        <ul className="list-disc list-inside text-neutral-400 w-full text-left lg:text-center">
                            {project.duties.map((duty, index) => (
                                <li key={index}>{duty}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <button
                className="flex items-center justify-center w-full"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span>{isExpanded ? '▲' : '▼'}</span>
            </button>
        </article>
    );
};