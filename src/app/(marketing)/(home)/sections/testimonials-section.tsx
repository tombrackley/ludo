import { Card } from '@/components/ui/card'

const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export function TestimonialsSection() {
    return (
        <section className="py-24">
            <div className="mx-auto w-full max-w-[1200px] px-6">
                <div className="mx-auto mb-16 max-w-2xl space-y-6 text-center">
                    <span className="text-primary font-mono text-sm uppercase">Testimonials</span>
                    <h2 className="text-foreground mt-8 text-balance text-4xl font-semibold md:text-5xl">Trusted by event operators</h2>
                    <p className="text-muted-foreground text-balance text-lg">See why venues and event teams choose one operating platform for payments and guest flow.</p>
                </div>

                <div className="@container">
                    <div className="@4xl:grid-cols-2 grid gap-6 *:border *:border-transparent *:shadow-lg">
                        <Card className="bg-linear-to-b to-card row-span-4 grid grid-rows-subgrid gap-8 from-indigo-500/10 !overflow-visible !p-8">
                            <img src="/sydney-royal-easter-show-logo.png" alt="Sydney Royal Easter Show" className="h-9 w-auto" />
                            <p className="text-muted-foreground text-balance text-xl font-medium">
                                Implemented a full digital event platform delivering over <strong className="text-foreground">300k guest credit top-ups</strong>, <strong className="text-foreground">3 million vendor payments</strong>, and <strong className="text-foreground">1 million+ wristband and card redemptions</strong> across the Sydney Royal Easter Show.
                            </p>
                            <div className="row-span-2 grid grid-rows-subgrid gap-8 border-t pt-8">
                                <p className='text-foreground self-end text-balance text-lg before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>We needed to elevate our visitor experience, and we found a partner in Ludo capable of delivering everything we envisioned on a digital platform.</p>
                                <div className="flex items-center gap-3">
                                    <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                        <img
                                            src="/shane-mcgrath-headshot.webp"
                                            alt="Shane McGrath's avatar"
                                            width={46}
                                            height={46}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-px">
                                        <p className="text-sm font-medium">Shane McGrath</p>
                                        <p className="text-muted-foreground text-xs">Head of Operations, Sydney Royal Easter Show</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card className="bg-linear-to-b to-card row-span-4 grid grid-rows-subgrid gap-8 from-cyan-500/10 !overflow-visible !p-8">
                            <img src="/taronga-zoo-logo.png" alt="Taronga Zoo" className="h-7 w-auto" />
                            <p className="text-muted-foreground self-end text-balance text-xl font-medium">
                                Deployed NFC wristbands and cashless cards for event ticketing and entry, processing <strong className="text-foreground">50,000+ contactless check-ins</strong> across peak season events with <strong className="text-foreground">sub-second tap-to-enter speeds</strong> and <strong className="text-foreground">zero queuing bottlenecks</strong> at gates.
                            </p>
                            <div className="row-span-2 grid grid-rows-subgrid gap-8 border-t pt-8">
                                <p className='text-foreground text-balance text-lg before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>The cashless wristband rollout was seamless. Guest throughput increased measurably, and the data we get back is invaluable for planning future events.</p>
                                <div className="flex items-center gap-3">
                                    <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                        <img
                                            src="/mark-kemp-headshot.webp"
                                            alt="Mark Kemp's avatar"
                                            width={120}
                                            height={120}
                                            className="size-full object-cover"
                                        />
                                    </div>
                                    <div className="space-y-px">
                                        <p className="text-sm font-medium">Mark Kemp</p>
                                        <p className="text-muted-foreground text-xs">Digital Transformation, Taronga Zoo</p>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>

                <div className="mx-auto mt-24 max-w-2xl text-center">
                    <h2 id="see-ludo-in-action" className="mb-4 scroll-mt-24 text-4xl font-semibold">See Ludo in action at the Sydney Royal Easter Show</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">Shane McGrath, Head of Operations at the Sydney Royal Easter Show, walks through how Ludo transformed their guest experience – from NFC wristbands to self-service kiosks.</p>
                </div>

                <div className="mt-12 overflow-hidden rounded-2xl">
                    <iframe
                        src="https://player.vimeo.com/video/908892900?h=0&title=0&byline=0&portrait=0"
                        className="aspect-video w-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}
