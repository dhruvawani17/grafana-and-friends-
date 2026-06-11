'use client';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ScheduleSection from '@/components/sections/schedule';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Lock, Tag, Users, BookOpen, MessageSquare, Megaphone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

export default function RegisterPage() {
  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });
  const [showIntro, setShowIntro] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Intro timing is now driven by audio playback (onEnded event)
  }, []);

  const triggerConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 45, spread: 360, ticks: 100, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 70 * (timeLeft / duration);
      
      // Fire from bottom-left
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        startVelocity: randomInRange(35, 65),
      });
      // Fire from bottom-right
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        startVelocity: randomInRange(35, 65),
      });
    }, 250);

    // Initial big blasts from exact bottom corners
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 1 },
      startVelocity: 60,
      zIndex: 9999,
      colors: ['#FFC900', '#FF6A00', '#FFB800', '#F23C41']
    });
    confetti({
      particleCount: 150,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 1 },
      startVelocity: 60,
      zIndex: 9999,
      colors: ['#FFC900', '#FF6A00', '#FFB800', '#F23C41']
    });
  };

  const endIntroTransition = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setShowIntro(false);
      triggerConfetti();
    }, 1000);
  };

  useEffect(() => {
    const targetDate = new Date('2026-06-13T00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0'),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0'),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0'),
          seconds: Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0'),
        });
      }
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const renderIntro = () => {
    if (!showIntro) return null;
    const line1 = "LADIES AND GENTLEMEN".split(" ");
    const line2 = "YOU ARE NOT READY FOR THIS".split(" ");
    const totalWords = line1.length + line2.length;

    return (
      <div className={`fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden transition-opacity duration-1000 ${isFadingOut ? 'opacity-0' : 'opacity-100'}`}>
        <style dangerouslySetInnerHTML={{__html: `
          @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&display=swap');
          
          @keyframes cinematicWord {
            0% { opacity: 0; transform: scale(2) translateZ(150px) translateY(20px); filter: blur(20px); }
            15% { opacity: 1; transform: scale(0.95); filter: brightness(2.5) drop-shadow(0 0 20px rgba(255,100,0,0.8)) blur(0px); }
            30% { transform: scale(1); filter: brightness(1) drop-shadow(0 0 0px transparent); }
            100% { opacity: 1; transform: scale(1.05); filter: brightness(1); }
          }
          @keyframes flashPulse {
            0%, 100% { box-shadow: inset 0 0 0px 0px rgba(0, 0, 0, 1); }
            50% { box-shadow: inset 0 0 150px 30px rgba(200, 50, 0, 0.3); }
          }
          .text-fire {
            background: linear-gradient(180deg, #e5e5e5 0%, #999999 35%, #ff5500 75%, #ffaa00 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1.5px rgba(255,255,255,0.1);
            filter: drop-shadow(0px 8px 16px rgba(255, 69, 0, 0.4));
          }
          .text-gold {
            background: linear-gradient(180deg, #fffde7 0%, #e6c27a 40%, #b8860b 80%, #8b6508 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            -webkit-text-stroke: 1.5px rgba(255,255,255,0.1);
            filter: drop-shadow(0px 8px 16px rgba(218, 165, 32, 0.4));
          }
          .word-wrap {
            display: inline-block;
            opacity: 0;
            will-change: transform, opacity, filter;
          }
          .cinematic-container {
             font-family: 'Cinzel', serif;
             perspective: 1200px;
          }
        `}} />
        <div className="absolute inset-0 z-0 pointer-events-none" style={{ animation: 'flashPulse 10s ease-in-out forwards' }}></div>
        
        {/* Background audio track */}
        {/*
          <audio
            src="/title.mp3"
            loop={false}
            preload="auto"
            onEnded={endIntroTransition}
            ref={(audioEl) => {
              if (audioEl && !audioEl.dataset.played) {
                audioEl.dataset.played = "true";
                setTimeout(() => {
                  audioEl.play().catch(e => {
                    console.log("Audio play blocked", e);
                    // Optional fallback timing for strict browser autoplay blocking
                    setTimeout(endIntroTransition, 8500);
                  });
                }, 1500);
              }
            }}
          />
        */}

        <div className="cinematic-container w-full px-4 sm:px-8 flex flex-col items-center justify-center gap-y-8 relative z-10">
          {/* First Line: Spreads across the first 2 seconds */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8">
            {line1.map((word, i) => {
              const delay = i * (1.9 / line1.length); // Finishes dropping just before 2s mark
              return (
                <span
                  key={`l1-${i}`}
                  className="word-wrap text-fire text-[6vw] sm:text-[5vw] md:text-[4.5vw] lg:text-[4vw] font-black uppercase tracking-widest"
                  style={{
                    animation: `cinematicWord 8s cubic-bezier(0.1, 0.9, 0.2, 1) forwards`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>

          {/* Second Line: Starts at 2 seconds, ends before 4 seconds */}
          <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 md:gap-x-8">
            {line2.map((word, i) => {
              const delay = 2 + (i * (1.9 / line2.length)); // Starts exactly at 2 seconds, completes just before 4s
              return (
                <span
                  key={`l2-${i}`}
                  className="word-wrap text-gold text-[7vw] sm:text-[6vw] md:text-[5vw] lg:text-[4.5vw] font-black uppercase tracking-widest"
                  style={{
                    animation: `cinematicWord 8s cubic-bezier(0.1, 0.9, 0.2, 1) forwards`,
                    animationDelay: `${delay}s`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* {renderIntro()} */}
      <div className="flex flex-col min-h-screen bg-[#F4F5F5]">
        <Header />
      
      <main className="flex-1 w-full relative overflow-hidden">
        {/* Enthusiastic background-synced messaging */}
        
        {/* Top Text: Just below the navbar */}
        <div className="absolute top-6 left-0 right-0 z-[5] flex justify-center pointer-events-none opacity-90 mix-blend-hard-light">
          <div 
            className="text-[5vw] sm:text-[3vw] md:text-[2.5vw] font-bold uppercase text-center tracking-widest bg-black px-8 py-3 border-4 border-[#FFB800] transform -rotate-2 shadow-[8px_8px_0px_0px_#FF6A00]"
            style={{ fontFamily: '"Fantomen", sans-serif', color: '#FFFFFF' }}
          >
            OUR BIGGEST EVENT YET
          </div>
        </div>

        <HeroSection />

        {/* What's happening section */}
        <section className="bg-white py-24 px-4 border-b-[8px] border-black relative overflow-hidden z-10" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.2) 2px, transparent 2px)', backgroundSize: '24px 24px' }}>
          <div className="container mx-auto max-w-5xl text-center relative z-20">
            <h2 className="text-4xl md:text-[50px] font-black text-black mb-6 tracking-tighter uppercase whitespace-normal inline-block bg-[#00d2ff] border-[4px] border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transform -rotate-1">What’s happening at GrafanaCon Local?</h2>
            <p className="text-[19px] text-black bg-white border-[4px] border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] max-w-4xl mx-auto mb-20 leading-relaxed font-bold mt-8">
              Come together with hundreds of your open source friends for deep-dive sessions, hands-on labs, inspiring community stories, and a first look at what's next for Grafana and the open source LGTM stack.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 text-left relative">
              <div className="flex flex-col relative bg-white border-[4px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 border-[4px] border-black flex items-center justify-center mb-6 bg-[#ff8cbc] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Megaphone className="text-black w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-[26px] font-black text-black mb-3 uppercase tracking-wider border-b-[3px] border-black pb-2 inline-block max-w-fit">News</h3>
                <p className="text-black font-bold text-[17px] leading-relaxed">Hear about the latest Grafana features and visualizations and other developments in the extended open source monitoring ecosystem.</p>
              </div>
              <div className="flex flex-col relative bg-white border-[4px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 border-[4px] border-black flex items-center justify-center mb-6 bg-[#4285F4] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Users className="text-white w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-[26px] font-black text-black mb-3 uppercase tracking-wider border-b-[3px] border-black pb-2 inline-block max-w-fit">Community</h3>
                <p className="text-black font-bold text-[17px] leading-relaxed">Get inspired by community members who use Grafana in cool and surprising ways and learn how you can observe anything from anywhere.</p>
              </div>
              <div className="flex flex-col relative bg-white border-[4px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 border-[4px] border-black flex items-center justify-center mb-6 bg-[#fbbc05] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <BookOpen className="text-black w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-[26px] font-black text-black mb-3 uppercase tracking-wider border-b-[3px] border-black pb-2 inline-block max-w-fit">Education</h3>
                <p className="text-black font-bold text-[17px] leading-relaxed">Learn from 20+ talks, deep dives, and hands-on labs covering Grafana, Prometheus, OpenTelemetry, Loki, Mimir, Tempo, and more.</p>
              </div>
              <div className="flex flex-col relative bg-white border-[4px] border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="w-16 h-16 border-[4px] border-black flex items-center justify-center mb-6 bg-[#34a853] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <MessageSquare className="text-white w-8 h-8" strokeWidth={2.5} />
                </div>
                <h3 className="text-[26px] font-black text-black mb-3 uppercase tracking-wider border-b-[3px] border-black pb-2 inline-block max-w-fit">Hallway Track</h3>
                <p className="text-black font-bold text-[17px] leading-relaxed">Meet your Community Forum friends and LinkedIn connections in person. Share ideas, tips and tricks, and your favorite dashboards!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Widget Section */}
        <section id="register" className="w-full bg-[#fbbc05] relative overflow-hidden pb-24 pt-20 border-t-[8px] border-black border-b-[8px]">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.5) 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] border-[4px] border-black rounded-full mix-blend-overlay -translate-y-1/2 translate-x-1/2 z-0 hidden md:block"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] border-[4px] border-black mix-blend-overlay translate-y-1/2 -translate-x-1/4 z-0 hidden md:block"></div>

          <div className="relative z-10 container mx-auto px-4 flex flex-col items-center justify-center">
            
            {/* Bold Title */}
            <div className="bg-white border-[4px] border-black p-4 md:p-6 mb-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform">
               <h1 className="text-4xl md:text-[50px] font-black text-black text-center tracking-tighter uppercase leading-none">
                 Join us in Mumbai
               </h1>
            </div>

            {/* Countdown Timer */}
            <div className="flex items-center gap-4 sm:gap-6 mb-16">
              {[ {value: timeLeft.days, label: 'days'}, 
                 {value: timeLeft.hours, label: 'hours'}, 
                 {value: timeLeft.minutes, label: 'minutes'}, 
                 {value: timeLeft.seconds, label: 'seconds'}
              ].map((stat, i) => {
                 const colors = ['bg-[#4285F4]', 'bg-[#ff8cbc]', 'bg-white', 'bg-[#00d2ff]'];
                 const textColor = i === 2 ? 'text-black' : 'text-white';
                 const labelColor = i === 2 ? 'text-black font-black' : 'text-white font-bold';
                 
                 return (
                 <div key={i} className={`flex flex-col items-center justify-center ${colors[i]} border-[4px] border-black p-4 w-[80px] h-[95px] sm:w-[100px] sm:h-[120px] shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform`}>
                   <span className={`text-4xl sm:text-[52px] font-black ${textColor} mb-0 leading-none tracking-tighter`}>{stat.value}</span>
                   <span className={`text-[11px] sm:text-[13px] ${labelColor} uppercase tracking-widest mt-2`}>{stat.label}</span>
                 </div>
              )})}
            </div>

            <a href="https://www.meetup.com/grafana-and-friends-mumbai/events/313668351/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#ea4335] hover:bg-black hover:-translate-y-1 transition-all text-white font-black px-10 py-7 rounded-none border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-xl tracking-wider mb-8">
                REGISTER NOW ON MEETUP
              </Button>
            </a>

            {/* Form Card */}
            {/*
            <div className="w-full max-w-5xl bg-white rounded-t-xl shadow-2xl overflow-hidden flex flex-col text-slate-900 border border-slate-200">
              {/* <div className="bg-[#FFE300] py-3 text-center text-[13px] font-bold tracking-wider text-black border-b border-yellow-300">
                 30% OFF TICKETS FOR A LIMITED TIME!
              </div> *\/}

              <div className="flex flex-col lg:flex-row h-full items-stretch">
                {/* Left Form *\/}
                <div className="flex-1 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200">
                  <h2 className="text-[26px] font-bold mb-8 text-black tracking-tight">Tickets</h2>
                  
                  <div className="space-y-6">
                    {/* Ticket 1 *\/}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold flex items-center gap-3 text-black">
                          Early Bird Conference Ticket (50% off)
                          <span className="uppercase text-[10px] tracking-wider bg-slate-200 text-slate-800 px-2 py-1 rounded font-bold">Sold Out</span>
                        </h3>
                      </div>
                      <div className="flex items-center gap-4 self-start sm:self-auto">
                        <span className="font-bold text-black border-r border-slate-300 pr-4">€273</span>
                        <Select disabled>
                          <SelectTrigger className="w-20 rounded-md bg-white border-slate-300 text-slate-400">
                            <SelectValue placeholder="0" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Ticket 2 *\/}
                    <div className="flex flex-col sm:flex-row justify-between gap-4 pb-6 border-b border-slate-200 group relative">
                      <div className="absolute -left-12 top-0 bottom-0 w-1 bg-[#2E88F5] opacity-100 transition-opacity rounded-r"></div>
                      <div className="flex-1 pr-4">
                        <h3 className="text-[19px] font-bold text-[#1A1A1A] mb-2 tracking-tight">Discounted Conference Ticket (30% off)</h3>
                        <p className="text-[13px] text-black font-medium leading-relaxed w-[90%]">
                          This ticket grants access to the main event on April 21–22 at 30% off the full price. <span className="text-slate-600 font-normal">Optional hands-on labs take place on April 20 and can be added in the next step. All applicable taxes are included.</span>
                        </p>
                        <button className="text-[13px] text-black font-bold mt-2 underline underline-offset-2 hover:text-[#0A52CC] transition-colors">Read more...</button>
                      </div>
                      <div className="flex items-center gap-4 self-start sm:self-auto mt-2 sm:mt-0 pt-2">
                        <span className="font-bold text-[22px] text-black border-r border-slate-300 pr-4">€383</span>
                        <Select defaultValue="0">
                          <SelectTrigger className="w-20 rounded-md border-slate-300 text-black bg-white font-medium">
                            <SelectValue placeholder="0" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0">0</SelectItem>
                            <SelectItem value="1">1</SelectItem>
                            <SelectItem value="2">2</SelectItem>
                            <SelectItem value="3">3</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Ticket 3 *\/}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-black">Full Price Conference Ticket</h3>
                      </div>
                      <div className="flex items-center gap-4 self-start sm:self-auto">
                        <span className="font-bold text-black border-r border-slate-300 pr-4 text-[22px]">€545</span>
                        <div className="flex items-center gap-2 px-3 py-2 text-black font-medium text-sm">
                          <Lock className="w-[14px] h-[14px]" strokeWidth={2.5}/> Locked
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-14 text-[10px] text-slate-500 text-center font-medium opacity-80">
                    This site is protected by reCAPTCHA and the Google <a href="#" className="underline hover:text-slate-800">Privacy Policy</a> and <a href="#" className="underline hover:text-slate-800">Terms of Service</a> apply.
                  </div>
                </div>

                {/* Right Form *\/}
                <div className="w-full lg:w-[320px] bg-white border-l border-slate-200 p-6 sm:p-10 flex flex-col items-start bg-[#F8F9FA]/30">
                  <h2 className="text-[17px] font-bold mb-4 text-black border-b-[2px] border-black pb-[6px] mr-auto px-1 tracking-tight">Ticket details</h2>
                  
                  <div className="text-[13px] text-black mb-8 font-medium">
                    Select a ticket to view the details
                  </div>

                  <div className="mt-auto pt-8 border-t border-slate-200 w-full flex flex-col pb-4">
                    <label className="text-[13px] font-medium text-black block mb-2">Have a promo code?</label>
                    <div className="flex h-10 mb-6 border border-slate-300 rounded shadow-sm overflow-hidden bg-white w-full">
                      <Input placeholder="" className="bg-white border-none shadow-none rounded-none focus-visible:ring-0 text-black h-full flex-1" />
                    </div>

                    <div className="border border-slate-200 shadow-sm rounded-md bg-white p-4 mb-8 flex items-center gap-3 w-full">
                      <Tag className="w-5 h-5 text-[#8D70F2] rotate-90" />
                      <div className="flex-1">
                        <div className="font-bold text-[13px] text-black leading-tight">Discounts</div>
                        <div className="text-[11px] text-slate-500 mt-0.5">See available discounts</div>
                      </div>
                      <div className="text-slate-400 font-light text-[15px]">›</div>
                    </div>

                    <Button className="w-full opacity-50 font-bold bg-[#A389F4] text-white hover:bg-[#8D70F2] rounded-md h-[44px] text-[15px]" disabled>
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            */}

            {/* <div className="mt-6 max-w-4xl text-center text-white/70 text-[11px] sm:text-[12px] font-medium px-4 leading-[1.8]">
              By registering for this event you agree to the <a href="#" className="underline hover:text-white">event terms and conditions</a> and the <a href="#" className="underline hover:text-white">code of conduct</a>. You also agree to be emailed about event details and related product-level information. Paid hands-on labs are non-refundable, but may be transferred.
            </div> */}
          </div>
        </section>


        {/* Panels Section */}
        <section className="bg-white py-24 px-4 overflow-hidden relative">
          <div className="container mx-auto max-w-5xl space-y-24">
            
            {/* When / Where */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
               <div className="absolute left-[-20px] top-[-20px] hidden md:block">
                  <span className="text-[#34a853] text-[80px]">✦</span>
               </div>
              <div className="bg-[#4285F4] text-white p-8 md:p-12 border-[4px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] text-center min-h-[300px] md:h-[350px] flex flex-col justify-center relative hover:-translate-y-2 hover:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] transition-transform">
                <div className="absolute top-2 left-2 right-2 bottom-2 border-[2px] border-white/20 pointer-events-none"></div>
                <div className="relative z-10 text-black">
                    <div className="mb-10">
                    <h3 className="text-xl mb-2 font-black uppercase tracking-widest text-[#fbbc05]">When</h3>
                    <p className="text-[28px] md:text-[32px] font-black uppercase bg-black text-white inline-block px-4 py-2 border-[2px] border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">13th June 2026</p>
                    </div>
                    <div>
                    <h3 className="text-xl mb-2 font-black uppercase tracking-widest text-[#fbbc05]">Where</h3>
                    <p className="text-[20px] md:text-[24px] font-black leading-tight mt-1 uppercase mb-2">MSSU I-Spark Foundation Incubator Vidyavihar<br/>Mumbai</p>
                    <a 
                      href="https://maps.app.goo.gl/1UiY9gcVhtCimhNb9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[16px] mt-1 font-bold bg-white text-black inline-block px-3 py-1.5 border-2 border-black hover:bg-[#fbbc05] transition-colors shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                    >
                      Click for Address 📍
                    </a>
                    </div>
                </div>
              </div>
              <div className="hidden md:block"></div>
            </div>

            {/* Hands-on labs */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
              <div className="bg-[#EBECEE] rounded-[14px] h-[380px] w-full border border-slate-200 shadow-sm relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-transparent to-[#e0e2e5]"></div>
              </div>
              <div className="flex flex-col items-start pr-4 mt-8 md:mt-0">
                <h2 className="text-4xl md:text-[38px] font-bold text-black mb-6 tracking-tight">Hands-on labs</h2>
                <p className="text-[17px] text-slate-700 mb-8 leading-[1.7] font-medium">
                  Get firsthand experience in building dashboards, data sources, new telemetry pipelines, and more. Grafana Labs experts will lead hands-on labs across a variety of topics and teach you tips and tricks to improve your skills.
                </p>
                <Button className="bg-[#2E88F5] hover:bg-[#1C6DD0] text-white font-bold px-8 py-6 rounded-[6px] shadow-sm text-base">Sign up</Button>
              </div>
            </div> */}

            {/* Join us at the community party! */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
              <div className="flex flex-col items-start md:pl-2 order-2 md:order-1 mt-8 md:mt-0">
                <h2 className="text-4xl md:text-[38px] font-bold text-black mb-6 tracking-tight leading-tight">Join us at the<br/>community party!</h2>
                <p className="text-[17px] text-slate-700 mb-8 leading-[1.7] font-medium">
                  Don't miss the Community Garden Party on Tuesday, 21 April! Celebrate with peers and and plant seeds for future collaboration across the open source community.
                </p>
              </div>
              <div className="bg-[#EBECEE] rounded-[14px] h-[380px] w-full border border-slate-200 shadow-sm order-1 md:order-2 flex items-center justify-center"></div>
            </div> */}

            {/* Golden Grot Awards */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
              <div className="bg-[#EBECEE] rounded-[14px] h-[380px] w-full border border-slate-200 shadow-sm"></div>
              <div className="flex flex-col items-start pr-4 mt-8 md:mt-0">
                <h2 className="text-4xl md:text-[38px] font-bold text-black mb-6 tracking-tight">Golden Grot Awards</h2>
                <p className="text-[17px] text-slate-700 mb-8 leading-[1.7] font-medium">
                  Each year, we recognize our open source community and their amazing Grafana dashboards with our annual Golden Grot Awards. Find out more about how to enter, how to vote, and former Golden Grot Award winners.
                </p>
                <Button className="bg-[#2E88F5] hover:bg-[#1C6DD0] text-white font-bold px-8 py-6 rounded-[6px] shadow-sm text-base">Learn about the Golden Grots</Button>
              </div>
            </div> */}

            {/* Stay steps away from GrafanaCON */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
              <div className="flex flex-col items-start md:pl-2 order-2 md:order-1 mt-8 md:mt-0">
                <h2 className="text-4xl md:text-[38px] font-bold text-black mb-6 leading-tight tracking-tight">Stay steps away<br/>from GrafanaCON</h2>
                <p className="text-[17px] text-slate-700 mb-8 leading-[1.7] font-medium">
                  A limited number of rooms at a discounted rate are reserved at the Torre Melina, a Gran Meliá Hotel, just a two-minute walk from the venue. Book your stay by 3 April, 2026.
                </p>
                <Button className="bg-[#2E88F5] hover:bg-[#1C6DD0] text-white font-bold px-8 py-6 rounded-[6px] shadow-sm text-base">Book now</Button>
              </div>
              <div className="bg-[#EBECEE] rounded-[14px] h-[380px] w-full border border-slate-200 shadow-sm order-1 md:order-2"></div>
            </div> */}

            {/* GrafanaCON Outreach Scholarships */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 items-center">
              <div className="bg-[#EBECEE] rounded-[14px] h-[380px] w-full border border-slate-200 shadow-sm"></div>
              <div className="flex flex-col items-start pr-4 mt-8 md:mt-0">
                <h2 className="text-4xl md:text-[38px] font-bold text-black mb-6 leading-tight tracking-tight">GrafanaCON<br/>Outreach<br/>Scholarships</h2>
                <p className="text-[17px] text-slate-700 mb-8 leading-[1.7] font-medium">
                  We're offering a limited number of complimentary tickets and travel assistance for community members. Apply by 9 March.
                </p>
                <Button className="bg-[#2E88F5] hover:bg-[#1C6DD0] text-white font-bold px-8 py-6 rounded-[6px] shadow-sm text-base">Apply today</Button>
              </div>
            </div> */}
            
          </div>
        </section>


        {/* Sponsors Card */}
        {/*
        <section className="bg-[#F4F5F5] pb-24 px-4 pt-10">
          <div className="container mx-auto max-w-[1000px]">
            <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 p-16 md:p-20 text-center relative overflow-hidden">
              <h2 className="text-[36px] font-bold text-black mb-20 tracking-tight">Thank you to our sponsors</h2>
              
              <div className="mb-24">
                <p className="text-[13px] font-bold text-slate-600 uppercase tracking-widest mb-8">Pioneer</p>
                <div className="flex justify-center items-center">
                   {/* AWS Logo text *\/}
                   <div className="text-[60px] font-bold tracking-tighter text-[#232F3E] relative inline-block leading-none pb-2 pt-2">
                     aws
                     <svg className="absolute -bottom-3 left-0 w-[110%] h-5 -ml-1" viewBox="0 0 100 20" preserveAspectRatio="none">
                        <path d="M0,10 Q40,25 90,5" stroke="#FF9900" strokeWidth="3" fill="none" />
                        <polygon points="85,0 93,4 83,10" fill="#FF9900" />
                     </svg>
                   </div>
                </div>
              </div>
              
              <div className="mb-24">
                <p className="text-[13px] font-bold text-slate-600 uppercase tracking-widest mb-10">Guru</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 w-full max-w-2xl mx-auto">
                  {/* Google Cloud Logo *\/}
                  <div className="flex items-center gap-[6px]">
                     <span className="text-[32px] font-medium text-[#4285F4]">G</span>
                     <span className="text-[32px] font-medium text-[#EA4335]">o</span>
                     <span className="text-[32px] font-medium text-[#FBBC05]">o</span>
                     <span className="text-[32px] font-medium text-[#4285F4]">g</span>
                     <span className="text-[32px] font-medium text-[#34A853]">l</span>
                     <span className="text-[32px] font-medium text-[#EA4335]">e</span>
                     <span className="text-[32px] font-medium text-[#5F6368] ml-1.5 opacity-90 tracking-tight">Cloud</span>
                  </div>
                  {/* ClickHouse Logo *\/}
                  <div className="flex items-center gap-3">
                     <div className="flex gap-[3px]">
                       <div className="w-[3px] h-7 bg-black"></div>
                       <div className="w-[3px] h-7 bg-black"></div>
                       <div className="w-[3px] h-7 bg-black"></div>
                       <div className="w-[3px] h-7 bg-black"></div>
                     </div>
                     <span className="text-[28px] tracking-tight font-semibold text-black">ClickHouse</span>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[13px] font-bold text-slate-600 uppercase tracking-widest mb-10">Champion</p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-32 w-full max-w-2xl mx-auto">
                  {/* Cribl *\/}
                  <div className="flex items-center gap-[10px]">
                    <svg width="45" height="45" viewBox="0 0 100 100">
                      <polygon points="10,50 90,10 90,90" fill="#4BDBBD" />
                    </svg>
                    <span className="text-[32px] font-bold tracking-tight text-black">Cribl</span>
                  </div>
                  {/* Tiger Data *\/}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-[5px] border-black flex items-center justify-center relative overflow-hidden">
                       <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-[120%] h-1 bg-black rotate-[45deg]"></div>
                          <div className="w-[120%] h-1 bg-black -rotate-[45deg]"></div>
                       </div>
                    </div>
                    <span className="text-[30px] font-bold tracking-tight text-black">Tiger Data</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Become a sponsor */}
        <section className="bg-black pb-24 px-4 pt-16">
          <div className="container mx-auto max-w-[1000px]">
            <div className="bg-[#4285F4] border-[4px] border-white p-14 text-center shadow-[12px_12px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-2 transition-transform">
              <h2 className="text-[32px] md:text-[40px] font-black tracking-tighter text-white mb-6 uppercase">Become a Sponsor</h2>
              <p className="text-[18px] md:text-[20px] text-white font-bold leading-relaxed max-w-2xl mx-auto mb-8">
                Limited sponsorship opportunities are available for Grafana & Friends Mumbai 2026. 
              </p>
              <a href="mailto:grafanamubai@gmail.com" className="bg-[#fbbc05] text-black font-black px-8 py-4 border-[3px] border-black text-xl hover:bg-white inline-block shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] uppercase tracking-wider">
                 Email Us ✉️
              </a>
            </div>
          </div>
        </section>

        <ScheduleSection />

        {/* Resources Cards */}
        {/*
        <section className="bg-[#F4F5F5] pb-32 px-4">
          <div className="container mx-auto max-w-[1000px] grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 p-10 flex flex-col justify-between items-start">
              <div>
                <div className="mb-6 h-12 flex items-center">
                  <div className="relative w-8 h-8">
                     <svg viewBox="0 0 24 24" className="w-full h-full text-transparent" fill="none">
                       {/* Slack icon approximation *\/}
                       <rect x="13.5" y="2" width="5" height="13" rx="2.5" fill="#E01E5A" transform="rotate(30 16 8)" />
                       <rect x="5.5" y="2" width="5" height="13" rx="2.5" fill="#36C5F0" transform="rotate(-30 8 8)" />
                       <rect x="2" y="13.5" width="13" height="5" rx="2.5" fill="#ECB22E" transform="rotate(-30 8 16)" />
                       <rect x="9" y="13.5" width="13" height="5" rx="2.5" fill="#2EB67D" transform="rotate(30 15 16)" />
                     </svg>
                  </div>
                </div>
                <h2 className="text-[28px] font-bold text-black mb-4 leading-tight tracking-tight">No need to wait to<br/>meet and mingle</h2>
                <p className="text-slate-600 mb-8 font-medium leading-[1.6] text-[15px] max-w-[90%]">Stop by and say hi in the #grafanacon channel in Grafana Labs' Community Slack.</p>
              </div>
              <a href="#" className="inline-flex w-fit items-center text-[15px] text-[#0A52CC] font-bold hover:underline underline-offset-[3px] decoration-[1.5px] mt-auto">Join the conversation <ArrowRight className="w-[18px] h-[18px] ml-1.5" strokeWidth={2.5}/></a>
            </div>

            <div className="bg-white rounded-[20px] shadow-sm border border-slate-200 p-10 flex flex-col justify-between items-start">
              <div>
                <div className="mb-6 h-12 flex items-center">
                  <div className="w-9 h-9 border-[3.5px] border-[#FF6A00] rounded-full flex items-center justify-center relative p-1 shadow-sm">
                     <div className="w-[10px] h-[10px] bg-[#FF6A00] rounded-full"></div>
                     <div className="absolute -top-[6px] w-[5px] h-[5px] bg-[#FF6A00] rounded-sm"></div>
                     <div className="absolute -bottom-[6px] w-[5px] h-[5px] bg-[#FF6A00] rounded-sm"></div>
                     <div className="absolute -left-[6px] w-[5px] h-[5px] bg-[#FF6A00] rounded-sm"></div>
                     <div className="absolute -right-[6px] w-[5px] h-[5px] bg-[#FF6A00] rounded-sm"></div>
                  </div>
                </div>
                <h2 className="text-[28px] font-bold text-black mb-6 leading-tight tracking-tight">Explore all the latest<br/>releases</h2>
                <ul className="space-y-4">
                  <li><a href="#" className="text-[#0A52CC] text-[15px] font-bold hover:underline underline-offset-[3px] decoration-[1.5px]">Grafana 12.3</a></li>
                  <li><a href="#" className="text-[#0A52CC] text-[15px] font-bold hover:underline underline-offset-[3px] decoration-[1.5px]">Mimir 3.0</a></li>
                  <li><a href="#" className="text-[#0A52CC] text-[15px] font-bold hover:underline underline-offset-[3px] decoration-[1.5px]">Tempo 2.9</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        */}

        {/* Best of 2025 */}
        {/*
        <section className="bg-[#2B2D31] text-white py-24 px-4 border-b border-[#2B2D31]">
          <div className="container mx-auto max-w-[1000px] text-center">
            <h2 className="text-[34px] font-bold mb-3 tracking-tight">Best of GrafanaCON 2025</h2>
            <p className="text-[16px] text-slate-300 mb-16 font-medium">Check out highlights from last year's event.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 text-left mb-12">
               {/* Video 1 *\/}
               <div className="flex flex-col">
                 <div className="bg-[#1A1C1F] rounded-[10px] h-[260px] md:h-[300px] w-full mb-6 relative flex items-center justify-center group cursor-pointer hover:bg-black/60 transition-colors shadow-inner">
                 </div>
                 <h3 className="text-[19px] font-bold tracking-tight text-[#EBECEE]">Grafana 12 deep dive</h3>
               </div>
               
               {/* Video 2 *\/}
               <div className="flex flex-col">
                 <div className="bg-[#1A1C1F] rounded-[10px] h-[260px] md:h-[300px] w-full mb-6 relative flex items-center justify-center group cursor-pointer hover:bg-black/60 transition-colors shadow-inner">
                 </div>
                 <h3 className="text-[19px] font-bold leading-[1.3] tracking-tight text-[#EBECEE] w-[90%]">Loki at Dropbox: Strategies for reliable petabyte-scale logging</h3>
               </div>

               {/* Video 3 *\/}
               <div className="flex flex-col md:col-span-1">
                 <div className="bg-[#1A1C1F] rounded-[10px] h-[260px] md:h-[300px] w-full mb-6 relative flex items-center justify-center group cursor-pointer hover:bg-black/60 transition-colors shadow-inner">
                 </div>
                 <h3 className="text-[19px] font-bold leading-[1.3] tracking-tight text-[#EBECEE] w-[85%]">Dashboards to the moon:<br/>Grafana's role in Firefly's Blue Ghost<br/>Mission operations</h3>
               </div>
            </div>

          </div>
        </section>
        */}

        {/* Black footer strip */}
        {/*
        <div className="bg-[#0D0D0E] py-4">
          <div className="container mx-auto px-4 max-w-[1000px] flex items-center h-16 relative">
              {/* Graphic Logo representation *\/}
              <div className="absolute top-1/2 -translate-y-1/2 -left-14 w-20 h-24  justify-center hidden md:flex items-end pb-2">
                 <svg viewBox="0 0 100 120" className="w-[70px] h-[90px] drop-shadow-md">
                   {/* body *\/}
                   <path d="M20,120 Q20,30 50,30 Q80,30 80,120 Z" fill="#F0B52B" />
                   {/* eye *\/}
                   <circle cx="65" cy="55" r="12" fill="white" />
                   <circle cx="68" cy="55" r="5" fill="black" />
                   {/* details *\/}
                   <path d="M15,45 Q5,40 10,25 Z" fill="#F23C41" />
                   <path d="M25,25 Q15,15 30,5 Z" fill="#F23C41" />
                   <path d="M48,15 L52,5 L60,18 Z" fill="#F23C41" />
                   <path d="M90,50 L95,65 L80,70 Z" fill="#F0B52B" />
                 </svg>
              </div>
              <span className="text-white font-bold text-[18px] md:text-[20px] md:ml-12 tracking-wide">Sign up for Grafana stack updates</span>
          </div>
        </div>
        */}
      </main>

    </div>
    </>
  );
}
