'use client'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
const Link = React.forwardRef<HTMLAnchorElement, React.AnchorHTMLAttributes<HTMLAnchorElement> & { href?: string }>(({ href, ...props }, ref) => {
    if (href && !href.startsWith('#')) {
        return <RouterLink ref={ref} to={href} {...props} />
    }
    return <a ref={ref} href={href} {...props} />
})
import { LogoIcon } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { Menu, X, CreditCard, BarChart3, Users, Ticket, FerrisWheel, Monitor, Waves, Gamepad2, Globe, Smartphone } from 'lucide-react'
import { useMedia } from '@/hooks/use-media'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { cn } from '@/lib/utils'

interface FeatureLink {
    href: string
    name: string
    description?: string
    icon: React.ReactElement
}

interface MobileLink {
    groupName?: string
    links?: FeatureLink[]
    name?: string
    href?: string
}

const features: FeatureLink[] = [
    {
        href: '#payments',
        name: 'Cashless Payments',
        description: 'NFC wristbands, cards & mobile pay',
        icon: <CreditCard className="stroke-foreground fill-indigo-500/15" />,
    },
    {
        href: '#analytics',
        name: 'Real-Time Analytics',
        description: 'Revenue insights across every vendor',
        icon: <BarChart3 className="stroke-foreground fill-blue-500/15" />,
    },
    {
        href: '#settlement',
        name: 'Vendor Settlement',
        description: 'Automated reconciliation & payouts',
        icon: <Users className="stroke-foreground fill-emerald-500/15" />,
    },
    {
        href: '#ticketing',
        name: 'Ticketing & Access',
        description: 'Integrated entry and ride tokens',
        icon: <Ticket className="stroke-foreground fill-pink-500/15" />,
    },
]

const useCases: FeatureLink[] = [
    {
        href: '#royal-shows',
        name: 'Royal Shows & Expos',
        description: 'Large-scale event cashless systems',
        icon: <FerrisWheel className="stroke-foreground fill-emerald-500/15" />,
    },
    {
        href: '#conferences',
        name: 'Conferences',
        description: 'Streamlined attendee experiences',
        icon: <Monitor className="stroke-foreground fill-indigo-500/15" />,
    },
    {
        href: '#water-parks',
        name: 'Water Parks',
        description: 'Waterproof cashless wearables',
        icon: <Waves className="stroke-foreground fill-blue-500/15" />,
    },
    {
        href: '#arcades',
        name: 'Arcades & FECs',
        description: 'Game credits & loyalty programs',
        icon: <Gamepad2 className="stroke-foreground fill-pink-500/15" />,
    },
]

const contentLinks: FeatureLink[] = [
    { name: 'All Solutions', href: '#solutions', icon: <Globe className="stroke-foreground fill-emerald-500/15" /> },
    { name: 'Talk to Sales', href: '#contact', icon: <Smartphone className="stroke-foreground fill-indigo-500/15" /> },
]

const mobileLinks: MobileLink[] = [
    {
        groupName: 'Platform',
        links: features,
    },
    {
        groupName: 'Solutions',
        links: [...useCases, ...contentLinks],
    },
    { name: 'Pricing', href: '#' },
    { name: 'Contact', href: '/contact' },
]

export default function HeaderThree() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const isLarge = useMedia('(min-width: 64rem)')

    return (
        <header
            role="banner"
            data-state={isMobileMenuOpen ? 'active' : 'inactive'}
            className="bg-background">
            <div className={cn('bg-linear-to-b from-background fixed inset-x-0 top-0 z-50 px-3 pt-3 backdrop-blur', !isLarge && 'h-18 overflow-hidden', isMobileMenuOpen && 'bg-background/75 h-screen backdrop-blur')}>
                <div className="bg-card/75 ring-border shadow-black/6.5 mx-auto max-w-2xl rounded-2xl px-6 shadow-md ring-1 backdrop-blur-xl lg:px-2">
                    <div className="relative flex flex-wrap items-center justify-between lg:py-2">
                        <div className="max-lg:in-data-[state=active]:border-foreground/5 max-lg:in-data-[state=active]:border-b flex items-center justify-between gap-8 max-lg:h-14 max-lg:w-full">
                            <Link
                                href="/"
                                aria-label="home"
                                className="hover:bg-foreground/5 flex items-center rounded-xl px-2 py-1">
                                <LogoIcon
                                    uniColor
                                    className="m-auto"
                                />
                            </Link>

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                aria-label={isMobileMenuOpen == true ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-3 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-5 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-5 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        {isLarge && (
                            <div className="absolute inset-0 m-auto size-fit">
                                <NavMenu />
                            </div>
                        )}
                        {!isLarge && isMobileMenuOpen && <MobileMenu closeMenu={() => setIsMobileMenuOpen(false)} />}

                        <div className="max-lg:in-data-[state=active]:mt-6 in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                <Button variant="outline" size="sm" render={<Link href="#" />} nativeButton={false}><span>Sign In</span></Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

const MobileMenu = ({ closeMenu }: { closeMenu: () => void }) => {
    return (
        <nav
            role="navigation"
            className="w-full">
            <Accordion
                type="single"
                collapsible
                className="**:hover:no-underline -mx-4 mt-0.5 space-y-0.5">
                {mobileLinks.map((link, index) => {
                    if (link.groupName && link.links) {
                        return (
                            <AccordionItem
                                key={index}
                                value={link.groupName}
                                className="before:border-border group relative border-b-0 before:pointer-events-none before:absolute before:inset-x-4 before:bottom-0 before:border-b">
                                <AccordionTrigger className="**:!font-normal data-[state=open]:bg-foreground/5 flex items-center justify-between px-4 py-3 text-lg">{link.groupName}</AccordionTrigger>
                                <AccordionContent className="pb-5">
                                    <ul>
                                        {link.links.map((feature, featureIndex) => (
                                            <li key={featureIndex}>
                                                <Link
                                                    href={feature.href}
                                                    onClick={closeMenu}
                                                    className="grid grid-cols-[auto_1fr] items-center gap-2.5 px-4 py-2">
                                                    <div
                                                        aria-hidden
                                                        className="flex items-center justify-center *:size-4">
                                                        {feature.icon}
                                                    </div>
                                                    <div className="text-base">{feature.name}</div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </AccordionContent>
                            </AccordionItem>
                        )
                    }
                    return null
                })}
            </Accordion>
            {mobileLinks.map((link, index) => {
                if (link.name && link.href) {
                    const isExternal = link.href.startsWith('#')
                    return isExternal ? (
                        <a
                            key={index}
                            href={link.href}
                            onClick={closeMenu}
                            className="group relative block border-0 border-b py-4 text-lg">
                            {link.name}
                        </a>
                    ) : (
                        <RouterLink
                            key={index}
                            to={link.href}
                            onClick={closeMenu}
                            className="group relative block border-0 border-b py-4 text-lg">
                            {link.name}
                        </RouterLink>
                    )
                }
                return null
            })}
        </nav>
    )
}

const NavMenu = () => {
    return (
        <NavigationMenu
            viewport={false}
            className="**:data-[slot=navigation-menu-content]:top-12 max-lg:hidden">
            <NavigationMenuList className="gap-3">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Platform</NavigationMenuTrigger>
                    <NavigationMenuContent className="p-0">
                        <div className="w-72">
                            <div className="bg-card ring-border relative rounded-xl p-0.5 pt-2 shadow ring-1">
                                <span className="text-muted-foreground ml-3 text-xs font-medium uppercase">Platform</span>
                                <ul className="mt-1">
                                    {features.map((feature, index) => (
                                        <ListItem
                                            key={index}
                                            href={feature.href}
                                            title={feature.name}
                                            description={feature.description}>
                                            {feature.icon}
                                        </ListItem>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                    <NavigationMenuContent className="min-w-lg grid grid-cols-[auto_1fr] gap-1.5 p-0">
                        <div className="bg-card ring-border rounded-xl p-0.5 pt-2 shadow ring-1">
                            <span className="text-muted-foreground ml-3 text-xs font-medium uppercase">Solutions</span>
                            <ul className="mt-1">
                                {useCases.map((useCase, index) => (
                                    <ListItem
                                        key={index}
                                        href={useCase.href}
                                        title={useCase.name}
                                        description={useCase.description}>
                                        {useCase.icon}
                                    </ListItem>
                                ))}
                            </ul>
                        </div>
                        <div className="p-0.5 pt-2">
                            <span className="text-muted-foreground ml-3 text-xs font-medium uppercase">Explore</span>
                            <ul className="mt-1">
                                {contentLinks.map((content, index) => (
                                    <NavigationMenuLink key={index} className="!grid grid-cols-[auto_1fr] items-center gap-2.5 px-3" render={<Link href={content.href} />}>{content.icon}<div className="text-foreground text-sm font-medium">{content.name}</div></NavigationMenuLink>
                                ))}
                            </ul>
                        </div>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<Link href="#" />}>Pricing</NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}><RouterLink to="/contact">Contact</RouterLink></NavigationMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

function ListItem({ title, description, children, href, ...props }: React.ComponentPropsWithoutRef<'li'> & { href: string; title: string; description?: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink className="!grid grid-cols-[auto_1fr] items-center gap-2.5 p-3" render={<Link href={href} />}><div className="bg-illustration ring-foreground/10 before:bg-radial before:to-foreground/3 *:drop-shadow-black/6.5 relative flex size-9 items-center justify-center rounded-lg border border-transparent shadow shadow-sm ring-1 *:drop-shadow before:absolute before:inset-0 before:rounded-lg">{children}</div><div className="space-y-0.5">
                                    <div className="text-foreground text-sm font-medium">{title}</div>
                                    <p className="text-muted-foreground line-clamp-1 text-xs">{description}</p>
                                </div></NavigationMenuLink>
        </li>
    )
}