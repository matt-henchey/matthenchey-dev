import { Document, Paragraph, TextRun, HeadingLevel, Packer, PageBreak, Table, TableRow, TableCell, TableBorders, WidthType } from 'docx';
import { experiences } from '$lib/data/experience';
import { education } from '$lib/data/education';
import { skillsData } from '$lib/data/skills';
import { aboutData } from '$lib/data/about';

export enum ResumeFormat {
    HTML = 'html',
    MARKDOWN = 'markdown',
    PLAINTEXT = 'txt',
    DOCX = 'docx'
}

export const downloadResume = async (format: ResumeFormat) => {
    if (format === ResumeFormat.DOCX) {
        try {
            // Import buffer polyfill first if needed
            if (typeof window !== 'undefined' && !window.Buffer) {
                window.Buffer = (await import('buffer')).Buffer;
            }
            const docx = await import('docx');
            // ... rest of DOCX generation code
        } catch (error) {
            console.error('Error generating DOCX:', error);
        }
    }
    switch (format) {
        case ResumeFormat.MARKDOWN:
            await generateMarkdownResume();
            break;
        case ResumeFormat.PLAINTEXT:
            await generatePlainTextResume();
            break;
        case ResumeFormat.DOCX:
            await generateDocxResume();
            break;
    }
};

const generateMarkdownResume = async () => {
    const markdown = `
# Matt Henchey
## Software Engineer

Website: https://matthenchey.dev/
LinkedIn: https://www.linkedin.com/in/matt-henchey/
GitHub: https://github.com/matt-henchey/

## INTRODUCTION
${aboutData.description.join('\n\n')}

## PROFESSIONAL EXPERIENCE
${experiences.map(exp => `
### ${exp.title} at ${exp.company}
${exp.period}

${exp.responsibilities.map(r => `- ${r}`).join('\n')}
`).join('\n')}

## ENGINEERING SKILLS

### Backend Engineering
${skillsData.skills.engineering.backend.map(skill => `- ${skill}`).join('\n')}

### Data Engineering
${skillsData.skills.engineering.data.map(skill => `- ${skill}`).join('\n')}

### Cloud Engineering
${skillsData.skills.engineering.cloud.map(skill => `- ${skill}`).join('\n')}

## LEADERSHIP SKILLS

### Technical Leadership
${skillsData.skills.leadership.technical.map(skill => `- ${skill}`).join('\n')}

### Management
${skillsData.skills.leadership.management.map(skill => `- ${skill}`).join('\n')}

## TECHNICAL SKILLS

### Languages
${skillsData.skills.technologies.languages.map(lang => lang.name).join(', ')}

### Databases
${skillsData.skills.technologies.databases.map(db => db.name).join(', ')}

### Infrastructure
${skillsData.skills.technologies.infrastructure.map(infra => infra.name).join(', ')}

## Education
${education.map(edu => `
### ${edu.degree}
${edu.school} - ${edu.period}
${edu.description}
`).join('\n')}`;

    downloadFile(markdown, 'matt_henchey_resume.md', 'text/markdown');
};

const generatePlainTextResume = async () => {
    const text = `
Matt Henchey
Software Engineer

Website: https://matthenchey.dev/
LinkedIn: https://www.linkedin.com/in/matt-henchey/
GitHub: https://github.com/matt-henchey/

> INTRODUCTION
${aboutData.description.join('\n\n')}

> PROFESSIONAL EXPERIENCE
${experiences.map(exp => `
${exp.title.toUpperCase()} AT ${exp.company.toUpperCase()}
${exp.period}

${exp.responsibilities.map(r => `• ${r}`).join('\n')}
`).join('\n')}

> ENGINEERING SKILLS

Backend Engineering:
${skillsData.skills.engineering.backend.map(skill => `• ${skill}`).join('\n')}

Data Engineering:
${skillsData.skills.engineering.data.map(skill => `• ${skill}`).join('\n')}

Cloud Engineering:
${skillsData.skills.engineering.cloud.map(skill => `• ${skill}`).join('\n')}

> LEADERSHIP SKILLS

Technical Leadership:
${skillsData.skills.leadership.technical.map(skill => `• ${skill}`).join('\n')}

Management:
${skillsData.skills.leadership.management.map(skill => `• ${skill}`).join('\n')}

> TECHNICAL SKILLS

Languages:
${skillsData.skills.technologies.languages.map(lang => lang.name).join(', ')}

Databases:
${skillsData.skills.technologies.databases.map(db => db.name).join(', ')}

Infrastructure:
${skillsData.skills.technologies.infrastructure.map(infra => infra.name).join(', ')}

> EDUCATION
${education.map(edu => `
${edu.degree.toUpperCase()}
${edu.school} - ${edu.period}
${edu.description}
`).join('\n')}`;

    downloadFile(text, 'matt_henchey_resume.txt', 'text/plain');
};

const generateDocxResume = async () => {
    const doc = new Document({
        sections: [{
            properties: {},
            children: [
                // Header
                new Paragraph({
                    text: "Matt Henchey",
                    heading: HeadingLevel.TITLE,
                }),
                new Paragraph({
                    text: "Software Engineer",
                    heading: HeadingLevel.HEADING_1,
                }),

                new Paragraph({}),

                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Website: https://matthenchey.dev/",
                            size: 20,
                        }),
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "LinkedIn: https://www.linkedin.com/in/matt-henchey/",
                            size: 20,
                        }),
                    ]
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "GitHub: https://github.com/matt-henchey/",
                            size: 20,
                        }),
                    ]
                }),

                new Paragraph({}),

                // Professional Summary
                new Paragraph({
                    text: "Introduction",
                    heading: HeadingLevel.HEADING_1,
                }),
                ...aboutData.description.map(para =>
                    new Paragraph({
                        children: [new TextRun({ text: para, size: 20 })]
                    })
                ),

                new Paragraph({}),

                // Experience
                new Paragraph({
                    text: "Experience",
                    heading: HeadingLevel.HEADING_1,
                }),
                ...experiences.flatMap(exp => [
                    new Paragraph({
                        text: `${exp.title} at ${exp.company}`,
                        heading: HeadingLevel.HEADING_2,
                    }),
                    new Paragraph({ text: exp.period }),
                    ...exp.responsibilities.map(resp =>
                        new Paragraph({
                            children: [new TextRun({ text: `${resp}`, size: 20 })],
                            bullet: { level: 0 },
                        })
                    ), new Paragraph({})
                ]),

                new Paragraph({}),

                // Skills
                new Paragraph({
                    text: "Engineering Skills",
                    heading: HeadingLevel.HEADING_1,
                }),
                new Paragraph({}),

                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    columnWidths: [
                        3000,
                        3000,
                        3000,
                    ],
                    borders: TableBorders.NONE,
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    width: {
                                        size: 33,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Backend Engineering",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.engineering.backend.map(skill =>
                                            new Paragraph({
                                                text: `${skill}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 33,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Data Engineering",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.engineering.data.map(skill =>
                                            new Paragraph({
                                                text: `${skill}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 33,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Cloud Engineering",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.engineering.cloud.map(skill =>
                                            new Paragraph({
                                                text: `${skill}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                new Paragraph({}),

                new Paragraph({
                    text: "Leadership Skills",
                    heading: HeadingLevel.HEADING_1,
                }),
                new Paragraph({}),

                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    columnWidths: [
                        4500,
                        4500,
                    ],
                    borders: TableBorders.NONE,
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    width: {
                                        size: 50,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Technical",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.engineering.backend.map(skill =>
                                            new Paragraph({
                                                text: `${skill}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 50,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Management",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.engineering.data.map(skill =>
                                            new Paragraph({
                                                text: `${skill}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                new Paragraph({}),

                new Paragraph({
                    text: "Technical Skills",
                    heading: HeadingLevel.HEADING_1,
                }),
                new Paragraph({}),

                new Table({
                    width: {
                        size: 100,
                        type: WidthType.PERCENTAGE,
                    },
                    columnWidths: [
                        2250,
                        2250,
                        2250,
                        2250,
                    ],
                    borders: TableBorders.NONE,
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Databases",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.technologies.databases.map(skill =>
                                            new Paragraph({
                                                text: `${skill.name}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Languages",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.technologies.languages.map(skill =>
                                            new Paragraph({
                                                text: `${skill.name}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Frameworks",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.technologies.frameworks.map(skill =>
                                            new Paragraph({
                                                text: `${skill.name}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                                new TableCell({
                                    width: {
                                        size: 25,
                                        type: WidthType.PERCENTAGE,
                                    },
                                    margins: {
                                        left: 50,
                                        right: 50,
                                    },
                                    children: [
                                        new Paragraph({
                                            text: "Infrastructure",
                                            heading: HeadingLevel.HEADING_3,
                                        }),
                                        ...skillsData.skills.technologies.infrastructure.map(skill =>
                                            new Paragraph({
                                                text: `${skill.name}`,
                                                bullet: { level: 0 },
                                            })
                                        ),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),

                new Paragraph({}),

                // Education
                new Paragraph({
                    text: "Education",
                    heading: HeadingLevel.HEADING_1,
                }),
                ...education.flatMap(edu => [
                    new Paragraph({
                        text: edu.degree,
                        heading: HeadingLevel.HEADING_2,
                    }),
                    new Paragraph({ text: `${edu.school} - ${edu.period}` }),
                    new Paragraph({ children: [new TextRun({ text: edu.description, size: 20 })] }),
                ]),
            ],
        }],
    });

    const blob = await Packer.toBlob(doc);
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'matt_henchey_resume.docx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};

const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
};