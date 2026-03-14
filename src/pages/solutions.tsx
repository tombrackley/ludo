import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
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
        icon: <FerrisWheel className="size-6" />,
        title: 'Royal Shows & Expos',
        description: 'NFC wristbands, vendor settlement, and live ops across 500+ terminals. Proven at 120k+ daily visitors.',
        href: '/solutions/royal-shows',
        color: 'from-emerald-500/10',
    },
    {
        icon: <Monitor className="size-6" />,
        title: 'Conferences & Expos',
        description: 'Session scheduling, dynamic QR badge access, indoor wayfinding, and unified payments for multi-day events.',
        href: '/solutions/conferences',
        color: 'from-indigo-500/10',
    },
    {
        icon: <Waves className="size-6" />,
        title: 'Water Parks & Attractions',
        description: 'Waterproof cashless wristbands, family spend controls, fast top-ups, and deterministic settlement.',
        href: '/solutions/water-parks',
        color: 'from-blue-500/10',
    },
    {
        icon: <Gamepad2 className="size-6" />,
        title: 'Arcades & FECs',
        description: 'Game credits, loyalty programs, and cashless play across every machine and counter in your venue.',
        href: '#',
        color: 'from-pink-500/10',
    },
    {
        icon: <Music className="size-6" />,
        title: 'Festivals & Concerts',
        description: 'High-volume cashless payments, real-time vendor splits, and crowd flow analytics for multi-stage events.',
        href: '#',
        color: 'from-orange-500/10',
    },
    {
        icon: <GraduationCap className="size-6" />,
        title: 'University & Campus Events',
        description: 'Cashless payments and access control for open days, orientation weeks, and campus-wide activations.',
        href: '#',
        color: 'from-violet-500/10',
    },
    {
        icon: <Landmark className="size-6" />,
        title: 'Zoos & Cultural Venues',
        description: 'Contactless entry, cashless spend across food and retail, and real-time visitor insights.',
        href: '#',
        color: 'from-teal-500/10',
    },
    {
        icon: <TreePalm className="size-6" />,
        title: 'Theme Parks & Resorts',
        description: 'End-to-end guest commerce — from gate entry to ride tokens, food courts, and gift shops.',
        href: '#',
        color: 'from-amber-500/10',
    },
]

export default function SolutionsPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                {/* Hero */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="text-primary font-mono text-sm uppercase">Solutions</span>
                            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
                                One Platform, Every Venue Type
                            </h1>
                            <p className="text-muted-foreground mt-6 text-balance text-lg">
                                Ludo powers cashless payments, real-time settlement, and live operations for venues and events of every scale — from 500-person conferences to 120,000-visitor show days.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Solutions Grid */}
                <section className="pb-24">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {solutions.map((solution, i) => (
                                <Link
                                    key={i}
                                    to={solution.href}
                                    className={`group flex flex-col rounded-2xl border bg-gradient-to-b ${solution.color} to-white p-8 shadow-sm transition-shadow hover:shadow-md`}>
                                    <div className="bg-primary/10 text-primary mb-4 flex size-12 items-center justify-center rounded-xl">
                                        {solution.icon}
                                    </div>
                                    <h2 className="text-xl font-semibold">{solution.title}</h2>
                                    <p className="text-muted-foreground mt-2 flex-1">{solution.description}</p>
                                    <div className="text-primary mt-6 flex items-center gap-1 text-sm font-medium">
                                        Learn more
                                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-24">
                    <div className="mx-auto max-w-[1200px] px-6 text-center">
                        <h2 className="text-balance text-4xl font-semibold md:text-5xl">Don&apos;t see your venue type?</h2>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance text-lg">
                            Ludo adapts to any venue or event with on-site payments and operations. Get in touch and we&apos;ll show you how.
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
