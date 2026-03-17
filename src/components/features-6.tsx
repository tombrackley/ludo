import { Flow13Illustration } from "@/components/illustrations/flow-13"

export default function FeaturesSection() {
    return (
        <section id="settlement" className="scroll-mt-24 bg-background @container py-24">
            <div className="mx-auto w-full max-w-[1200px] px-6">
                <div className="@3xl:grid-cols-2 relative grid items-center gap-12 rounded-2xl border bg-white p-12 shadow-sm">
                    <div className="flex flex-col justify-center">
                        <div>
                            <h2 className="mb-4 text-4xl font-semibold">Multiple payment methods, one settlement layer</h2>
                            <p className="text-muted-foreground my-6 max-w-2xl text-lg">Multiple payment methods, including cash, run through one operating model, so venues do not have to reconcile separate workflows in the middle of an event.
                            <br /><br />
                            Ludo keeps settlement neat with automated workflows, deterministic closeout options, and commissions applied in flight.</p>
                        </div>

                    </div>
                    <div className="h-fit">
                        <Flow13Illustration />
                    </div>
                </div>
            </div>
        </section>
    )
}