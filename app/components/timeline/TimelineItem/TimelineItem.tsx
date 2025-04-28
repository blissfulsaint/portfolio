import clsx from "clsx";

interface TimelineItemProps {
    children?: React.ReactNode;
    bgColor?: string;
    className?: string;
}

export default function TimelineItem({
    children,
    bgColor,
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
            <span 
                className={clsx(
                    "absolute size-4 rounded-full border border-[0.20em] border-slate-500 -left-[9px] top-[0.20em]",
                    bgColor
                )} />
            {children}
        </div>
    )
}