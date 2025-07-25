"use client";

import { resumeUrl, introduction, workExperiences, educations, skills, interests } from "./interface/homepage";
import { PillGroup } from "./components/pillGroup";
import React from "react";
import { formatDate } from "./utils/date/format";

export default function HomePage() {

  const skillPillColorScheme = [
    "bg-emerald-900/70",
    "bg-blue-900/70",
    "bg-purple-900/70",
    "bg-cyan-900/70",
    "bg-amber-900/70"
  ];

  const interestPillColorScheme = [
    "bg-cyan-500/80",
    "bg-emerald-500/80",
    "bg-purple-500/80"
  ];

  const [skillExpanded, setSkillExpanded] = React.useState(false);
  const [workExpanded, setWorkExpanded] = React.useState(false);

  return (
    <section className="flex flex-col">
      <section className="mb-8">
        <h1 className="section-title mb-4">{introduction.title}</h1>
        {introduction.content.map((paragraph, index) => (
          <p
            key={index}
            className={`section-paragraph ${index !== 0 ? 'mt-4' : ''}`}
          >
            {paragraph}
          </p>
        ))}
        <p className="section-paragraph mt-4">
          You can view my resume{" "}
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            aria-label="Open resume in new tab"
          >
            here
          </a>
          .
        </p>
      </section>
      <section className="mb-8">
        <div className="flex flex-row items-center gap-3">
          <h1 className="section-title">Skills</h1>
          <button onClick={() => setSkillExpanded(!skillExpanded)}>
            <span>{skillExpanded ? '▲' : '▼'}</span>
          </button>
        </div>
        {skillExpanded && (
          <div className="grid grid-cols-2 gap-4 mt-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-neutral-900/70 p-3 rounded-2xl flex flex-col items-center"
              >
                <h2 className="font-bold text-lg">{skill.genre}</h2>
                <PillGroup items={skill.skills} pillClassName={skillPillColorScheme[index]} className="justify-center" />
              </div>
            ))}
          </div>
        )}
      </section>
      <section className="mb-8">
        <div className="flex flex-row items-center gap-3">
          <h1 className="section-title">Work Experience</h1>
          <button onClick={() => setWorkExpanded(!workExpanded)}>
            <span>{workExpanded ? '▲' : '▼'}</span>
          </button>
        </div>
        {workExpanded && (
          <div className="grid gap-4 mt-4">
            {workExperiences
              .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
              .map((experience, index) => (
                <div key={index} className="bg-neutral-900/70 p-5 rounded-2xl">
                  <h2 className="font-bold text-xl">{experience.position}</h2>
                  <h2 className='font-bold text-lg'>{experience.company}</h2>
                  <p className="text-neutral-400">{formatDate(experience.startDate)} - {formatDate(experience.endDate)}</p>
                  {experience.duties && (
                    <ul className="list-disc list-inside text-neutral-400 mt-2 text-lg">
                      {experience.duties.map((duty, dutyIndex) => (
                        <li key={dutyIndex} className="mb-3">
                          {duty}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </div>
        )}
      </section>
      <section className="mb-8">
        <h1 className="section-title">Education</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {educations
            .sort((a, b) => new Date(b.endDate).getTime() - new Date(a.endDate).getTime())
            .map((education, index) => (
              <div key={index} className="bg-neutral-900/70 p-3 rounded-2xl">
                <h2 className="font-bold text-lg">{education.degree}</h2>
                <p className="text-neutral-400 text-lg">{education.institution}</p>
                <p className="text-neutral-400">{formatDate(education.startDate)} - {formatDate(education.endDate)}</p>
                {education.GPA && (
                  <p className="text-neutral-400">GPA: {education.GPA}</p>
                )}
              </div>
            ))}
        </div>
      </section>
      <section className="mb-8">
        <h1 className="section-title">Interests</h1>
        <button
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-3"
          onClick={() => { }}
        >
          {interests.map((interest, index) => (
            <div key={index} className={`p-3 rounded-2xl flex items-center justify-center ${interestPillColorScheme[index]}`}>
              <span className="text-xl">{interest.icon}</span>
              <span className="ml-2">{interest.name}</span>
            </div>
          ))}
        </button>
      </section>
    </section>
  );
}