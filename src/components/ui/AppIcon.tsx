import {cn} from "@/lib/utils";

export interface IconProps {
    name: string;
    className?: string
}

const AppIcon = ({ className, name }: IconProps) => {
    return (
        <svg className={cn('size-6', className || '')}>
            <use xlinkHref={`/icon-sprite.svg#${name}`} />
        </svg>
    )
}

AppIcon.displayName = 'AppIcon'

export { AppIcon }
