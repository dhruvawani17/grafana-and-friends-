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
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Grafana & Friends
          </h1>
          <p className="mt-3 max-w-2xl mx-auto font-headline text-2xl font-semibold sm:text-3xl md:text-4xl">
            Mumbai Chapter
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span>26th October, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-accent" />
              <span>10:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span>Venue TBD, Mumbai</span>
            </div>
          </div>
          
          <div className="mt-10">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/80 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-lg transition-transform hover:scale-105">
              <a href="https://konfhub.com/gafm26#tickets" target="_blank" rel="noopener noreferrer">
                Register for Free
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
