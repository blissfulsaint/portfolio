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
                'border-l-2 border-l-slate-500 px-4 pb-8 relative before:absolute before:size-3 before:rounded-full before:bg-slate-500 before:-left-[7px]',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    )
}