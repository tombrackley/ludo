import Header from '@/components/header'
import FooterSection from '@/components/footer'
import PlatformHero from '@/components/secondary-hero-13'
import BentoFour from '@/components/bento-4'
import { usePageMeta } from '@/hooks/use-page-meta'

export default function PlatformPage() {
    usePageMeta('Platform — Ludo Leisure Suite', 'The operating system for venue commerce. Cashless payments, real-time vendor settlement, live operations dashboards, and self-service kiosks in a single deployment.')
    return (
        <>
            <Header />
            <main className="pt-24">
                <PlatformHero />

                <section className="bg-background py-16">
                    <div className="mx-auto max-w-[1200px] px-6">
                        <h2 className="text-4xl font-semibold">What the platform does</h2>
                        <p className="text-muted-foreground mt-4 max-w-2xl text-lg">Every component you need to run cashless payments, live operations, and transparent settlement — deployed as one system.</p>
                    </div>
                </section>

                <BentoFour />
            </main>
            <FooterSection />
        </>
    )
}
