'use client';
import { Clock } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const schedule = [
  { time: '3:00 pm', title: 'Intro & Welcome', description: '' },
  { time: '3:15 pm - 4:00 pm', title: 'Grafanacon Local Keynote', description: 'Jayesh Asrani' },
  { time: '4:00 pm - 4:45 pm', title: 'Building Observable and Durable AI Agents', description: 'Shubham Londhe' },
  { time: '4:45 pm - 5:30 pm', title: 'Visualise your APIs with the Grafana Infinity Plugin', description: 'Yash Garudkar & Nikita Shinde' },
  { time: '5:30 pm - 6:00 pm', title: 'Snacks and Networking', description: '' },
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
        <section id="schedule" className="relative bg-[#ffffff] py-24 px-4 w-full border-t-8 border-black border-b-8 overflow-hidden z-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.3) 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
            <div className="container mx-auto max-w-[1000px]">
                <div className="mx-auto max-w-3xl mb-16 relative bg-white border-[4px] border-black p-6 md:p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center mt-8">
                    <h2 className="text-4xl md:text-[50px] font-black uppercase tracking-widest text-black mb-4">
                        EVENT SCHEDULE
                    </h2>
                    <p className="mt-4 text-xl font-bold max-w-xl mx-auto text-black">
                        A day packed with learning and fun. The schedule is tentative and subject to change.
                    </p>
                </div>

                <div ref={containerRef} className="relative mt-12 md:px-8">
                    {/* Vertical line background timeline */}
                    <div className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 w-[6px] bg-black" aria-hidden="true"></div>
                    
                    {/* Filled foreground timeline */}
                    <div 
                        className="absolute left-[36px] md:left-1/2 md:-translate-x-1/2 top-4 w-[6px] bg-[#fbbc05] origin-top z-0 border-r-[2px] border-l-[2px] border-black" 
                        style={{ height: `calc(${scrollProgress * 100}% - 2rem)`, bottom: '2rem', transition: 'height 0.1s ease-out' }}
                        aria-hidden="true"
                    ></div>
                    
                    <div className="relative flex flex-col gap-y-10 z-10 block">
                        {schedule.map((item, index) => {
                            const isActive = activeItems.includes(index);
                            const colors = ['bg-[#00d2ff] text-black', 'bg-[#ff8cbc] text-black', 'bg-[#fbbc05] text-black', 'bg-white text-black', 'bg-[#4285F4] text-white'];
                            const bgColor = colors[index % colors.length];
                            
                            return (
                                <div 
                                    key={item.time} 
                                    className={`schedule-item relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'} transition-transform duration-700 ease-out transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
                                >
                                    {/* Center dot */}
                                    <div className={`absolute left-[36px] md:left-1/2 -ml-[20px] w-[40px] h-[40px] bg-white border-[4px] border-black flex items-center justify-center z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform duration-500 overflow-hidden ${isActive ? 'scale-110' : 'scale-100'} group-hover:scale-125`}>
                                        <Image src="/logo-header.png" alt="Logo" width={32} height={32} className={`w-full h-full object-contain p-1 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-50'}`} />
                                    </div>

                                    {/* Content Card */}
                                    <div className={`w-full md:w-[calc(50%_-_2rem)] pl-[80px] md:pl-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-10' : 'md:ml-auto md:pl-10'}`}>
                                        <div className={`${bgColor} p-8 sm:p-10 min-h-[160px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] border-[4px] border-black transition-transform duration-500 ease-out hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] ${index % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                                            <div className={`font-black text-[15px] uppercase tracking-wider flex items-center gap-2 mb-4 bg-black text-white inline-flex px-3 py-1 ${index % 2 === 0 && false /* adjust float if needed */} shadow-[2px_2px_0px_0px_rgba(255,255,255,0.5)]`}>
                                                <Clock className={`h-[18px] w-[18px] text-white`} strokeWidth={3} />
                                                {item.time}
                                            </div>
                                            <h3 className={`text-[26px] font-black leading-tight tracking-tighter ${item.description ? 'mb-3' : ''}`}>{item.title}</h3>
                                            {item.description && (
                                                <p className="font-bold text-[17px] leading-relaxed opacity-90">{item.description}</p>
                                            )}
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

