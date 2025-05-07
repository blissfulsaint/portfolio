'use client';
import { CardLink, CardLinkGrid } from "blisskit-ui";
import PageLink from "../PageLink/PageLink";
import type { Project } from "@/app/types";
import { useState } from "react";

import Modal from "../Modal/Modal";

import projectsData from '@/app/_data/projects.json';

interface Projects {
    featured?: boolean;
}

export default function Projects({
    featured = false
}: Projects) {
    const projects = (featured ? 
        projectsData.filter((project) => project.featured) :
        projectsData) as Project[];

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [currentProject, setCurrentProject] = useState<Project | null>(null);

    const openModal = (index: number) => {
        setCurrentProject(projects[index]);
        setIsVisible(true);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => {
            setIsVisible(false)
            setCurrentProject(null);
        }, 250);
    };

    return (
        <>
            <h3 className="font-semibold mb-6 text-center">Featured Projects</h3>
            <CardLinkGrid>
                {projects && projects.map((project, index) => {
                    return (
                        <CardLink onClick={() => openModal(index)} title={project.title} imgSrc={project.images?.cardLinkImg?.src} textClassName="bg-primaryColor" key={index} />
                    )
                })}
            </CardLinkGrid>

            <Modal isOpen={isOpen} isVisible={isVisible} onClose={closeModal} heroSrc={currentProject?.images?.displayImg?.src} >
                <h2 className="m-0 text-center">{currentProject?.title}</h2>
                {currentProject?.shortDescription && 
                    <p>{currentProject?.shortDescription}</p>
                }
                {(currentProject?.link || currentProject?.github) &&
                    <div className="flex flex-wrap gap-4 justify-center">
                        {currentProject.link && (
                            <PageLink 
                                href={currentProject.link} 
                                theme="blue"
                                button
                            >Visit Website</PageLink>
                        )}
                        {currentProject.github && (
                            <PageLink 
                                href={currentProject.github} 
                                theme="purple"
                                button
                            >View GitHub Repo</PageLink>
                        )}
                    </div>
                }
            </Modal>
        </>
    )
}