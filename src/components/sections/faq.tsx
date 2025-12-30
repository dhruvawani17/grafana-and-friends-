import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

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
        <section id="faq" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="mt-12 mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                             <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left font-headline text-lg hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
