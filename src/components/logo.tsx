import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/LudoLogo.svg"
            alt="Ludo"
            className={cn('h-5 w-auto', className)}
        />
    )
}

export const LogoIcon = ({ className }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/LudoLogo.svg"
            alt="Ludo"
            className={cn('h-6 w-auto', className)}
        />
    )
}
