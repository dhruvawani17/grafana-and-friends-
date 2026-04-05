'use client';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
    const containerRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeItems, setActiveItems] = useState<number[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate progress line
            const offset = windowHeight / 2; // Center of screen
            let progress = (offset - rect.top) / rect.height;
            progress = Math.max(0, Math.min(1, progress));
            setScrollProgress(progress);

            // Calculate active items based on scroll
            const newActiveItems: number[] = [];
            const itemElements = containerRef.current.querySelectorAll('.schedule-item');
            
            itemElements.forEach((el, index) => {
                const elRect = el.getBoundingClientRect();
                // Item becomes active when it passes the 75% mark of the screen
                if (elRect.top < windowHeight * 0.75) {
                    newActiveItems.push(index);
                }
            });
            setActiveItems(newActiveItems);
        };

        window.addEventListener('scroll', handleScroll);
        // initial trigger
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="schedule" className="bg-[#F4F5F5] py-24 px-4 w-full border-t border-slate-200 overflow-hidden">
            <div className="container mx-auto max-w-[1000px]">
                <div className="mx-auto max-w-3xl text-center mb-16 relative">
                    <h2 className="text-4xl md:text-[44px] font-bold text-black tracking-tight mb-4">
                        Event Schedule
                    </h2>
                    <p className="mt-4 text-lg text-slate-800 font-medium max-w-xl mx-auto">
                        A day packed with learning and fun. The schedule is tentative and subject to change.
                    </p>
                </div>

                <div ref={containerRef} className="relative mt-12 md:px-8">
                    {/* Vertical line background timeline */}
                    <div className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[4px] bg-slate-300 rounded" aria-hidden="true"></div>
                    
                    {/* Filled foreground timeline */}
                    <div 
                        className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-4 w-[4px] bg-[#FF6A00] rounded origin-top z-0" 
                        style={{ height: `calc(${scrollProgress * 100}% - 2rem)`, bottom: '2rem', transition: 'height 0.1s ease-out' }}
                        aria-hidden="true"
                    ></div>
                    
                    <div className="relative flex flex-col gap-y-10 z-10">
                        {schedule.map((item, index) => {
                            const isActive = activeItems.includes(index);
                            return (
                                <div 
                                    key={item.time} 
                                    className={`schedule-item relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'} transition-all duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                >
                                    {/* Center dot */}
                                    <div className={`absolute left-[36px] md:left-1/2 -ml-[16px] w-[32px] h-[32px] rounded-full bg-white border-[4px] flex items-center justify-center z-10 shadow-sm transition-all duration-500 overflow-hidden ${isActive ? 'border-[#FF6A00] scale-110' : 'border-[#2E88F5] scale-100'} group-hover:scale-125 group-hover:border-[#FF6A00]`}>
                                        <Image src="/logo-header.png" alt="Logo" width={32} height={32} className={`w-full h-full object-contain p-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[calc(50%_-_2rem)] pl-[80px] md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                                        <div className={`bg-white p-8 sm:p-10 min-h-[160px] rounded-[16px] shadow-sm border-[2px] transition-all duration-500 ease-out hover:shadow-lg group-hover:-translate-y-2 ${isActive ? 'border-[#FF6A00]/60 shadow-[0_4px_20px_rgb(255,106,0,0.1)]' : 'border-slate-200'} ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                                            <p className={`text-[#2E88F5] font-bold text-[15px] uppercase tracking-wider flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                                <Clock className={`h-[20px] w-[20px] transition-colors duration-500 ${isActive ? 'text-[#FF6A00]' : 'text-slate-400'}`} strokeWidth={2.5} />
                                                {item.time}
                                            </p>
                                            <h3 className={`text-[24px] font-bold leading-tight mb-3 transition-colors duration-300 ${isActive ? 'text-black' : 'text-slate-700'}`}>{item.title}</h3>
                                            <p className="text-slate-600 font-medium text-[16px] leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="hidden md:block w-[calc(50%_-_2rem)]"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

