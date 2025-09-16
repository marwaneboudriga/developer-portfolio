import { useSplitType } from "@/hooks/useSplitType"
import { memo, useEffect, useRef } from "react"
import SplitType from 'split-type'

interface AppSplitTypeProps {
    className?: string;
    text: string;
    processKey: string;
}

export const AppSplitType = memo<AppSplitTypeProps>(({ text, className, processKey }) => {
    const ref = useRef<HTMLSpanElement>(null)
    const {splitCompleted} = useSplitType()

    useEffect(() => {
        if (!ref.current) return
        new SplitType(ref.current, { types: 'chars'})
        splitCompleted(processKey)
    }, [splitCompleted, processKey])

    return (
        <span ref={ref} className={className} style={{ fontKerning: 'none', display: 'inline-block', position: 'relative' }}>{text}</span>
    )
})

AppSplitType.displayName = 'AppSplitType'
