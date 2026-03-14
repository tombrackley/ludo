import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import {
    Users,
    Zap,
    UtensilsCrossed,
    HandCoins,
    BarChart3,
    ShieldCheck,
} from 'lucide-react'

const metrics = [
    { value: '120k+', label: 'Peak Daily Visitors' },
    { value: '99.99%', label: 'Operational Uptime' },
    { value: '<15s', label: 'Avg Transaction Time' },
    { value: '48hr', label: 'Settlement Cycle' },
]

const features = [
    {
        icon: <Users className="size-5" />,
        title: 'Family Spend Controls',
        description: 'Give families confidence and control.',
        points: [
            'Shared wallets and linked cards across family members',
            'Spend visibility by person',
            'Easier budgeting improves willingness to load value',
        ],
    },
    {
        icon: <Zap className="size-5" />,
        title: 'Fast Top-Ups',
        description: 'Kiosks and mobile top-up reduce pressure at peak times.',
        points: [
            'Self-serve reduces staffing requirements',
            'Guests top up without leaving the flow of the day',
            'Higher throughput at F&B outlets',
        ],
    },
    {
        icon: <UtensilsCrossed className="size-5" />,
        title: 'F&B Throughput',
        description: 'Keep transactions short and consistent across venues.',
        points: [
            'One checkout flow for all vendor types',
            'Reduced payment confusion for seasonal staff',
            'Fewer abandoned purchases',
        ],
    },
    {
        icon: <HandCoins className="size-5" />,
        title: 'Deterministic Settlement',
        description: 'Make finance confident.',
        points: [
            'Clean settlement logic applied per transaction',
            'Clear end-of-day totals for every outlet',
            'Less manual reconciliation work',
        ],
    },
    {
        icon: <BarChart3 className="size-5" />,
        title: 'Operational Telemetry',
        description: 'See where demand spikes so staffing gets smarter.',
        points: [
            'Peak-hour revenue reporting by zone',
            'Venue performance comparison',
            'Faster response to pressure points',
            'Dedicated wireless coverage across wet zones where public networks fail',
        ],
    },
]

const faqItems = [
    {
        question: 'How do cashless wristbands work at a water park?',
        answer: 'Visitors receive waterproof NFC wristbands at entry, load funds via kiosks, the app, or staff terminals, and tap to pay at any outlet. Families can link multiple wristbands with shared spend visibility.',
    },
    {
        question: 'Are the wristbands waterproof?',
        answer: 'Yes. NFC wristbands are rated for full water submersion and work reliably when wet.',
    },
    {
        question: "Can families set spending limits on children's wristbands?",
        answer: 'Yes. The platform supports shared family wallets with per-person limits and remote top-up functionality.',
    },
    {
        question: 'How does reconciliation work for F&B vendors?',
        answer: 'Transactions settle in real time with automatic split logic. End-of-day totals are deterministic with payouts within 48 hours.',
    },
]

export default function WaterParksPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-primary font-mono text-sm uppercase">Water Parks & Attractions</span>
                            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                Cashless Wristbands for Water Parks & Attractions
                            </h1>
                            <p className="text-muted-foreground mt-6 text-balance text-lg">
                                Reduce queue friction, improve family spend control, and simplify reconciliation.
                            </p>
                            <div className="mt-8 flex justify-center gap-3">
                                <Button><Link to="/contact">Book a Walkthrough</Link></Button>
                                <Button variant="outline"><a href="#features">See How It Works</a></Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Metrics */}
                <section className="py-16">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                            {metrics.map((metric, i) => (
                                <div key={i} className="rounded-xl border p-6 text-center">
                                    <div className="text-3xl font-semibold md:text-4xl">{metric.value}</div>
                                    <div className="text-muted-foreground mt-1 text-sm">{metric.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Features */}
                <section id="features" className="scroll-mt-24 py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="space-y-24">
                            {features.map((feature, i) => (
                                <div
                                    key={i}
                                    className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                                    <div>
                                        <div className="bg-primary/10 text-primary mb-4 flex size-10 items-center justify-center rounded-lg">
                                            {feature.icon}
                                        </div>
                                        <h2 className="text-3xl font-semibold">{feature.title}</h2>
                                        <p className="text-muted-foreground mt-3 text-lg">{feature.description}</p>
                                        <ul className="mt-6 space-y-3">
                                            {feature.points.map((point, j) => (
                                                <li key={j} className="flex items-start gap-3">
                                                    <ShieldCheck className="text-primary mt-0.5 size-4 shrink-0" />
                                                    <span className="text-muted-foreground">{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="rounded-2xl border bg-white p-8 shadow-sm">
                                        <div className="flex items-center gap-3 text-muted-foreground">
                                            {feature.icon}
                                            <span className="text-sm font-medium uppercase tracking-wider">{feature.title}</span>
                                        </div>
                                        <div className="mt-6 space-y-3">
                                            {feature.points.map((point, j) => (
                                                <div key={j} className="flex items-center gap-3 rounded-lg bg-zinc-50 px-4 py-3">
                                                    <div className="bg-primary/10 flex size-6 shrink-0 items-center justify-center rounded-full">
                                                        <ShieldCheck className="text-primary size-3.5" />
                                                    </div>
                                                    <span className="text-sm">{point}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <img src="/taronga-zoo-logo.png" alt="Taronga Zoo" className="mx-auto mb-8 h-10 w-auto" />
                            <blockquote className="text-balance text-2xl font-medium italic">
                                &ldquo;The cashless wristband rollout was seamless. Guest throughput increased measurably, and the data we get back is invaluable for planning future events.&rdquo;
                            </blockquote>
                            <div className="mt-6 flex items-center justify-center gap-3">
                                <img
                                    src="/mark-kemp-headshot.webp"
                                    alt="Mark Kemp"
                                    className="size-12 rounded-full object-cover ring-1 ring-foreground/10"
                                />
                                <div className="text-left">
                                    <div className="text-sm font-medium">Mark Kemp</div>
                                    <div className="text-sm text-muted-foreground">Digital Transformation, Taronga Zoo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 md:py-24">
                    <div className="mx-auto max-w-3xl px-1 md:px-6">
                        <div className="max-md:px-6 text-center">
                            <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4 text-balance text-lg">Everything you need to know about cashless at your water park.</p>
                        </div>
                        <div className="mt-12 divide-y">
                            {faqItems.map((item, i) => (
                                <details key={i} className="group py-5">
                                    <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                                        {item.question}
                                        <span className="text-muted-foreground ml-4 shrink-0 transition-transform group-open:rotate-45">+</span>
                                    </summary>
                                    <p className="text-muted-foreground mt-3 leading-relaxed">{item.answer}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Final CTA */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6 text-center">
                        <h2 className="text-balance text-4xl font-semibold md:text-5xl">Ready to simplify your park ops?</h2>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                            Book a walkthrough and see how the platform handles family spend, fast top-ups, and clean reconciliation.
                        </p>
                        <div className="mt-8">
                            <Button size="lg"><Link to="/contact">Book a Walkthrough</Link></Button>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    )
}
