const logos = [
    { src: '/sres.avif', alt: 'Sydney Royal Easter Show' },
    { src: '/ktoberfest.avif', alt: 'Oktoberfest' },
    { src: '/disneyland.avif', alt: 'Disneyland' },
    { src: '/aronga.avif', alt: 'Taronga' },
    { src: '/Ekka-logo.png', alt: 'Ekka Royal Queensland Show' },
]

export default function LogoCloudTwo() {
    return (
        <section className="py-16">
            <div className="relative m-auto max-w-[1200px] px-6 text-center">
                <h2 className="text-center text-xl font-normal">Powering some of the biggest events across Australia and the world</h2>

                <div className="mx-auto my-12 grid max-w-3xl grid-cols-5 items-center gap-x-6 gap-y-8">
                    {logos.map((logo) => (
                        <div key={logo.alt} className="flex justify-center">
                            <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-10 w-auto object-contain grayscale opacity-70 transition duration-200 hover:grayscale-0 hover:opacity-100"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
