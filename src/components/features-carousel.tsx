import { Card } from '@/components/ui/card'
import { EmailIllustration } from "@/components/ui/illustrations/email-illustration"
import { Notes3Illustration } from "@/components/ui/illustrations/notes-3-illustration"
import { AiAutocompleteIllustration } from "@/components/ui/illustrations/ai-autocomplete-illustration"
import { TranslationInterfaceIllustration } from "@/components/ui/illustrations/translation-interface-illustration"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function FeaturesSliderSection() {
    return (
        <section id="visitor-app" className="bg-background @container py-24 max-lg:px-1">
            <Carousel
                opts={{
                    align: 'start',
                    loop: true,
                    breakpoints: {
                        '(max-width: 768px)': {
                            slidesToScroll: 1,
                        },
                        '(min-width: 768px)': {
                            slidesToScroll: 2,
                        },
                    },
                }}
                className="mx-auto max-w-[1200px]">
                <div className="mb-6 flex flex-wrap items-end justify-between gap-4 px-6 lg:mb-10">
                    <h2 className="text-foreground max-w-md text-balance text-4xl font-semibold">Your venue, in every visitor's pocket</h2>
                    <div className="flex items-center gap-2">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className="gap-1 pt-6">
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-start justify-end overflow-hidden rounded-2xl shadow-md">
                            <img src="/ludo-development-ready-visior-apps.png" alt="Custom app development" className="h-[90%] w-[90%] object-cover object-right-top" />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Development ready, fully customisable.</strong> A proven platform, ready to launch — customised to your brand, content, and the way your event runs.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md">
                            <img src="/top-ups.png" alt="Credit pack top-up screen" className="max-h-[63%] max-w-[63%] rounded-xl object-contain" />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Instant top-ups from anywhere.</strong> Visitors can add funds to their wristband or card on the go — no queues, no kiosks needed.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md p-6">
                            <video
                                src="/interactive-maps.mov"
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="max-h-full max-w-full rounded-xl object-contain"
                            />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Interactive maps built in.</strong> Let visitors explore everything your venue has to offer with wayfinding, points of interest, and live updates.
                        </p>
                    </CarouselItem>
                    <CarouselItem className="space-y-4 md:basis-1/2">
                        <Card className="shadow-black/4 flex aspect-square items-center justify-center rounded-2xl shadow-md">
                            <img src="/sushi-hub-sponsored-content.png" alt="Sponsored content example" className="max-h-[45%] max-w-[72%] object-contain" />
                        </Card>
                        <p className="text-muted-foreground text-balance">
                            <strong className="text-foreground font-medium">Sponsorship opportunities built in.</strong> Unlock new revenue streams with branded placements and sponsor activations — turning your app into a monetisation channel.
                        </p>
                    </CarouselItem>
                </CarouselContent>
            </Carousel>
        </section>
    )
}