import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const sponsors = {
    platinum: [{ name: 'Grafana Labs', imageId: 'sponsor-grafana', url: '#' }],
    silver: [
        { name: 'Silver Sponsor 1', imageId: 'sponsor-placeholder', url: '#' },
        { name: 'Silver Sponsor 2', imageId: 'sponsor-placeholder', url: '#' },
    ],
    bronze: [
        { name: 'Bronze Sponsor 1', imageId: 'sponsor-placeholder', url: '#' },
        { name: 'Bronze Sponsor 2', imageId: 'sponsor-placeholder', url: '#' },
        { name: 'Bronze Sponsor 3', imageId: 'sponsor-placeholder', url: '#' },
    ],
};

const SponsorTier = ({ title, sponsors }: { title: string, sponsors: {name: string, imageId: string, url: string}[]}) => {
    const width = title === 'Platinum' ? 300 : title === 'Silver' ? 200 : 150;
    const height = width / 2;

    return (
        <div className="mt-12">
            <h3 className="text-center font-headline text-2xl font-semibold text-primary">{title}</h3>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
                {sponsors.map(sponsor => {
                    const image = PlaceHolderImages.find(p => p.id === sponsor.imageId);
                    return image && (
                        <Link key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="grayscale opacity-80 transition hover:opacity-100 hover:grayscale-0 focus:opacity-100 focus:grayscale-0">
                           <Image 
                                src={image.imageUrl}
                                alt={`${sponsor.name} logo`}
                                width={width}
                                height={height}
                                className="object-contain"
                                data-ai-hint={image.imageHint}
                           />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default function SponsorsSection() {
    return (
        <section id="sponsors" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Our Awesome Sponsors
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        This event is made possible by our amazing partners. Want to become a sponsor? Get in touch!
                    </p>
                </div>
                
                <SponsorTier title="Platinum" sponsors={sponsors.platinum} />
                <SponsorTier title="Silver" sponsors={sponsors.silver} />
                <SponsorTier title="Bronze" sponsors={sponsors.bronze} />

            </div>
        </section>
    );
}
