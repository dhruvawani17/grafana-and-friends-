import { Clock } from 'lucide-react';
import Image from 'next/image';

const schedule = [
  { time: '10:00 AM', title: 'Registration & Refreshments', description: 'Doors open. Grab your badge, some coffee, and meet fellow attendees.' },
  { time: '10:30 AM', title: 'Opening Keynote', description: 'Welcome to Grafana & Friends Mumbai!'},
  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },
  { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' },
  { time: '01:00 PM', title: 'Lunch & Networking', description: 'Enjoy a delicious lunch and connect with other attendees and speakers.' },
  { time: '02:00 PM', title: 'Talk Session 3', description: 'Topic to be announced.' },
//   { time: '03:00 PM', title: 'Workshop / Hands-on Lab', description: 'Deep dive into a specific technology. More details soon.' },
  { time: '03:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-minute talks from community members.' },
  { time: '03:45 PM', title: 'Closing Remarks & Thank You', description: 'Wrap-up and final announcements.' },
  { time: '04:00 PM', title: 'Event Ends', description: 'Thanks for coming!' },
];

export default function ScheduleSection() {
    return (
        <section id="schedule" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Event Schedule
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-24 bg-primary"></div>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A day packed with learning and fun. The schedule is tentative and subject to change.
                    </p>
                </div>

                <div className="mt-16 relative">
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/70" aria-hidden="true"></div>
                    
                    <div className="relative flex flex-col gap-y-12">
                        {schedule.map((item, index) => (
                            <div key={item.time} className="relative">
                                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background ring-8 ring-background flex items-center justify-center z-10">
                                    <Image src="/grafanalogo.png" alt="Grafana Logo" width={32} height={32} className="w-full h-full object-contain" />
                                </div>
                                <div className={`w-[calc(50%_-_2rem)] p-6 rounded-lg shadow-lg bg-card border border-border/50 ${index % 2 === 0 ? 'ml-auto text-left' : 'mr-auto text-right'}`}>
                                    <p className={`text-primary font-bold font-headline flex items-center gap-2 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                                        <Clock className="h-4 w-4" />
                                        {item.time}
                                    </p>
                                    <h3 className="font-headline text-xl font-semibold mt-2">{item.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
