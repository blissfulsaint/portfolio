import clsx from "clsx";

interface TimelineItemProps {
    children?: React.ReactNode;
    className?: string;
}

export default function TimelineItem({
    children,
    className,
    ...rest
}: TimelineItemProps) {
    return (
        <div 
            className={clsx(
                'px-4 pb-8 relative before:absolute before:w-[2px] before:bg-slate-500 before:h-[100%] before:-left-[2px] before:top-[0.30em]',
                className
            )}
            {...rest}
        >
            <span className="absolute size-3 rounded-full bg-slate-500 -left-[7px] top-[0.30em]" />
            {children}
        </div>
    )
}