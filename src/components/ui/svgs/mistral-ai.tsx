import type { SVGProps } from "react"

const MistralAi = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
        <rect x="1" y="1" width="6" height="6" fill="currentColor" />
        <rect x="17" y="1" width="6" height="6" fill="currentColor" />
        <rect x="1" y="9" width="6" height="6" fill="currentColor" />
        <rect x="9" y="9" width="6" height="6" fill="currentColor" />
        <rect x="17" y="9" width="6" height="6" fill="currentColor" />
        <rect x="1" y="17" width="6" height="6" fill="currentColor" />
        <rect x="17" y="17" width="6" height="6" fill="currentColor" />
    </svg>
)

export { MistralAi }
