import Header from '@/components/header'
import FooterSection from '@/components/footer'
import PlatformHero from '@/components/secondary-hero-13'

export default function PlatformPage() {
    return (
        <>
            <Header />
            <main className="pt-24">
                <PlatformHero />
            </main>
            <FooterSection />
        </>
    )
}
