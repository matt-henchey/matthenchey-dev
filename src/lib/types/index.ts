// Basic Props Interfaces
export interface SplashProps {
    isFirstLoad: boolean;
    isTransitioning: boolean;
    onEnter: () => void;
}

export interface NavigationProps {
    isVisible: boolean;
}

export interface SectionProps {
    isVisible: boolean;
}

export interface ExitButtonProps {
    onExit: () => void;
}

// Experience Data Interfaces
export interface ExperienceEntry {
    title: string;
    company: string;
    companyUrl: string;
    period: string;
    responsibilities: string[];
    isHighlighted?: boolean;
}

export interface ExperienceSectionProps extends SectionProps {
    experiences: ExperienceEntry[];
    isVisible: boolean;
}

// Education Data Interfaces
export interface EducationEntry {
    degree: string;
    school: string;
    period: string;
    description: string;
}

export interface EducationSectionProps extends SectionProps {
    education: EducationEntry[];
    isVisible: boolean;
}

// Theme Types
export type Theme = 'light' | 'dark';

// Store Types
export interface ThemeStore {
    subscribe: (callback: (value: Theme) => void) => () => void;
    set: (value: Theme) => void;
    update: (callback: (value: Theme) => Theme) => void;
}

export interface SplashStore {
    subscribe: (callback: (value: boolean) => void) => () => void;
    set: (value: boolean) => void;
}

// Skill Types
export interface Skill {
    name: string;
    category: 'Languages' | 'Technologies';
}

export interface AboutSectionProps extends SectionProps {
    skills: {
        languages: string[];
        technologies: string[];
    };
    isVisible: boolean;
}

// Hero Section Props
export interface HeroSectionProps extends SectionProps {
    title: string;
    subtitle: string;
}

// Navigation Types
export interface NavItem {
    label: string;
    href: string;
}

export interface NavigationProps {
    isVisible: boolean;
    items: NavItem[];
}

// Animation Types
export type TransitionTiming = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';

export interface TransitionProps {
    duration?: number;
    delay?: number;
    timing?: TransitionTiming;
}