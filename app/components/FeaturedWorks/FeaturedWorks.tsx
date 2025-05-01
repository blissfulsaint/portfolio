'use client';
import { CardLink, CardLinkGrid } from "blisskit-ui";
import { useState } from "react";

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
            {isVisible && (
                <div className="fixed inset-0 z-50">
                    {/* Backdrop */}
                    <div
                        className={`absolute inset-0 bg-black ${
                            isOpen ? "animate-backdropFadeIn" : "animate-backdropFadeOut"
                        }`}
                        onClick={closeModal}
                    />

                    {/* Modal content */}
                    <div className="flex items-center justify-center h-full">
                        <div
                            className={`bg-white p-6 rounded-2xl shadow-2xl relative w-full max-w-lg mx-4
                                        transform transition-all duration-300 ease-in-out
                                        ${isOpen ? "animate-slideUp" : "animate-slideDown"}`}
                        >
                            <button
                                onClick={closeModal}
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-2xl"
                                aria-label="Close modal"
                            >
                                &times;
                            </button>

                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Modal Title</h2>
                            <p className="text-gray-600 leading-relaxed">
                                This is modal content. It slides in while the backdrop fades in independently.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}