'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl"
            style={{
                background: 'linear-gradient(90deg, #F9A825, #FF5722)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
            }}
          >
            Grafana & Friends
          </h1>
          <p className="mt-3 max-w-2xl mx-auto font-headline text-2xl font-semibold sm:text-3xl md:text-4xl">
            Mumbai Chapter
          </p>
          <p className="mt-4 text-lg md:text-2xl font-medium tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFF59D] via-[#FFD54F] to-[#FFB74D] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300 drop-shadow-sm">
            Where Mumbai Talks Observability & Open Source
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-lg">
            {/* <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full shadow-sm hover:bg-white/20 transition-colors">
              <Calendar className="h-5 w-5 text-primary" />
              <span>28th February, 2026</span>
            </div> */}
            {/* <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full shadow-sm hover:bg-white/20 transition-colors">
              <Clock className="h-5 w-5 text-primary" />
              <span>10:00 AM - 5:00 PM</span>
            </div> */}
            {/* <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full shadow-sm hover:bg-white/20 transition-colors">
              <MapPin className="h-5 w-5 text-primary" />
              <span>Venue TBD, Mumbai</span>
            </div> */}
          </div>
          
          <div className="mt-10">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30">
              <a href="https://www.meetup.com/grafana-and-friends-mumbai/" target="_blank" rel="noopener noreferrer">
                Register for Free
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
