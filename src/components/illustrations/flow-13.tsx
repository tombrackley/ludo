'use client'

import { Database, Store, DollarSign, CreditCard, Ticket, Smartphone } from 'lucide-react'
import { motion } from 'motion/react'
import { useRef, useState, useLayoutEffect, useCallback } from 'react'

const shootTransition = {
    duration: 1,
    ease: 'easeInOut' as const,
    repeat: Infinity,
    repeatDelay: 1.5,
}

type PathData = {
    viewBox: string
    icons: { x: number; bottom: number }[]
    logoTop: number
    logoBottom: number
    logoX: number
    cards: { x: number; top: number }[]
}

const topColors = [
    { id: 'grad-top-1', from: 'var(--color-emerald-400)', to: 'var(--color-indigo-400)' },
    { id: 'grad-top-2', from: 'var(--color-blue-400)', to: 'var(--color-indigo-400)' },
    { id: 'grad-top-3', from: 'var(--color-amber-400)', to: 'var(--color-indigo-400)' },
    { id: 'grad-top-4', from: 'var(--color-pink-400)', to: 'var(--color-indigo-400)' },
]

const bottomColors = [
    { id: 'grad-bot-left', from: 'var(--color-indigo-400)', to: 'var(--color-purple-400)' },
    { id: 'grad-bot-center', from: 'var(--color-indigo-400)', to: 'var(--color-violet-400)' },
    { id: 'grad-bot-right', from: 'var(--color-indigo-400)', to: 'var(--color-cyan-400)' },
]

function generateTopPath(iconX: number, iconBottom: number, logoX: number, logoTop: number) {
    const r = 10
    if (Math.abs(iconX - logoX) < 5) {
        return `M${iconX} ${iconBottom} V${logoTop}`
    }
    const midY = (iconBottom + logoTop) / 2
    const dir = iconX < logoX ? 1 : -1
    return `M${iconX} ${iconBottom} V${midY - r} Q${iconX} ${midY} ${iconX + dir * r} ${midY} H${logoX - dir * r} Q${logoX} ${midY} ${logoX} ${midY + r} V${logoTop}`
}

function generateBottomPath(logoX: number, logoBottom: number, cardX: number, cardTop: number) {
    const r = 10
    const splitY = cardTop - 36
    if (Math.abs(cardX - logoX) < 5) {
        return `M${logoX} ${logoBottom} V${cardTop}`
    }
    const dir = cardX > logoX ? 1 : -1
    return `M${logoX} ${logoBottom} V${splitY - r} Q${logoX} ${splitY} ${logoX + dir * r} ${splitY} H${cardX - dir * r} Q${cardX} ${splitY} ${cardX} ${splitY + r} V${cardTop}`
}

export const Flow13Illustration = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const icon0Ref = useRef<HTMLDivElement>(null)
    const icon1Ref = useRef<HTMLDivElement>(null)
    const icon2Ref = useRef<HTMLDivElement>(null)
    const icon3Ref = useRef<HTMLDivElement>(null)
    const logoRef = useRef<HTMLDivElement>(null)
    const card0Ref = useRef<HTMLDivElement>(null)
    const card1Ref = useRef<HTMLDivElement>(null)
    const card2Ref = useRef<HTMLDivElement>(null)

    const [paths, setPaths] = useState<PathData | null>(null)

    const measure = useCallback(() => {
        const container = containerRef.current
        if (!container) return
        const cr = container.getBoundingClientRect()

        const getPos = (ref: React.RefObject<HTMLDivElement | null>) => {
            const el = ref.current
            if (!el) return null
            const r = el.getBoundingClientRect()
            return {
                x: r.left + r.width / 2 - cr.left,
                top: r.top - cr.top,
                bottom: r.top + r.height - cr.top,
            }
        }

        const iconRefs = [icon0Ref, icon1Ref, icon2Ref, icon3Ref]
        const cardRefsList = [card0Ref, card1Ref, card2Ref]

        const iconPositions = iconRefs.map(r => getPos(r)).filter(Boolean) as { x: number; top: number; bottom: number }[]
        const logoPos = getPos(logoRef)
        const cardPositions = cardRefsList.map(r => getPos(r)).filter(Boolean) as { x: number; top: number; bottom: number }[]

        if (iconPositions.length !== 4 || !logoPos || cardPositions.length !== 3) return

        setPaths({
            viewBox: `0 0 ${cr.width} ${cr.height}`,
            icons: iconPositions.map(p => ({ x: p.x, bottom: p.bottom })),
            logoTop: logoPos.top,
            logoBottom: logoPos.bottom,
            logoX: logoPos.x,
            cards: cardPositions.map(p => ({ x: p.x, top: p.top })),
        })
    }, [])

    useLayoutEffect(() => {
        const raf = requestAnimationFrame(() => measure())
        window.addEventListener('resize', measure)
        return () => {
            cancelAnimationFrame(raf)
            window.removeEventListener('resize', measure)
        }
    }, [measure])

    return (
        <div
            aria-hidden
            className="group relative flex min-h-[380px] min-w-[420px] items-center justify-center">
            <div ref={containerRef} className="relative z-10 flex flex-col items-center">

                {paths && (
                    <svg
                        viewBox={paths.viewBox}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer-events-none absolute inset-0 h-full w-full">

                        <defs>
                            {topColors.map((c, i) => (
                                <linearGradient key={c.id} id={c.id}
                                    x1={paths.icons[i].x} y1={paths.icons[i].bottom}
                                    x2={paths.logoX} y2={paths.logoTop}
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor={c.from} />
                                    <stop offset="100%" stopColor={c.to} />
                                </linearGradient>
                            ))}
                            {bottomColors.map((c, i) => (
                                <linearGradient key={c.id} id={c.id}
                                    x1={paths.logoX} y1={paths.logoBottom}
                                    x2={paths.cards[i].x} y2={paths.cards[i].top}
                                    gradientUnits="userSpaceOnUse">
                                    <stop offset="0%" stopColor={c.from} />
                                    <stop offset="100%" stopColor={c.to} />
                                </linearGradient>
                            ))}
                        </defs>

                        {/* Static base paths */}
                        {paths.icons.map((icon, i) => (
                            <path key={`top-static-${i}`}
                                d={generateTopPath(icon.x, icon.bottom, paths.logoX, paths.logoTop)}
                                stroke="currentColor" className="text-foreground/10" strokeLinecap="round" />
                        ))}
                        {paths.cards.map((card, i) => (
                            <path key={`bot-static-${i}`}
                                d={generateBottomPath(paths.logoX, paths.logoBottom, card.x, card.top)}
                                stroke="currentColor" className="text-foreground/10" strokeLinecap="round" />
                        ))}

                        {/* Animated shooting paths - top */}
                        {paths.icons.map((icon, i) => (
                            <motion.path key={`top-anim-${i}`}
                                d={generateTopPath(icon.x, icon.bottom, paths.logoX, paths.logoTop)}
                                pathLength="1"
                                stroke={`url(#${topColors[i].id})`}
                                strokeLinecap="round"
                                strokeDasharray="0.3 2"
                                initial={{ strokeDashoffset: 1.3 }}
                                animate={{ strokeDashoffset: -2 }}
                                transition={{ ...shootTransition, delay: i * 0.15 }}
                            />
                        ))}

                        {/* Animated shooting paths - bottom */}
                        {paths.cards.map((card, i) => (
                            <motion.path key={`bot-anim-${i}`}
                                d={generateBottomPath(paths.logoX, paths.logoBottom, card.x, card.top)}
                                pathLength="1"
                                stroke={`url(#${bottomColors[i].id})`}
                                strokeLinecap="round"
                                strokeDasharray="0.3 2"
                                initial={{ strokeDashoffset: 1.3 }}
                                animate={{ strokeDashoffset: -2 }}
                                transition={{ ...shootTransition, delay: 0.8 + i * 0.1 }}
                            />
                        ))}
                    </svg>
                )}

                {/* Top: four circle icons */}
                <div className="relative flex items-center gap-8">
                    <div ref={icon0Ref} className="bg-illustration ring-border-illustration shadow-black/6.5 flex size-11 rounded-full shadow-md ring-1 *:m-auto">
                        <DollarSign className="size-5 stroke-foreground fill-emerald-500/15" strokeWidth={1.5} />
                    </div>
                    <div ref={icon1Ref} className="bg-illustration ring-border-illustration shadow-black/6.5 flex size-11 rounded-full shadow-md ring-1 *:m-auto">
                        <CreditCard className="size-5 stroke-foreground fill-blue-500/15" strokeWidth={1.5} />
                    </div>
                    <div ref={icon2Ref} className="bg-illustration ring-border-illustration shadow-black/6.5 flex size-11 rounded-full shadow-md ring-1 *:m-auto">
                        <Ticket className="size-5 stroke-foreground fill-amber-500/15" strokeWidth={1.5} />
                    </div>
                    <div ref={icon3Ref} className="bg-illustration ring-border-illustration shadow-black/6.5 flex size-11 rounded-full shadow-md ring-1 *:m-auto">
                        <Smartphone className="size-5 stroke-foreground fill-pink-500/15" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Middle: logo circle */}
                <div className="size-17 relative my-14 flex">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-foreground/25 absolute inset-px animate-pulse">
                        <motion.circle
                            cx="50"
                            cy="50"
                            r="50"
                            strokeDasharray="2 5"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            stroke="currentColor"
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: -100 }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                        />
                    </svg>
                    <div className="absolute inset-3 opacity-50">
                        <div className="bg-linear-to-r absolute inset-0 animate-pulse rounded-xl from-purple-400 to-blue-500 blur-md" />
                    </div>
                    <div ref={logoRef} className="relative m-auto flex size-11 items-center justify-center overflow-hidden rounded-full shadow-xl shadow-black/6.5 ring-1 ring-border-illustration">
                        <img src="/ludo-icon.png" alt="" className="size-full object-cover" />
                    </div>
                </div>

                {/* Bottom: organiser and vendor cards */}
                <div className="relative mt-4 flex items-center gap-4">
                    <div ref={card0Ref} className="bg-illustration ring-border-illustration flex items-center gap-1.5 rounded-xl p-1 pr-3 shadow-md shadow-emerald-800/10 ring-1">
                        <div className="after:border-foreground/5 relative flex size-8 items-center justify-center rounded-lg bg-emerald-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                            <Database className="size-4 stroke-foreground fill-emerald-500/15" strokeWidth={1.5} />
                        </div>
                        <div className="text-[10px] font-medium">Organiser</div>
                    </div>
                    <div ref={card1Ref} className="bg-illustration ring-border-illustration flex items-center gap-1.5 rounded-xl p-1 pr-3 shadow-md shadow-violet-800/10 ring-1">
                        <div className="after:border-foreground/5 relative flex size-8 items-center justify-center rounded-lg bg-violet-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                            <Store className="size-4 stroke-foreground fill-violet-500/15" strokeWidth={1.5} />
                        </div>
                        <div className="text-[10px] font-medium">Vendor 1</div>
                    </div>
                    <div ref={card2Ref} className="bg-illustration ring-border-illustration flex items-center gap-1.5 rounded-xl p-1 pr-3 shadow-md shadow-amber-800/10 ring-1">
                        <div className="after:border-foreground/5 relative flex size-8 items-center justify-center rounded-lg bg-amber-500/10 after:absolute after:inset-0 after:rounded-lg after:border">
                            <Store className="size-4 stroke-foreground fill-amber-500/15" strokeWidth={1.5} />
                        </div>
                        <div className="text-[10px] font-medium">Vendor 2</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Flow13Illustration
