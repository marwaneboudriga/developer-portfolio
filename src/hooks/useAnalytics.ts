import { sendGAEvent } from '@next/third-parties/google'
import {useCallback, useMemo} from "react";
import {isProduction} from "@/constants";
import pkg from '../../package.json'

export const useAnalytics = () => {
    const globalProperties = useMemo(() => ({
        app_version: pkg.version,
        app_platform: 'web',
    }), [])

    const trackEvent = useCallback((eventName: string, properties = {}) => {
        try {
            isProduction && sendGAEvent('event', eventName, {...globalProperties, ...properties})
        } catch (e) {
            console.error('GA Error:', e)
        }
    }, [globalProperties])

    return {trackEvent}
}
