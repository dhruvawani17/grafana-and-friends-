import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

const swags = [
    { name: 'Cool T-Shirt', imageId: 'swag-1' },
    { name: 'Stickers Pack', imageId: 'swag-2' },
    { name: 'Laptop Sleeve', imageId: 'swag-3' },
    { name: 'Coffee Mug', imageId: 'swag-4' },
]

export default function SponsorsSection() {
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
                
                <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
                    {swags.map((swag) => {
                        const image = PlaceHolderImages.find(p => p.id === swag.imageId);
                        return (
                            <Card key={swag.name} className="overflow-hidden text-center transition-transform hover:scale-105 hover:shadow-xl">
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
                        )
                    })}
                </div>

            </div>
        </section>
    );
}
