import React from 'react'
import { Button } from '@/components/ui/button'
const Link = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props} />

export default function Contact() {
    return (
        <section className="bg-background py-24">
            <div className="@container mx-auto max-w-5xl px-2">
                <div className="mx-auto max-w-4xl">
                    <div className="mx-auto max-w-2xl px-6">
                        <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:tracking-tight">Get in Touch</h1>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">Whether you're planning your next event or exploring cashless solutions for your venue, we'd love to hear from you.</p>
                    </div>

                    <div className="@lg:grid-cols-2 @lg:gap-y-12 mx-auto mt-10 grid max-w-2xl gap-3">
                        <div className="flex flex-col rounded-xl border bg-white p-6">
                            <h2 className="font-medium">Book a Demo</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-balance">See how Ludo Leisure Suite can streamline payments and operations at your venue or event.</p>
                            <Button variant="outline" size="sm" className="mt-auto w-fit">Schedule a call</Button>
                        </div>
                        <div className="flex flex-col rounded-xl border bg-white p-6">
                            <h2 className="text-lg font-medium">Support</h2>
                            <p className="text-muted-foreground mb-4 mt-2 text-balance">Already using Ludo Leisure Suite? Our team is here to help with setup, troubleshooting, and optimisation.</p>

                            <div className="mt-auto flex flex-wrap gap-1">
                                <Button variant="outline" size="sm" className="w-fit">Contact Support</Button>
                                <Button variant="ghost" size="sm" className="text-primary w-fit">hello@ludo.computer</Button>
                            </div>
                        </div>

                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">General</h2>
                            <Link
                                href="mailto:hello@ludo.computer"
                                className="hover:decoration-primary font-medium hover:underline">
                                hello@ludo.computer
                            </Link>
                        </div>
                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">Support</h2>
                            <Link
                                href="mailto:hello@ludo.computer"
                                className="hover:decoration-primary font-medium hover:underline">
                                hello@ludo.computer
                            </Link>
                        </div>

                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">Phone</h2>
                            <Link
                                href="tel:1300669117"
                                className="hover:decoration-primary font-medium hover:underline">
                                1300 669 117
                            </Link>
                        </div>
                        <div className="flex flex-col p-6">
                            <h2 className="text-muted-foreground mb-2 text-sm">LinkedIn</h2>
                            <Link
                                href="https://www.linkedin.com/company/ludo-leisure-suite"
                                className="hover:decoration-primary font-medium hover:underline">
                                Ludo Leisure Suite
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
