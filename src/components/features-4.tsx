import { Sparkles, Cpu, Lock, Zap } from 'lucide-react'

export default function FeaturesSection4() {
    return (
        <section className="bg-background">
            <div className="mx-auto w-full max-w-[1200px] px-6">
                <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 pt-12 sm:gap-6 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Fast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Instant top-ups, payments, and syncing across kiosks, POS, and mobile.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Manage vendors, settlements, reporting, and operations in one platform.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Secure</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Reliable payments, encrypted data, and trusted infrastructure for live events.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Insightful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Real-time dashboards and reporting across vendors, locations, and revenue.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
