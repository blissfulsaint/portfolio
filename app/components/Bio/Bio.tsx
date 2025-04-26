import clsx from "clsx";

import Image from "next/image"

interface BioProps {
    className?: string;
}

export default function Bio({
    className,
    ...rest
}: BioProps) {
    return (
        <aside
            className={clsx(
                className
            )}
            {...rest}
        >
            <Image 
                src='/propic.jpg'
                alt="Brandon Lisonbee headshot"
                width={350}
                height={350}
                className="rounded-2xl m-auto"
            />
            <div>
                <h2 className="text-center md:text-left">Brandon Lisonbee</h2>
                <p>I&apos;m a passionate developer with a love for building clean, user-focused applications. I enjoy taking ideas from concept to reality, blending thoughtful design with strong technical foundations. Outside of coding, I find inspiration in aviation, music, and the outdoors. I&apos;m always looking for ways to improve my skills, whether through new projects, collaboration, or ongoing learning. I believe that great software comes from a mix of creativity, persistence, and a genuine desire to make people&apos;s lives better.</p>
            </div>
        </aside>
    )
}