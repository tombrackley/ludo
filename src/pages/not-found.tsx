import Header from '@/components/header'
import FooterSection from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { usePageMeta } from '@/hooks/use-page-meta'

export default function NotFoundPage() {
    usePageMeta('Page Not Found — Ludo Leisure Suite', 'The page you are looking for does not exist.')
    return (
        <>
            <Header />
            <main className="pt-24">
                <section className="py-32">
                    <div className="mx-auto max-w-[1200px] px-6 text-center">
                        <span className="text-muted-foreground font-mono text-sm">404</span>
                        <h1 className="mt-4 text-4xl font-semibold md:text-5xl">Page not found</h1>
                        <p className="text-muted-foreground mx-auto mt-4 max-w-md text-balance text-lg">
                            The page you're looking for doesn't exist or has been moved.
                        </p>
                        <div className="mt-8 flex justify-center gap-3">
                            <Button asChild><Link to="/">Back to Home</Link></Button>
                            <Button variant="outline" asChild><Link to="/contact">Get in Touch</Link></Button>
                        </div>
                    </div>
                </section>
            </main>
            <FooterSection />
        </>
    )
}
