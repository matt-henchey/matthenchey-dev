import type { ExperienceEntry } from '$lib/types';

export const experiences: ExperienceEntry[] = [
    {
        title: "Software Engineer II",
        company: "shopmonkey.io",
        companyUrl: "https://www.shopmonkey.io/",
        period: "2023 - Present",
        responsibilities: [
            "Developed backend services for database re-platforming from MongoDB to CockroachDB",
            "Built and maintainedscalable data migration pipelines using Golang and TypeScript",
            "Designed and implemented distributed systems using Redis, Docker, and Kubernetes",
            "Developed robust data validation and transformation services for ensuring data integrity",
            "Created automated testing frameworks for complex data migration scenarios"
        ],
        isHighlighted: true
    },
    {
        title: "Data Migration Technical Lead",
        company: "daxko.com",
        companyUrl: "https://www.daxko.com/",
        period: "2022 - 2023",
        responsibilities: [
            "Led development of C# applications and SQL-based ETL pipelines for complex data migrations",
            "Architected and implemented cross-database migration solutions using C# and Perl",
            "Developed automated data validation and reconciliation tools",
            "Engineered robust error handling and logging systems for migration pipelines",
            "Established code review processes and technical documentation standards for the team"
        ]
    },
    {
        title: "Data Migration Engineer",
        company: "daxko.com",
        companyUrl: "https://www.daxko.com/",
        period: "2020 - 2022",
        responsibilities: [
            "Developed C# applications for automated data extraction and transformation",
            "Created and maintained complex SQL stored procedures for data validation",
            "Built custom ETL solutions for legacy database migrations",
            "Implemented data quality monitoring and alerting systems",
            "Developed Perl scripts for large-scale data processing and transformation"
        ]
    },
    {
        title: "Data Services Engineer",
        company: "mindbodyonline.com",
        companyUrl: "https://www.mindbodyonline.com/",
        period: "2014 - 2020",
        responsibilities: [
            "Developed and maintained PHP-based internal migration tools",
            "Created Python scripts for automated data extraction and transformation",
            "Built custom Perl utilities for complex text processing and data cleaning",
            "Engineered SQL-based validation and reconciliation procedures",
            "Developed automated testing suites for data integrity verification"
        ]
    }
];