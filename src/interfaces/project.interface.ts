interface IProjectImage {
  url: string;
  width: number;
  height: number;
  bgColor?: string;
}

export interface IProject {
  title: string;
  tags: IProjectTabValue[];
  tech: string[];
  features: string[];
  description: string;
  role: string;
  images: IProjectImage[];
  links: {
    code?: string;
    demo: string;
    reference?: string;
  } | {
    code?: string;
    demo?: string;
    reference: string;
  }
}

export type IProjectTabValue = 'all' | 'live' | 'oss';