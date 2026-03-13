import BentoEight from '@/components/bento-8'
import FeaturesSection4 from '@/components/features-4'

export function PlatformFeatures() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                {/* Centered title block */}
                <div className="mx-auto mb-16 max-w-2xl text-center">
                    <span className="text-primary font-mono text-sm uppercase">Platform</span>
                    <h2 className="text-foreground mt-4 text-balance text-4xl font-semibold md:text-5xl">Built for live events at scale</h2>
                    <p className="text-muted-foreground mt-4 text-balance text-lg">From agricultural shows to theme parks — one platform handles payments, vendor settlement, and guest experience in one unified flow.</p>
                </div>
            </div>
            <BentoEight />
            <FeaturesSection4 />
        </section>
    )
}
