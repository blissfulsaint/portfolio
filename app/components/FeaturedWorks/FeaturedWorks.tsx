'use client';
import { CardLink, CardLinkGrid } from "blisskit-ui";
import { useState } from "react";

import Modal from "../Modal/Modal";

export default function FeaturedWorks() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const openModal = () => {
        setIsVisible(true);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setTimeout(() => setIsVisible(false), 250);
    };

    return (
        <>
            <h3 className="font-semibold mb-6 text-center">Featured Projects</h3>
            <CardLinkGrid>
                <CardLink href="https://github.com/blissfulsaint/blisskit-ui" onClick={openModal} title="BlissKit-UI" textClassName="bg-primaryColor" imgSrc="/blisskit-ui.png" />
                <CardLink href="https://github.com/blissfulsaint/valleymusicclub" title="Valley Music Club" textClassName="bg-primaryColor" imgSrc='/vmc.jpeg' />
                <CardLink href="https://github.com/blissfulsaint/stylestage-sass" title="Style Stage SASS" textClassName="bg-primaryColor" imgSrc="/stylestage.png" />
            </CardLinkGrid>

            <Modal isOpen={isOpen} isVisible={isVisible} onClose={closeModal}>
                <h2 className="m-0">Hello</h2>
                <p>This is the Modal component</p>
            </Modal>
        </>
    )
}