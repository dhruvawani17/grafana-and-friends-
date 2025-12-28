import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "What is Grafana and Friends Mumbai?",
        answer: "It's a community-led meetup for anyone interested in observability, monitoring, and data visualization. We focus on tools like Grafana, Prometheus, Loki, and the broader open-source observability ecosystem."
    },
    {
        question: "Who should attend?",
        answer: "Developers, DevOps engineers, SREs, system administrators, students, and anyone passionate about technology and observability. All skill levels are welcome!"
    },
    {
        question: "Is the event free?",
        answer: "Yes! Thanks to our amazing sponsors, the event is completely free to attend. However, registration is mandatory."
    },
    {
        question: "Will there be food and drinks?",
        answer: "Absolutely. We'll have breakfast, lunch, and coffee/tea throughout the day to keep you energized."
    },
    {
        question: "Is there a Code of Conduct?",
        answer: "Yes. We are committed to providing a friendly, safe, and welcoming environment for all. All attendees, speakers, sponsors, and volunteers are required to agree with and adhere to our Code of Conduct."
    },
    {
        question: "How can I become a speaker or a sponsor?",
        answer: "We have a Call for Proposals (CFP) link in the Speakers section. For sponsorship inquiries, please reach out to the event organizers through our social media channels."
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
