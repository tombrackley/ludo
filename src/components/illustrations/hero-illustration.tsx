import { Smartphone, Ticket, FerrisWheel, CreditCard, Store, UserRound } from 'lucide-react'
import { motion } from 'motion/react'

const integrations = [
    {
        name: 'Mobile',
        icon: <Smartphone className="size-7 stroke-foreground stroke-[1.25] fill-indigo-500/15" />,
        color: 'var(--color-indigo-400)',
    },
    {
        name: 'Tickets',
        icon: <Ticket className="size-7 stroke-foreground stroke-[1.25] fill-amber-500/15" />,
        color: 'var(--color-amber-400)',
    },
    {
        name: 'Rides',
        icon: <FerrisWheel className="size-7 stroke-foreground stroke-[1.25] fill-pink-500/15" />,
        color: 'var(--color-pink-400)',
    },
    {
        name: 'Payments',
        icon: <CreditCard className="size-7 stroke-foreground stroke-[1.25] fill-emerald-500/15" />,
        color: 'var(--color-emerald-400)',
    },
    {
        name: 'Storefront',
        icon: <Store className="size-7 stroke-foreground stroke-[1.25] fill-blue-500/15" />,
        color: 'var(--color-blue-400)',
    },
    {
        name: 'Visitors',
        icon: <UserRound className="size-7 stroke-foreground stroke-[1.25] fill-purple-500/15" />,
        color: 'var(--color-purple-400)',
    },
]

const iconCenters = [32, 108, 184, 260, 336, 412]

const pulseTransition = {
    duration: 3,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatType: 'reverse' as const,
}

export const HeroIllustration = () => {
    return (
        <div className="relative mx-auto max-w-[1440px] px-6 pb-16">
            {/* Integration icons row */}
            <div className="flex items-center justify-center gap-2 sm:gap-3">
                {integrations.map((integration) => (
                    <div
                        key={integration.name}
                        className="bg-background flex size-12 shrink-0 items-center justify-center rounded-xl border shadow-sm sm:size-16">
                        {integration.icon}
                    </div>
                ))}
            </div>

            {/* Connector lines — right-angle paths converging to center point */}
            <div className="relative mx-auto flex h-20 w-full max-w-[444px] justify-center">
                <svg
                    className="size-full"
                    viewBox="0 0 444 80"
                    fill="none">
                    <defs>
                        {integrations.map((integration, i) => (
                            <linearGradient key={`grad-${i}`} id={`hero-grad-${i}`}
                                x1={iconCenters[i]} y1="0" x2="222" y2="80"
                                gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor={integration.color} />
                                <stop offset="100%" stopColor={integration.color} stopOpacity="0.3" />
                            </linearGradient>
                        ))}
                    </defs>

                    {/* Static lines */}
                    {iconCenters.map((x, i) => (
                        <path key={`static-${i}`} d={`M${x} 0 V36 H222 V80`} stroke="var(--color-gray-200)" strokeWidth="1" />
                    ))}

                    {/* Animated pulse lines */}
                    {iconCenters.map((x, i) => (
                        <motion.path
                            key={`pulse-${i}`}
                            d={`M${x} 0 V36 H222 V80`}
                            stroke={`url(#hero-grad-${i})`}
                            strokeWidth="1"
                            strokeLinecap="round"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 0.6, 0] }}
                            transition={{ ...pulseTransition, delay: i * 0.8 }}
                        />
                    ))}
                </svg>
            </div>

            {/* Dashboard image */}
            <div className="relative mx-auto w-full max-w-[1440px]">
                <div className="pointer-events-none absolute top-1/4 left-1/2 h-[60%] w-[110%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,100,150,0.25)_0%,rgba(246,0,157,0.25)_38%,rgba(236,72,153,0.25)_71%,rgba(251,113,133,0.2)_100%)] blur-[100px]" />
                <img
                    src="/ludo-dashboard-example.png"
                    alt="Ludo dashboard overview"
                    className="relative w-full"
                />
            </div>
        </div>
    )
}
