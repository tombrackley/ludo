import { Flow13Illustration } from "@/components/illustrations/flow-13"

export default function FeaturesSection() {
    return (
        <section id="settlement" className="scroll-mt-24 bg-background @container py-24">
            <div className="mx-auto w-full max-w-[1200px] px-6">
                <div className="@3xl:grid-cols-2 relative grid items-center gap-8 rounded-2xl border bg-white p-6 shadow-sm sm:gap-12 sm:p-12">
                    <div className="min-w-0 flex flex-col justify-center">
                        <div>
                            <h2 className="mb-4 text-3xl font-semibold sm:text-4xl">Multiple payment methods, one settlement layer</h2>
                            <p className="text-muted-foreground my-6 text-base sm:text-lg">Multiple payment methods, including cash, run through one operating model, so venues do not have to reconcile separate workflows in the middle of an event.
                            <br /><br />
                            Ludo keeps settlement neat with automated workflows, deterministic closeout options, and commissions applied in flight.</p>
                        </div>

                    </div>
                    <div className="h-fit min-w-0 overflow-x-auto">
                        <Flow13Illustration />
                    </div>
                </div>
            </div>
        </section>
    )
}