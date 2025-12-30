import { Clock } from 'lucide-react';

const schedule = [
  { time: '10:00 AM', title: 'Registration & Breakfast', description: 'Doors open. Grab your badge, some coffee, and meet fellow attendees.' },
  { time: '10:30 AM', title: 'Opening Keynote', description: 'Welcome to Grafana & Friends Mumbai!'},
  { time: '11:00 AM', title: 'Talk Session 1', description: 'Topic to be announced.' },
  { time: '12:00 PM', title: 'Talk Session 2', description: 'Topic to be announced.' },
  { time: '01:00 PM', title: 'Lunch & Networking', description: 'Enjoy a delicious lunch and connect with other attendees and speakers.' },
  { time: '02:00 PM', title: 'Talk Session 3', description: 'Topic to be announced.' },
  { time: '03:00 PM', title: 'Workshop / Hands-on Lab', description: 'Deep dive into a specific technology. More details soon.' },
  { time: '04:00 PM', title: 'Lightning Talks', description: 'A series of short, 5-minute talks from community members.' },
  { time: '04:45 PM', title: 'Closing Remarks & Thank You', description: 'Wrap-up and final announcements.' },
  { time: '05:00 PM', title: 'Event Ends', description: 'Thanks for coming!' },
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
                    <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-border/70"></div>
                    
                    <div className="relative space-y-12">
                        {schedule.map((item, index) => (
                            <div key={item.time} className="relative flex justify-center items-start">
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-background"></div>
                                    )}
                                </div>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8 text-left' : 'pr-8 text-right'}`}>
                                </div>

                                <div className={`absolute w-[calc(50%_-_2rem)] ${index % 2 === 0 ? 'left-0' : 'right-0'}`}>
                                    <div className={`p-6 rounded-lg shadow-lg bg-card border border-border/50 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        <p className="text-primary font-bold font-headline flex items-center gap-2" style={{justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end'}}>
                                            <Clock className="h-4 w-4" />
                                            {item.time}
                                        </p>
                                        <h3 className="font-headline text-xl font-semibold mt-2">{item.title}</h3>
                                        <p className="mt-2 text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                                
                                {index % 2 === 0 && (
                                    <div className="absolute right-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-background"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}