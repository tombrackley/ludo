import Header from '@/components/header'
import FooterSection from '@/components/footer'
import Contact from '@/components/contact'
import FAQs from '@/components/faqs-2'

export default function ContactPage() {
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
