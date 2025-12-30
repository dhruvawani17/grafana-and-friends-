'use client';
import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const galleryImages = PlaceHolderImages.filter(p => p.id.startsWith('gallery-'));

export default function GallerySection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    );

    return (
        <section id="gallery" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Moments from Past Events
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        A glimpse into the vibrant Grafana community in Mumbai.
                    </p>
                </div>
                
                <div className="mt-16">
                    <Carousel
                        plugins={[plugin.current]}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full"
                        onMouseEnter={plugin.current.stop}
                        onMouseLeave={plugin.current.reset}
                    >
                        <CarouselContent>
                            {galleryImages.map((image) => (
                                <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card className="overflow-hidden">
                                            <CardContent className="flex aspect-video items-center justify-center p-0">
                                                <Image 
                                                    src={image.imageUrl}
                                                    alt={image.description}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover"
                                                    data-ai-hint={image.imageHint}
                                                />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden sm:flex" />
                        <CarouselNext className="hidden sm:flex" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
