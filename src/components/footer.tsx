import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

const links = [
    {
        group: 'Platform',
        items: [
            { title: 'Cashless Payments', href: '#' },
            { title: 'Real-Time Analytics', href: '#' },
            { title: 'Vendor Settlement', href: '#' },
            { title: 'Ticketing & Access', href: '#' },
        ],
    },
    {
        group: 'Solutions',
        items: [
            { title: 'Royal Shows & Expos', href: '#' },
            { title: 'Conferences', href: '#' },
            { title: 'Waterparks', href: '#' },
            { title: 'Arcades & FECs', href: '#' },
        ],
    },
]

export default function FooterSection() {
    return (
        <footer className="relative overflow-hidden border-t bg-background">
            {/* Gradient glow bar at the top */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-[300px]">
                <div className="absolute left-1/2 top-0 h-[200px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.2)_0%,rgba(168,85,247,0.15)_25%,rgba(59,130,246,0.1)_50%,transparent_70%)] blur-2xl" />
            </div>

            {/* CTA Section */}
            <div className="relative mx-auto max-w-[1200px] px-6 pt-28 pb-24 text-center">
                <h2 className="text-balance text-4xl font-semibold md:text-5xl">
                    Venue experiences that{' '}
                    <span className="italic">just work</span>
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-xl text-balance">
                    Join the venues and events already running on Ludo. Book a demo to see how it all comes together.
                </p>
                <div className="mt-8 flex justify-center gap-3">
                    <Button variant="outline" className="w-40">Book a Demo</Button>
                    <Button className="w-40">Contact Us</Button>
                </div>
            </div>

            {/* Divider + status row */}
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="h-px bg-border" />
                <div className="flex flex-wrap items-center justify-between gap-4 py-6">
                    <div className="flex items-center gap-3">
                        <a href="/" aria-label="go home" className="block w-fit">
                            <Logo />
                        </a>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border px-3 py-1.5">
                        <div className="relative flex size-3">
                            <span className="absolute inset-0 block size-full animate-pulse rounded-full bg-emerald-100" />
                            <span className="relative m-auto block size-1 rounded-full bg-emerald-500" />
                        </div>
                        <span className="text-sm text-emerald-600">All systems operational</span>
                    </div>
                </div>
                <div className="h-px bg-border" />
            </div>

            {/* Footer links */}
            <div className="relative mx-auto max-w-[1200px] px-6 py-12">
                <div className="grid gap-12 sm:grid-cols-4">
                    {links.map((link, index) => (
                        <div key={index} className="space-y-4 text-sm">
                            <span className="block font-medium">{link.group}</span>
                            <div className="flex flex-wrap gap-3 sm:flex-col">
                                {link.items.map((item, idx) => (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        className="text-muted-foreground transition-colors duration-150 hover:text-foreground">
                                        {item.title}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div className="space-y-4 text-sm">
                        <span className="block font-medium">Connect</span>
                        <div className="flex flex-col gap-3">
                            <a href="/contact" className="text-muted-foreground transition-colors duration-150 hover:text-foreground">Contact Us</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors duration-150 hover:text-foreground">LinkedIn</a>
                        </div>
                    </div>

                    <div className="flex items-start justify-end">
                        <img src="/ludo-logo-mark.svg" alt="Ludo" className="h-10 w-auto opacity-20" />
                    </div>
                </div>
            </div>

            {/* Bottom copyright */}
            <div className="mx-auto max-w-[1200px] px-6 pb-8">
                <div className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
                    <span>© {new Date().getFullYear()} Ludo Leisure Suite. All rights reserved.</span>
                    <span className="mx-1">
                        <a href="#" className="hover:text-foreground transition-colors duration-150">Terms & Conditions</a>
                        {' | '}
                        <a href="#" className="hover:text-foreground transition-colors duration-150">Privacy Policy</a>
                    </span>
                </div>
            </div>

            {/* Large faded logo at bottom */}
            <div className="pointer-events-none relative mx-auto mt-12 max-w-[1200px] px-6 mask-b-from-30%">
                <Logo className="h-auto w-full opacity-[0.08] grayscale" />
            </div>
        </footer>
    )
}
