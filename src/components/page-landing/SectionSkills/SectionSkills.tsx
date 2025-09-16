"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "../../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";
import {useAnalytics} from "@/hooks/useAnalytics";
import {EventName} from "@/interfaces/analytics";
import {
  Atom,
  Box,
  Boxes,
  Braces,
  Brackets,
  Bug,
  Cable,
  Cloud,
  Code2,
  Command,
  Database,
  FileCode2,
  FileJson,
  GitBranch,
  Hammer,
  Layers,
  Network,
  Package,
  Palette,
  Rocket,
  Server,
  Settings,
  ShieldCheck,
  SquareDashedMousePointer,
  Terminal,
  TestTube,
  Wrench
} from "lucide-react";

export function SectionSkills() {
  const defaultTab = 'frontend'

  // Categories and skills from the user's request
  const skillCategories: Record<string, string[]> = {
    frontend: [
      "React.js", "Angular/AngularJS", "Vue.js", "Next.js", "React Native", "Redux.js", "Webpack", "SASS", "Tailwind CSS", "Bootstrap", "Material-UI", "Storybook", "Chakra UI", "HTML5", "CSS3", "Responsive Web Design", "Semantic HTML", "UI/UX Design", "Figma", "WordPress", "Backbone.js", "jQuery", "AJAX"
    ],
    backend: [
      "Node.js", "Express.js", "Java (Core, Spring Boot, Spring MVC)", "Python", "PHP (Laravel)", "C++", "C#", "NextJS", "NuxtJS", "Django", ".NET Framework", "REST APIs", "GraphQL (Apollo)", "Socket Programming", "Ruby on Rails"
    ],
    testing: [
      "Bugzilla", "Chrome DevTools", "Postman", "Cypress", "Jest", "JUnit", "Mocha", "Unit Testing", "Test Automation", "Agile/Scrum", "Leadership", "Communication", "Teamwork", "Problem Solving"
    ],
    devops: [
      "AWS (EC2, S3, Lambda, CloudWatch)", "Microsoft Azure", "Docker", "Kubernetes", "Jenkins", "Nginx", "Cloudflare", "DevOps"
    ]
  }

  // Heuristic icon mapping by keyword using lucide-react (brands fallback to generics)
  const pickIcon = (label: string) => {
    const l = label.toLowerCase()
    if (l.includes('react')) return Atom
    if (l.includes('angular')) return Braces
    if (l.includes('vue')) return Boxes
    if (l.includes('next')) return SquareDashedMousePointer
    if (l.includes('redux')) return GitBranch
    if (l.includes('webpack')) return Package
    if (l.includes('sass') || l.includes('css')) return Palette
    if (l.includes('tailwind') || l.includes('bootstrap') || l.includes('material') || l.includes('chakra')) return Layers
    if (l.includes('html')) return FileCode2
    if (l.includes('jquery') || l.includes('ajax') || l.includes('backbone')) return Command
    if (l.includes('ui/ux') || l.includes('figma') || l.includes('design')) return Palette

    if (l.includes('node') || l.includes('express')) return Server
    if (l.includes('java') || l.includes('spring')) return Brackets
    if (l.includes('python')) return Code2
    if (l.includes('laravel') || l.includes('php')) return Braces
    if (l.includes('c#') || l.includes('.net')) return Boxes
    if (l.includes('c++')) return Box
    if (l.includes('django') || l.includes('rails') || l.includes('nuxt')) return Braces
    if (l.includes('rest')) return Network
    if (l.includes('graphql') || l.includes('apollo')) return FileJson
    if (l.includes('socket')) return Cable

    if (l.includes('bug') || l.includes('cypress') || l.includes('jest') || l.includes('junit') || l.includes('mocha') || l.includes('testing') || l.includes('qa')) return TestTube
    if (l.includes('postman') || l.includes('devtools')) return Terminal
    if (l.includes('agile') || l.includes('leadership') || l.includes('communication') || l.includes('teamwork') || l.includes('problem')) return ShieldCheck

    if (l.includes('aws') || l.includes('azure') || l.includes('cloudflare')) return Cloud
    if (l.includes('docker')) return Package
    if (l.includes('kubernetes')) return Layers
    if (l.includes('jenkins')) return Wrench
    if (l.includes('nginx')) return Server
    if (l.includes('devops')) return Rocket

    if (l.includes('database') || l.includes('sql') || l.includes('nosql')) return Database

    return Settings
  }
  const {trackEvent} = useAnalytics()

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 transition-none"
      >
        <h2 className="highlighted-heading text-3xl font-bold">Skills & Technologies</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I work with a variety of technologies across the full stack, always
          keeping up with the latest trends and best practices.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="transition-none"
      >
        <Tabs
            defaultValue={defaultTab}
            className="max-w-7xl mx-auto"
            onValueChange={($event: string) => trackEvent(EventName.SkillsTabSelected, { tab: $event })}
        >
          <TabsList className="grid max-w-4xl grid-cols-4 mx-auto mb-8">
            {[
              {key: 'frontend', label: 'Frontend'},
              {key: 'backend', label: 'Backend'},
              {key: 'testing', label: 'Testing & QA'},
              {key: 'devops', label: 'DevOps & Tooling'}
            ].map(({key, label}) => (
              <TabsTrigger key={key} value={key} className="capitalize">{label}</TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(skillCategories).map(([category, skills]) => (
            <TabsContent key={category} value={category}>
              <div className="md:min-h-44">

              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {skills.map((skill, index) => {
                      const Icon = pickIcon(skill)
                      return (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.03 }}
                          className="flex flex-col items-center justify-center gap-2 p-6 bg-muted rounded-lg transition-none"
                        >
                          <Icon className="h-10 w-10 md:h-12 md:w-12" />
                          <span className="text-sm font-medium text-center">{skill}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
      </div>
    </section>
  );
}
