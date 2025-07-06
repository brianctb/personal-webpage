"use client"

import { useState } from "react";
import { Project } from "app/interface/project";
import { formatDate } from "app/utils/date/format";

export const ProjectCard = ({ project }: { project: Project }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-4">
            <button
                className="w-full flex flex-col md:flex-row items-start md:items-center space-x-0 md:space-x-2 text-left"
                onClick={() => setIsExpanded(!isExpanded)}
            >
                <span className="mr-2 transition-transform duration-200">
                    {isExpanded ? '▲' : '▼'}
                </span>
            </button>
            <div className="flex items-center gap-x-2">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight font-medium">
                    {project.slug}
                </p>
                <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                    {formatDate(project.publishedAt, false)}
                </p>
            </div>

            {isExpanded && (
                <div className="mt-2 pl-6 md:pl-8">
                    <p className="text-neutral-700 dark:text-neutral-300">
                        {project.shortDescription}
                    </p>
                </div>
            )}
        </div>
    );
};