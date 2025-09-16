export interface IExperience {
    period: string;
    organization: string;
    position: string;
    location: string;
    type: 'remote' | 'on-site' | 'hybrid';
    techTools: string[];
    achievements: string[];
}
