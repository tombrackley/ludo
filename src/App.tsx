import Header from '@/components/header'
import { HeroIllustration } from '@/components/illustrations/hero-illustration'

import LogoCloud from '@/components/logo-cloud'
import DescriptionListSection from '@/components/description-list-6'
import { PlatformFeatures } from '@/app/(marketing)/(home)/sections/platform-features'
import FeaturesSection5 from '@/components/features-5'
import FeaturesSection6 from '@/components/features-6'
import { TestimonialsSection } from '@/app/(marketing)/(home)/sections/testimonials-section'
import { MoreFeatures } from '@/app/(marketing)/(home)/sections/more-features'
import { CallToAction } from '@/components/call-to-action'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden pt-24">
          {/* Left edge glow */}
          <div className="pointer-events-none absolute top-1/4 -left-40 h-[500px] w-[400px] rounded-full bg-[linear-gradient(180deg,rgba(99,102,241,0.15)_0%,rgba(168,85,247,0.1)_50%,rgba(16,185,129,0.1)_100%)] blur-[120px]" />
          {/* Right edge glow */}
          <div className="pointer-events-none absolute top-1/3 -right-40 h-[500px] w-[400px] rounded-full bg-[linear-gradient(180deg,rgba(14,165,233,0.15)_0%,rgba(168,85,247,0.1)_50%,rgba(99,102,241,0.1)_100%)] blur-[120px]" />
          <div className="mx-auto max-w-5xl px-6 py-24 text-center">
            <h1 className="text-foreground text-balance text-5xl font-semibold md:text-6xl">
              Venue experiences<br />that <span className="relative inline-block">just work<span className="bg-primary/30 absolute -bottom-1 left-0 h-1.5 w-full rounded-full" /></span>
            </h1>
            <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-balance text-lg">
              One platform spanning payments, operations, and guest experience for agricultural shows, festivals, concert venues, and fairparks. Reliable uptime your team can count on. Simplicity they'll thank you for.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Button>Book a Demo</Button>
              <Button variant="outline">
                See How It Works
              </Button>
            </div>
          </div>
          <HeroIllustration />
        </section>

        <LogoCloud />
        <DescriptionListSection />
        <PlatformFeatures />
        <FeaturesSection5 />
        <FeaturesSection6 />
        <TestimonialsSection />
        <MoreFeatures />
        <CallToAction />
      </main>
      <FooterSection />
    </>
  )
}

export default App
