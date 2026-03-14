import { Button } from '@/components/ui/button'
import { Shield, Sparkles, SquareActivity } from 'lucide-react'

const features = [
    {
        title: 'Automated Billing',
        description: 'Streamline your billing process with automated tools that save you time.',
        icon: <Sparkles className="stroke-foreground fill-blue-500/15" />,
    },
    {
        title: 'Detailed Reports',
        description: 'Access comprehensive reports to better understand your business performance.',
        icon: <SquareActivity className="stroke-foreground fill-indigo-500/15" />,
    },
    {
        title: 'Secure Transactions',
        description: 'Ensure the safety of your financial data with top-notch security measures.',
        icon: <Shield className="stroke-foreground fill-emerald-500/15" />,
    },
]

export default function HeroSection() {
    return (
        <section className="bg-background py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <span className="text-primary bg-primary/5 border-primary/10 rounded-full border px-2 py-1 text-sm font-medium">Billing</span>
                    <h1 className="mt-4 text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">Streamline Your Invoicing Process</h1>
                    <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Simplify invoicing with automated and reporting tools Empowering businesses with cutting-edge technology to streamline operations.</p>

                    <Button><a href="#link">Get Started</a></Button>
                    <Button variant="outline" className="ml-3"><a href="#link">Get a demo</a></Button>

                    <div className="border-border-illustration mt-20 grid gap-6 border-y py-6 text-left sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="space-y-3">
                                <div className="bg-card ring-border-illustration flex size-8 items-center justify-center rounded-md shadow ring-1 *:size-4">{feature.icon}</div>
                                <h2 className="text-lg font-medium">{feature.title}</h2>
                                <p className="text-muted-foreground text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}