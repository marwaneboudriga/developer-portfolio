"use client";

import { IProject, IProjectTabValue } from "@/interfaces/project.interface";
import { projects } from "@/constants";
import { motion } from "framer-motion";
import {useEffect, useMemo, useState} from "react";
import { ProjectCardItem } from "../ProjectCardItem/ProjectCardItem";
import { ProjectModal } from "../ProjectModal/ProjectModal";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";
import {useAnalytics} from "@/hooks/useAnalytics";
import {EventName} from "@/interfaces/analytics";



const SectionProjects = () => {
    const options: {label: string; value: IProjectTabValue}[] = useMemo(() => [
        {label: 'All Projects', value: 'all'},
        {label: 'Has Demo', value: 'live'},
        {label: 'Open Source', value: 'oss'},
    ], [])
    const [activeTab, setActiveTab] = useState<IProjectTabValue>(options[0].value)
    const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
    const {trackEvent} = useAnalytics()

    useEffect(() => {
        if (!selectedProject) return
        trackEvent(EventName.ProjectDetailClicked, { project: selectedProject?.title })
    }, [selectedProject, trackEvent])

    const tabChangeHandler = (value: IProjectTabValue) => {
      setActiveTab(value);
      trackEvent(EventName.ProjectTabSelected, { tab: value })
    }

    const filteredProjects = useMemo(() => {
      if (activeTab === options[0].value) return projects
      return projects.filter(p => p.tags.includes(activeTab))
    }, [activeTab, options])

    return (
      <section id="projects" className="py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container px-4 mx-auto transition-none"
        >
          <div className="text-center">

            <h2 className="highlighted-heading text-3xl font-bold">Featured Projects</h2>

            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            With extensive experience across diverse domains, programming languages, frameworks, and tools, I have successfully delivered numerous projects throughout my career as a full-stack software engineer. Below are a select few highlights from the many projects I have completed professionally.
            </p>
          </div>

          <div>
            <Tabs
              defaultValue={activeTab}
              onValueChange={($event: string) => tabChangeHandler($event as IProjectTabValue)}
              className="max-w-4xl mx-auto mb-8"
            >
              <TabsList className="grid w-full grid-cols-3">
                {options.map(({ label, value }) => (
                  <TabsTrigger key={value} value={value} className="capitalize" aria-controls="projects-list">
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <div id="projects-list" className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project: IProject, index: number) => (
                <motion.div
                  key={`${activeTab}-${project.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="transition-none"
                >
                  <ProjectCardItem project={project} onClick={() => setSelectedProject(project)} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {selectedProject && (
            <ProjectModal
              project={selectedProject}
              isOpen={!!selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          )}
      </section>
    );
}

SectionProjects.displayName = 'ProjectsSection'

export { SectionProjects }
