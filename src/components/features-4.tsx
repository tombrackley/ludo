import { Sparkles, Cpu, Lock, Zap } from 'lucide-react'

export default function FeaturesSection4() {
    return (
        <section className="bg-background">
            <div className="mx-auto w-full max-w-5xl px-6">
                <div className="relative grid grid-cols-2 gap-x-3 gap-y-6 pt-12 sm:gap-6 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Zap className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Faaast</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Cpu className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Powerful</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">It supports an entire helping developers and businesses.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Lock className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">Security</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">An helping developers businesses innovate.</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Sparkles className="text-foreground size-4" />
                            <h3 className="text-sm font-medium">AI Powered</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">Helping developers businesses innovate.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
