import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function SolutionsHero() {
    return (
        <section>
            <div className="py-24 md:py-32">
                <div className="mx-auto mb-8 max-w-[1200px] px-6">
                    <div className="grid grid-cols-6 gap-4 sm:grid-cols-8">
                        <div className="col-span-6 max-md:pb-6 sm:col-span-5 md:col-span-4 md:pt-6">
                            <span className="text-primary font-mono text-sm uppercase">Solutions</span>
                            <h1 className="mt-4 text-balance text-4xl font-semibold md:text-6xl">
                                One Platform, <span className="text-primary">Every Venue Type</span>
                            </h1>
                            <p className="text-muted-foreground mb-6 mt-4 text-balance text-lg">Ludo powers cashless payments, real-time settlement, and live operations for venues and events of every scale — from 500-person conferences to 120,000-visitor show days.</p>
                            <Button size="sm"><Link to="/contact">Get in Touch</Link></Button>
                        </div>
                        <div className="col-span-3 flex items-end sm:col-span-2 sm:col-start-6">
                            <div className="aspect-4/5 before:border-foreground/5 before:bg-primary/10 relative overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border">
                                <img
                                    src="/top-right.jpg"
                                    alt="Concert crowd with stage lights"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="col-span-3 max-md:flex max-md:items-end sm:col-start-3">
                            <div className="before:border-foreground/5 before:bg-primary/5 relative mt-auto aspect-square h-fit overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border">
                                <img
                                    src="/left.jpg"
                                    alt="Carnival fairground with ferris wheel"
                                    className="size-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="before:border-foreground/5 before:bg-primary/5 relative col-span-4 aspect-video overflow-hidden rounded-xl shadow-xl before:absolute before:inset-0 before:rounded-xl before:border max-md:col-start-3 md:col-span-3">
                            <img
                                src="/right.jpg"
                                alt="Kids playing at waterpark"
                                className="size-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
