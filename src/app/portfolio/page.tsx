// pages/portfolio.tsx
import React from 'react';
import PortfolioCard from '../../components/PortfolioCard';
import portfolioData from '../../../public/json/portfolio-data.json';
import Header from '@/components/Header';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export default function Portfolio() {
  return (
    <div className='light'>
      <Header />
      <Nav />
      <main>
        <div id="portfolio-container" className="flex flex-wrap justify-center">
          {portfolioData.portfolio.map((item, index) => (
            <PortfolioCard
              key={index}
              name={item.name}
              link={item.link}
              github={item.github}
              thumbnail={item.thumbnail}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};