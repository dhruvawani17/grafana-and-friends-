import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const coreTeam = [
    { name: 'John Doe', title: 'Lead Organizer', imageId: 'speaker-1', linkedin: '#' },
    { name: 'Jane Smith', title: 'Community Manager', imageId: 'speaker-2', linkedin: '#' },
    { name: 'Peter Jones', title: 'Sponsorship Lead', imageId: 'speaker-3', linkedin: '#' },
    { name: 'Mary Johnson', title: 'Volunteer Coordinator', imageId: 'speaker-4', linkedin: '#' },
    { name: 'Sam Wilson', title: 'AV Lead', imageId: 'speaker-5', linkedin: '#' },
    { name: 'Casey Becker', title: 'Social Media Lead', imageId: 'speaker-6', linkedin: '#' },
];

export default function CoreTeamSection() {
    return (
        <section id="core-team" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Meet the Core Team
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        The passionate individuals making this event happen.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {coreTeam.map((member) => {
                        const image = PlaceHolderImages.find(p => p.id === member.imageId);
                        return (
                            <Card key={member.name} className="group overflow-hidden text-center transition-shadow hover:shadow-xl">
                                <div className="relative">
                                    {image && (
                                        <Image
                                            src={image.imageUrl}
                                            alt={`Portrait of ${member.name}`}
                                            width={500}
                                            height={500}
                                            className="aspect-square object-cover"
                                            data-ai-hint={image.imageHint}
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                                            <Linkedin className="h-10 w-10" />
                                        </Link>
                                    </div>
                                </div>
                                <CardContent className="p-4">
                                    <h3 className="font-headline text-lg font-semibold">{member.name}</h3>
                                    <p className="mt-1 text-xs text-primary">{member.title}</p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
