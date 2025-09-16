import { cn } from "@/lib/utils";
import {CSSProperties, ReactNode} from "react"


interface AspectRatioImageProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    ratio?: number
}

export function AspectRatioImage({ children, className = '', style, ratio = 1/2 }: AspectRatioImageProps) {
    return (
      <div
        style={{ ...style, aspectRatio: 1 / ratio }}
        className={cn("relative w-full min-h-1 overflow-hidden", className)}
      >{children}</div>
    );
}
