import {AppIcon} from "@/components/ui/AppIcon";

export const GA_TRACKING_ID = 'G-77ML118EGM'
export const isProduction = process.env.NODE_ENV === 'production'
export const hasGoneLive = true
export const disableHeaderNavigations = true
export const appTitle = 'Portfolio'
export const appUrl: string = (process.env.NETLIFY ? process.env.URL : process.env.APP_URL) || ''
export const appDescription = 'Full-stack software engineer specializing in web and mobile applications. I build scalable, user-focused solutions with strong front-end and back-end expertise'
export const person = {
    userFullName: "Marwane Boudriga",
    email: 'boudrigamarwane@gmail.com',
    userPhoto: "/images/marwane-boudriga.png",
    userHeadline: 'Senior Full Stack Engineer',
    about: "I’m a Senior Frontend Engineer with 7+ years of experience building scalable web applications in healthtech, SaaS, and developer tooling, specializing in React, Next.js, GraphQL, and TypeScript, with expertise in UI performance, accessibility, design system architecture, and mentoring teams to deliver impactful, user-focused solutions at scale.",
};


export const platformLinks = [
    { link: "https://www.linkedin.com/in/marwaneboudriga/", label: "LinkedIn", icon: [AppIcon, {name: 'linked-in'}] },
    { link: "https://github.com/boudrigamarwane", label: "Github", icon: [AppIcon, {name: 'github'}] },
    { link: `mailto:${person.email}`, label: "Email", icon: [AppIcon, {name: 'envelope'}] },
];

export const navLinks = [
    { label: 'About', link: ''},
    { label: 'Skills', link: ''},
    { label: 'Projects', link: ''},
    { label: 'Contact', link: ''},
]
