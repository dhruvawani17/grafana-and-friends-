import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const speakers = [
    { name: 'Awesome Speaker', title: 'Principal Engineer, Acme Inc.', imageId: 'speaker-1' },
    { name: 'Another Speaker', title: 'SRE, Contoso Ltd.', imageId: 'speaker-2' },
    { name: 'Keynote Speaker', title: 'CTO, Stark Industries', imageId: 'speaker-3' },
    { name: 'Community Speaker', title: 'Open Source Contributor', imageId: 'speaker-4' },
];

export default function SpeakersSection() {
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

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {speakers.map((speaker) => {
                        const image = PlaceHolderImages.find(p => p.id === speaker.imageId);
                        return (
                            <Card key={speaker.name} className="overflow-hidden text-center transition-transform hover:scale-105 hover:shadow-xl">
                                <CardHeader className="p-0">
                                    {image && (
                                        <Image
                                            src={image.imageUrl}
                                            alt={`Portrait of ${speaker.name}`}
                                            width={500}
                                            height={500}
                                            className="aspect-square object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                </CardHeader>
                                <CardContent className="p-6">
                                    <h3 className="font-headline text-xl font-semibold">{speaker.name}</h3>
                                    <p className="mt-1 text-sm text-primary">{speaker.title}</p>
                                </CardContent>
                                <CardFooter className="flex justify-center gap-4 pb-6">
                                    <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
                                    <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin /></Link>
                                </CardFooter>
                            </Card>
                        );
                    })}
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
