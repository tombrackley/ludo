import type { SVGProps } from "react"

const Deepseek = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
)

export { Deepseek }
