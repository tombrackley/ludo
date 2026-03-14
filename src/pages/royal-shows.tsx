import Header from '@/components/header'
import FooterSection from '@/components/footer'
import FAQs from '@/components/faqs-2'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import {
    Zap,
    Smartphone,
    HandCoins,
    BarChart3,
    HardDrive,
    Eye,
    Clock,
    ShieldCheck,
    TrendingUp,
    Wifi,
    Users,
    CreditCard,
} from 'lucide-react'

const metrics = [
    { value: '900k+', label: 'Total Visitors' },
    { value: '500+', label: 'Terminals Deployed' },
    { value: '3M+', label: 'Transactions Across Events' },
    { value: '99.99%', label: 'Operational Uptime' },
]

const features = [
    {
        icon: <Zap className="size-5" />,
        title: 'Peak-Day Throughput',
        description: 'Keep rides, games, food, and gates moving with one checkout flow.',
        points: [
            'Closed-loop credits and open-loop tap in a single terminal',
            'Under 15 seconds per transaction at kiosks',
            'Validates on-device — payments keep working when connectivity drops',
            'Purpose-built wireless network eliminates dependency on venue infrastructure',
        ],
    },
    {
        icon: <Smartphone className="size-5" />,
        title: 'Visitor App That Earns Its Install',
        description: 'Maps, bookmarks, purchases, pre-orders, and discounts — real utility that drives 4x account creation.',
        points: [
            '#1 app in Australia during event periods, with hundreds of thousands of users per event',
            '89% self-service adoption at Ekka',
            'Families manage spend across linked wristbands and mobile',
        ],
    },
    {
        icon: <HandCoins className="size-5" />,
        title: 'Transparent Settlement',
        description: 'Settlement becomes boring. Real-time splits cut disputes.',
        points: [
            'Policy-based splits applied per transaction automatically',
            'Organiser and vendor see identical totals',
            'Faster end-of-day close, fewer post-event arguments',
        ],
    },
    {
        icon: <BarChart3 className="size-5" />,
        title: 'Live Ops Command',
        description: "See what's happening now, not next week.",
        points: [
            'Revenue by precinct, vendor, and hour',
            'Terminal monitoring catches problems before complaints',
            'Queue pressure signals for redeploying staff',
        ],
    },
    {
        icon: <HardDrive className="size-5" />,
        title: 'Hardware at Scale',
        description: 'Plug-and-play devices with a proven deployment runbook.',
        points: [
            'Zebra Android terminals on 5G and Wi-Fi',
            'Pre-configured — vendors sign in and start selling',
            'Event-day escalation pathways for field support',
            'Ludo-deployed wireless network covers the full showground footprint',
        ],
    },
]

const vendorTransactions = [
    { time: '2:14 PM', item: 'Mega Mix Showbag', method: 'Wristband', amount: '$28.00' },
    { time: '2:11 PM', item: 'Bertie Beetle Bag', method: 'Card Tap', amount: '$15.00' },
    { time: '2:08 PM', item: 'Mega Mix Showbag ×2', method: 'Wristband', amount: '$56.00' },
    { time: '2:03 PM', item: 'Fairy Floss Bundle', method: 'Mobile', amount: '$12.00' },
]

const faqItems = [
    {
        question: 'What is the best cashless payment system for agricultural shows?',
        answer: "Ludo is purpose-built for high-attendance agricultural shows and has powered cashless payments at events like the Sydney Royal Easter Show (900,000+ visitors) and Brisbane's Ekka. The platform handles NFC wristbands, card terminals, and self-service kiosks across hundreds of vendor sites with automated revenue splits and real-time reporting.",
    },
    {
        question: 'How does vendor settlement work at a royal show?',
        answer: 'Every transaction is tagged to a specific vendor in real time. Revenue splits (e.g. 75% vendor / 25% organiser) are calculated automatically as sales happen. Both sides see identical totals on a live dashboard. Payouts are processed within 48 hours of event close — no spreadsheets or manual reconciliation required.',
    },
    {
        question: 'Do cashless wristbands work offline at outdoor events?',
        answer: "Yes. Terminals validate on-device and batch-upload when connectivity returns. If the network drops, payments and NFC taps keep working — critical for large outdoor showgrounds with uneven Wi-Fi coverage.",
    },
    {
        question: 'How many terminals can the platform support at one event?',
        answer: "Ludo has deployed 500+ terminals at a single event with 99.99% uptime. The platform scales with your footprint — whether you're running 50 terminals or 500, each vendor gets the same onboarding flow and the same real-time dashboard.",
    },
    {
        question: "What's the difference between closed-loop and open-loop payments at events?",
        answer: "Closed-loop systems use a dedicated balance loaded onto a wristband or card that can only be spent within the event. Open-loop accepts standard bank cards and mobile wallets (Apple Pay, Google Pay). Ludo supports both — venues can run closed-loop NFC wristbands alongside open-loop card payments on the same terminal, giving visitors the choice.",
    },
]

export default function RoyalShowsPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-primary font-mono text-sm uppercase">Agricultural Shows</span>
                            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                Move Crowds Faster, Settle Exhibitors Instantly
                            </h1>
                            <p className="text-muted-foreground mt-6 text-balance text-lg">
                                One platform for NFC wristbands, vendor settlement, and live operations across 500+ terminals. Proven at 120k+ daily visitors.
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
                                    className={`@container grid items-center gap-12 md:grid-cols-2 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
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

                {/* Vendor Dashboard */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto mb-16 max-w-2xl text-center">
                            <Eye className="text-primary mx-auto mb-4 size-6" />
                            <h2 className="text-balance text-4xl font-semibold">What your vendors see</h2>
                            <p className="text-muted-foreground mt-4 text-balance text-lg">
                                Every stallholder gets a live dashboard showing their sales, split percentage, and upcoming payout — no calls to the office, no surprises.
                            </p>
                        </div>

                        <Card className="!overflow-visible !p-0">
                            <div className="grid gap-0 md:grid-cols-3">
                                <div className="border-b p-8 md:border-b-0 md:border-r">
                                    <div className="text-sm font-medium text-muted-foreground">Today&apos;s Sales</div>
                                    <div className="mt-1 text-3xl font-semibold">$4,218</div>
                                    <div className="mt-1 flex items-center gap-1 text-sm text-emerald-600">
                                        <TrendingUp className="size-3.5" />
                                        12% vs yesterday
                                    </div>
                                </div>
                                <div className="border-b p-8 md:border-b-0 md:border-r">
                                    <div className="text-sm font-medium text-muted-foreground">Transactions</div>
                                    <div className="mt-1 text-3xl font-semibold">187</div>
                                    <div className="mt-1 text-sm text-muted-foreground">avg $22.56</div>
                                </div>
                                <div className="p-8">
                                    <div className="text-sm font-medium text-muted-foreground">Your Split (75%)</div>
                                    <div className="mt-1 text-3xl font-semibold">$3,163</div>
                                    <div className="mt-1 text-sm text-muted-foreground">Top item: Mega Mix (42 sold)</div>
                                </div>
                            </div>
                            <div className="border-t">
                                <div className="p-8">
                                    <div className="mb-4 flex items-center justify-between">
                                        <span className="text-sm font-medium">Recent Transactions</span>
                                        <span className="text-sm font-medium text-muted-foreground">Tom&apos;s Showbags — Stall 42</span>
                                    </div>
                                    <div className="space-y-2">
                                        {vendorTransactions.map((tx, i) => (
                                            <div key={i} className="flex items-center justify-between rounded-lg bg-zinc-50 px-4 py-3 text-sm">
                                                <span className="text-muted-foreground w-20">{tx.time}</span>
                                                <span className="flex-1">{tx.item}</span>
                                                <span className="text-muted-foreground w-24 text-right">{tx.method}</span>
                                                <span className="w-20 text-right font-medium">{tx.amount}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6 flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3">
                                        <Clock className="size-4 text-emerald-600" />
                                        <span className="text-sm text-emerald-700">Next payout: <strong>$3,163.50</strong> — Deposits within 48 hours of event close</span>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Testimonial */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <img src="/sydney-royal-easter-show-logo.png" alt="Sydney Royal Easter Show" className="mx-auto mb-8 h-12 w-auto" />
                            <blockquote className="text-balance text-2xl font-medium italic">
                                &ldquo;We needed to elevate our visitor experience, and we found a partner in Ludo capable of delivering everything we envisioned on a digital platform.&rdquo;
                            </blockquote>
                            <div className="mt-6 flex items-center justify-center gap-3">
                                <img
                                    src="/shane-mcgrath-headshot.webp"
                                    alt="Shane McGrath"
                                    className="size-12 rounded-full object-cover ring-1 ring-foreground/10"
                                />
                                <div className="text-left">
                                    <div className="text-sm font-medium">Shane McGrath</div>
                                    <div className="text-sm text-muted-foreground">Head of Operations, Sydney Royal Easter Show</div>
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
                            <p className="text-muted-foreground mt-4 text-balance text-lg">Everything you need to know about running cashless at your show.</p>
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
                        <h2 className="text-balance text-4xl font-semibold md:text-5xl">Ready to see it on your footprint?</h2>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                            Book a walkthrough and see how the platform handles peak-day operations at scale.
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
