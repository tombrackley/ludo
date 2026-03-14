import Header from '@/components/header'
import FooterSection from '@/components/footer'
import Contact from '@/components/contact'
import FAQs from '@/components/faqs-2'
import { usePageMeta } from '@/hooks/use-page-meta'

export default function ContactPage() {
    usePageMeta('Contact — Ludo Leisure Suite', 'Get in touch to book a demo, contact support, or learn how Ludo can power cashless payments at your venue or event.')
    return (
        <>
            <Header />
            <main className="pt-24">
                <Contact />
                <FAQs />
            </main>
            <FooterSection />
        </>
    )
}
