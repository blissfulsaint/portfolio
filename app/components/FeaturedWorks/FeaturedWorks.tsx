'use client';
import { CardLink, CardLinkGrid } from "blisskit-ui";
import Image from "next/image";
import { useState } from "react";

import Modal from "../Modal/Modal";

import projectsData from '@/app/_data/projects.json';

interface Project {
    title: string;
    link?: string;
    github?: string;
    images?: {
        thumbnailImg?: {
            src: string;
            alt: string;
        };
        cardLinkImg?: {
            src: string;
            alt: string;
        };
        displayImg?: {
            src: string;
            alt: string;
        };
    }
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
                <h2 className="m-0">{currentProject?.title}</h2>
            </Modal>
        </>
    )
}