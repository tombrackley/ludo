import { FileWarning, Layers, ChartPie, Clock } from 'lucide-react'

export default function DescriptionListSection() {
    return (
        <section className="bg-background py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="space-y-12">
                    <h2 className="text-foreground text-balance text-4xl font-semibold">Every major event has<br />the same four pain points</h2>
                    <div className="@container lg:col-span-2">
                        <dl className="@md:grid-cols-2 grid gap-6 *:space-y-2 *:rounded-xl *:border *:p-6">
                            <div>
                                <FileWarning className="*:not-nth-2:opacity-50 *:nth-2:fill-primary *:nth-2:stroke-primary size-4 drop-shadow" />
                                <dt className="text-foreground mt-12 font-medium">Settlement & Disputes</dt>
                                <dd className="text-muted-foreground">Manual post-event settlement creates disputes and delays. Reconciliation takes days and errors erode trust with vendors.</dd>
                            </div>
                            <div>
                                <Layers className="*:first:fill-primary *:first:stroke-primary size-4 drop-shadow" />
                                <dt className="text-foreground mt-12 font-medium">Fragmented Payments</dt>
                                <dd className="text-muted-foreground">Multiple payment methods require separate terminals and reporting. No single view of revenue across cash, card, and mobile.</dd>
                            </div>
                            <div>
                                <ChartPie className="*:first:fill-primary *:first:stroke-primary size-4 drop-shadow" />
                                <dt className="text-foreground mt-12 font-medium">No Live Data</dt>
                                <dd className="text-muted-foreground">Decisions rely on anecdote rather than live data. Without real-time insights, operators can't act until it's too late.</dd>
                            </div>
                            <div>
                                <Clock className="*:not-nth-2:opacity-50 *:nth-2:fill-primary *:nth-2:stroke-primary size-4 drop-shadow" />
                                <dt className="text-foreground mt-12 font-medium">Queue Bottlenecks</dt>
                                <dd className="text-muted-foreground">Queue wait time directly reduces total venue capacity. When your visitors are standing in line, they're not spending — and they're not coming back.</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}
