import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

export default function PlatformHero() {
    return (
        <section className="bg-background overflow-x-hidden py-24 lg:py-32">
            <div className="mx-auto max-w-[1200px] px-6">
                <span className="text-primary block text-sm font-medium font-mono uppercase max-md:text-center">Platform</span>
                <div className="mt-8 grid items-center gap-16 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-12">
                    <div className="max-md:text-center lg:col-span-2">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl">The Operating System for Venue Commerce</h1>
                        <p className="text-muted-foreground mb-8 mt-6 max-w-sm text-balance text-lg max-md:mx-auto">Cashless payments, real-time settlement, and live operations — all from a single deployment.</p>

                        <Button size="lg" className="h-12 px-5 text-base"><Link to="/contact">Book a Walkthrough</Link></Button>

                        <ul className="mt-8 space-y-2">
                            {['NFC wristbands & card payments', 'Real-time vendor settlement', 'Live operations dashboard', 'Self-service kiosks & visitor app'].map((item, index) => (
                                <li
                                    key={index}
                                    className="text-muted-foreground flex items-center gap-2 max-md:justify-center">
                                    <CheckCircle2 className="size-4 fill-emerald-400/25 text-emerald-600 dark:text-emerald-500" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative lg:col-span-3 lg:pl-32">
                        <div className="bg-background/60 min-w-3xl ring-foreground/10 rounded-2xl p-1 shadow-xl ring-1 max-md:hidden">
                            <div className="bg-background ring-border-illustration relative aspect-video origin-top overflow-hidden rounded-xl border-4 border-transparent shadow ring-1">
                                <img
                                    className="h-full w-full object-cover object-top"
                                    src="/ludo-transparent-reporting.png"
                                    alt="Ludo platform dashboard"
                                />
                            </div>
                        </div>
                        <div className="md:absolute md:-top-8 lg:left-20">
                            <div className="bg-background ring-foreground/10 h-156 md:h-124 max-w-84 rounded-3xl border border-transparent p-2 shadow-xl ring-1 max-md:mx-auto md:max-w-64">
                                <img
                                    className="border-foreground/10 shadow-foreground/5 h-full rounded-2xl border object-cover object-top shadow"
                                    src="/self-service-events.png"
                                    alt="Ludo visitor app"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
