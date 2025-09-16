"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../../ui/dialog";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Code2, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { IProject } from "@/interfaces/project.interface";
import { AspectRatioImage } from "../../../containers/AspectRatioImage";

interface ProjectModalProps {
  project: IProject;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[calc(100vw-16px)] h-[calc(100vh-120px)] overflow-y-auto border-none md:max-w-3xl md:max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Main Image */}
          <AspectRatioImage ratio={1/2} className='rounded-lg bg-slate-100' style={{backgroundColor: project.images[0].bgColor}}>
            <Image
              src={project.images[0].url}
              fill
              alt="portfolio project"
              className="object-contain object-center"
            />
          </AspectRatioImage>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Role & Responsibilities */}
          <div>
            <h3 className="text-lg font-semibold mb-2">My Role</h3>
            <p className="text-muted-foreground">{project.role}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Screenshots */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Screenshots</h3>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
              {project.images.map((image, index) => (
                <AspectRatioImage key={index} ratio={3/5} className='rounded-lg bg-slate-100' style={{backgroundColor: image.bgColor}}>
                  <Image
                    src={image.url}
                    fill
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="object-contain object-center"
                  />
                </AspectRatioImage>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {!project.links.demo && !project.links.reference ? null : (
              <Button asChild>
                <Link href={project.links.demo ?? project.links.reference ?? ''} target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  {project.links.demo ? 'Live Demo' : 'Reference'}
                </Link>
              </Button>
            )}
            {!project.links.code ? null : (
            <Button variant="outline" asChild>
              <Link href={project.links.code} target="_blank">
                <Code2 className="mr-2 h-4 w-4" />
                View Code
              </Link>
            </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
