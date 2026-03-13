import type { SVGProps } from "react"

const Cohere = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
        <path d="M6 6a6 6 0 0 1 12 0c0 3.314-2.686 6-6 6H6V6Z" fill="currentColor" />
        <circle cx="6" cy="18" r="4" fill="currentColor" opacity="0.6" />
    </svg>
)

export { Cohere }
