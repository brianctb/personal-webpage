"use client"

import { useState } from "react";
import { Project } from "app/interface/project";
import { formatDate } from "app/utils/date/format";
import { PillGroup } from "../pillGroup";

export const ProjectCard = ({ project }: { project: Project }) => {

    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <article className="mb-4 p-4 rounded-2xl bg-neutral-900 w-full lg:w-2xl">
            <div className="flex flex-col items-center justify-center">
                <div className="flex w-full">
                    <div className="flex-1 flex justify-center">
                        <img
                            src={`/image/${project.imagePath}`}
                            alt={project.name}
                            className="w-30 h-20"
                        />
                    </div>
                    <div className="flex-2 flex justify-center items-center">
                        <div className="flex flex-col items-center">
                            <p className="text-xl text-center text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                                {project.name}
                            </p>
                            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                                {formatDate(project.publishedAt, false)}
                            </p>
                        </div>
                    </div>
                </div>
                {isExpanded && (
                    <div className="w-full mt-2 flex flex-col">
                        <p className="mt-2 w-full text-xl text-left lg:text-center text-neutral-300">
                            {"Description"}
                        </p>
                        <p className="w-full text-left lg:text-center text-neutral-400">
                            {project.description}
                        </p>
                        <p className="mt-2 w-full text-xl text-left lg:text-center text-neutral-300">
                            {"Technologies"}
                        </p>
                        <PillGroup
                            items={project.techStack}
                            className='lg: justify-center'
                            pillClassName='bg-emerald-900/70'
                        />
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