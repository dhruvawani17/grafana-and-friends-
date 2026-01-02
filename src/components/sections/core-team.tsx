import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';

const coreTeam = [
    { name: 'Nikita Shinde', title: 'Organizer', imageId: 'core-1', linkedin: 'https://www.linkedin.com/in/shinde-nikita/' },
    { name: 'Prajwal Deshpande', title: 'Community Manager', imageId: 'core-2', linkedin: 'https://www.linkedin.com/in/d-prajwal/' },
    { name: 'Dhruva Wani', title: 'Sponsorship Lead', imageId: 'core-3', linkedin: 'https://www.linkedin.com/in/dhruvawani17/' },
    { name: 'Krisha Thakkar', title: 'Volunteer Coordinator', imageId: 'core-4', linkedin: 'https://www.linkedin.com/in/krisha-thakkar-bb1687311/' },
    { name: 'Sandesh Deshpande', title: 'AV Lead', imageId: 'core-5', linkedin: 'https://www.linkedin.com/in/sandesh-deshpande-32700940/' },
    { name: 'Mandar Sarfare', title: 'Social Media Lead', imageId: 'core-6', linkedin: 'https://www.linkedin.com/in/mandar-sarfare/' },
    { name: 'Uddhav More', title: 'Social Media Lead', imageId: 'core-7', linkedin: 'https://www.linkedin.com/in/uddhav-more/' },
    { name: 'Vanshika ', title: 'Social Media Lead', imageId: 'core-8', linkedin: 'https://www.linkedin.com/in/vanshikajain622' },
];

export default function CoreTeamSection() {
    return (
        <section id="core-team" className="py-12 md:py-20 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Meet the Core Team
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        The passionate individuals making this event happen.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 md:grid-cols-6">
                    {coreTeam.map((member) => {
                        const image = PlaceHolderImages.find(p => p.id === member.imageId);
                        return (
                            <div key={member.name} className="group relative text-center">
                                {image && (
                                    <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full transition-shadow group-hover:shadow-lg">
                                        <Image
                                            src={image.imageUrl}
                                            alt={`Portrait of a core team member`}
                                            width={200}
                                            height={200}
                                            className="h-full w-full object-cover transition-transform group-hover:scale-110"
                                            data-ai-hint={image.imageHint}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100">
                                            <Link href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary">
                                                <Linkedin className="h-8 w-8" />
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
