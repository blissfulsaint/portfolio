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
                className="rounded-2xl"
            />
            <div>
                <h3>Brandon Lisonbee</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor suscipit sollicitudin. Curabitur vel elit fermentum, interdum lorem id, facilisis leo. Sed massa dolor, pharetra semper est ut, volutpat mattis sem. Curabitur maximus ullamcorper luctus. Quisque venenatis lacus quis metus sagittis sagittis. Suspendisse sed lacus felis. Suspendisse a feugiat mi. Mauris a pulvinar nunc, ac rhoncus magna. Ut tristique orci urna, euismod efficitur lorem accumsan ac. Morbi sit amet mi nec lorem ultrices aliquam id nec risus.</p>
            </div>
        </aside>
    )
}