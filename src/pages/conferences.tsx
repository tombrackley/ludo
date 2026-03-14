import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { usePageMeta } from '@/hooks/use-page-meta'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import {
    CalendarCheck,
    Wifi,
    Megaphone,
    CreditCard,
    BarChart3,
    HandCoins,
    ShieldCheck,
} from 'lucide-react'

const metrics = [
    { value: '3M+', label: 'Transactions Across Events' },
    { value: '99.99%', label: 'Operational Uptime' },
    { value: '<15s', label: 'Avg Transaction Time' },
    { value: '500+', label: 'Terminals Deployed' },
]

const features = [
    {
        icon: <CalendarCheck className="size-5" />,
        title: 'Schedule, Access & Wayfinding',
        description: 'Attendees browse sessions, bookmark favorites, scan into rooms, and navigate the venue from one app.',
        points: [
            'Browsable session schedule with bookmarks and live change notifications',
            'Dynamic QR badge credentials for secure session and area access',
            'Indoor wayfinding powered by official MappedIn partnership',
        ],
    },
    {
        icon: <Wifi className="size-5" />,
        title: 'Event-Grade Wireless Infrastructure',
        description: 'Ludo deploys purpose-built wireless networks so your venue does not need to provide coverage.',
        points: [
            'High-density Wi-Fi engineered for conference-scale device loads',
            'Optional private 5G for dedicated, interference-free connectivity',
            'Covers every terminal, badge reader, kiosk, and attendee touchpoint',
        ],
    },
    {
        icon: <Megaphone className="size-5" />,
        title: 'Measurable Sponsor Activations',
        description: 'Give sponsors featured placements, contextual push prompts, and clear engagement data.',
        points: [
            'Push prompts triggered by session state and attendee location',
            'Featured sponsor listings with navigation boosts in wayfinding',
            'Attributable impressions and interactions for every placement',
        ],
    },
    {
        icon: <CreditCard className="size-5" />,
        title: 'Unified On-Site Payments',
        description: 'One terminal for every payment method across food, merch, and activations.',
        points: [
            'Tap-to-pay, mobile wallets, and badge-linked spend on a single device',
            'Faster throughput at peak session breaks',
            'Centrally managed terminal fleet reduces vendor setup complexity',
        ],
    },
    {
        icon: <BarChart3 className="size-5" />,
        title: 'Live Event Ops Visibility',
        description: 'Revenue signals, terminal health, and crowd pressure by zone — updated live.',
        points: [
            'Revenue and throughput signals by area, session, and vendor',
            'Terminal health monitoring with 99.99% uptime across events',
            'Identify pressure points before they surface as complaints',
        ],
    },
    {
        icon: <HandCoins className="size-5" />,
        title: 'Clean Multi-Party Settlement',
        description: 'Close out with numbers every stakeholder agrees on.',
        points: [
            'Consistent totals across organisers, sponsors, and vendors',
            'Exportable financial reports ready for finance sign-off',
            'Fewer post-event reconciliation disputes',
        ],
    },
]

const faqItems = [
    {
        question: 'How does cashless payment work at a conference?',
        answer: 'Attendees use NFC badges, wristbands, or their mobile wallet to pay at food outlets, bars, merchandise stands, and activations. One terminal type handles all payment methods — tap-to-pay cards, Apple Pay, Google Pay, and closed-loop event credits. Transactions are fast enough that session break queues move quickly.',
    },
    {
        question: 'Can sponsors measure ROI from on-site activations?',
        answer: 'Yes. The platform provides sponsor-specific reporting: how many attendees visited the activation, transaction volume at sponsored outlets, and engagement with push prompts. This gives sponsors measurable touchpoints instead of logo-placement-only sponsorship models.',
    },
    {
        question: 'Does the platform include wayfinding and scheduling?',
        answer: 'Yes. The visitor app includes interactive venue maps powered by MappedIn, session schedules with live updates, and location-aware navigation. This reduces "where is…" support load and helps attendees discover exhibitors and sessions relevant to them.',
    },
    {
        question: 'How do multi-day conferences handle settlement across vendors?',
        answer: 'Revenue splits are applied per transaction in real time. Each vendor, caterer, and exhibitor sees their own live dashboard with earnings by day. End-of-event reporting is deterministic — consistent totals across all stakeholders with exportable reports for finance teams.',
    },
    {
        question: 'Does the venue need to provide wireless coverage?',
        answer: 'No. Ludo deploys and manages the wireless network. We provide high-capacity Wi-Fi purpose-built for event density, with optional private 5G for venues that need dedicated, interference-free connectivity. The venue does not need existing wireless infrastructure — we deploy it and remove it when the event ends.',
    },
    {
        question: 'How does badge-based access control work?',
        answer: 'Every conference badge carries a dynamic QR code that changes on a timed cycle. Attendees scan at session doors and restricted areas for real-time access validation. Because the code updates automatically, a photograph of someone else\'s badge cannot be reused. Access permissions, session capacity, and scan logs flow into the same ops dashboard as everything else.',
    },
]

export default function ConferencesPage() {
    usePageMeta('Conferences & Expos — Ludo Leisure Suite', 'Session scheduling, dynamic QR badge access, indoor wayfinding, and unified payments for multi-day conferences and expos.')
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-primary font-mono text-sm uppercase">Conferences & Expos</span>
                            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                Scheduling, Access, and Payments for Multi-Day Events
                            </h1>
                            <p className="text-muted-foreground mt-6 text-balance text-lg">
                                Ludo provides the infrastructure layer conferences lack — wireless networks, dynamic QR badge access, indoor wayfinding, and unified spend across every touchpoint.
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

                {/* Why Switch */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <Card className="!overflow-visible !p-12 text-center">
                            <h2 className="text-3xl font-semibold">Why event organisers switch</h2>
                            <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-balance text-lg">
                                Every conference is different, but the operational problems are the same: fragmented vendor payments, poor on-site visibility, and sponsors who can&apos;t measure outcomes. The platform handles all three from a single deployment.
                            </p>
                        </Card>
                    </div>
                </section>

                {/* FAQs */}
                <section className="py-16 md:py-24">
                    <div className="mx-auto max-w-3xl px-1 md:px-6">
                        <div className="max-md:px-6 text-center">
                            <h2 className="text-foreground text-4xl font-semibold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4 text-balance text-lg">Everything you need to know about running Ludo at your conference.</p>
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
                        <h2 className="text-balance text-4xl font-semibold md:text-5xl">Ready to upgrade your event ops?</h2>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                            See how the platform streamlines multi-day conferences with unified payments and real-time visibility.
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
