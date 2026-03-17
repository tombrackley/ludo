import Header from '@/components/header'
import FooterSection from '@/components/footer'
import SolutionsHero from '@/components/secondary-hero-10'
import { usePageMeta } from '@/hooks/use-page-meta'
import { Link } from 'react-router-dom'
import {
    FerrisWheel,
    Monitor,
    Waves,
    Gamepad2,
    Music,
    GraduationCap,
    Landmark,
    TreePalm,
    ChevronRight,
} from 'lucide-react'

const solutions = [
    {
        icon: FerrisWheel,
        title: 'Royal Shows & Expos',
        description: 'NFC wristbands, vendor settlement, and live ops across 500+ terminals. Proven at 120k+ daily visitors.',
        details: 'One platform for NFC wristbands, vendor settlement, and live operations. Purpose-built for large-scale agricultural shows with peak-day throughput, transparent settlement, and real-time ops command across every precinct.',
        highlights: ['500+ terminals deployed', '99.99% uptime', '120k+ daily visitors', 'Real-time vendor settlement'],
        href: '/solutions/royal-shows',
        image: '/shows.jpg',
        iconFill: 'fill-emerald-500/15',
        iconBg: 'bg-emerald-50',
        dotBg: 'bg-emerald-100',
        dotFill: 'bg-emerald-500',
    },
    {
        icon: Monitor,
        title: 'Conferences & Expos',
        description: 'Session scheduling, dynamic QR badge access, indoor wayfinding, and unified payments for multi-day events.',
        details: 'The infrastructure layer conferences lack — wireless networks, dynamic QR badge access, indoor wayfinding via MappedIn, measurable sponsor activations, and unified spend across every touchpoint.',
        highlights: ['Dynamic QR badge access', 'Indoor wayfinding', 'Sponsor activation tracking', 'Multi-party settlement'],
        href: '/solutions/conferences',
        image: '/Expo.jpg',
        iconFill: 'fill-indigo-500/15',
        iconBg: 'bg-indigo-50',
        dotBg: 'bg-indigo-100',
        dotFill: 'bg-indigo-500',
    },
    {
        icon: Waves,
        title: 'Water Parks & Attractions',
        description: 'Waterproof cashless wristbands, family spend controls, fast top-ups, and deterministic settlement.',
        details: 'Reduce queue friction, improve family spend control, and simplify reconciliation. Waterproof NFC wristbands work reliably when wet, with shared family wallets, self-service kiosks, and dedicated wireless coverage across wet zones.',
        highlights: ['Waterproof NFC wristbands', 'Family spend controls', 'Self-service top-ups', '48hr settlement cycle'],
        href: '/solutions/water-parks',
        image: '/Water-park.jpg',
        iconFill: 'fill-blue-500/15',
        iconBg: 'bg-blue-50',
        dotBg: 'bg-blue-100',
        dotFill: 'bg-blue-500',
    },
    {
        icon: Gamepad2,
        title: 'Arcades & FECs',
        description: 'Game credits, loyalty programs, and cashless play across every machine and counter in your venue.',
        details: 'Replace coin-op and paper tickets with a unified cashless system. Guests load credits onto cards or wristbands, tap to play, and redeem prizes — all tracked in real time with loyalty and repeat visit incentives built in.',
        highlights: ['Cashless game credits', 'Loyalty & rewards programs', 'Real-time play tracking', 'Prize redemption management'],
        href: '#',
        image: '/arcade.jpg',
        iconFill: 'fill-pink-500/15',
        iconBg: 'bg-pink-50',
        dotBg: 'bg-pink-100',
        dotFill: 'bg-pink-500',
    },
    {
        icon: Music,
        title: 'Festivals & Concerts',
        description: 'High-volume cashless payments, real-time vendor splits, and crowd flow analytics for multi-stage events.',
        details: 'Handle massive transaction spikes at set breaks with sub-second tap-to-pay. Live revenue dashboards by stage, bar, and food zone let you redeploy staff where demand is building — not where it was an hour ago.',
        highlights: ['High-volume peak handling', 'Revenue by stage & zone', 'Real-time vendor splits', 'Crowd flow analytics'],
        href: '#',
        image: '/music-fest.jpg',
        iconFill: 'fill-orange-500/15',
        iconBg: 'bg-orange-50',
        dotBg: 'bg-orange-100',
        dotFill: 'bg-orange-500',
    },
    {
        icon: GraduationCap,
        title: 'University & Campus Events',
        description: 'Cashless payments and access control for open days, orientation weeks, and campus-wide activations.',
        details: 'A lightweight deployment for campus events — NFC wristbands or student cards for cashless payments at food trucks, merch stalls, and activity booths. Access scanning and live analytics included.',
        highlights: ['Student card integration', 'Food truck payments', 'Activity access scanning', 'Post-event reporting'],
        href: '#',
        image: '/uni-events.jpg',
        iconFill: 'fill-violet-500/15',
        iconBg: 'bg-violet-50',
        dotBg: 'bg-violet-100',
        dotFill: 'bg-violet-500',
    },
    {
        icon: Landmark,
        title: 'Zoos & Cultural Venues',
        description: 'Contactless entry, cashless spend across food and retail, and real-time visitor insights.',
        details: 'From gate entry to gift shop, one system handles ticketing, NFC wristband payments, and visitor analytics. Understand spend patterns across your venue and optimise outlet placement with real data.',
        highlights: ['Contactless entry', 'Cross-venue spend tracking', 'Visitor flow insights', 'Retail & F&B integration'],
        href: '#',
        image: '/zoo.jpg',
        iconFill: 'fill-teal-500/15',
        iconBg: 'bg-teal-50',
        dotBg: 'bg-teal-100',
        dotFill: 'bg-teal-500',
    },
    {
        icon: TreePalm,
        title: 'Theme Parks & Resorts',
        description: 'End-to-end guest commerce — from gate entry to ride tokens, food courts, and gift shops.',
        details: 'A single commerce layer across your entire park. Guests use one wristband or card for rides, food, retail, and experiences. Operators get unified reporting, automated vendor settlement, and live ops visibility.',
        highlights: ['Single wristband for everything', 'Ride token management', 'Unified park reporting', 'Automated settlement'],
        href: '#',
        image: '/theme-park.jpg',
        iconFill: 'fill-amber-500/15',
        iconBg: 'bg-amber-50',
        dotBg: 'bg-amber-100',
        dotFill: 'bg-amber-500',
    },
]

export default function SolutionsPage() {
    usePageMeta('Solutions — Ludo Leisure Suite', 'Explore how Ludo powers cashless payments and live operations for agricultural shows, conferences, water parks, arcades, and more.')
    return (
        <>
            <Header />
            <main className="pt-24">
                <SolutionsHero />

                {/* Alternating Solution Sections */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="divide-y divide-border">
                            {solutions.map((solution, i) => (
                                <div
                                    key={i}
                                    className={`grid items-center gap-12 py-24 first:pt-0 last:pb-0 md:grid-cols-2 ${i % 2 === 0 ? '' : 'md:[&>*:first-child]:order-2'}`}>
                                    <div className="overflow-hidden rounded-2xl border shadow-sm">
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <div className={`${solution.iconBg} mb-4 flex size-12 items-center justify-center rounded-lg`}>
                                            <solution.icon className={`size-6 stroke-foreground ${solution.iconFill}`} strokeWidth={1.5} />
                                        </div>
                                        <h2 className="text-3xl font-semibold">{solution.title}</h2>
                                        <p className="text-muted-foreground mt-3 text-lg">{solution.details}</p>
                                        <div className="mt-6 grid grid-cols-2 gap-3">
                                            {solution.highlights.map((highlight, j) => (
                                                <div key={j} className="flex items-center gap-2 text-sm">
                                                    <div className={`${solution.dotBg} flex size-5 shrink-0 items-center justify-center rounded-full`}>
                                                        <div className={`${solution.dotFill} size-1.5 rounded-full`} />
                                                    </div>
                                                    <span className="text-muted-foreground">{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <Link
                                            to="/contact"
                                            className="text-primary mt-8 inline-flex items-center gap-1 text-sm font-medium hover:underline">
                                            Get in Touch <ChevronRight className="size-4" />
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <FooterSection />
        </>
    )
}
