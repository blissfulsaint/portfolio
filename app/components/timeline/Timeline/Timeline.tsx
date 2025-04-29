import TimelineItem from "../TimelineItem/TimelineItem"
import clsx from "clsx";

import timelineData from '@/app/_data/timeline.json';

interface TimelineEvent {
    date: string;
    type: "start" | "milestone" | "end" | "event";
    title: string;
    organization?: string;
    description: string[];
}

export default function Timeline() {
    const events = timelineData as TimelineEvent[];

    const sortedEvents = [...events].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    })

    
    return (
        <section className="m-auto mb-4 w-fit">
            <h3 className="mt-0 mb-4 p-0 px-3.5">Professional Timeline</h3>
            {sortedEvents.map((event, index) => {
                let color = '';
                let bgColor = '';
            
                switch(event.type) {
                    case 'end':
                        color = 'text-red-400';
                        bgColor = 'bg-red-400';
                        break;
                    case 'event':
                        color = 'text-yellow-400';
                        bgColor = 'bg-yellow-400';
                        break;
                    case 'milestone':
                        color = 'text-purple-400';
                        bgColor = 'bg-purple-400';
                        break;
                    case 'start':
                        color = 'text-green-400';
                        bgColor = 'bg-green-400';
                        break;
                }

                const date = new Date(event.date);
                const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' });
                const formattedDate = formatter.format(date);

                return (
                <TimelineItem 
                    className={clsx(
                        "pb-12",
                        color
                    )}
                    key={index}
                    bgColor={bgColor}
                >
                    <h4 className="mt-0 p-0">{event.title}</h4>
                    <p className="p-0 text-sm text-gray-400">{event.organization}</p>
                    <p className="p-0 text-sm text-gray-400">{formattedDate}</p>
                    <ul className="pl-5 pt-2">
                        {event.description.map((line: string, idx: number) => (
                            <li className="list-disc text-gray-400" key={idx}>{line}</li>
                        ))}
                    </ul>
                </TimelineItem>
            )})}
        </section>
    )
}