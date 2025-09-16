"use client";

import React from "react";
import { motion } from "framer-motion";
// @ts-ignore
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AppIcon } from "@/components/ui/AppIcon";

const SectionEducation: React.FC = () => {
  return (
    <section className="relative py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 transition-none"
      >
        <h2 className="highlighted-heading text-3xl font-bold">Education</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Academic background and relevant coursework.
        </p>
      </motion.div>

      <VerticalTimeline animate={true}>
        <VerticalTimelineElement
          date={"2013 – 2017"}
          icon={<AppIcon name="graduation" />}
          visible
        >
          <h3 className="font-bold text-2xl">Bachelor’s Degree in Computer Science</h3>
          <div className="flex items-center gap-2">
            <h4 className="text-muted-foreground font-bold">George Mason University</h4>
            <h6 className="text-muted-foreground italic">Fairfax, VA</h6>
          </div>
          <p className="text-muted-foreground">
            Relevant coursework: Web Development, Security Engineering, Algorithms, Data Structures, Artificial Intelligence
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export { SectionEducation };


