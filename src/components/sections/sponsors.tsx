'use client';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const swags = [
    { name: 'Cool T-Shirt', imageId: 'swag-1' },
    { name: 'Stickers Pack', imageId: 'swag-2' },
    { name: 'Grot Plush Toy', imageId: 'swag-grot-plushie' },
    { name: 'Coffee Mug', imageId: 'swag-4' },
    { name: 'Event Hoodie', imageId: 'swag-hoodie' },
    { name: 'Pen Set', imageId: 'swag-pen-set' },
]

export default function SponsorsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <section id="sponsors" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Win Amazing Swags
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Participate in our contests and quizzes during the event for a chance to win exclusive Grafana & Friends Mumbai merchandise!
                    </p>
                </div>
                
                <div className="mt-16">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-4xl mx-auto"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {swags.map((swag) => {
                                const image = PlaceHolderImages.find(p => p.id === swag.imageId);
                                return (
                                    <CarouselItem key={swag.name} className="md:basis-1/2 lg:basis-1/3">
                                        <div className="p-4">
                                            <Card className="overflow-hidden text-center transition-transform hover:scale-105 hover:shadow-xl">
                                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                                {image && (
                                                    <Image 
                                                        src={image.imageUrl}
                                                        alt={swag.name}
                                                        width={400}
                                                        height={400}
                                                        className="h-full w-full object-cover"
                                                        data-ai-hint={image.imageHint}
                                                    />
                                                )}
                                                </CardContent>
                                                <div className="p-4 bg-background">
                                                    <h3 className="font-headline text-lg font-semibold">{swag.name}</h3>
                                                </div>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                )
                            })}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
