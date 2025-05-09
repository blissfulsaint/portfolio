'use client';
import { useEffect, useState } from "react";
import { LayoutBand } from "blisskit-ui";
import clsx from "clsx";
import styles from './Hero.module.css';

interface HeroProps {
    imgSrc?: string;
    title: string;
    subtitle?: string;
    className?: string;
}

export default function Hero({
    imgSrc,
    title,
    subtitle,
    className,
}: HeroProps) {
    const [offsetY, setOffsetY] = useState(0);

    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.hero}>
            <div
                className={clsx(
                    'bg-blue-500',
                    className,
                )}
                style={{
                    transform: `translateY(${offsetY * 0.5}px)`,
                    backgroundImage: `url('${imgSrc}')`
                }}
            ></div>
            <div>
                <LayoutBand>
                    <div className="flex flex-col justify-center">
                        <h1 className="m-0 p-0">{title}</h1>
                        {subtitle && (<p className="p-0">{subtitle}</p>)}
                    </div>
                </LayoutBand>
            </div>
        </div>
    );
}