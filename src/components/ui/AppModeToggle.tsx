"use client"

import { ClientComponent } from "@/containers/ClientComponent";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { AppIcon } from "./AppIcon";
import { Button } from "./button";
import {useAnalytics} from "@/hooks/useAnalytics";
import {useCallback} from "react";
import {EventName} from "@/interfaces/analytics";

export interface DarkModeBtnProps {
    className?: string;
}

const AppModeToggle = ({ className }: DarkModeBtnProps) => {
    const { theme, setTheme } = useTheme()
    const {trackEvent} = useAnalytics()
    const toggleHandler = useCallback(() => {
        if (theme === "system" || theme === undefined) {
            const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            const nextTheme = systemTheme === "dark" ? "light" : "dark";
            setTheme(nextTheme);
        } else {
            const nextTheme = theme === "dark" ? "light" : "dark";
            setTheme(nextTheme);
        }
        trackEvent(EventName.ThemeModeToggled, { prev_theme: theme, next_theme: nextTheme })
    }, [theme, trackEvent, setTheme])

    return (
      <ClientComponent>
        <Button
          className={cn(className || "", "[&_svg]:size-6 [&_svg]:transition-transform [&_svg]:duration-100")}
          onClick={toggleHandler}
          aria-label="Theme mode toggle"
          size="icon"
          variant="ghost"
        >
            <AppIcon
                className="scale-100 rotate-0 dark:scale-0 dark:-rotate-90"
                name={"moon"}
            />
            <AppIcon
                className="absolute scale-0 rotate-90 dark:rotate-0 dark:scale-100"
                name={"sun"}
            />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </ClientComponent>
    );
}

export { AppModeToggle }
