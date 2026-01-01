import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import Image from "next/image";

const faqs = [
    {
        question: "What is Grafana & Friends Mumbai, how can I join?",
        answer: (
            <>
                The official community group of Grafana and observability enthusiasts, including engineers, SREs, DevOps practitioners, architects, and students in and around Mumbai, India.
                Join us on <Link href="https://www.meetup.com/grafana-and-friends-mumbai/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">Meetup</Link>.
            </>
        )
    },
    {
        question: "Why should you join us?",
        answer: "This is a platform where you can interact with highly qualified and experienced industry professionals and like-minded people. Here, you get plenty of opportunities to learn, grow, and share with others. You will get access to various open-source, DevOps, cloud-native, and SDE topics, including integrations of the LGTM stack and much more. This also gives you a great chance to win goodies and swag, learn from our collaborations, and participate in meetups with different themes."
    },
    {
        question: "What if I have more questions?",
        answer: "Write us all your queries at grafanamumbai@gmail.com, we will reach out to you ASAP, or drop a message on our social pages, we are active there."
    },
    {
        question: "What is the Code of Conduct for the Event?",
        answer: (
            <>
                You can find the Code of Conduct <Link href="https://grafana.com/events/events-code-of-conduct/" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:no-underline">here</Link>.
            </>
        )
    },
    {
        question: "What are the perks available for the participants?",
        answer: "Interact with highly qualified and experienced industry professionals and like-minded people, and have a chance to win goodies and swags, during the meetup via contests or quizzes."
    },
    {
        question: "By who and to whom?",
        answer: (
            <ul className="list-disc pl-5 space-y-2">
                <li>Grafana & Friends Mumbai is organized by the local Grafana community, powered by Grafana Labs.</li>
                <li>It brings together engineers, SREs, DevOps practitioners, students, and open-source enthusiasts.</li>
                <li>The meetups focus on Grafana’s observability stack and related open-source tools.</li>
                <li>Sessions include real-world use cases, community demos, expert talks, and hands-on discussions.</li>
                <li>Community members can share their work, gain visibility, and become part of the community spotlight.</li>
            </ul>
        )
    }
];

export default function FaqSection() {
    return (
        <section id="faq" className="py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column: Title and Image */}
                    <div className="flex flex-col items-start space-y-8">
                        <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Frequently Asked <br />
                            <span className="text-primary">Questions</span>
                        </h2>
                        <div className="relative w-full max-w-md aspect-square mx-auto lg:mx-0">
                             {/* Placeholder for the illustration - using a generic one or you can upload the specific one */}
                             <div className="absolute inset-0 flex items-center justify-center">
                                <Image 
                                    src="/faq.webp" // Using an existing image as placeholder, replace with your illustration
                                    alt="FAQ Illustration"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                             </div>
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="w-full">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem 
                                    value={`item-${index}`} 
                                    key={index}
                                    className="border-b border-border px-0"
                                >
                                    <AccordionTrigger className="text-left font-headline text-xl font-medium hover:no-underline py-6 [&[data-state=open]]:text-primary transition-colors">
                                        <span className="mr-4 text-2xl font-bold opacity-50">{String(index + 1).padStart(2, '0')}</span>
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-base text-muted-foreground pb-6 pl-12">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    );
}
