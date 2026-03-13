import { LayoutIllustration } from "@/components/ui/illustrations/layout-illustration"

export default function FeaturesSection5() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="relative">
                    <div className="z-10 max-w-xl">
                        <h2 className="mb-4 text-4xl font-semibold">Multiple payment methods, one settlement layer</h2>
                        <p className="mb-8 text-lg">
                            Cash, card, wristbands and mobile pay all run through one system — so you're not juggling spreadsheets mid-event. <span className="text-muted-foreground">Vendor payouts, commissions, and reconciliation happen automatically. One dashboard, one source of truth for your whole team.</span>
                        </p>
                    </div>

                    <div className="-translate-x-44 md:translate-x-0">
                        <LayoutIllustration />
                    </div>
                </div>
            </div>
        </section>
    )
}