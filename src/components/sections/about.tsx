import { Target, Users, Zap } from 'lucide-react';

const AboutCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            {icon}
        </div>
        <h3 className="font-headline text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{children}</p>
    </div>
)

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        About Us
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Grafana & Friends Mumbai is a community-driven event for developers, SREs, and DevOps engineers passionate about observability. Join us for a full day of talks, workshops, and networking.
                    </p>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
                    <AboutCard icon={<Target className="h-8 w-8" />} title="Learn">
                        Discover the latest trends in observability, monitoring, and data visualization from industry experts.
                    </AboutCard>
                    <AboutCard icon={<Users className="h-8 w-8" />} title="Connect">
                        Network with peers, connect with the Grafana community, and meet the minds behind the tools you use.
                    </AboutCard>
                    <AboutCard icon={<Zap className="h-8 w-8" />} title="Innovate">
                        Get inspired by innovative use cases and learn practical skills to take your observability stack to the next level.
                    </AboutCard>
                </div>
            </div>
        </section>
    );
}
