export interface Skill {
    genre: string;
    skills: string[];
}

export interface Interest {
    name: string;
    icon: string;
}

export interface Education {
    degree: string;
    institution: string;
    startDate: string;
    endDate: string;
    GPA?: string;
}

export interface WorkExperience {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    duties: string[];
}