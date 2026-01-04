'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const speakers = [
    { name: 'Nikita Shinde', title: ' ', imageId: 'speaker-1', linkedin: 'https://www.linkedin.com/in/shinde-nikita/' },
    { name: 'Yash Kalwani', title: '', imageId: 'speaker-2', linkedin: 'https://www.linkedin.com/in/kalwani-yash/' },
    { name: 'Pratik Parik', title: '', imageId: 'speaker-3', linkedin: 'https://www.linkedin.com/in/parikh-pratik/' },
    { name: 'Shantanu', title: '', imageId: 'speaker-4', linkedin: '#' },
];

export default function SpeakersSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 1700, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <section id="speakers" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Meet Our Speakers
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Learn from the best in the industry. More speakers to be announced soon!
                    </p>
                </div>

                <div className="mt-16">
                   <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {speakers.map((speaker) => {
                                const image = PlaceHolderImages.find(p => p.id === speaker.imageId);
                                return (
                                    <CarouselItem key={speaker.name} className="p-4 md:basis-1/2 lg:basis-1/4">
                                        <div className="group relative text-center h-full flex flex-col items-center justify-center">
                                            {image && (
                                                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full ring-4 ring-white shadow-lg transition-all duration-300 group-hover:ring-primary group-hover:shadow-xl group-hover:scale-105">
                                                    <Image
                                                        src={image.imageUrl}
                                                        alt={`Portrait of ${speaker.name}`}
                                                        width={500}
                                                        height={500}
                                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                </div>
                                            )}
                                            <div className="mt-6">
                                                <h3 className="font-headline text-xl font-semibold">{speaker.name}</h3>
                                                <p className="mt-1 text-sm text-primary">{speaker.title}</p>
                                                <div className="mt-4 flex justify-center gap-4">
                                                    <Link href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </CarouselItem>
                                );
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                </div>

                <div className="mt-16 text-center">
                     <Button size="lg" asChild variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        <a href="https://grafana.qualtrics.com/jfe/form/SV_4OQ9dzUAbSHfrAG" target="_blank" rel="noopener noreferrer">
                            Become a Speaker (CFP Open!)
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
