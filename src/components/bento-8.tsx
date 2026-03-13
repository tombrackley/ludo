import { Card } from '@/components/ui/card'
import { ChartIllustration } from "@/components/ui/illustrations/chart-illustration"
import { AiMemoryIllustration } from "@/components/ui/illustrations/ai-memory"

export default function BentoEight() {
    return (
        <div className="@container">
            <div className="mx-auto w-full max-w-5xl px-6 xl:px-0">
                <div className="@xl:grid-cols-2 grid gap-3">
                    <Card className="group grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">Self-service kiosks & visitor app</h3>
                            <p className="text-muted-foreground mt-4 text-lg">
                                Guests top up, order ahead, and pay with NFC wristbands or cards. 89% self-service rate across 30+ kiosk stations at the Ekka.
                            </p>
                        </div>
                        <div className="-mx-8 overflow-hidden">
                            <AiMemoryIllustration />
                        </div>
                    </Card>
                    <Card className="grid grid-rows-[auto_1fr] gap-8 overflow-hidden rounded-2xl p-8">
                        <div>
                            <h3 className="text-foreground text-xl font-semibold">POS terminals & vendor settlement</h3>
                            <p className="text-muted-foreground mt-4 text-lg">Every vendor gets the same payment terminals and the same real-time numbers. Automated splits, instant reconciliation — no disputes, no spreadsheets.</p>
                        </div>
                        <div
                            aria-hidden
                            className="flex flex-col justify-end">
                            <ChartIllustration />
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}