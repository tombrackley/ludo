import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />

const faqItems = [
    {
        group: 'General',
        items: [
            {
                id: 'general-1',
                question: 'Does it work without internet?',
                answer: 'Yes. The platform uses an offline-first architecture — payments and scans work instantly even if your network goes down. Transactions sync automatically when connectivity returns.',
            },
            {
                id: 'general-2',
                question: 'Can I use my own hardware?',
                answer: 'Yes. The platform supports standard Android NFC devices and compatible payment terminals. No proprietary hardware lock-in.',
            },
            {
                id: 'general-3',
                question: 'How fast are vendor payouts?',
                answer: 'Revenue splits are calculated in real-time. Processing typically completes within 48 hours after your event ends.',
            },
            {
                id: 'general-4',
                question: 'Is training required for staff?',
                answer: 'Minimal. Seasonal staff can learn the system in under 5 minutes. One intuitive training path, one checkout flow.',
            },
        ],
    },
    {
        group: 'Payments & Operations',
        items: [
            {
                id: 'payments-1',
                question: 'Does the platform support cashless payments?',
                answer: 'Yes — across POS terminals, self-service kiosks, visitor apps, and NFC wristbands or cards.',
            },
            {
                id: 'payments-2',
                question: 'Can we still accept cash?',
                answer: 'Absolutely. The platform is fully flexible — you can run fully cashless, cash-enabled, or a hybrid model.',
            },
            {
                id: 'payments-3',
                question: 'Is the visitor app customizable?',
                answer: 'Yes. The app is fully branded and configurable — customize content, features, layouts, and guest experiences to match your venue.',
            },
            {
                id: 'payments-4',
                question: 'Where can the platform be used?',
                answer: 'The platform is designed for large and complex venues — agricultural shows, theme parks, zoos, museums, festivals, conferences, exhibitions, and permanent attractions.',
            },
        ],
    },
]

export default function FAQs() {
    return (
        <section className="bg-background py-16 md:py-24">
            <div className="mx-auto max-w-3xl px-1 md:px-6">
                <div className="max-w-lg max-md:px-6">
                    <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Everything you need to know about deploying the platform at your venue or event.</p>
                </div>

                <div className="my-12 space-y-12 md:-ml-6">
                    {faqItems.map((item) => (
                        <div
                            className="space-y-4"
                            key={item.group}>
                            <h3 className="text-foreground pl-6 text-lg font-semibold">{item.group}</h3>
                            <Accordion
                                type="single"
                                collapsible
                                className="-space-y-1">
                                {item.items.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="data-[state=open]:bg-card data-[state=open]:ring-border data-[state=open]:shadow-black/6.5 peer rounded-xl border-none px-6 py-1 data-[state=open]:border-none data-[state=open]:shadow-sm data-[state=open]:ring-1">
                                        <AccordionTrigger className="cursor-pointer rounded-none border-b text-base transition-none hover:no-underline data-[state=open]:border-transparent">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-muted-foreground text-base">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    ))}
                </div>

                <p className="text-muted-foreground max-md:px-6">
                    Can't find what you're looking for? Contact our{' '}
                    <Link
                        href="mailto:hello@ludo.computer"
                        className="text-primary font-medium hover:underline">
                        customer support team
                    </Link>
                </p>
            </div>
        </section>
    )
}