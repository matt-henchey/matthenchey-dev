import type { ExperienceEntry } from '$lib/types';

export const experiences: ExperienceEntry[] = [
    {
        title: "Software Engineer II",
        company: "Shopmonkey",
        companyUrl: "https://www.shopmonkey.io/",
        period: "2023 - Present",
        responsibilities: [
            "Develop backend applications focusing on data migration support systems",
            "Architect and implement ETL solutions using Golang and TypeScript",
            "Collaborate with cross-functional teams to optimize data processing workflows",
            "Deploy and maintain applications using Kubernetes"
        ],
        isHighlighted: true
    },
    {
        title: "Data Migration Technical Lead",
        company: "Daxko",
        companyUrl: "https://www.daxko.com/",
        period: "2022 - 2023",
        responsibilities: [
            "Provided technical leadership for a team of data engineers",
            "Promoted a culture of support and collaboration across the organization",
            "Developed and maintained custom internal applications",
            "Developed, tested and deployed standardized scripting & new ETL pipelines",
            "Collaborated across teams to optimize capacity and identify inefficiencies"
        ]
    },
    {
        title: "Data Migration Engineer",
        company: "Daxko",
        companyUrl: "https://www.daxko.com/",
        period: "2020 - 2022",
        responsibilities: [
            "Executed and maintained standardized ETL pipelines",
            "Developed custom scripting solutions for complex migrations",
            "Performed root-cause analysis of data-related issues",
            "Communicated technical information effectively to stakeholders"
        ]
    },
    {
        title: "Data Migration Engineer",
        company: "Mindbody",
        companyUrl: "https://www.mindbodyonline.com/",
        period: "2014 - 2020",
        responsibilities: [
            "Independently managed 10-20 data integration projects simultaneously",
            "Established and coordinated project schedules and deadlines",
            "Communicated directly with businesses to determine scope and integration requirements",
            "Successfully executed complex data migrations and exports"
        ]
    }
];