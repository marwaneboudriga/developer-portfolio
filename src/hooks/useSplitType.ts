import { SplitTypeContext } from "@/context/split-type.context"
import { useContext, useEffect, useMemo, useRef, useState } from "react"



export const useSplitType = (key?: string, whenSplittedCallback?: () => void) => {
    const {splittedKeys, splitCompleted} = useContext(SplitTypeContext)
    const resolver = useRef<((splittedKeys: string[]) => void) | undefined>(undefined)
    

    useEffect(() => {
        resolver.current && resolver.current.call(resolver.current, splittedKeys)
    }, [splittedKeys, resolver])

    useEffect(() => {
        if (!key || !whenSplittedCallback) return
        resolver.current = (keys: string[]) => {
            const isSplitCompleted = () => keys.includes(key)
            if (isSplitCompleted()) return whenSplittedCallback.call(whenSplittedCallback)

            if (isSplitCompleted()) {
                whenSplittedCallback.call(whenSplittedCallback)
                resolver.current = undefined
            }
        }
    }, [key, whenSplittedCallback])

    return {
        splittedKeys,
        splitCompleted,
    }
}
