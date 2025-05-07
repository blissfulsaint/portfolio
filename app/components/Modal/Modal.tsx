import { useEffect } from "react";
import Image from "next/image";

// **IMPORTANT** This component requires special TailwindCSS configuration for the animations to function

interface ModalProps {
  heroSrc?: string;
  isOpen: boolean;
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ 
  heroSrc,
  isOpen, 
  isVisible, 
  onClose, 
  children 
}: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isVisible) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black ${
          isOpen ? "animate-backdropFadeIn" : "animate-backdropFadeOut"
        }`}
        onClick={onClose}
      />

      {/* Modal content */}
      <div className="flex items-center justify-center h-full">
        <div
          className={`bg-secondaryBackground rounded-2xl shadow-2xl relative w-full max-w-lg mx-4
            transform transition-all duration-300 ease-in-out overflow-hidden
            ${isOpen ? "animate-slideUp" : "animate-slideDown"}`}
        >
          {heroSrc && 
            <Image 
              src={heroSrc}
              alt="Hero Image"
              className="w-full"
            />
          }
          <div className="p-4">
            <button
              onClick={onClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 text-2xl"
              aria-label="Close modal"
            >
              &times;
            </button>

            {children}
          </div>
        </div>
      </div>
    </div>
  );
}