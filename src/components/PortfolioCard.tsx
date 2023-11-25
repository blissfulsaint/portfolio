// components/PortfolioCard.tsx
import React from 'react';

interface PortfolioCardProps {
  name: string;
  link?: string | null;
  github?: string | null;
  thumbnail: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ name, link, github, thumbnail }) => {
  return (
    <div className="bg-gray-800 max-w-sm rounded overflow-hidden shadow-lg m-4 transition-transform transform hover:scale-105">
      <img className="w-full" src={thumbnail} alt={`${name} thumbnail image`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 pb-4">
        <div className="flex space-x-4">
          {link && (
            <a
              className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-full"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              App Demo
            </a>
          )}
          {github && (
            <a
              className="text-white bg-gray-900 hover:bg-gray-600 py-2 px-4 rounded-full"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
