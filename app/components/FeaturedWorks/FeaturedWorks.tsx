'use client';
import { CardLink, CardLinkGrid } from "blisskit-ui";
import { useState } from "react";

import Modal from "../Modal/Modal";

import projectsData from '@/app/_data/projects.json';

interface Project {
    imgSrc: string;
    title: string;
    link?: string;
    github?: string;
    relatedLinks?: {
        linkTitle: string;
        linkHref: string;
    }[];
    featured?: boolean;
}

export default function FeaturedWorks() {
    const projects = projectsData.filter((project) => project.featured) as Project[];

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
        setTimeout(() => setIsVisible(false), 250);
        setCurrentProject(null);
    };

    return (
        <>
            <h3 className="font-semibold mb-6 text-center">Featured Projects</h3>
            <CardLinkGrid>
                {projects && projects.map((project, index) => {
                    return (
                        <CardLink onClick={() => openModal(index)} title={project.title} imgSrc={project.imgSrc} textClassName="bg-primaryColor" key={index} />
                    )
                })}
            </CardLinkGrid>

            <Modal isOpen={isOpen} isVisible={isVisible} onClose={closeModal}>
                <h2 className="m-0">{currentProject?.title}</h2>
                <p>This is the Modal component</p>
            </Modal>
        </>
    )
}