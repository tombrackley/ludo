import { Smartphone, Ticket, FerrisWheel, CreditCard, Store, UserRound } from 'lucide-react'

const integrations = [
    {
        name: 'Mobile',
        icon: <Smartphone className="size-7 stroke-foreground stroke-[1.25] fill-indigo-500/15" />,
    },
    {
        name: 'Tickets',
        icon: <Ticket className="size-7 stroke-foreground stroke-[1.25] fill-amber-500/15" />,
    },
    {
        name: 'Rides',
        icon: <FerrisWheel className="size-7 stroke-foreground stroke-[1.25] fill-pink-500/15" />,
    },
    {
        name: 'Payments',
        icon: <CreditCard className="size-7 stroke-foreground stroke-[1.25] fill-emerald-500/15" />,
    },
    {
        name: 'Storefront',
        icon: <Store className="size-7 stroke-foreground stroke-[1.25] fill-blue-500/15" />,
    },
    {
        name: 'Visitors',
        icon: <UserRound className="size-7 stroke-foreground stroke-[1.25] fill-purple-500/15" />,
    },
]

export const HeroIllustration = () => {
    return (
        <div className="relative mx-auto max-w-[1440px] px-6 pb-16">
            {/* Integration icons row */}
            <div className="flex items-center justify-center gap-3">
                {integrations.map((integration) => (
                    <div
                        key={integration.name}
                        className="bg-background flex size-16 items-center justify-center rounded-xl border shadow-sm">
                        {integration.icon}
                    </div>
                ))}
            </div>

            {/* Connector lines — right-angle paths converging to center point */}
            {/* Icons: 6 × 64px + 5 × 12px gap = 444px total. Centers: 32, 108, 184, 260, 336, 412. Converge: 222 */}
            <div className="relative mx-auto flex h-20 w-[444px] justify-center">
                <svg
                    className="size-full"
                    viewBox="0 0 444 80"
                    fill="none">
                    {/* Static lines (background layer) */}
                    <path d="M32 0 V36 H222 V80" stroke="var(--color-gray-200)" strokeWidth="1" />
                    <path d="M108 0 V36 H222 V80" stroke="var(--color-gray-200)" strokeWidth="1" />
                    <path d="M184 0 V36 H222 V80" stroke="var(--color-gray-200)" strokeWidth="1" />
                    <path d="M260 0 V36 H222 V80" stroke="var(--color-gray-200)" strokeWidth="1" />
                    <path d="M336 0 V36 H222 V80" stroke="var(--color-gray-200)" strokeWidth="1" />
                    <path d="M412 0 V36 H222 V80" stroke="var(--color-gray-200)" strokeWidth="1" />
                    {/* Animated beams (foreground layer) */}
                    <path
                        d="M108 0 V36 H222 V80"
                        stroke="url(#beam-gradient)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="20 200"
                        className="animate-[beam-move_4s_linear_infinite]"
                    />
                    <path
                        d="M260 0 V36 H222 V80"
                        stroke="url(#beam-gradient-green)"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeDasharray="20 200"
                        className="animate-[beam-move_5s_linear_infinite]"
                    />
                    <defs>
                        <linearGradient id="beam-gradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#818cf8" />
                            <stop offset="100%" stopColor="#6366f1" />
                        </linearGradient>
                        <linearGradient id="beam-gradient-green" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#34d399" />
                            <stop offset="100%" stopColor="#10b981" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Dashboard image */}
            <div className="relative mx-auto w-full max-w-[1440px]">
                {/* Glow behind image */}
                <div className="pointer-events-none absolute top-1/4 left-1/2 h-[60%] w-[110%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,rgba(255,100,150,0.25)_0%,rgba(246,0,157,0.25)_38%,rgba(236,72,153,0.25)_71%,rgba(251,113,133,0.2)_100%)] blur-[100px]" />
                <img
                    src="/ludo-dashboard-example.png"
                    alt="Ludo dashboard overview"
                    className="relative w-full"
                />
            </div>


            <style>{`
                @keyframes beam-move {
                    to {
                        stroke-dashoffset: -220;
                    }
                }
            `}</style>
        </div>
    )
}
