import { ChevronRight } from 'lucide-react'
import { Stripe } from '@/components/ui/svgs/stripe'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Primevideo } from '@/components/ui/svgs/prime'

const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function TestimonialsSection() {
    return (
        <section className="bg-background @container py-16 md:py-24 lg:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <div className="@4xl:grid-cols-2 grid gap-6 *:border *:border-transparent *:shadow-lg">
                    <Card className="bg-linear-to-b to-card row-span-5 grid grid-rows-subgrid gap-8 from-indigo-500/10 p-8">
                        <Stripe className="h-6 w-14" />
                        <p className="text-muted-foreground text-balance text-xl font-medium">
                            Stripe leveraged our platform to streamline payment processing workflows, <strong className="text-foreground">resulting in a 40% reduction in integration time for new merchants.</strong>{' '}
                        </p>
                        <Button size="sm" variant="outline" className="w-fit pr-1.5" render={<Link href="#" />} nativeButton={false}>Read Case Study
                                                        <ChevronRight
                                                            className="scale-90 opacity-50"
                                                            strokeWidth="2.5"
                                                        /></Button>
                        <div className="row-span-2 grid grid-rows-subgrid gap-8 border-t pt-8">
                            <p className='text-foreground self-end text-balance before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>The platform has dramatically improved our payment processing capabilities. We now onboard merchants 40% faster while maintaining top-tier security standards. The developer experience is exceptional.</p>
                            <div className="flex items-center gap-3">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                    <img
                                        src={BERNARD_AVATAR}
                                        alt="Bernard Ngandu's avatar"
                                        width={46}
                                        height={46}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div className="space-y-px">
                                    <p className="text-sm font-medium">Bernard Ngandu</p>
                                    <p className="text-muted-foreground text-xs">Backend Engineer, Stripe</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-linear-to-b to-card row-span-5 grid grid-rows-subgrid gap-8 from-cyan-500/10 p-8">
                        <Primevideo className="h-7 w-20" />
                        <p className="text-muted-foreground self-end text-balance text-xl font-medium">
                            Prime utilized our recommendation engine to <strong className="text-foreground">increase viewer engagement by 27% and content discovery by 35%</strong>. Our machine learning algorithms helped them deliver.
                        </p>
                        <Button size="sm" variant="outline" className="w-fit pr-1.5" render={<Link href="#" />} nativeButton={false}>Read Case Study
                                                        <ChevronRight
                                                            className="scale-90 opacity-50"
                                                            strokeWidth="2.5"
                                                        /></Button>

                        <div className="row-span-2 grid grid-rows-subgrid gap-8 border-t pt-8">
                            <p className='text-foreground text-balance before:mr-1 before:content-["\201C"] after:ml-1 after:content-["\201D"]'>The recommendation engine has revolutionized how our users discover content. We've measured significant improvements in engagement metrics, and the personalization capabilities continue to exceed our expectations.</p>
                            <div className="flex items-center gap-3">
                                <div className="ring-foreground/10 aspect-square size-10 overflow-hidden rounded-lg border border-transparent shadow-md shadow-black/15 ring-1">
                                    <img
                                        src={GLODIE_AVATAR}
                                        alt="Glodie Lukose's avatar"
                                        width={120}
                                        height={120}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="space-y-px">
                                    <p className="text-sm font-medium">Glodie Lukose</p>
                                    <p className="text-muted-foreground text-xs">Frontend Engineer, Prime Video</p>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}