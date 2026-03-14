export default function FeaturesSection5() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="relative">
                    <div className="z-10 max-w-xl">
                        <h2 className="mb-4 text-4xl font-semibold">Real-time reporting, full transparency</h2>
                        <p className="mb-8 text-lg">
                            Every transaction is visible the moment it happens — across every vendor, every terminal, every payment method. <span className="text-muted-foreground">Ludo gives organisers rich, real-time reporting with full transparency, so you always know exactly what's moving through your event without waiting for end-of-day exports.</span>
                        </p>
                    </div>

                    <div>
                        <img
                            src="/ludo-transparent-reporting.png"
                            alt="Ludo reporting dashboard showing real-time top-up transactions"
                            className="w-full rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
