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
                    <p className="mt-4 text-lg text-muted-foreground">
                        A day packed with learning and fun. The schedule is tentative and subject to change.
                    </p>
                </div>

                <div className="mt-16 max-w-3xl mx-auto">
                    <div className="flow-root">
                        <ul className="-mb-8">
                            {schedule.map((item, itemIdx) => (
                                <li key={item.time}>
                                    <div className="relative pb-8">
                                        {itemIdx !== schedule.length - 1 ? (
                                            <span className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-border" aria-hidden="true" />
                                        ) : null}
                                        <div className="relative flex items-start space-x-6">
                                            <div>
                                                <div className="relative px-1">
                                                    <div className="h-10 w-10 bg-primary rounded-full ring-8 ring-background flex items-center justify-center">
                                                        <span className="text-sm font-bold text-primary-foreground">
                                                            {item.time.split(' ')[0].slice(0, -3)}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="min-w-0 flex-1 py-1.5">
                                                <div className="text-sm leading-6">
                                                    <p className="text-sm text-muted-foreground">{item.time}</p>
                                                    <p className="font-headline text-lg font-semibold text-foreground">
                                                        {item.title}
                                                    </p>
                                                    <p className="mt-1 text-base text-muted-foreground">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
