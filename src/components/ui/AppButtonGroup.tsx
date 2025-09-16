"use client"

import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./button";

  interface AppButtonGroupProps {
    className?: string;
    options: { label: string; value: string | number }[];
  }
  
  const AppButtonGroup = ({className}: AppButtonGroupProps) => {
    const [active, setActive] = useState('all')

    return (
      <div className={cn("grid gap-0.5 grid-cols-3 border-slate-700 border rounded-lg p-0.5 max-w-2xl", className || '')}>
        <Button onClick={() => setActive('all')} className={cn({'bg-accent': active === 'all'})} variant="ghost">All</Button>
        <Button onClick={() => setActive('live')} className={cn({'bg-accent': active === 'live'})} variant="ghost">Live</Button>
        <Button onClick={() => setActive('oss')} className={cn({'bg-accent': active === 'oss'})} variant="ghost">Open Source</Button>
      </div>
    )
  }
  
  export { AppButtonGroup }