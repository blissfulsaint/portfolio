import TimelineItem from "../TimelineItem/TimelineItem"

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
            {sortedEvents.map((event, index) => {
                const date = new Date(event.date);
                const formatter = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' });
                const formattedDate = formatter.format(date);

                return (
                <TimelineItem className="pb-12" key={index}>
                    <h3 className="mt-0 p-0">{event.title}</h3>
                    <p className="p-0 text-sm text-gray-400">{event.organization}</p>
                    <p className="p-0 text-sm text-gray-400">{formattedDate}</p>
                    <ul className="pl-5 pt-2">
                        {event.description.map((line: string, idx: number) => (
                            <li className="list-disc" key={idx}>{line}</li>
                        ))}
                    </ul>
                </TimelineItem>
            )})}
        </section>
    )
}