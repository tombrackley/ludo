import { useEffect } from 'react'

export function usePageMeta(title: string, description?: string) {
    useEffect(() => {
        document.title = title
        if (description) {
            let meta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null
            if (meta) {
                meta.content = description
            }
        }
        return () => {
            document.title = 'Ludo Leisure Suite — Cashless Payments & Venue Operations Platform'
        }
    }, [title, description])
}
